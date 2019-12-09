import React from "react";

const Edit = ({ onSubmit, children }) => (
  <div className="card">
    <form onSubmit={onSubmit}>
      <h1>Profile Card</h1>

      {children}

      <button type="submit" className="save">Save </button>
    </form>
  </div>
);

export default Edit;
