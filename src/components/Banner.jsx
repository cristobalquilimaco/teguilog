import React from 'react'
import "./styles/banner.css"
import images from '../images/images'

const Banner = () => {
  return (
    <div>      
        <section className='section_banner'>
            <article className='principal_description'>
            <h1 className='text_tittle'>Marketing Digital Estratégico para Tu Éxito en Línea</h1>
            <h2 className='description_page'>Esta es la descripcion de la pagina</h2>
            <button className='btn btn_more'>Cónoce más</button>
            </article>
            <img className='img__banner' src={images.banner} alt="" />
        </section>
    </div>
  )
}

export default Banner