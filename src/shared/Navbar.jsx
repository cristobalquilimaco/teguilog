import React, { useEffect, useState } from 'react';
import "./styles/navbar.css"
import { Link } from 'react-router-dom';


const Navbar = () => {
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

  return (
    <header className={`header_menu_principal ${hasScrolled ? 'scrolled' : ''}`}>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <Link to="/">TEGUILOG</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <Link to="/aboutto" className="nav-link">Nosotros</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contactos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Servicios
          </a>
          <ul className="dropdown-menu">
            <Link to="/desarrolloweb"><li className="dropdown-item">Desarrollo web</li></Link>
            <li><a className="dropdown-item" href="#">Marketing digital</a></li>
            <li><a className="dropdown-item" href="#">SEO Y SEM</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </header>
  );
}

export default Navbar;
