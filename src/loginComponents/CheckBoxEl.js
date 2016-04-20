import React from 'react';
import ReactDOM from 'react-dom';

export default class CheckBoxEl extends React.Component {
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