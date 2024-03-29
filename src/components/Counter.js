import React from 'react';

export default class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  componentWillUnmount() {
    console.log("Unmounting...");
  }

  componentDidMount() {
    console.log("Mounting...");
  }


  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={this.increment}>increment count</button>
        <button onClick={this.decrement}>decrement count</button>

      </div>
    );
  }
}
