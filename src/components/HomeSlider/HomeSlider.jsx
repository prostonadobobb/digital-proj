/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import './HomeSlider.scss';
import arrow from '../../img/ico-shape.svg';
import { ButtonNav } from '../ButtonNav/ButtonNav';

const images = require.context('../../../public/img/SliderImg', false, /\.(png|jpe?g|svg)$/);

export const HomeSlider = () => {
  const imagePaths = images.keys().map(imagePath => imagePath.substring(1));
  const BASE_URL = 'img/SliderImg';
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToPreviousSlide = () => {
    setCurrentIndex(prevIndex => (
      prevIndex === 0 ? 
        imagePaths.length - 1 : 
        prevIndex - 1
    ));
  };

  const goToNextSlide = () => {
    setCurrentIndex(prevIndex => (
      prevIndex === imagePaths.length - 1 ?
       0 : 
       prevIndex + 1
    ));
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 5000); 

    return () => {
      clearInterval(intervalId); 
    };
  }, [currentIndex]);

  return (
    <section className="slider">
      <div className="slider__shelf">
        <h1 className="slider__title">project<span><br />home</span></h1>

        <div className="slider__control">
          <button className = "slider__control--button" onClick={goToPreviousSlide}>
            <img src={arrow} alt="arrow_prev" className="slider__control--prev" />
          </button>
          <button className = "slider__control--button" onClick={goToNextSlide}>
            <img src={arrow} alt="arrow_next" className="slider__control--next" />
          </button>
        </div>

        <div className="slider__counter">
          <div className="slider__counter--number">
            {`0${currentIndex + 1}`} 
          </div>         
          <span>/</span> 
          <div className="slider__counter--number">
            {`0${imagePaths.length}`} 
          </div>
        </div>     
      </div>

      <div className="slider__photo">
      {imagePaths.map((imagePath, index) => (         
          <img 
            key={index}
            className={`slider__photo--img ${index === currentIndex ? 'visible' : 'hidden'}`}
            src={`${BASE_URL}${imagePath}`} 
            alt={`Image_${imagePath}`} 
          />
        ))}
        
        <ButtonNav title={'подивитись'} to={'projects'}/>
      </div>
    </section>
  );
};
