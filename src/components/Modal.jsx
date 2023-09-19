import React from 'react'

const Modal = ({project, onClose}) => {
  return (
    <div className='project-modal'>
      <div className='modal-content'>
        <h3>{project.nombre}</h3>
        <img src={project.imagen} alt="" />
      </div>
    </div>
  )
}

export default Modal