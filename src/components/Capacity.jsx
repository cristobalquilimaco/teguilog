import React from 'react'
import "./styles/capacity.css"
import images from "../images/images"

const Capacity = () => {
  return (
    <div className='principal_capacity'>
      <h3>
        Capacity
      </h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos atque, corrupti maiores perferendis magnam impedit dicta assumend.</p>

    <section>
      <img src={images.branding} alt="" />
      <p>Titulo del servicio</p>
      <i className='bx bx-check-square'></i>
      <p className='des_service'>Descripcion del servicio</p>
      <i className='bx bx-check-square'></i>
      <p className='des_service'>Descripcion del servicio</p>
      <i className='bx bx-check-square'></i>
      <p className='des_service'>Descripcion del servicio</p>
      <i className='bx bx-check-square'></i>
      <p>Descripcion del servicio</p>
      <i className='bx bx-check-square'></i>
      <p className='des_service'>Descripcion del servicio</p>

    </section>
    </div>
  )
}

export default Capacity