import React, { useState } from 'react';
import "./styles/proyects.css";
import projectsData from '../utils/projects';
import Modal from './Modal';

const Proyects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (proyecto) => {
    setSelectedProject(proyecto);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className='principal_proyects'>
      <h2 className='sectionproyects'>Nuestros Proyectos</h2>
      <ul className='list_proyects'>
        {projectsData.map((proyecto) => (
          <li className='pp_tt' key={proyecto.id}>
            <div className='projects_section1'>
              <img
                className='imgproject'
                src={proyecto?.imagen}
                alt={proyecto?.nombre}
                onClick={() => openModal(proyecto)}
              />
            </div>
          </li>
        ))}
      </ul>
      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} isOpen={!!selectedProject} />
      )}
    </div>
  );
};

export default Proyects;
