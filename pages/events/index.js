import React from "react";
import Image from "next/image";


function EventPage() {

  function EventCard(props) {
    return (
      <a href={props.link} style={{ textDecoration: "none" }}>
        <div
          style={{
            display: "flex",
            width: "400px",
            height: "300px", // Set a fixed height for the card
            margin: "0.5em",
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div style={{ flex: "1.5", position: "relative", width: "50%", height: "100%" }}>
            <Image
              src={props.image}
              alt={props.title}
              layout="fill" // Fill the entire parent container
              style={{ objectFit: "cover" }} // Set the object fit style
            />
          </div>
          <div style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "1em", textAlign: "left" }}>
            <div>
              <h3 style={{ fontWeight: "bold", marginBottom: "0.5em" }}>{props.title}</h3>
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </a>
    );
  }
    
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
          image="/Orientation Event.jpg"
          title="Orientation Session"
          description="GDSC JU Orientation Session"
        />
      </div>
    </div>
  );
}

export default EventPage;