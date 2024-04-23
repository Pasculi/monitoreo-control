import './Nav.css'
import React from 'react';
import Routers from './Routes/Routers'


const Nav = () => {
  return (
    <>
    <div className="nav">
        <Routers />
    </div>
        <div className="nav__undeline"></div>
    
    </>
  )
}

export default Nav