import React from 'react';
import { Link } from 'react-router-dom';

export const NavComponent = () => {
  return (
    <nav className="body__nav animate__animated animate__fadeInDown">
      <ul>
        <li><Link to="/">HOME - <i className="fa-solid fa-house"></i></Link></li>
        <li><Link to="/cv">CV - <i className="fa-solid fa-newspaper"></i></Link></li>
      </ul>
    </nav>
  )
}
