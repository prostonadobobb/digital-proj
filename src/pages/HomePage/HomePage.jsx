import { About } from '../../components/About/About';
import { HomeSlider } from '../../components/HomeSlider/HomeSlider';
import { Projects } from '../../components/Projects/Projects';
import { Tasks } from '../../components/Tasks/Tasks';
import './HomePage.scss';

export const HomePage = () => {
  return (
    <section className="home">
      <div className="container">
        <HomeSlider />
        <About />
        <Tasks />
        <Projects />
      </div>
    </section>
  );
}

export default HomePage;