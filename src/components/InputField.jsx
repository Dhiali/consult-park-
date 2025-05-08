import React from "react";
import "../styles/InputField.css";

const InputField = ({ label, type, name, value, onChange, textarea, error }) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows="5"
          className={error ? "error" : ""}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={error ? "error" : ""}
        />
      )}
    </div>
  );
};

export default InputField;