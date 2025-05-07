import "../styles/Modal.css";

import React from "react";

const Modal = ({ isOpen, onClose, title, content, strong }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <strong>{strong}</strong>
        <p>{content}</p>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;