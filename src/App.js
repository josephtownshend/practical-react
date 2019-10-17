import React, { Component } from 'react';
import './App.css';
import ImageSlider from './components/ImageSlider';
import Counter from './components/Counter';
import Header from './components/Header';


class App extends Component {

  state = {
    visible: true,
    whichComponentToShow: "ImageSlider"
  };

  render() {
      return (
          <div className="App">
          {this.state.visible ? <Counter /> : null}
          <button
            onClick={() => {
              this.setState({ visible: !this.state.visible });
            }}
          >
            toggle counter
          </button>
        </div>
      );
  }
}

export default App;
