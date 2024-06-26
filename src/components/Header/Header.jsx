import { NavLink } from 'react-router-dom';
import './Header.scss';
import logo from '../../img/Logo.svg'
import { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

export const Header = () => {
  const [openBurger, setOpenBurger] = useState(false);

  const navRef = useRef(null);

  const handleClickOutside = useCallback((e) => {
    if (!navRef.current.contains(e.target)) {
      setOpenBurger(false);
    }
  }, [navRef, setOpenBurger]);
  
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <section className="header">
      <div className="container">
        <div className="header__container">
          <NavLink to='/' className="header__logo">
            <img src={logo} alt="header-logo" className="header__logo-img" />
          </NavLink>
          
          <div 
            className={classNames('header__burger', {'active' : openBurger})}
            onClick={() => setOpenBurger(!openBurger)}
            ref={navRef}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav  className={classNames('navbar', {'active' : openBurger})}>
            <div className="navbar__list">
              <NavLink to="/" className="navbar__link">головна</NavLink>
              <NavLink to="gallery" className="navbar__link">галерея</NavLink>
              <NavLink to="projects" className="navbar__link">проекти</NavLink>
              <NavLink to="certificates" className="navbar__link">сертифікати</NavLink>
              <NavLink to="contacts" className="navbar__link">контакти</NavLink>
            </div>
          </nav>  
        </div>
      </div>
    </section>
  );
};

export default Header;