import { lazy, useEffect, useState } from 'react';
import './assets/styles/app.css';
import './assets/styles/app.scss';
// const About = lazy(() => import('./pages/About'));
import './utils';
import { AppProvider } from './AppContext';
import About from '@pages/About';

const App = () => {
  return (
    <AppProvider>
      {/* <img src={reactlogo} alt='React Logo' width={100} height={100} />
      <h1>Dang Quang Huy</h1>
      <h2>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis molestiae architecto non ipsum molestias
        commodi. Ad eligendi ducimus voluptate veritatis ipsam tempore sed ipsum perspiciatis id officiis eveniet, quis
        fugiat.
      </h2>
      <About /> */}
      <About />
    </AppProvider>
  );
};

export default App;
