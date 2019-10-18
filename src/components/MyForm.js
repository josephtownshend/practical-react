import React from 'react';

export default class MyForm extends React.Component {

  state = {
    name: ''
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        <input value={this.state.name} onChange={this.handleChange} />
      </div>
    );
  }
}
