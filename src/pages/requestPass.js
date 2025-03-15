import { useState } from "react";
import * as config from "../config";
import * as UserService from "./services/user";

export default function LoginForm() {
  const [email, setFormData] = useState("");

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to API)
    // console.log(formData);
    // console.log(config.API_URL);
    await UserService.ResetPassword(email);
  };

  return (
    <div className="flex justify-center items-center min-h-screen dots-background">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-left text-gray-700">
          AllocateUs
        </h1>
        <br />
        <h3 className="text-3xl text-center text-gray-500">Reset password</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
              required
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Reset password
            </button>
          </div>
        </form>
        <p className="w-full text-center">
          Found your password? Go back to login{" "}
          <a href={"/login"} style={{ color: "blue" }}>
            here
          </a>
        </p>
      </div>
    </div>
  );
}
