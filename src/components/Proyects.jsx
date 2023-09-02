import React, { useState } from 'react'
import "./styles/proyects.css"
import images from '../images/images'

const Proyects = () => {
    const [proyectos, setProyectos] = useState([
      {
        id: 1,
        nombre: 'Proyecto 1',
        descripcion: 'Descripción del proyecto 1',
        imagen: 'ruta/a/la/imagen1.jpg', 
      },
      {
        id: 2,
        nombre: 'Proyecto 2',
        descripcion: 'Descripción del proyecto 2',
        imagen: 'ruta/a/la/imagen2.jpg', 
      },
 
    ]);
 
    const agregarProyecto = (nuevoProyecto) => {
      setProyectos([...proyectos, nuevoProyecto]);
    };
  

    return (
      <div>
        <h2>Mis Proyectos</h2>
        <ul>
          {proyectos.map((proyecto) => (
            <li key={proyecto.id}>
              <strong>{proyecto.nombre}</strong>: {proyecto.descripcion}
              <img src={proyecto.imagen} alt={proyecto.nombre} />
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Proyects;