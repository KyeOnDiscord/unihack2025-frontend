import { useState, useEffect } from "react";
import * as config from "../config";
import * as RoomService from "./services/room";
import { toast } from "react-toastify";

export default function RoomsPage() {
  const [roomCode, setRoomCode] = useState("");
  const [roomName, setRoomName] = useState("");
  const [rooms, setRooms] = useState([]);

  async function fetchRooms() {
    try {
      const token = localStorage.getItem("JWT_TOKEN");
      if (!token) return;

      const response = await RoomService.getRooms(token);
      console.log("GET my-rooms API Response:", response);
      if (response && response.rooms) {
        setRooms(response.rooms); // Extract the "rooms" array
      }
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  }
  useEffect(() => {
    toast.promise(fetchRooms(),
      { 
        pending: 'Fetching rooms...',
        success: { render: 'Rooms fetched!', delay: 100 },
        error: { render: 'There was an error fetching your rooms!', delay: 100 },
      }
    );
  }, []);

  const handleCodeChange = (e) => {
    setRoomCode(e.target.value);
  };

  const handleNameChange = (e) => {
    setRoomName(e.target.value);
  };

  const handleJoin = async (e) => {
    e.preventDefault();
    const joinRoomPromise = RoomService.joinRoom(roomCode, localStorage.getItem("JWT_TOKEN"))
      .then(() => fetchRooms());
    
    toast.promise(joinRoomPromise,
      {
      pending: 'Joining room...',
      success: 'Successfully joined the room! 🎉',
      error: 'Failed to join the room. Please try again. ❌',
    });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const createRoomPromise = RoomService.createRoom(roomName, localStorage.getItem("JWT_TOKEN"))
      .then((roomData) => {
          fetchRooms();
          return roomData;
        }
      );

    toast.promise(createRoomPromise,
      {
      pending: 'Creating room...',
      success: 'Successfully created the room! 🎉\nFind your room code in the list of rooms below.',
      error: 'Failed to create the room. Please try again. ❌',
    });
  };

  const visitRoom = (roomId) => {
    router.push(`/room?room_id=${roomId}`); // Navigates to /room/{roomId}
  };

  const leaveRoom = async (roomId) => {
    const leaveRoomPromise = RoomService.leaveRoom(roomId, localStorage.getItem("JWT_TOKEN"))
    .then((roomData) => {
        fetchRooms();
        return roomData;
      }
    );

    toast.promise(leaveRoomPromise,
      {
        pending: 'Leaving room...',
        success: 'Successfully left the room ☹️.',
        error: 'Failed to ;eave the room. You are stuck here forever! 😈',
      }
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen dots-background">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <div class="w-full flex items-center border border-gray-300 rounded-md overflow-hidden w-80">
          <input
            type="text"
            placeholder="Room Code"
            className="flex-1 px-4 py-2 outline-none "
            onChange={handleCodeChange}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition-colors"
            onClick={handleJoin}
          >
            Join
          </button>
        </div>
        <span className="w-full flex justify-center items-center">OR</span>
        <hr />
        <div class="w-full flex items-center border border-gray-300 rounded-md overflow-hidden w-80">
          <input
            type="text"
            placeholder="Room Name"
            className="flex-1 px-4 py-2 outline-none "
            onChange={handleNameChange}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition-colors"
            onClick={handleCreate}
          >
            Create a room
          </button>
        </div>
        <br />
        <br />
        <p>The list of your rooms</p>
        <hr />
        <ul>
        {rooms.length > 0 ? (
            rooms.map((room) => (
              <li
                key={room._id}
                className="p-2 border-b flex justify-between items-center"
              >
                <span>
                  {room.name} - Code: {room.room_code}
                </span>
                <div className="flex gap-2">
                  <a
                    className="bg-green-500 text-white px-4 py-2 hover:bg-green-600 transition-colors"
                    href={`/room?id=${room._id}`}
                  >
                    Visit
                  </a>
                  <button
                    type="submit"
                    className="bg-red-500 text-white px-4 py-2 hover:bg-red-600 transition-colors"
                    onClick={() => leaveRoom(room._id)}
                  >
                    Leave
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li>No rooms available</li>
          )}
        </ul>
      </div>
    </div>
  );
}
