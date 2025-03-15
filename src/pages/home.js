import { useState, useEffect } from "react";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import * as UserService from "./services/user";
import { toast } from "react-toastify";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

export default function Home() {
  const [displayName, setdisplayName] = useState("...");
  const [calLink, setCalLink] = useState("");
  const [prefText, setPrefText] = useState("");
  const [instructIsVisible, setInstructIsVisible] = useState(false);

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
    toast.promise(
      UserService.SetCalendar(calLink, localStorage.getItem("JWT_TOKEN")),
      {
        pending: "Saving calender...",
        success: { render: "Calender saved. ✅", delay: 100 },
        error: { render: "Calender saving error. ❌", delay: 100 },
      }
    );
  };

  const handleCalLinkChange = (e) => {
    setCalLink(e.target.value);
  };

  const handlePrefText = async (e) => {
    e.preventDefault();
    toast.promise(
      UserService.SetPreferences(prefText, localStorage.getItem("JWT_TOKEN")),
      {
        pending: "Saving preferences...",
        success: { render: "Preferences saved. ✅", delay: 100 },
        error: { render: "Preferences saving error. ❌", delay: 100 },
      }
    );
  };

  const handlePrefTextChange = (e) => {
    setPrefText(e.target.value);
  };

  const style = { backgroundColor: "#004185" };

  let events = [
    {
      id: 1,
      title: "event 1",
      start: new Date(2025, 3, 1, 0, 0, 0),
      end: new Date(2025, 3, 2, 0, 0, 0),
      description: "Discuss project updates",
    },

    {
      id: 2,
      title: "DTS STARTS",
      start: new Date(2025, 4, 1, 0, 0, 0),
      end: new Date(2025, 4, 10, 0, 0, 0),
    },
  ];
  const [selectedEvent, setSelectedEvent] = useState(null);
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

          <div class="w-full flex flex-col items-start p-2">
            <div class="w-full flex items-center border border-gray-300 rounded-md overflow-hidden">
              <input
                type="url"
                placeholder="https://my-timetable.monash.edu/..."
                class="flex-1 px-4 py-2 outline-none"
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
            <button
              type="submit"
              className="text-xs text-gray-500 mt-1 underline cursor-pointer"
              onClick={() => setInstructIsVisible(true)}
            >
              Where do I get this link?
            </button>
          </div>

          {instructIsVisible && (
            <div
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg w-200 text-center relative">
              <h3 className="text-lg font-semibold mb-2">Where to get the ICS URL</h3>
              <p className="text-sm text-gray-600 mb-2">
                Go to Allocate+{" "}
                <a
                  href="https://my-timetable.monash.edu/odd/student"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  https://my-timetable.monash.edu/odd/student
                </a>
              </p>
          
              {/* Fixed Image Source - Ensure it's inside the 'public' folder */}
              <img
                src="/where-to-get-ics.png"
                alt="Allocate+ page"
                className="w-full h-auto rounded-md mb-3 border border-gray-300"
              />
          
              <p className="text-sm text-gray-600">
                Then click copy to copy the link to your timetable.
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Finally, set it as the calendar link on this homepage.
              </p>
          
              <button
                onClick={() => setInstructIsVisible(false)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Close
              </button>
            </div>
            </div>
          )}

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
        <br />

        <div>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            onSelectEvent={(event) => setSelectedEvent(event)}
            style={{ height: 400, width: "75vw" }}
          />
          {/* Popup Modal */}
          {selectedEvent && (
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                zIndex: 1000,
              }}
            >
              <h3>{selectedEvent.title}</h3>
              <p>{selectedEvent.description}</p>
              <p>
                {moment(selectedEvent.start).format("LLL")} -{" "}
                {moment(selectedEvent.end).format("LLL")}
              </p>
              <button onClick={() => setSelectedEvent(null)}>Close</button>
            </div>
          )}

          {/* Overlay to close modal when clicking outside */}
          {selectedEvent && (
            <div
              onClick={() => setSelectedEvent(null)}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                zIndex: 999,
              }}
            />
          )}
        </div>
      </section>
    </div>
  );
}
