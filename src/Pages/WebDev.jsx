import React from 'react'
import images from '../images/images'
import "./styles/webDev.css"

const WebDev = () => {
  return (
    <div>
        <section>
            <img className='banner_web' src={images.bannerweb} alt="" />
            <article className='section_dev'>
              <div>
                <p className='title_web_dev'>Desarrollo de Páginas Web <span>Profesionales</span></p>
                <p className='desc_serv_dev'>Lorem ipsum dolor sit, </p>
                <p className='desc_serv_dev'>Lorem ipsum dolor sit, </p>
                <p className='desc_serv_dev'>Lorem ipsum dolor sit, </p>
                <p className='desc_serv_dev'>Lorem ipsum dolor sit, </p>
                <p className='desc_serv_dev'>Lorem ipsum dolor sit, </p>
                <p className='desc_serv_dev'>Lorem ipsum dolor sit, </p>
                <p className='desc_serv_dev'>Lorem ipsum dolor sit, </p>
                <p className='desc_serv_dev'>Lorem ipsum dolor sit, </p>
                </div>
              <div>
                <img className='img_circle' src={images.marketinggirl} alt="" />
                <section className='icons_web_services'>
                  <img className='web_logo_description' src={images.html} alt="" />
                  <img className='web_logo_description' src={images.css3} alt="" />
                  <img className='web_logo_description' src={images.js} alt="" />
                  <img className='web_logo_description' src={images.wplogo} alt="" />
                </section>
              </div>
            </article>
        </section>
    </div>
  )
}

export default WebDev