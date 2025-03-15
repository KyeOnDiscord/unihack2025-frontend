import { useState } from "react";
import * as config from "../config";
import * as UserService from "./services/user";

export default function LoginForm() {
  const [roomId, setRoomId] = useState("");

  const handleChange = (e) => {
    setRoomId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(roomId);
    await UserService.FindRoom(roomId);
  };

  return (
    <div className="flex justify-center items-center min-h-screen dots-background">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <div class="w-full flex items-center border border-gray-300 rounded-md overflow-hidden w-80">
          <input
            type="text"
            placeholder="Search..."
            class="flex-1 px-4 py-2 outline-none "
          />
          <button
            type="submit"
            class="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition-colors"
          >
            Search
          </button>
        </div>
        <span className="w-full flex justify-center items-center">OR</span>
        <hr />
        <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Create a room
        </button>
        <br />
        <br />
        <p>The list of your rooms</p>
        <hr />
        <ul></ul>
      </div>
    </div>
  );
}
