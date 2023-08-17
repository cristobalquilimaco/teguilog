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
        <p className='corp_text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, unde? Neque voluptas quis deleniti modi, sequi a quos, Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae maxime ipsam vitae accusamus repellendus laborum! Similique quae autem corrupti aspernatur delectus quod sequi optio veniam tenetur ad, consequuntur magnam incidunt?</p>
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