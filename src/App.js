import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/Content'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        RB-NEWS
      </header>
      <div style={{ maxWidth: '1160px' }}>

        <Content />
      </div>
    </div>
  );
}

export default App;
