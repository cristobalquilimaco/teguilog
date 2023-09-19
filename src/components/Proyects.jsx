import React, { useState } from 'react'
import "./styles/proyects.css"
import projectsData from '../utils/projects';

const Proyects = () => {

    return (
      <div className='principal_proyects'>
        <h2 className='sectionproyects'>Nuestros Proyectos</h2>
        <ul className='list_proyects'>
          {projectsData.map((proyecto) => (
            <li className='pp_tt' key={proyecto.id}>
                <div>
                <p className='pp_tt2'>{proyecto.nombre}</p> <p>{proyecto.descripcion}</p>
              <img className='imgproject' src={proyecto.imagen} alt={proyecto.nombre} />
                </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Proyects;