import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ onSubmit, src, name, status }) => (
  <div className="card">
    <form onSubmit={onSubmit}>
      <h1>Profile Card</h1>

      <div className="custom-file-upload">
        <sapn className="img-wrap">
          <img src={src} alt="Upload" />
        </sapn>
      </div>

      <div className="name">{name}</div>

      <div className="status">{status}</div>

      <button type="submit" className="edit">
        Edit Profile{' '}
      </button>
    </form>
  </div>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  src: PropTypes.string,
  onSubmit: PropTypes.func
};

Profile.defaultProps = {
  src: '../img/profile.jpg',
  onSubmit: () => {}
};

export default Profile;
