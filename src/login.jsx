class InputFieldEl extends React.Component {
  constructor() {
    super();

    this.state = {
      valid: ''
    };

    this.checkEmail = this.checkEmail.bind(this);
  }

  checkEmail(e) {
    if (this.props.inputType === 'email') {
      let value = e.target.value,
        regex = /(\b^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b)$/;

      if (regex.test(value)) {
        this.setState({
          valid: true
        });
      } else {
        this.setState({
          valid: false
        });
      }
    }
  }

  render() {
    let errorEl = '',
      valid = this.state.valid;

    if (valid !== '' && !valid) {
      errorEl = <InputError el={this.props.inputLabel} />;
    }

    return (
      <div>
        <label htmlFor={this.props.inputId}>{this.props.inputLabel}</label>
        <input id={this.props.inputId} type={this.props.inputType} placeholder={this.props.inputPlaceholder} onChange={this.checkEmail} required/>
        {errorEl}
      </div>
    );
  }
}

class CheckBoxEl extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleClick(e);
  }

  render() {
    return (
      <div>
        <input id={this.props.inputId} type='checkbox' onClick={this.handleClick}/>
        <label htmlFor={this.props.inputId}>{this.props.inputLabel}</label>
      </div>
    );
  }
}

class InputError extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="error">Error: the {this.props.el} is not valid</div>
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

    this.state = {
      passInputType: 'password'
    };

    this.showPassword = this.showPassword.bind(this);
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

  render() {
    return (
      <form>
        <fieldset>
          <legend>Log in with your email account</legend>
          <InputFieldEl inputId={'emailInput'} inputType={'email'} inputLabel={'E-mail'} inputPlaceholder={'somebody@example.com'} />
          <InputFieldEl inputId={'passInput'} inputType={this.state.passInputType} inputLabel={'Password'} inputPlaceholder={'Enter password'} />
          <CheckBoxEl inputId={'checkboxInput'} inputLabel={'Show password'} handleClick={this.showPassword}/>
          <LogInCTA />
          <ForgotPassCTA />
        </fieldset>
      </form>
    );
  }
};

ReactDOM.render(<LoginForm />, document.getElementById('login'));