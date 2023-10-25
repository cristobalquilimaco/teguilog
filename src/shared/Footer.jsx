import React from 'react'
import "./styles/footer.css"

const Footer = () => {
  return (
    <div className='principal_footer'>
      <section className='contact_footer'>
        <div className='text_info_footer'>
          <p className='contact_inf'>Contactos</p>
          <p>¡No pierdas las últimas actualizaciones y consejos exclusivos! ¡Suscríbete a nuestro boletín hoy y mantente al tanto de todo lo que tenemos para ofrecer!</p>
        </div>
        <div className='infor_btn_input'>
          <p>¿Quieres recibir noticias y nuevas promociones?</p>
          <p>Dejanos tu email para que recibas nuevas noticias promociones en informacion importante acerca del marketing digital</p>
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
      <p className='copyright'>Teguilog 2023 todos los derechos reservados</p>
    </div>
  )
}

export default Footer