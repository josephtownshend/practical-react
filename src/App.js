import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Body = () => {
  return (
    <p className="App-intro">
      Edit <code>src/App.js</code> and save to reload.
    </p>
  );
};

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    )
  }
}


function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
