import React from 'react'
import "./styles/suportAndServices.css"
import images from '../images/images'

const SuportAndServices = () => {
  return (
    <div className='principal_support'>
      <section className='section_support'>
        <ul className='list_suport'>
          <li className='title_suport'>Google Ads</li>
          <li className='title_text'><img className='img_google' src={images.ads} alt="" /></li>
        </ul>
      </section>
      <section className='section_support'>
        <ul className='list_suport'>
          <li className='title_suport'>Keywords Planner</li>
          <li className='title_text'><img className='img_google' src={images.keywordplanner} alt="" /></li>
        </ul>
      </section>
      <section className='section_support'>
        <ul className='list_suport'>
          <li className='title_suport'>Google Analiticts</li>
          <li className='title_text'><img className='img_google' src={images.analytics} alt="" /></li>
        </ul>
      </section>
      <section className='section_support'>
        <ul className='list_suport'>
          <li className='title_suport'>Search console</li>
          <li className='title_text'><img className='img_google' src={images.searchconsole} alt="" /></li>
        </ul>
      </section>
    </div>
  )
}

export default SuportAndServices