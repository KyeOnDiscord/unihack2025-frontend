import { useState, useEffect } from "react";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import * as UserService from "./services/user";
import { toast } from 'react-toastify';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [displayName, setdisplayName] = useState("...");
  const [calLink, setCalLink] = useState("");
  const [prefText, setPrefText] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("JWT_TOKEN");
    if (token == null) {
      alert("You are not logged in, please log in");
      window.location.href = "/login";
    } else {
      UserService.me(token)
        .then((x) => {
          setdisplayName(x.name);
        })
        .catch((x) => {
          alert("You are not logged in, please log in");
          window.location.href = "/login";
        });
    }
  }, []);

  const handleCalLink = async (e) => {
    e.preventDefault();
    toast.promise(UserService.SetCalendar(calLink, localStorage.getItem("JWT_TOKEN")),
      {
        pending: 'Saving calender...',
        success: { render: 'Calender saved', delay: 100 },
        error: { render: 'Calender saving error.', delay: 100 },
      }
    );
  };

  const handleCalLinkChange = (e) => {
    setCalLink(e.target.value);
  };

  const handlePrefText = async (e) => {
    e.preventDefault();
    toast.promise(UserService.SetPreferences(prefText, localStorage.getItem("JWT_TOKEN")),
      { 
        pending: 'Saving preferences...',
        success: { render: 'Preferences saved', delay: 100 },
        error: { render: 'Preferences saving error.', delay: 100 },
      }
    );
  };

  const handlePrefTextChange = (e) => {
    setPrefText(e.target.value);
  };

  const style = { backgroundColor: "#004185" };

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <title>AllocateUs - Home</title>
      <meta
        name="description"
        content="A calendar to sync schedules with friends"
      />
      <link rel="icon" href="/favicon.ico" />

      <header className="text-white py-12" style={style}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">AllocateUs</h1>

          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8">
            A calendar to make groups to sync schedules with uni friends
          </p>
        </div>
      </header>

      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-6 space-y-5 text-center">
          <h2 className="text-3xl font-semibold mb-6">Welcome {displayName}</h2>

          <div class="w-full flex items-center border border-gray-300 rounded-md overflow-hidden w-20">
            <input
              type="url"
              placeholder="https://my-timetable.monash.edu/..."
              class="flex-1 px-4 py-2 outline-none "
              onChange={handleCalLinkChange}
            />
            <button
              type="submit"
              class="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition-colors"
              onClick={handleCalLink}
            >
              Set Calendar Link
            </button>
          </div>

          <div className="w-full flex flex-col items-center border border-gray-300 rounded-md overflow-hidden">
            <textarea
              placeholder="Tell us a little about yourself, your interests and hobbies etc."
              className="w-full px-4 py-4 outline-none resize-none" // Make sure textarea spans full width
              onChange={handlePrefTextChange}
              rows="4" // Adjust the height (number of visible rows) for the text box
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-6 py-3 mt-4 hover:bg-blue-600 transition-colors"
              onClick={handlePrefText}
            >
              Set Preferences
            </button>
          </div>

          <a
            href="/rooms"
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg"
          >
            See Rooms
          </a>
        </div>
      </section>
    </div>
  );
}
