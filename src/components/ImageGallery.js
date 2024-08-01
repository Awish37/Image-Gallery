import React, { useState } from 'react';
import Image from './Image';
import Modal from './Modal';
import './ImageGallery.css'; // Create a CSS file for styling

import img1 from '../images/1.jpeg';
import img2 from '../images/2.jpeg';
import img3 from '../images/3.jpeg';
import img4 from '../images/4.jpeg';
import img5 from '../images/5.jpeg';
import img6 from '../images/6.jpeg';
import img7 from '../images/7.jpg';
import img8 from '../images/8.jpeg';
import img9 from '../images/9.jpeg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <Image key={index} src={image} onClick={() => openModal(image)} />
      ))}
      {selectedImage && (
        <Modal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default ImageGallery;
