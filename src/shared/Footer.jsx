import React from 'react'
import "./styles/footer.css"

const Footer = () => {
  return (
    <div className='principal_footer'>
      <section className='contact_footer'>
        <div className='text_info_footer'>
          <p className='contact_inf'>Contactos</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde et similique vel officia est 
            
            deserunt id eveniet ipsa fugiat! Illum facere minima culpa maiores recusandae fugit vel expedita saepe. Autem.</p>
        </div>
        <div className='infor_btn_input'>
          <p>¿Quieres recibir noticias y nuevas promociones?</p>
          <div className='input_and_btn'>
            <input id='email_input' type="email" placeholder='Tu email' />
            <button className='button_suscrib'>Enviar</button>
          </div>
        </div>
      </section>
      <div className='social_ico'>
      <i className='bx bxl-facebook-square'></i><span className='social_tt'>Facebook</span>
      <i className='bx bxl-instagram-alt' ></i><span className='social_tt'>Instagram</span>
      <i className='bx bxl-twitter'></i><span className='social_tt'>Twitter</span>
      </div>
    </div>
  )
}

export default Footer