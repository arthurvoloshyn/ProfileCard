import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

const ImgUpload = ({ onChange, src }) => (
  <label htmlFor="photo-upload" className="custom-file-upload">
    <div className="img-wrap img-upload" >
      <FontAwesomeIcon icon={faCloudUploadAlt} className="icon" />

      <img htmlFor="photo-upload" src={src} alt="Upload" />
    </div>

    <input
      id="photo-upload"
      type="file"
      accept="image/*"
      onChange={onChange}
      multiple
    />
  </label>
);

export default ImgUpload;
