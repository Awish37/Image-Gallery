import React from 'react';
import './Image.css'; // Create a CSS file for styling

const Image = ({ src, onClick }) => {
  return (
    <div className="image-container" onClick={onClick}>
      <img src={src} alt="" className="image" />
    </div>
  );
};

export default Image;
