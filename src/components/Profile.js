import React from "react";

const Profile = ({ onSubmit, src, name, status }) => (
  <div className="card">
    <form onSubmit={onSubmit}>
      <h1>Profile Card</h1>

      <label className="custom-file-upload">
        <div className="img-wrap">
          <img htmlFor="photo-upload" src={src} alt="Upload" />
        </div>
      </label>

      <div className="name">{name}</div>

      <div className="status">{status}</div>

      <button type="submit" className="edit">Edit Profile </button>
    </form>
  </div>
);

export default Profile;
