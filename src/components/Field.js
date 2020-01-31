import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ onChange, value, type, placeholder, maxlength }) => (
  <div className="field">
    <label htmlFor={type}>{type}:</label>

    <input id={type} type="text" onChange={onChange} maxLength={maxlength} value={value} placeholder={placeholder} name={type} required />
  </div>
);

Field.propTypes = {
  type: PropTypes.string.isRequired,
  maxlength: PropTypes.number,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

Field.defaultProps = {
  maxlength: 25,
  placeholder: '',
  value: '',
  onChange: () => {}
};

export default Field;
