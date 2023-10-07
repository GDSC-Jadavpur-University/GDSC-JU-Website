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

  return (
    <>
      <CenterLayout>
        <div className="row">
          {EventData.map((event) => {
            return (
              <EventCard
                key={event.title}
                title={event.title}
                description={event.description}
                image={event.image}
                link={event.link}
              />
            );
          })}
        </div>
      </CenterLayout>
    </>
  );
}

const EventCard = (props) => (
  <div className="col-md-4 mb-4">
    <div className="bg-white rounded-lg shadow-lg">
      <Image
        src={props.image}
        alt={props.title}
        className="rounded-t-lg w-full"
        width={300}
        height={180}
        objectFit="cover"
      />
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
