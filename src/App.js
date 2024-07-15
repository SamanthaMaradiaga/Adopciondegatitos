/*import logo from './logo.svg';*/
import './App.css';
import Banner from './Components/Banner';
import Menu from './Components/Menu';
import React from 'react';
import Catalogo from './Components/Catalogo';
import Formulario  from './Components/Formulario';
import { Route, Routes } from 'react-router-dom';
/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import Inicio from './Components/Inicio';
import CarruselDeImagenes from './Components/Carrusel';



const App = () => {
  
  return (
    
    <div className="App">
     
     <Banner/>
      <Menu/>
      
      <Routes>
        <Route path="/inicio" element={<Inicio/>}/>
        <Route path="/catalogo" element={<Catalogo/>}/>
        <Route path='/formulario' element={<Formulario/>}/>
        
      </Routes>
        
    </div>   
       
 
  ); 

}

export default App;
