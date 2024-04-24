import React from 'react';
import './Header.css';
import logo from'../images/Telsur_logo_2019.png'

const Header = () => {
  return (
    <div className="header">
        <img className="header__logo" src={logo} />
        <h1>Monitoreo y Control</h1>
    </div>
  )
}

export default Header