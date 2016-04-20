import React from 'react';
import ReactDOM from 'react-dom';

export default class Button extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.tag);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Create a &lt;{this.props.tag}&gt; tag</button>
    );
  }
}