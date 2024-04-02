import './Projects.scss';
import image_1 from '../../img/image_1.png'
import image_2 from '../../img/image_2.png'
import image_3 from '../../img/image_3.png'
import image_4 from '../../img/image_4.png'
import image_5 from '../../img/image_5.png'
import { ButtonNav } from '../ButtonNav/ButtonNav';

export const Projects = () => {

  return (
    <section className="projects">

      <h3 className="projects__title">Наші проекти</h3>

      <div className="projects__container">
        <div className="projects__row">
          <img className="projects__row--img" src={image_1} alt="img_1" />
          <img className="projects__row--img" src={image_2} alt="img_2" />
        </div>
        <div className="projects__row">
          <img className="projects__row--img" src={image_3} alt="img_3" />
          <img className="projects__row--img" src={image_4} alt="img_4" />
          <img className="projects__row--img" src={image_5} alt="img_5" />
        </div>
      </div>
      <ButtonNav title={'всі проекти'} to={'projects'} />
      
    </section>
  );
};

