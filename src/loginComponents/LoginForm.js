import React from 'react';
import ReactDOM from 'react-dom';
import InputFieldEl from './InputFieldEl';
import CheckBoxEl from './CheckBoxEl';
import LogInCTA from './LogInCTA';
import ForgotPassCTA from './ForgotPassCTA';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      passInputType: 'password',
      userData: {
        username: '',
        password: ''
      }   
    };

    this.showPassword = this.showPassword.bind(this);
    this.logIn = this.logIn.bind(this);
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

  logIn(){
    Actions.requestLoginData({'username': this.state.username, 'password': this.state.password});
  }

  render() {
    let userData = {"username": this.state.username, "password": this.state.password};

    return (
      <form>
        <fieldset>
          <legend>Log in with your email account</legend>
          <InputFieldEl inputId={'emailInput'} inputType={'email'} inputLabel={'E-mail'} inputPlaceholder={'somebody@example.com'} userData={userData}/>
          <InputFieldEl inputId={'passInput'} inputType={this.state.passInputType} inputLabel={'Password'} inputPlaceholder={'Enter password'} userData={userData}/>
          <CheckBoxEl inputId={'checkboxInput'} inputLabel={'Show password'} handleClick={this.showPassword}/>
          <LogInCTA handleSubmit={this.logIn}/>
          <ForgotPassCTA />
        </fieldset>
      </form>
    );
  }
};