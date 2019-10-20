import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/Content'
import ControlPanel from './components/ControlPanel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        RB-NEWS
      </header>
      <nav><ControlPanel /></nav>
      <article style={{ maxWidth: '1160px' }}>
        <Content />
      </article>
      <footer></footer>
    </div>
  );
}

export default App;
