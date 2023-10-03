import React from "react";

function Gallery() {
  return (
    <div>
      <div>
        Gallery
      </div>
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </div>
    </div>
  );
}

import CarouselSlider from "./CarouselSlider";
export default function App() {
  return (
    <div className="App">
      <CarouselSlider />
    </div>
  );
}

export default Gallery;
