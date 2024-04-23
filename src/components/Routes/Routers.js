import React from 'react';
import { Link } from 'react-router-dom'
import '../Nav.css'


const Routers = () => {
  return (
    <>
    <ul className="nav__list">
      <li className="nav__list-item"><Link className="nav__items" to="/">Inicio</Link></li>
      <li className="nav__list-item"><Link className="nav__items" to="/datos-internet">Datos e Internet</Link></li>
      <li className="nav__list-item"><Link className="nav__items" to="/television">Televisión
      <ul>
      <li className="nav__list-item"><Link className="nav__items" to="/television/buscador">Buscador</Link></li>
      <li className="nav__list-item"><Link className="nav__items" to="/television/datos-internet">Checklist</Link></li>
      </ul>
      </Link></li>
      <li className="nav__list-item"><Link className="nav__items" to="/transporte">Transporte</Link></li>
    </ul>
      
      
      
      
      

    </>
  )
}

export default Routers