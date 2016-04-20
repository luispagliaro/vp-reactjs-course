import React from 'react';
import ReactDOM from 'react-dom';
import InputError from './InputError';

export default class InputFieldEl extends React.Component {
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