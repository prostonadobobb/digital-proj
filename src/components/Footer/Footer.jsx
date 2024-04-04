import './Footer.scss';
import logo from '../../img/Logo_footer.svg';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer__container">

        <div className="footer__logo">
          <img src={logo} alt="logo" className="footer__logo--img"/>
        </div> 

        <div className="footer__info">
          <div className="footer__title">
            Інформація
          </div>
          <ul className="footer__list">
            <Link to="/" className="footer__list--item">Головна</Link>
            <Link to="gallery" className="footer__list--item">Галерея</Link>
            <Link to="projects" className="footer__list--item">Проекти</Link>
            <Link to="certificates" className="footer__list--item">Сертифікати</Link>
            <Link to="contacts" className="footer__list--item">Контакти</Link>
          </ul>
        </div>

        <div className="footer__contacts">
          <div className="footer__title">
            Контакти
          </div>
          <ul className="footer__list">
            <li className="footer__list--item">
              100000, Республіка  Смертьворогам, <br /> м. Бандери, вул. Байрактарна 24
            </li>
            <Link to="tel:+380000000000" className="footer__list--item">+38 (000) 000 00 00</Link>
            <Link to="mailto: mail@gmail.com" className="footer__list--item">mail@gmail.com</Link>
          </ul>
        </div>

        <div className="footer__social">
          <div className="footer__title">
            Соціальні мережі
          </div>
          <ul className="footer__social--icons">
            <Link to="/" className="footer__social--twit" />
            <Link to="/" className="footer__social--linked" />
            <Link to="/" className="footer__social--pint" />
            <Link to="/" className="footer__social--face" />
          </ul>
        </div>
        </div>
      </div>
      <div className="footer__privacy">© 2019 Digital Project. Всі права захищені.</div>
    </section>
  );
};

export default Footer;