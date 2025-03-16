import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export function PeopleTeam16(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none">
        <path
          fill="url(#fluentColorPeopleTeam160)"
          d="M12.562 13A2.5 2.5 0 0 0 15 10.5V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v2.5a2.5 2.5 0 0 0 2.562 2.5"
        ></path>
        <path
          fill="url(#fluentColorPeopleTeam167)"
          fillOpacity=".5"
          d="M12.562 13A2.5 2.5 0 0 0 15 10.5V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v2.5a2.5 2.5 0 0 0 2.562 2.5"
        ></path>
        <path
          fill="url(#fluentColorPeopleTeam161)"
          d="M3.562 13A2.5 2.5 0 0 0 6 10.5V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2.5A2.5 2.5 0 0 0 3.562 13"
        ></path>
        <path
          fill="url(#fluentColorPeopleTeam168)"
          fillOpacity=".5"
          d="M3.562 13A2.5 2.5 0 0 0 6 10.5V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2.5A2.5 2.5 0 0 0 3.562 13"
        ></path>
        <path
          fill="url(#fluentColorPeopleTeam162)"
          d="M5 7.993A1 1 0 0 1 6 7h4a1 1 0 0 1 1 1v3a3 3 0 0 1-.146.927A3.001 3.001 0 0 1 5 11z"
        ></path>
        <path
          fill="url(#fluentColorPeopleTeam163)"
          d="M5 7.993A1 1 0 0 1 6 7h4a1 1 0 0 1 1 1v3a3 3 0 0 1-.146.927A3.001 3.001 0 0 1 5 11z"
        ></path>
        <path
          fill="url(#fluentColorPeopleTeam164)"
          d="M12.5 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"
        ></path>
        <path
          fill="url(#fluentColorPeopleTeam165)"
          d="M3.5 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"
        ></path>
        <path
          fill="url(#fluentColorPeopleTeam166)"
          d="M8 2.002a1.998 1.998 0 1 0 0 3.996a1.998 1.998 0 0 0 0-3.996"
        ></path>
        <defs>
          <linearGradient
            id="fluentColorPeopleTeam160"
            x1="11.189"
            x2="14.454"
            y1="7.797"
            y2="12.142"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".125" stopColor="#7A41DC"></stop>
            <stop offset="1" stopColor="#5B2AB5"></stop>
          </linearGradient>
          <linearGradient
            id="fluentColorPeopleTeam161"
            x1="2.189"
            x2="5.454"
            y1="7.797"
            y2="12.142"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".125" stopColor="#9C6CFE"></stop>
            <stop offset="1" stopColor="#7A41DC"></stop>
          </linearGradient>
          <linearGradient
            id="fluentColorPeopleTeam162"
            x1="6.427"
            x2="10.205"
            y1="7.93"
            y2="13.101"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".125" stopColor="#BD96FF"></stop>
            <stop offset="1" stopColor="#9C6CFE"></stop>
          </linearGradient>
          <linearGradient
            id="fluentColorPeopleTeam163"
            x1="8"
            x2="13.697"
            y1="6.166"
            y2="15.29"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#885EDB" stopOpacity="0"></stop>
            <stop offset="1" stopColor="#E362F8"></stop>
          </linearGradient>
          <linearGradient
            id="fluentColorPeopleTeam164"
            x1="11.713"
            x2="13.242"
            y1="3.399"
            y2="5.84"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".125" stopColor="#7A41DC"></stop>
            <stop offset="1" stopColor="#5B2AB5"></stop>
          </linearGradient>
          <linearGradient
            id="fluentColorPeopleTeam165"
            x1="2.713"
            x2="4.242"
            y1="3.399"
            y2="5.84"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".125" stopColor="#9C6CFE"></stop>
            <stop offset="1" stopColor="#7A41DC"></stop>
          </linearGradient>
          <linearGradient
            id="fluentColorPeopleTeam166"
            x1="6.952"
            x2="8.989"
            y1="2.533"
            y2="5.785"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".125" stopColor="#BD96FF"></stop>
            <stop offset="1" stopColor="#9C6CFE"></stop>
          </linearGradient>
          <radialGradient
            id="fluentColorPeopleTeam167"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(4.02365 0 0 8.1916 9.214 9.86)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".433" stopColor="#3B148A"></stop>
            <stop offset="1" stopColor="#3B148A" stopOpacity="0"></stop>
          </radialGradient>
          <radialGradient
            id="fluentColorPeopleTeam168"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(-4.45284 0 0 -9.06537 7.62 9.86)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".433" stopColor="#3B148A"></stop>
            <stop offset="1" stopColor="#3B148A" stopOpacity="0"></stop>
          </radialGradient>
        </defs>
      </g>
    </svg>
  )
}


