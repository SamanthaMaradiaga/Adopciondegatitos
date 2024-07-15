

import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'; // Desde Aquí importo los estilos del menú que se encuentran en Menu.css

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu-menu">
        <li className="menu-item"> <Link to={ '/inicio'} >Inicio</Link></li>
        <li className="menu-item"> <Link to={ '/catalogo'} >Conoce a Nuestros Gatitos</Link></li>
        <li className="menu-item"> <Link to={ '/formulario'} >Formulario de Adopción</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
