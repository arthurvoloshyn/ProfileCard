import React from 'react';
import PropTypes from 'prop-types';

const Edit = ({ onSubmit, children }) => (
  <div className="card">
    <form onSubmit={onSubmit}>
      <h1>Profile Card</h1>

      {children}

      <button type="submit" className="save">
        Save{' '}
      </button>
    </form>
  </div>
);

Edit.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func
};

Edit.defaultProps = {
  children: null,
  onSubmit: () => {}
};

export default Edit;
