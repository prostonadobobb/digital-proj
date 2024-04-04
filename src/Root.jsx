import { Routes, Route, useLocation } from 'react-router-dom';

import { HomePage } from './pages/HomePage/HomePage';
import App from './App';
import { GalleryPage } from './pages/GalleryPage/GalleryPage';
import { ProjectPage } from './pages/ProjectPage/ProjectPage';
import { CertificatePage } from './pages/CertificatePage/CertificatePage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { useEffect } from 'react';

export const Root = () => {

  const ScrollToTopOnRouteChange = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };

  return ( 
    <>
      <ScrollToTopOnRouteChange />
      <Routes> 
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          
          <Route path='gallery'>
            <Route index element={<GalleryPage />} />
          </Route>
          <Route path='projects'>
            <Route index element={<ProjectPage />} />
          </Route>
          <Route path='certificates'>
            <Route index element={<CertificatePage/>} />
          </Route>
          <Route path='contacts'>
            <Route index element={<ContactsPage />} />
          </Route>

        </Route>
      </Routes>
    </>   
    
    
  );
};

export default Root;