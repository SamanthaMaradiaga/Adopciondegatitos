// src/componentes/ListaProductos.js
import React from 'react';
import { data } from '../Data';
import './Stilo.css';
import { Button } from '@mui/material';


export const ListaProductos = () => {
      
    return(
      <div className='ContenedorProductos'>
        {data.map(Product=>(
            <div className='Producto' key={Product.id}>
                <figure>
                    <img src={Product.img} alt={Product.nombregatito}/>
                </figure>
                <h1 className='nombre '>{Product.nombregatito}</h1>
                <div className='descripcion'>
                    <h3>
                        {Product.descripcion}
                    </h3>
                    <p className='edad '>{Product.edad}</p> 

                                   
                    
                    <button>Llenar Formulario de adopción</button>
                    

                </div>
            </div>
        ))}
   

    
</div>
    );
};

export default ListaProductos;