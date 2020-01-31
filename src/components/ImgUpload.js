import React from 'react';
import PropTypes from 'prop-types';

const ImgUpload = ({ onChange, src }) => (
  <label htmlFor="photo-upload" className="custom-file-upload fas">
    <span className="img-wrap img-upload">
      <img htmlFor="photo-upload" src={src} alt="Upload" />
    </span>

    <input id="photo-upload" type="file" accept="image/*" onChange={onChange} multiple />
  </label>
);

ImgUpload.propTypes = {
  src: PropTypes.string,
  onChange: PropTypes.func
};

ImgUpload.defaultProps = {
  src: '../img/profile.jpg',
  onChange: () => {}
};

export default ImgUpload;
