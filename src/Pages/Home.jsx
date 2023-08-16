import React from 'react'
import "./home.css"
import Banner from '../components/Banner'
import About from '../components/About'
import Services from '../components/Services'
import Company from '../components/Company'


const Home = () => {
  return (
    <div className='home_principal'>
      <Banner/>
      <About/>
      <Services/>
      <Company/>
    </div>
  )
}

export default Home