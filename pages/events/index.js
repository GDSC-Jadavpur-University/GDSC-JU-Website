import React from "react";
import Image from "next/image";

function EventCard(props) {
  return (
    <a href={props.link}>
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
        <Image
          src={props.image}
          alt={props.title}
          width={150}
          height={150}
          className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
        />
        <div style={{ padding: "1em" }}>
          <h3 style={{ fontWeight: "bold" }}>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </a>
  );
}

function EventPage() {
  return (
    <div style={{ textAlign: "center" }}>
      <strong style={{ fontSize: "2em", fontWeight: "normal" }}>Events</strong>
      <p style={{ fontSize: "1.2em", marginTop: "0.5em" }}>
        Check out our events
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        <EventCard
          link="https://gdsc.community.dev/events/details/developer-student-clubs-jadavpur-university-kolkata-presents-placement-intern-talk-with-vivek-gupta/"
          image="/Vivek Gupta Event.jpg"
          title="Speaker Session"
          description="Placement & Intern Talk With Vivek Gupta"
        />
        <EventCard
          link="https://gdsc.community.dev/events/details/developer-student-clubs-jadavpur-university-kolkata-presents-gdsc-ju-orientation-session/"
          image="/GDSC Orientation Event.jpg"
          title="Orientation Session"
          description="GDSC JU Orientation Session"
        />
      </div>
    </div>
  );
}

export default EventPage;