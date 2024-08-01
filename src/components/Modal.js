import React from 'react';
import './Modal.css'; // Create a CSS file for styling

const Modal = ({ image, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <span className="close">&times;</span>
      <img className="modal-content" src={image} alt="" />
    </div>
  );
};

export default Modal;
