import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useState, useEffect } from "react";
import * as UserService from "../services/user";
import { toast } from "react-toastify";

function getEmailFromJWT(token) {
  try {
    // Split the token into its parts
    const parts = token.split(".");
    if (parts.length < 2) {
      throw new Error("Invalid JWT token");
    }

    // Decode the first part (header or payload depending on format)
    const payload = JSON.parse(atob(parts[0]));

    // Return the email field if it exists
    return payload.email || "Email not found";
  } catch (error) {
    console.error("Error decoding JWT:", error.message);
    return null;
  }
}

export default function Verify() {
  const [email, setemail] = useState("...");

  const [formData, setFormData] = useState({
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
    let resetPwdPromise = toast.promise(
      UserService.ResetPassword(email, formData.password),
      {
        pending: "Setting Password...",
        success: {
          render:
            "Your password has been successfully set! Redirecting you to login...",
          delay: 100,
        },
        error: {
          render: "There was an issue while setting your password. 😭",
          delay: 100,
        },
      }
    );

    const urlParams = new URLSearchParams(window.location.search);
    const jwt_token = urlParams.get("token");

    let VerifyUser = await UserService.VerifyUser(jwt_token);

    let statusCode = await resetPwdPromise;

    await new Promise((r) => setTimeout(r, 2000));

    if (statusCode == 200) {
      location.href = "/login";
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const jwt_token = urlParams.get("token");

    //console.log(jwt_token);
    let email = getEmailFromJWT(jwt_token);
    if (email != null) {
      setemail(email);
    } else {
      alert("Something went wrong");
    }
  }, []);

  const style = { backgroundColor: "#004185" };
  return (
    <div className="flex justify-center items-center min-h-screen dots-background">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-left text-gray-700">
          AllocateUs
        </h1>
        <br />
        <h3 className="text-l text-center text-gray-500">
          Set password for the email: {email}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
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
              Set Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
