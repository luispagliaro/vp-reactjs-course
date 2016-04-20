import React from 'react';
import ReactDOM from 'react-dom';

export default class FilterInput extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onUserInput(this.refs['filterTextInput'].value);
  }

  render() {
    return (
      <div>
        <label htmlFor="filterInput">Filtrar</label>
        <input id="filterInput" type="text" placeholder="Filtrar por Apellido" ref="filterTextInput"/>
        <input type="submit" value="Filtrar" onClick={this.handleClick}/>
      </div>
    );
  }
}