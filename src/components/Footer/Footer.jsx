import './Footer.scss';
import logo from '../../img/Logo_footer.svg';

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
            <li className="footer__list--item">Головна</li>
            <li className="footer__list--item">Галерея</li>
            <li className="footer__list--item">Проекти</li>
            <li className="footer__list--item">Сертифікати</li>
            <li className="footer__list--item">Контакти</li>
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
            <li className="footer__list--item">+38 (000) 000 00 00</li>
            <li className="footer__list--item">mail@gmail.com</li>
          </ul>
        </div>

        <div className="footer__social">
          <div className="footer__title">
            Соціальні мережі
          </div>
          <ul className="footer__social--icons">
            <li className="footer__social--face" />
            <li className="footer__social--twit" />
            <li className="footer__social--linked" />
            <li className="footer__social--pint" />
          </ul>
        </div>
        </div>
      </div>
      <div className="footer__privacy">© 2019 Digital Project. Всі права захищені.</div>
    </section>
  );
};

export default Footer;