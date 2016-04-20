import React from 'react';
import ReactDOM from 'react-dom';
import FilterInput from './FilterInput';
import Table from './Table';

export default class StudentTableFilter extends React.Component {
  constructor() {
    super();

    this.state = {
      filterText: ''
    }

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(filterText) {
    this.setState({filterText});
  }

  render() {

    return (
      <div>
        <FilterInput onUserInput={this.handleUserInput} />
        <Table students={this.props.data} filterText={this.state.filterText}/>
      </div>
    );
  }
}