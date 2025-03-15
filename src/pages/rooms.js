import { useState } from "react";
import * as config from "../config";
import * as RoomService from "./services/room";

export default function LoginForm() {
  const [roomCode, setRoomCode] = useState("");
  const [roomName, setRoomName] = useState("");

  const handleCodeChange = (e) => {
    setRoomCode(e.target.value);
  };

  const handleNameChange = (e) => {
    setRoomName(e.target.value);
  };

  const handleJoin = async (e) => {
    e.preventDefault();
    console.log(roomCode);
    await RoomService.joinRoom(roomCode, localStorage.getItem("JWT_TOKEN"));
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    await RoomService.createRoom(roomName, localStorage.getItem("JWT_TOKEN"));
  };

  return (
    <div className="flex justify-center items-center min-h-screen dots-background">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <div class="w-full flex items-center border border-gray-300 rounded-md overflow-hidden w-80">
          <input
            type="text"
            placeholder="Room Code"
            class="flex-1 px-4 py-2 outline-none "
            onChange={handleCodeChange}
          />
          <button
            type="submit"
            class="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition-colors"
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
            class="flex-1 px-4 py-2 outline-none "
            onChange={handleNameChange}
          />
          <button
            type="submit"
            class="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition-colors"
            onClick={handleCreate}
          >
            Create a room
          </button>
        </div>
        <br />
        <br />
        <p>The list of your rooms</p>
        <hr />
        <ul></ul>
      </div>
    </div>
  );
}
