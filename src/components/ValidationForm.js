import React from 'react';

const initialState = {
  name: '',
  email: '',
  password: '',
  nameError: '',
  emailError: '',
  passwordError: ''
}

export default class ValidationForm extends React.Component {

  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    // let nameError = '';
    let emailError = '';
    // let passwordError = '';

    if (!this.state.email.includes('@')) {
      emailError = 'invalid email';
    }

    if (emailError) {
      this.setState({emailError});
      return false;
    }
    return true;
  };

  handlesubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      //clear form
      this.setState(initialState);
    }

  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
        <input
          name='name'
          placeholder='name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <div style={{ fontSize: 12, color: 'red' }}>
          {this.state.nameError}
        </div>
      </div>
      <div>
        <input
            name='email'
            placeholder='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: 'red' }}>
            {this.state.emailError}
        </div>
        </div>
        <div>
          <input
            type='password'
            name='password'
            placeholder='password'
            value={this.state.pasword}
            onChange={this.state.handleChange}
            />
            <div style={{ fontSize: 12, color: 'red' }}>
              {this.state.passwordError}
          </div>
        </div>
        <button type='submit'>submit</button>
      </form>
    )
  }


};
