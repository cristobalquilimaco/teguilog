import React from 'react'
import images from '../images/images'
import "./styles/webDev.css"

const WebDev = () => {
  return (
    <div>
        <section>
            <img className='img_circle' src={images.bannerweb} alt="" />
            <article>
              <div>
                <p>Diseño de Páginas Web Profesionales</p>
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
                <img src={images.marketinggirl} alt="" />
              </div>
            </article>
        </section>
    </div>
  )
}

export default WebDev