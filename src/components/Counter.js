import React from 'react';

export default class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  handleButtonClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleButtonClick2 = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={this.handleButtonClick}>increment count</button>
        <button onClick={this.handleButtonClick2}>decrement count</button>

      </div>
    );
  }
}
