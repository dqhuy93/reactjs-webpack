import _ from 'lodash';
import { useEffect, useState } from 'react';
import './contact.scss';
import dayjs from 'dayjs';

const Contact = () => {
  const [state, setState] = useState('');
  useEffect(() => {
    const a = _.join(['Contact', 'Huy', 'Dang'], '-');

    setState(a);
  }, []);
  return (
    <div className='about'>
      <div>
        <h2>Contact Page</h2>
        <h3>{dayjs().format()}</h3>
        <pre>{state}</pre>
      </div>
    </div>
  );
};

export default Contact;
