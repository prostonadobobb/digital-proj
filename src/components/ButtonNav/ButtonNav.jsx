import { Link } from 'react-router-dom';
import './ButtonNav.scss';
import {ReactComponent as ArrowIcon} from '../../img/ico-shape.svg';

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
        <ArrowIcon className="buttonNav__arrow" />
      </Link>
      
    </button>
  );
};