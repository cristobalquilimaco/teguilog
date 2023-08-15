import { useState } from 'react'
import './App.css'
import Navbar from './shared/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'

function App() {


  return (
<div>
  <Navbar/>
  <Routes>
  <Route path="/" element={< Home />}/>
  </Routes>
</div>
  )
}

export default App
