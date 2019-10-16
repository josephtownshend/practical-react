import React from 'react';

export default class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <div>count: this.state.text</div>
        <button>increment count</button>
      </div>
    );
  }
}
