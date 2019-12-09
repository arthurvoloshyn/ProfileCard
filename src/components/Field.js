import React from "react";

const Field = ({ onChange, value, type, placeholder, maxlength }) => (
  <div className="field">
    <label htmlFor={type}>
      {type}:
    </label>

    <input
      id={type}
      type="text"
      onChange={onChange}
      maxLength={maxlength}
      value={value}
      placeholder={placeholder}
      name={type}
      required
    />
  </div>
);

export default Field;
