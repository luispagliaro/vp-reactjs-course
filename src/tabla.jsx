class FilterInput extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onUserInput(
      this.refs['filterTextInput'].value
    );
  }

  render() {
    return (
      <div>
        <label htmlFor="filterInput"></label>
        <input id="filterInput" type="text" ref="filterTextInput"/>
        <input type="submit" value="Filtrar" placeholder="Filtrar por Apellido" onClick={this.handleClick}/>
      </div>
    );
  }
}

class StudentRow extends React.Component {
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

class Table extends React.Component {
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

class StudentTableFilter extends React.Component {
  constructor() {
    super();

    this.state = {
      filterText: ''
    }

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    const students = [
      { lastName: 'Lopez', name: 'José', exams: [6.5, 7, 6.5] },
      { lastName: 'Acosta', name: 'Hernán', exams: [5, 8, 8] },
      { lastName: 'Masei', name: 'Ernesto', exams: [6.5, 9, 7.5] },
      { lastName: 'Lisso', name: 'Magali', exams: [8, 7, 6.5] },
    ];

    return (
      <div>
        <FilterInput />
        <Table students={students} onUserInput={this.handleUserInput} filterText={this.state.filterText}/>
      </div>
    );
  }
}

ReactDOM.render(<StudentTableFilter />, document.getElementById('table'));