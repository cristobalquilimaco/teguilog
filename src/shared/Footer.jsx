import React from 'react'
import "./styles/footer.css"

const Footer = () => {
  return (
    <div className='principal_footer'>
      <section className='contact_footer'>
        <div className='text_info_footer'>
          <p>Contactos</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde et similique vel officia est 
            
            deserunt id eveniet ipsa fugiat! Illum facere minima culpa maiores recusandae fugit vel expedita saepe. Autem.</p>
        </div>
        <div>
          <p></p>
          <div className='input_and_btn'>
            <input type="email" />
            <button className='button_suscrib'>Enviar</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer