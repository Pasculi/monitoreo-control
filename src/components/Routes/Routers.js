import React from 'react';
import { Link } from 'react-router-dom'
import '../Nav.css'
import './Routers.css'


const Routers = () => {
  
  return (
    <>
      <ul className="nav__list">
        <li className="nav__list-item"><Link className="nav__items" to="/">Inicio</Link></li>
        <li className="nav__list-item"><Link className="nav__items" to="/datos-internet">Datos e Internet</Link></li>
        <li className="nav__list-item"><Link className="nav__items" to="/television">Televisión
          
        </Link></li>
        <li className="nav__list-item"><Link className="nav__items" to="/transporte">Transporte</Link></li>
        <li className="nav__list-item"><Link className="nav__items" to={`/users`}>Usuarios</Link></li>
        

      </ul>
    </>
  )
}

export default Routers