import React from "react";

import img from '../assets/headshot.jpg';


function ProfileImage() {
  return (
    <div className="position-relative d-inline-block">
      {/* Background circle */}
      <div
        className="position-absolute bg-light rounded-circle profile-circle"
        style={{ zIndex: 0 }}
      ></div>

      {/* Headshot */}
      <img
        src={img}
        alt="Headshot"
        className="rounded-circle profile-image"
        style={{
          objectFit: 'cover',
          position: 'relative',
          zIndex: 1
        }}
      />
    </div>
  );
}

export default ProfileImage;
