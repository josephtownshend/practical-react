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
        <h1 className="App-title">{this.props.title}</h1>
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Hello from App" />
        <Header title="Hello from App again" />

        <Body />
      </div>
    );
  }
}


export default App;
