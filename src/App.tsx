import './assets/styles/app.css';
import './assets/styles/app.scss';
// import About from '@pages/About';
// import LikeButton from './components/Test';
// const About = lazy(() => import('./pages/About'));
import About from '@pages/About';
import './utils';
import GridCss from '@pages/GridCss';

const App = () => {
  return (
    <div>
      <GridCss />
      <About />
    </div>
  );
};

export default App;
