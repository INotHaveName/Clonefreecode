import React from 'react';
import '../style-sheet/testimonio.css';

function Testimonio(props){
  return (
    <div className='contenedor-testimonio'>
    <img 
      className ='imagen-testimmonio'
      src = {require(`../imagenes/img_${props.imagen}.png`)}
      alt="Foto de Ema"
      />
      <div className= 'contenedor-tecto-testimonio'>
      <p className= 'nombre-testimonio'>
        <strong>{props.nombre}</strong> en {props.pais}</p>
      <p className = 'cargo-testimonio'>
        {props.cargo} en <strong>{props.empresa}</strong></p>
      <p className = 'Texto-testimmonio'>{props.testimonio}</p>
      </div>
    </div>
  ); 
 }
export default Testimonio;