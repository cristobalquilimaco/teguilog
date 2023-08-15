import React, { useEffect, useState } from 'react';
import "./styles/navbar.css"

const Navbar = () => {
  const [isMenuClick, setIsMenuClick] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const updateMenu = () => {
    setIsMenuClick(!isMenuClick);
  };

  return (
    <header className={`header_menu_principal ${hasScrolled ? 'scrolled' : ''}`}>
      <div className="menu_icon">
        <h1 className="logo">LOGO</h1>
        
        <i className={`bx ${isMenuClick ? 'bx-x' : 'bx-menu'} ${window.innerWidth < 768 ? 'show-bx' : ''}`} onClick={updateMenu}></i>
      </div>
     
      <nav className={`dropdown_menu ${window.innerWidth >= 768 || isMenuClick ? 'show-menu' : ''}`}>
        <ul className={`list_menu_principal ${isMenuClick ? 'hide-menu' : 'show-menu'}`}>
          <li className="list_menu">Seccion 1</li>
          <li className="list_menu">Seccion 2</li>
          <li className="list_menu">Seccion 3</li>
          <li className="list_menu">Seccion 4</li>
          <li className="list_menu">Seccion 5</li>
        </ul>
      </nav>
    </header>

  );
}

export default Navbar;