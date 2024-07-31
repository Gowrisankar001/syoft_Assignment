import React from 'react';
import PropTypes from 'prop-types';
import './FormInput.css';

const FormInput = ({ name, type, value, placeholder, onChange }) => {
  return (
    <input
      className="form-input"
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;
