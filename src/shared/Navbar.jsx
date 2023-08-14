import React, { useState } from 'react'
import "./styles/navbar.css"

const Navbar = () => {

const [isMenuClick, setIsMenuClick] = useState(false)


const updateMenu = () => {
        setIsMenuClick(!isMenuClick)
}



  return (
    <header className="header_menu_principal">
            <div className="menu_icon">
            <h1 className="logo">LOGO</h1>
            <i className={`bx ${isMenuClick ? 'bx-x' : 'bx-menu'}`} onClick={updateMenu}></i>
      </div>
      <nav className={`dropdown_menu ${isMenuClick ? 'show-menu' : ''}`}>
        <ul className='list_menu_principal'>
                <li className="list_menu">Seccion 1</li>
                <li className="list_menu">Seccion 2</li>
                <li className="list_menu">Seccion 3</li>
                <li className="list_menu">Seccion 4</li>
                <li className="list_menu">Seccion 5</li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar