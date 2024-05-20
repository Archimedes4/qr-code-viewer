import logo from './image-qr-code.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div style={{padding: "16px"}}>
          <img src={logo} className="Image" alt="logo" />
          <div className='Text-Container'>
            <p className='Main-P'>
              Improve your front-end skills by building projects
            </p>
            <p className='Second-P'>
              Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
