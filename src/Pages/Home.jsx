import React from 'react'
import "./home.css"
import Banner from '../components/Banner'
import About from '../components/About'
import Services from '../components/Services'
import Company from '../components/Company'
import SuportAndServices from '../components/SuportAndServices'
import WebPlataforms from '../components/WebPlataforms'
import Capacity from '../components/Capacity'
import Portfolio from '../components/Portfolio'


const Home = () => {
  return (
    <div className='home_principal'>
      <Banner/>
      <About/>
      <Services/>
      <Company/>
      <SuportAndServices/>
      <WebPlataforms/>
      <Capacity/>
      <Portfolio/>
    </div>
  )
}

export default Home