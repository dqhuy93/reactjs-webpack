import { useReducer } from 'react';
import './about.scss';

function reducer(state: { count: number }, action: { type: any }) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };

    case 'decrement':
      return { count: state.count - 1 };

    default:
      return state;
  }
}

const About = () => {
  const test = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value;
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });
  console.log(state);

  return (
    <>
      <div>
        <button onClick={() => dispatch({ type: 'increment' })}>Increase</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrease</button>
      </div>
      <div className="grid">
        <div className="grid-item item-1">Header</div>
        <div className="grid-item item-2">Sidebar</div>
        <div className="grid-item item-3">
          <div>
            <br />
            <br />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, eaque.</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, eaque.</p>
            <br />
            <br />
            <br />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, eaque.</p>
            <br />
            <br />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, eaque.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, eaque.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, eaque.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, eaque.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, eaque.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, eaque.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, eaque.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, eaque.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, eaque.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, eaque.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, eaque.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, eaque.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, eaque.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, eaque.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, eaque.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, eaque.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, eaque.</p>
          </div>
        </div>
        <div className="grid-item item-4">Comment</div>
        <div className="grid-item item-5">Footer</div>
      </div>
    </>
  );
};

export default About;
