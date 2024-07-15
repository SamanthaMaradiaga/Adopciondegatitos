// src/components/Banner.js

import React from 'react';
import './Banner.css'; // Importa los estilos del banner
import bannerImage from '../Imagenes/Banner.jpg'; // Importa la imagen del banner

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner" className="banner-image" />
        </div>
  );
};

export default Banner;