function GroupCalendar({ free_times }) {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [view, setView] = useState("week");

  React.useEffect(() => {
    const formattedEvents = free_times.map((event, index) => {
      let arr = Object.keys(event.free_users);
      let description_add = "";
      arr.forEach((id) => {
        description_add += " " + event.free_users[id].name + ",";
      });
      return {
        id: index + 1,
        title: event.summary,
        start: new Date(event.start_time_iso),
        end: new Date(event.end_time_iso),
        users: event.free_users,
        description: "You have intersected free slots with: " + description_add,
      };
    });
    setEvents(formattedEvents);
  }, [free_times]);

  const eventStyleGetter = (event) => {
    console.log("event", event);
    const duration = moment(event.end).diff(moment(event.start), "minutes");
    const backgroundColor = duration > 120 ? "#22aa84ab" : "#3b82f633";
    const textColor = duration > 120 ? "#fff" : "#3b82f6";
    return {
      style: {
        backgroundColor,
        borderRadius: "4px",
        border: "none",
        color: textColor,
        fontSize: "0.9em",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      },
    };
  };

  const CustomToolbar = (toolbar) => {
    return (
      <div className="rbc-toolbar" style={{ marginBottom: "20px" }}>
        {/* Navigation Buttons */}
        <span className="rbc-btn-group">
          <button
            onClick={() => toolbar.onNavigate("PREV")}
            style={buttonStyle}
          >
            ◀
          </button>
          <button
            onClick={() => toolbar.onNavigate("TODAY")}
            style={buttonStyle}
          >
            Today
          </button>
          <button
            onClick={() => toolbar.onNavigate("NEXT")}
            style={buttonStyle}
          >
            ▶
          </button>
        </span>

        {/* View Label */}
        <span
          className="rbc-toolbar-label"
          style={{
            fontSize: "1.4em",
            fontWeight: "600",
            color: "#2c3e50",
          }}
        >
          {toolbar.label}
        </span>

        {/* View Buttons (Month, Week, Day, Agenda) */}
        <span className="rbc-btn-group">
          <button
            className={toolbar.view === "month" ? "active" : ""}
            onClick={() => toolbar.onView("month")}
            style={buttonStyle}
          >
            Month
          </button>
          <button
            className={toolbar.view === "week" ? "active" : ""}
            onClick={() => toolbar.onView("week")}
            style={buttonStyle}
          >
            Week
          </button>
          <button
            className={toolbar.view === "day" ? "active" : ""}
            onClick={() => toolbar.onView("day")}
            style={buttonStyle}
          >
            Day
          </button>
          <button
            className={toolbar.view === "agenda" ? "active" : ""}
            onClick={() => toolbar.onView("agenda")}
            style={buttonStyle}
          >
            Agenda
          </button>
        </span>
      </div>
    );
  };

  return (
    <div className="flex justify-center mt-12">
      {/* Wrapper div for rounded white background */}
      <div
        style={{
          backgroundColor: "#EEF1FA",
          borderRadius: "15px",
          padding: "20px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          width: "80vw",
          maxWidth: "75vw",
        }}
      >
        {/* Calendar Component */}
        <Calendar
          localizer={localizer}
          events={events}
          view={view}
          onView={setView}
          views={["month", "week", "day", "agenda"]}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={(event) => setSelectedEvent(event)}
          eventPropGetter={eventStyleGetter}
          components={{
            toolbar: CustomToolbar,
          }}
          className="w-full"
          style={{ height: 650 }}
        />
      </div>
      {/* Event Details Modal */}
      {selectedEvent && (
        <div
          className=" bg-white text-black shadow-[0px_10px_11px_10px_rgba(0,0,0,1)]"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
          }}
        >
          <div className="w-full flex justify-center">
           <PeopleTeam16 height="100px" width="90px"></PeopleTeam16>
          </div>
          <h3 className="text-lg font-semibold w-full text-center">
            Congratulations!
          </h3>
          
         
          <p className="text-sm text-gray-600">{selectedEvent.description}</p>
          <p className="text-sm text-gray-600">
            {moment(selectedEvent.start).format("LLL")} -{" "}
            {moment(selectedEvent.end).format("LLL")}
          </p>
          <div className="w-full flex justify-center">
          <button
            type="submit"
            onClick={() => setSelectedEvent(null)}
            className="bg-[#232324;] shadow-[0px_10px_11px_-10px_rgba(0,0,0,1)] mt-4 px-4 py-2  text-white rounded-md"
          >
            Close
          </button>
          </div>
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
  );
}

// Button styling for the toolbar
const buttonStyle = {
  backgroundColor: "#f8f9fa",
  border: "1px solid #e0e0e0",
  borderRadius: "6px",
  padding: "6px 12px",
  margin: "0 4px",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

export default GroupCalendar;
