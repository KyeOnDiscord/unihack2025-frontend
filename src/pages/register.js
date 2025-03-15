import { useState } from "react";
import * as config from "../config";
import * as UserService from "./services/user";

console.log(UserService);
export default function SignUpForm() {
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to API)
    // console.log(formData);
    // console.log(config.API_URL);
    await UserService.RegisterUser(
      formData.displayName,
      formData.email,
      formData.password
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen dots-background">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-left text-gray-700">
          AllocateUs
        </h1>
        <br />
        <h3 className="text-3xl text-center text-gray-500">Sign Up</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="displayName"
              className="block text-sm font-medium text-gray-700"
            >
              Display Name
            </label>
            <input
              type="text"
              name="displayName"
              id="displayName"
              value={formData.displayName}
              onChange={handleChange}
              required
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

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
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
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
              Sign Up
            </button>
          </div>
        </form>
        <p>
          Already have an account? Login{" "}
          <a href={"/login"} style={{ color: "blue" }}>
            here
          </a>
        </p>
      </div>
    </div>
  );
}
