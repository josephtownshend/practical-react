import React, { Component } from 'react';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';

class App extends Component {

  add(a, b) {
    return a + b;
  }

  render() {
    return (
      <div className="App">
        <Header
        title={"Hello"}
        num={7}
        myArr={[10, 2, 3]}
        myFunc={this.add}
        myObj={{
          a: 5,
          b: 6
        }}
      />
      <Body myFunc={this.add} text="i am cool" text2="i am cool2" />
      <Body myFunc={this.add} text="socool" text2="so cool2" />
      </div>
    );
  }
}

export default App;
