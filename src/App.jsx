import './App.css'
import Navbar from './shared/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './shared/Footer'
import WebDev from './Pages/WebDev'
import Aboutto from './Pages/Aboutto'

function App() {


  return (
<div>
  <Navbar/>
  <Routes>
  <Route path="/" element={< Home />}/>
  <Route path='/desarrolloweb' element={<WebDev />} />
  <Route path='/aboutto' element={<Aboutto />} />

  </Routes>
  <Footer/>
</div>
  )
}
export default App
