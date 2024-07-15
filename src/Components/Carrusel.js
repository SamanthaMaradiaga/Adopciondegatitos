import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './EstiloCarrusel.css';

const CarruselDeImagenes = (Carrusel) => {
  
      return (
    <div className="carrusel-contenedor">
      <Slider {...Carrusel}>
        <div>
          <img src="https://okdiario.com/img/2023/10/10/un-estudio-revela-los-5-tipos-de-duenos-para-gatos-que-hay.jpg" alt="Imagen 1" />
        </div>
        <div>
          <img src="https://rivanimal.org/imas/animales/_3842/a_38421561301681.jpg" alt="Imagen 2" />
        </div>
        <div>
          <img src="https://adoptasalvaunavida.com/imas/animales/_2303/a_23031590336366.jpg" alt="Imagen 3" />
        </div>
        <div>
          <img src="https://4.bp.blogspot.com/-uhbAaIniFfA/Vzt7j_EjUnI/AAAAAAAAlLo/EWl-s8aLOzQqEli2TA8-G7gVE3pInYarQCLcB/s1600/13228164_1087500347964232_770333831_n.jpg" alt="Imagen 4" />
        </div>
      </Slider>
    </div>
  );
}

export default CarruselDeImagenes;
