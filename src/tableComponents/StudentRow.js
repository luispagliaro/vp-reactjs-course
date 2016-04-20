import React from 'react';
import ReactDOM from 'react-dom';

export default class StudentRow extends React.Component {
  constructor() {
    super();
  }

  render() {
    let student = this.props.student;

    return (
      <tr>
        <td>{student.lastName}</td>
        <td>{student.name}</td>
        <td>{student.exams[0]}</td>
        <td>{student.exams[1]}</td>
        <td>{student.exams[2]}</td>
      </tr>
    );
  }
}