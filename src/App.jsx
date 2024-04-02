import 'normalize.css';
import './App.scss';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

export const App = () => {

  return (
    <div className="App">
      <Header />

        <main className="main">
          <Outlet />
        </main>

      <Footer />
    </div>
  );
};

export default App;
