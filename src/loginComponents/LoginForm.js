import React from 'react';
import ReactDOM from 'react-dom';
import InputFieldEl from './InputFieldEl';
import CheckBoxEl from './CheckBoxEl';
import LogInCTA from './LogInCTA';
import ForgotPassCTA from './ForgotPassCTA';
import Actions from '../actions';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      passInputType: 'password',
    };

    this.showPassword = this.showPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showPassword(e) {
    let value = e.target.checked;

    if (value) {
      this.setState({
        passInputType: 'text'
      });
    } else {
      this.setState({
        passInputType: 'password'
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    let formElements = this.refs.form.elements,
      email = formElements.emailInput.value,
      password = formElements.passInput.value;

    Actions.requestLoginData({email, password});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} ref="form">
        <fieldset>
          <legend>Log in with your email account</legend>
          <InputFieldEl inputId={'emailInput'} inputType={'email'} inputLabel={'E-mail'} inputPlaceholder={'somebody@example.com'}/>
          <InputFieldEl inputId={'passInput'} inputType={this.state.passInputType} inputLabel={'Password'} inputPlaceholder={'Enter password'}/>
          <CheckBoxEl inputId={'checkboxInput'} inputLabel={'Show password'} handleClick={this.showPassword}/>
          <LogInCTA/>
          <ForgotPassCTA/>
        </fieldset>
      </form>
    );
  }
};