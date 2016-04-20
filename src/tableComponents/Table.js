import React from 'react';
import ReactDOM from 'react-dom';
import StudentRow from './StudentRow';

export default class Table extends React.Component {
  constructor() {
    super();
  }

  render() {
    let rows = [],
      students = this.props.students;

    students.map((student) => {
      if (student.lastName.startsWith(this.props.filterText)) {
        rows.push(<StudentRow student={student} key={student.lastName}/>);
      }
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Apellido</th>
            <th>Nombre</th>
            <th>Parcial 1</th>
            <th>Parcial 2</th>
            <th>Parcial 3</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}