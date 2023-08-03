import React from "react";

function FormLabel({ htmlFor, label, children }) {
  return (
    <div className="mb-3">
      <label htmlFor={htmlFor} className="form-label">
        {label}
      </label>
      {children}
    </div>
  );
}

export default FormLabel;