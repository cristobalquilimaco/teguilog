import React from 'react'
import "./styles/modal.css"



const Modal = ({project, onClose}) => {

  return (
    <div className='project-modal'>
      <div className='modal-content'>
        <section className='separatemodal'>
        <section className='section_m_img'>
        <img className='img-modal' src={project.imagen} alt={project.nombre} />
        </section>
        <article className='art-descrip'>
        <h3 className='modal-descr'>{project?.nombre}</h3>
        <h4 className='modal-descr dc-modal'>{project?.descripcion}</h4>
        </article>
  
        </section>

        <button className='btn-modal' onClick={onClose}>Cerrar</button>

      </div>
    </div>
  )
}

export default Modal