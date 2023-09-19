import React from 'react'
import "./styles/company.css"
import images from '../images/images'

const Company = () => {
  return (
    <div className='principal_company'>
      <img className='img_company' src={images.marketinggirl} alt="" />
      <article className='article_info'>
        <p className='inf_company'>Acerca de la compañía</p>
        <p className='corp_idt'>Identidad Corporativa</p>
        <p className='corp_text'>Nuestra identidad corporativa se basa en la pasión por la innovación y la excelencia. Creamos soluciones digitales impactantes que reflejan nuestra dedicación a la satisfacción del cliente y la excelencia en el marketing digital. Somos un equipo diverso de expertos que trabaja en colaboración para impulsar el éxito de nuestros clientes en línea.</p>
   <div className='line'></div>
        <section className='section_text1'>
        <i className='bx bxs-quote-alt-left'></i>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, <span className='name_user_coment'>-Nombre Apelido</span></p>
        </section>
      </article>
    </div>
  )
}

export default Company