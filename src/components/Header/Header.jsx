import { NavLink } from 'react-router-dom';
import './Header.scss';
import logo from '../../img/Logo.svg'

export const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <div className="header__container">
          <NavLink to='/' className="header__logo">
            <img src={logo} alt="header-logo" className="header__logo-img" />
          </NavLink>

          <nav  className="navbar">
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