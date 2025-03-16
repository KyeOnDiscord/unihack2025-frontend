import { useState, useEffect } from "react";
import * as UserService from "./services/user";
import { toast } from "react-toastify";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

async function getEvents() {
  let calender_data = await UserService.GetCalendar(
    localStorage.getItem("JWT_TOKEN")
  );
  //console.log(calender_data.events);
  //setcalData(calender_d.events);

  let events = [];
  let i = 0;

  for (const x of calender_data.events) {
    i++;
    events.push({
      id: i,
      title: x.summary,
      start: new Date(x.start_time_iso * 1000),
      end: new Date(x.end_time_iso * 1000),
      description: "", // x.summary,
    });
  }
  console.log("events array:");
  console.log(events);
  return events;
}

export default function Home() {
  const [loadedUserdata, setloadedUserdata] = useState(false);
  const [displayName, setdisplayName] = useState(null);
  const [events, setEvents] = useState([]);
  const [calLink, setCalLink] = useState("");
  const [prefText, setPrefText] = useState("");
  const [instructIsVisible, setInstructIsVisible] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("JWT_TOKEN");
    if (token == null) {
      alert("You are not logged in, please log in");
      window.location.href = "/login";
    } else {
      const userPromise = UserService.me(token)
        .then(async (x) => {
          console.log(x);
          setdisplayName(x.name);
          if (x.calender_ics_link == null) {
            toast.warn("Please set your Allocate+ calendar link");
          } else {
            setCalLink(x.calender_ics_link);
          }

          setPrefText(x.preferences);
          setEvents(await getEvents());
        })
        .catch((x) => {
          alert(x);
          alert("You are not logged in, please log in");
          window.location.href = "/login";
        });

      toast
        .promise(userPromise, {
          pending: "Loading user data...",
          success: { render: "User data loaded. ✅", delay: 100 },
          error: { render: "User data loading error. ❌", delay: 100 },
        })
        .then((x) => {
          setloadedUserdata(true);
        });
    }
  }, []);

  const handleCalLink = async (e) => {
    e.preventDefault();
    if (!calLink.startsWith("https://")) {
      toast.error("That's not a valid calendar url!");
    } else {
      toast.promise(
        UserService.SetCalendar(calLink, localStorage.getItem("JWT_TOKEN")),
        {
          pending: "Saving calender...",
          success: { render: "Calender saved. ✅", delay: 100 },
          error: { render: "Calender saving error. ❌", delay: 100 },
        }
      );
    }
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

  const handleSignOut = () => {
    // Clear cookies by setting them to expire
    document.cookie.split(";").forEach((cookie) => {
      document.cookie = cookie
        .replace(/^ +/, "")
        .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`);
    });

    // Clear Local Storage
    localStorage.removeItem("JWT_TOKEN");

    // Redirect to login page
    window.location.href = "/login";
  };

  const style = { backgroundColor: "#004185" };

  const eventPropGetter = (event) => {
    let style = {
      color: "white",
      fontWeight: "bold",
      fontSize: "12px",
      padding: "5px",
      fontFamily: "Arial",
    };

    // Apply styles based on event title
    if (event.title.includes("Seminar")) {
      style.backgroundColor = "#4CAF50";
      style.border = "2px solid #388E3C";
    } else if (event.title.includes("Applied")) {
      style.backgroundColor = "#2196F3";
      style.border = "2px solid #1976D2";
    } else if (event.title.includes("Workshop")) {
      style.backgroundColor = "#FF9800";
      style.border = "2px solid #F57C00";
    } else {
      style.backgroundColor = "#607D8B";
      style.border = "2px solid #455A64";
    }

    return {
      style: style,
    };
  };

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
            📆 Make calendars with your uni friend groups and sync schedules
            together!
          </p>
        </div>
      </header>

      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-6 space-y-5 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            {loadedUserdata == true && (
              <>
                Welcome {displayName}
              </>
            )}
            <a href={"/rooms"}>
              <button className="bg-blue-500 text-white mx-10 px-6 py-3 rounded-full hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg">
                See Rooms
              </button>
            </a>
            <button
              type="submit"
              onClick={handleSignOut}
              className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg"
            >
              Sign Out
            </button>
          </h2>

          <div className="flex justify-center mt-12">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              onSelectEvent={(event) => setSelectedEvent(event)}
              className="w-full"
              defaultView="week"
              style={{ height: 800 }}
              eventPropGetter={eventPropGetter}
              min={new Date(2025, 2, 16, 8, 0)}
              max={new Date(2025, 2, 16, 20, 0)}
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
                <button type="submit" onClick={() => setSelectedEvent(null)}>
                  Close
                </button>
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

          <div class="w-full flex flex-col items-start p-2">
            <div class="w-full flex items-center border border-gray-300 rounded-md overflow-hidden">
              <input
                type="url"
                placeholder="https://my-timetable.monash.edu/..."
                class="flex-1 px-4 py-2 outline-none"
                value={calLink}
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
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-200 text-center relative">
                <h3 className="text-lg font-semibold mb-2">
                  Where to get the ICS URL
                </h3>
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
              value={prefText}
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
        </div>
        <br />
      </section>
    </div>
  );
}
