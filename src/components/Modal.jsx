import React from 'react'
import "./styles/modal.css"



const Modal = ({project, onClose}) => {

  return (
    <div className='project-modal'>
      <div className='modal-content'>
        <h3 className='modal-descr'>{project?.nombre}</h3>
        <h4 className='modal-descr'>{project?.descripcion}</h4>
        <img className='img-modal' src={project.imagen} alt={project.nombre} />
        <button className='btn-modal' onClick={onClose}>Cerrar</button>
      </div>
    </div>
  )
}

export default Modal