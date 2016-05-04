import React from 'react';
import ReactDOM from 'react-dom';
import Actions from '../actions';

export default class LogInCTA extends React.Component {
  constructor() {
    super();
  }

  render() {
  	let handler = event => { return this.onClick(); };
    return (
      <input type="submit" onClick={handler} value="Log in" />
    );
  }
}