import React from 'react'
import "./styles/capacity.css"
import servicesData from '../utils/servicedata'

const Capacity = () => {

console.log(servicesData[0].imagen)

  return (
    <div className='principal_capacity'>
      <div className='section_pp_cap'>
      <h3>
        Marketing
      </h3>
      <p>Contratar cualquiera de estos servicios de marketing puede ayudarte a aumentar la visibilidad de tu marca, atraer a una audiencia comprometida, mejorar la eficacia de tus campañas y, en última instancia, impulsar el crecimiento de tu negocio.</p>
      </div>
<article className='capacity_services'>
<section className='section_capacity'>
{servicesData.map((service) => (
        <div key={service.id} className='section__serv_img'>
          <img
            className="img_capacity"
            src={service.imagen}
            alt=""
          />
          <p className='descr_title'>{service.title}</p>
          <ul>
            {service.descriptions.map((description, index) => (
              <li key={index}>{description}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
</article>

    </div>
  )
}

export default Capacity