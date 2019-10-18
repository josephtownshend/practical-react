import React from 'react';

export default class MyForm extends React.Component {

  state = {
    name: '',
    favePet: '',
    rememberMe: false,
    title: 'Mr.'
  }

  handleChange = (event) => {
    const isCheckbox = event.target.type === 'checkbox';
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  handleSubmit = (event) => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <input
          name="name"
          value={this.state.name}
          onChange={(event) => this.handleChange(event, 'name')}
        />
        <textarea
          name="favePet"
          value={this.state.favePet}
          onChange={(event) => this.handleChange(event, 'favePet')}
        />
        <input
          name="rememberMe"
          type="checkbox"
          checked={this.state.rememberMe}
          onChange={this.handleChange}
         />
         <div>
            <select
            name="title"
            value={this.setState.title}
            onChange={this.handleChange}
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
