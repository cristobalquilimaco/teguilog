import React from 'react'
import "./home.css"
import Banner from '../components/Banner'
import About from '../components/About'
import Services from '../components/Services'
import Company from '../components/Company'
import SuportAndServices from '../components/SuportAndServices'


const Home = () => {
  return (
    <div className='home_principal'>
      <Banner/>
      <About/>
      <Services/>
      <Company/>
      <SuportAndServices/>
    </div>
  )
}

export default Home