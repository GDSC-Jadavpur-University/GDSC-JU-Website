// import React from "react";


// function Gallery() {
//   return (
//     <div>
//       <div>
//         Gallery
//       </div>
//       <div>
//         <img src="Copy of EXTENDED CORE TEAM.png" alt="Image 1" />
//         {/* <img src="image2.jpg" alt="Image 2" /> */}
//       </div>
//     </div>
//   );
// }

// export default Gallery;

import React from "react";

function Gallery() {
  return (
    <div>
      <div>
        Gallery
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "10px" }}>
          <img src="\Copy of EXTENDED CORE TEAM.png" style={{ borderRadius: "5%", height: "150px", width: "500px" }} />
        </div>
        <div>
          <img src="\Copy of CORE TEAM.png" style={{ borderRadius: "5%", height: "150px", width: "500px" }} />
        </div>
        <div>
          <img src="\Copy of Copy of IMG_1771.png" style={{ borderRadius: "5%", height: "150px", width: "500px" }} />
        </div>
        <div>
          <img src="\Copy of IMG-20230927-WA0187.jpg" style={{ borderRadius: "5%", height: "150px", width: "500px" }} />
        </div>
        <div>
          <img src="\Copy of Photo from Aindree.jpg" style={{ borderRadius: "5%", height: "150px", width: "500px" }} />
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "10px" }}>
          <img src="\Copy of Siddharth.png" style={{ borderRadius: "5%", height: "150px", width: "150px" }} />
        </div>
        <div>
          <img src="\Copy of Copy of Copy of Copy of DSCN1310.jpg" style={{ borderRadius: "5%", height: "150px", width: "150px" }} />
        </div>
        <div>
          <img src="\Copy of Copy of Copy of Copy of IMG_0204_edited.jpg" style={{ borderRadius: "5%", height: "150px", width: "150px" }} />
        </div>
        <div>
          <img src="\Copy of Copy of Copy of DSCN1288.JPG.png" style={{ borderRadius: "5%", height: "150px", width: "150px" }} />
        </div>
        <div>
          <img src="\Copy of Copy of Copy of IMG_0221_edited.jpg" style={{ borderRadius: "5%", height: "150px", width: "150px" }} />
        </div>
        <div>
          <img src="\Copy of Copy of Copy of DSCN1311.jpg" style={{ borderRadius: "5%", height: "150px", width: "150px" }} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;