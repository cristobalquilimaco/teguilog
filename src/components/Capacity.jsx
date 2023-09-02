import React from 'react'
import "./styles/capacity.css"
import images from "../images/images"

const Capacity = () => {
  return (
    <div className='principal_capacity'>
      <div className='section_pp_cap'>
      <h3>
        Capacity
      </h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos atque, corrupti maiores perferendis magnam impedit dicta assumend.</p>
      </div>
<article className='capacity_services'>
<section className='section_capacity'>
      <img className='img_capacity' src={images.branding} alt="" />
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
</article>

    </div>
  )
}

export default Capacity