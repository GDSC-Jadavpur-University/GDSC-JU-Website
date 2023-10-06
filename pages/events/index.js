import React from 'react';
import Image from 'next/image';
import CenterLayout from '@/layout/CenterLayout';

function EventPage() {
  const EventData = [
    {
      title: 'Speaker Session',
      description: 'Placement & Intern Talk With Vivek Gupta',
      image: '/Vivek Gupta Event.jpg',
      link: 'https://gdsc.community.dev/events/details/developer-student-clubs-jadavpur-university-kolkata-presents-placement-intern-talk-with-vivek-gupta/',
    },
    {
      title: 'Orientation Session',
      description: 'GDSC JU Orientation Session',
      image: '/Orientation Event.jpg',
      link: 'https://gdsc.community.dev/events/details/developer-student-clubs-jadavpur-university-kolkata-presents-gdsc-ju-orientation-session/',
    },
  ];

  const eventCardContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "20px", // Add gap between cards
  };

  const eventCardStyle = {
    flex: "1" ,
    margin: "10px", // Adjust margin for spacing between event blocks
    padding: "20px", // Padding inside the card
  };

  const imageContainerStyle = {
    height: "100%",
     width: "100%",
    overflow: "hidden",
    position: "relative",
  };

  const overlayStyle = {
    content: "",
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background: "linear-gradient(transparent, rgba(0, 0, 0, 0.7))",
    pointerEvents: "none",
    opacity: "0",
    transition: "opacity 0.3s ease-in-out",
  };

  const overlayEnter = (e) => {
    e.currentTarget.querySelector(".overlay").style.opacity = "1";
  };

  const overlayLeave = (e) => {
    e.currentTarget.querySelector(".overlay").style.opacity = "0";
  };

  return (
    <>
      <CenterLayout>
        <div style={eventCardContainerStyle}>
          {EventData.map((event) => {
            return (
              <EventCard
                key={event.title}
                title={event.title}
                description={event.description}
                image={event.image}
                link={event.link}
                style={eventCardStyle}
                imageContainerStyle={imageContainerStyle}
                overlayStyle={overlayStyle}
                overlayEnter={overlayEnter}
                overlayLeave={overlayLeave}
              />
            );
          })}
        </div>
      </CenterLayout>
    </>
  );
}

const EventCard = (props) => (
  <div style={props.style} className="event-card">
    <div className="bg-white rounded-lg shadow-lg">
      <div
        className="image-container"
        style={props.imageContainerStyle}
        onMouseEnter={props.overlayEnter}
        onMouseLeave={props.overlayLeave}
      >
        <Image
          src={props.image}
          alt={props.title}
          className="w-full h-full"
          layout="responsive"
          width={300}
          height={180}
          objectFit="contain"
        />
        <div className="overlay" style={props.overlayStyle}></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{props.title}</h3>
        <p className="text-gray-600 mt-2">{props.description}</p>
        <a
          href={props.link}
          className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          Know More
        </a>
      </div>
    </div>
  </div>
);

export default EventPage;
