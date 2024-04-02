import { ButtonNav } from '../ButtonNav/ButtonNav';
import './About.scss';
import rectangle_1 from './AboutImg/Rectangle_1.png';
import rectangle_2 from './AboutImg/Rectangle_2.png';
import rectangle_3 from './AboutImg/Rectangle_3.png';

export const About = () => {

  return (
    <section className="about">
      <div className="container">
        <div className="about__container">

          <div className="about__rectangle">
            <div className="about__rectangle--left">
              <img src={rectangle_1} alt="Image_1" />
              <img src={rectangle_3} alt="Image_2" />
            </div>
            <div className="about__rectangle--right">
              <img src={rectangle_2} alt="Image_3" />
            </div>
          </div>

          <div className="about__description">
            <h2 className="about__description--title">
              Про Нас
            </h2>
            <p className="about__description--text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <ButtonNav title={'читати'} to={'contacts'} />
          </div>

        </div>
      </div>
    </section>
  );
}