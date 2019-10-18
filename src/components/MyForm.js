import React from 'react';

export default class MyForm extends React.Component {

  state = {
    name: '',
    favePet: ''
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleChangeFavePet = (event) => {
    this.setState({ favePet: event.target.value });
  };

  render() {
    return (
      <div>
        <input value={this.state.name} onChange={this.handleChange} />
        <textarea value={this.state.favePet} onChange={this.handleChangeFavePet} />
      </div>
    );
  }
}
