import React, { Component } from 'react';
import './App.css';
import ImageSlider from './components/imageSlider';


class App extends Component {

  state = {
    visible: true
  }

  add(a, b) {
    return a + b;
  }

  render() {

    const buttonText = this.state.visible ? 'hide' : 'show';
    const slider = this.state.visible ? (
      <ImageSlider />
    ) : (
      <div>I am hidden!</div>
    );

    return (
      <div className="App">
      {slider}
        <button
          onClick={() => {
            this.setState({visible: !this.state.visible})
          }}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}

export default App;
