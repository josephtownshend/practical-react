import React from 'react';

export default class MyForm extends React.Component {

  state = {
    name: '',
    favePet: '',
    rememberMe: false
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleChangeFavePet = (event) => {
    this.setState({ favePet: event.target.value });
  };

  handleCheck = (event) => {
    this.setState({ rememberMe: event.target.checked });
  };

  render() {
    return (
      <div>
        <input value={this.state.name} onChange={this.handleChange} />
        <textarea value={this.state.favePet} onChange={this.handleChangeFavePet}
      />
        <input
          type="checkbox"
          checked={this.state.rememberMe}
          onChange={this.handleCheck}
         />

      </div>
    );
  }
}
