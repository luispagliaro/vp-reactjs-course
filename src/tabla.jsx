import React from 'react';
import ReactDOM from 'react-dom';
import StudentTableFilter from './tableComponents/StudentTableFilter';

const students = [{
  lastName: 'Lopez',
  name: 'José',
  exams: [6.5, 7, 6.5]
}, {
  lastName: 'Acosta',
  name: 'Hernán',
  exams: [5, 8, 8]
}, {
  lastName: 'Masei',
  name: 'Ernesto',
  exams: [6.5, 9, 7.5]
}, {
  lastName: 'Lisso',
  name: 'Magali',
  exams: [8, 7, 6.5]
}, ];

ReactDOM.render(<StudentTableFilter data={students} /> , document.getElementById('table'));