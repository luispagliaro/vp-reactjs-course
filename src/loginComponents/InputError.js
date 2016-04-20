import React from 'react';
import ReactDOM from 'react-dom';

export default class InputError extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="error">Error: the {this.props.el} is not valid</div>
    );
  }
}