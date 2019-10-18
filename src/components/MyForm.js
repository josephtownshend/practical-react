import React from 'react';

export default class MyForm extends React.Component {

  state = {
    name: '',
    favePet: '',
    rememberMe: false,
    title: 'Mr.'
  }

  handleChange = (event, fieldName) => {
    this.setState({ [fieldName]: event.target.value });
  };

  handleCheck = (event) => {
    this.setState({ rememberMe: event.target.checked });
  };

  handleSubmit = (event) => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <input
          value={this.state.name}
          onChange={(event) => this.handleChange(event, 'name')}
        />
        <textarea
          value={this.state.favePet}
          onChange={(event) => this.handleChange(event, 'favePet')}
        />
        <input
          type="checkbox"
          checked={this.state.rememberMe}
          onChange={this.handleCheck}
         />
         <div>
            <select value={this.setState.title} onChange={
              (event) => this.handleChange(event, 'title')}
            >
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
