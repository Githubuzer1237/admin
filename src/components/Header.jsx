import React, { useState } from 'react';
import s from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.logo}>Logo</div>
        <nav className={`${s.nav} ${isMenuOpen ? s.active : ''}`}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
           <li><Link to={'/admin'}>Admin</Link></li>
          </ul>
        </nav>
        <button className={s.burger} onClick={toggleMenu}>
          <span className={s.burgerLine}></span>
          <span className={s.burgerLine}></span>
          <span className={s.burgerLine}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
