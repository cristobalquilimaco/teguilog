import React from 'react'
import "./home.css"
import images from "../images/images"

const Home = () => {
  return (
    <div className='home_principal'>
      <section className='section_banner'>
      <h1>HOME</h1>
      <img className='img__banner' src={images.banner} alt="" />
      </section>

    </div>
  )
}

export default Home