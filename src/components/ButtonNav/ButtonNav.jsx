import { Link } from 'react-router-dom';
import './ButtonNav.scss';
import arrow from '../../img/ico-shape.svg'

export const ButtonNav = ({ title, to }) => {
  return (
    <button 
      className="buttonNav"
      onClick={onclick}
    >
      <Link 
        className="buttonNav__link" 
        to={to}
      >
        {title}
        <img src={arrow} alt="arrow_right" className="buttonNav__arrow" />
      </Link>
      
    </button>
  );
};