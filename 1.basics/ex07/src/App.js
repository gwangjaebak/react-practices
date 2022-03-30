<<<<<<< HEAD
import React from  'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
=======
import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';   // 위치 재설정
>>>>>>> 98bd9277daac2ae0f6927483418e553c6d7f3ceb

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
