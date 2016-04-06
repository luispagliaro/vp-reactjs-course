class InputFieldEl extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.inputId}>{this.props.inputLabel}</label>
        <input id={this.props.inputId} type={this.props.inputType} placeholder={this.props.inputPlaceholder} />
      </div>
    );
  }
}

class CheckBoxEl extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <input id={this.props.inputId} type={this.props.inputType} />
        <label htmlFor={this.props.inputId}>{this.props.inputLabel}</label>
      </div>
    );
  }
}

class LogInCTA extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <input type="submit" value="Log in" />
    );
  }
}

class ForgotPassCTA extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <a href="#">Forgot your password?</a>
    );
  }
}

class LoginForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form>
        <fieldset>
          <legend>Log in with your email account</legend>
          <InputFieldEl inputId={'emailInput'} inputType={'email'} inputLabel={'E-mail'} inputPlaceholder={'somebody@example.com'} />
          <InputFieldEl inputId={'passInput'} inputType={'password'} inputLabel={'Password'} inputPlaceholder={'Enter password'} />
          <CheckBoxEl inputId={'checkboxInput'} inputType={'checkbox'} inputLabel={'Show password'} />
          <LogInCTA />
          <ForgotPassCTA />
        </fieldset>
      </form>
    );
  }
};

ReactDOM.render(<LoginForm />, document.getElementById('login'));