import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faMinus,
  faTimes,
  faDivide,
  faEquals,
} from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className='App'>
      <div className='number-spot'>
        <p>This text is centered.</p>
      </div>
      <div className='btn-panel'>
        <div className='btn-row'>
          <div className='btn-row-container'>
            <button className='btn'>AC</button>
            <button className='btn'>+/-</button>
            <button className='btn'>%</button>
            <button className='btn'>
              <FontAwesomeIcon icon={faDivide} />
            </button>
          </div>
          <div className='btn-row-container'>
            <button className='btn'>7</button>
            <button className='btn'>8</button>
            <button className='btn'>9</button>
            <button className='btn'>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className='btn-row-container'>
            <button className='btn'>4</button>
            <button className='btn'>5</button>
            <button className='btn'>6</button>
            <button className='btn'>
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </div>
          <div className='btn-row-container'>
            <button className='btn'>1</button>
            <button className='btn'>2</button>
            <button className='btn'>3</button>
            <button className='btn'>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <div className='btn-row-container'>
            <button className='btn'>5</button>
            <button className='btn'>6</button>
            <button className='btn'>7</button>
            <button className='btn yellow-bkg'>
              <FontAwesomeIcon icon={faEquals} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
