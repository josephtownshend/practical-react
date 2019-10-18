import React from 'react';

export default class MyForm extends React.Component {

  state = {
    name: '',
    favePet: '',
    rememberMe: false,
    title: 'Mr.'
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

  handleSelect = (event) => {
    this.setState({ title: event.target.value });
  };

  handleSubmit = (event) => {
    console.log(this.state);
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
         <div>
            <select value={this.setState.title} onChange={this.handleSelect}>
              <option>Mr.</option>
              <option>Ms.</option>
              <option>Mrs.</option>
              <option>Miss.</option>
            </select>
         </div>
         <button onClick={this.handleSubmit}>submit</button>
      </div>
    );
  }
}
