import React from 'react';

export default class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  handleButtonClick = () => {
    console.log(this);
  };

  render() {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={this.handleButtonClick}>increment count</button>
      </div>
    );
  }
}
