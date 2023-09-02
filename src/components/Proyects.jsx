import React, { useState } from 'react'
import "./styles/proyects.css"
import images from '../images/images'

const Proyects = () => {
    const [proyectos, setProyectos] = useState([
      {
        id: 1,
        nombre: 'Proyecto 1',
        descripcion: 'Descripción del proyecto 1',
        imagen: images.proyects1, 
      },
      {
        id: 2,
        nombre: 'Proyecto 2',
        descripcion: 'Descripción del proyecto 2',
        imagen: images.proyects1, 
      },

      {
        id: 2,
        nombre: 'Proyecto 2',
        descripcion: 'Descripción del proyecto 2',
        imagen: images.proyects1, 
      },
 
    ]);
 
    const agregarProyecto = (nuevoProyecto) => {
      setProyectos([...proyectos, nuevoProyecto]);
    };
  

    return (
      <div className='principal_proyects'>
        <h2 className='sectionproyects'>Nuestros Proyectos</h2>
        <ul className='list_proyects'>
          {proyectos.map((proyecto) => (
            <li className='pp_tt' key={proyecto.id}>
                <div>
                <p className='pp_tt2'>{proyecto.nombre}</p>: {proyecto.descripcion}
              <img className='imgproject' src={proyecto.imagen} alt={proyecto.nombre} />
                </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Proyects;