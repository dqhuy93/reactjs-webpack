import _ from 'lodash';
import { useEffect, useState } from 'react';
import './about.scss';

const About = () => {
  const [state, setState] = useState('');
  useEffect(() => {
    const a = _.join(['Nguyen', 'Hung', 'Dung'], ' ');

    setState(a);
  }, []);
  return (
    <div className='about'>
      <div>
        <h2>About Page</h2>
        <pre>{state}</pre>
      </div>
    </div>
  );
};

export default About;
