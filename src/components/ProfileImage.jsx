import React from "react";

const img = "https://i0.wp.com/fosterhopesac.org/wp-content/uploads/2021/10/Headshot-Placeholder-Square.png?w=200&ssl=1";

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
