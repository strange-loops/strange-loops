import React from 'react';
import penrose from './penrose.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={penrose} className="App-logo" alt="penrose triangle" />
        <p>
          This is the starting place for the Strange Loops project!
        </p>
        <a
          className="App-link"
          href="https://github.com/strange-loops/strange-loops"
          target="_blank"
          rel="noopener noreferrer"
        >
          See the README
        </a>
      </header>
    </div>
  );
}

export default App;
