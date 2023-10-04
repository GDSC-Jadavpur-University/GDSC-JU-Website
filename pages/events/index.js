import React from "react";
import Image from "next/image/";
function Events() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ textAlign: "center" }}>
        <strong style={{ fontSize: "2em", fontWeight: "normal" }}>
          Events
        </strong>
        <p style={{ fontSize: "1.2em", marginTop: "0.5em" }}>
          Check out our events
        </p>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", padding: "20px" }}
      >
        <a href="https://gdsc.community.dev/events/details/developer-student-clubs-jadavpur-university-kolkata-presents-placement-intern-talk-with-vivek-gupta/">
          <div
            style={{
              flex: "1",
              maxWidth: "300px",
              marginRight: "0.5em",
              marginBottom: "0.5em",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="/Vivek Gupta Event.jpg"
              class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
              alt="Event 2"
              style={{ width: "150px", height: "150px" }}
            />
            <div style={{ padding: "1em" }}>
              <h3 style={{ fontWeight: "bold" }}>Speaker Session</h3>
              <p>Placement & Intern Talk With Vivek Gupta</p>
            </div>
          </div>
        </a>
        <a href="https://gdsc.community.dev/events/details/developer-student-clubs-jadavpur-university-kolkata-presents-gdsc-ju-orientation-session/">
          <div
            style={{
              flex: "1",
              maxWidth: "300px",
              marginRight: "0.5em",
              marginBottom: "0.5em",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="/Orientation Event.jpg"
              class="max-w-xs transition duration-300 ease-in-out hover:scale-110"
              alt="Event 2"
              style={{ width: "150px", height: "150px" }}
            />
            <div style={{ padding: "1em" }}>
              <h3 style={{ fontWeight: "bold" }}>Info Session</h3>
              <p>GDSC JU Orientation Session</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Events;
