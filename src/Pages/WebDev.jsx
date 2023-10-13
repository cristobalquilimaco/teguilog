import React from 'react'
import images from '../images/images'
import "./styles/webDev.css"

const WebDev = () => {
  return (
    <div className='webdev_container_principal'>
        <section className='web__dev_container'>
            <img className='banner_web' src={images.bannerweb} alt="" />
            <article className='section_dev'>
            <p className='title_web_dev'>Desarrollo de Páginas Web <span className='profesional'>Profesionales</span></p>
              <div className='services_section'>
                <div className='check_and_description'><i class='bx bx-check-circle' ></i><p className='desc_serv_dev'>Entendemos tu modelo de negocio y momento de la marca</p></div>
                <div className='check_and_description'><i class='bx bx-check-circle' ></i><p className='desc_serv_dev'>Diseñamos sitios web dinámicos e interactivos con UX/UI.</p></div>
                <div className='check_and_description'><i class='bx bx-check-circle' ></i><p className='desc_serv_dev'>
                 Creamos páginas web y tiendas online que sí venden.</p></div>
                <div className='check_and_description'><i class='bx bx-check-circle' ></i><p className='desc_serv_dev'>Nos enfocamos en los objetivos de tu organización. </p></div>
                <div className='check_and_description'><i class='bx bx-check-circle' ></i><p className='desc_serv_dev'>Optimizamos el contenido web con UX Writing.</p></div>
                <div className='check_and_description'> <i class='bx bx-check-circle' ></i><p className='desc_serv_dev'>Aplicamos Neuromarketing y Psicologia del color.</p></div>
                <div className='check_and_description'><i class='bx bx-check-circle' ></i><p className='desc_serv_dev'>Desarrollamos diseños web con SEO tecnico.</p></div>
                <div className='check_and_description'> <i class='bx bx-check-circle' ></i><p className='desc_serv_dev'>Entregamos páginas web personalizadas y administrables.</p></div>
                </div>
              <div className='img_and_logo'>
                <img className='img_circle' src={images.marketinggirl} alt="" />
                <section className='icons_web_services'>
                  <img className='lg_1 web_logo_description' src={images.html} alt="" />
                  <img className='lg_2 web_logo_description' src={images.css3} alt="" />
                  <img className='lg_3 web_logo_description' src={images.js} alt="" />
                  <img className='lg_4 web_logo_description' src={images.wplogo} alt="" />
                </section>
              </div>
            </article>
            <section className='imges_galery'>
          <img className='img_galery' src={images.web1} alt="" />
          <img className='img_galery' src={images.web2} alt="" />
          <img className='img_galery' src={images.web3} alt="" />
          <img className='img_galery' src={images.web4} alt="" />
          <img className='img_galery' src={images.web5} alt="" />
        </section>
        </section>

    </div>
  )
}

export default WebDev