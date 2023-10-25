import React from 'react'
import data from '../utils/data'
import "./styles/services.css"

const Services = () => {
  return (
   <div className='principal_services'>
    {
    Object.keys(data).map((sectionTitle, index) =>(
      <article className='list_services' key={index}>
      <p className='tt_section' >{sectionTitle} <span className='point_tt'>.</span></p>
      <ul className='list_objects'>{data[sectionTitle].map((info, infoIndex) => (
        <li className='info_text' key={infoIndex}>{info}</li>
      ))}
      </ul>
      </article>
    ))}
   </div>
  );
}

export default Services