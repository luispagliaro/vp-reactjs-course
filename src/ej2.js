import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Ej2/Button';
import Tag from './Ej2/Tag';

class Ejercicio2 extends React.Component {
  constructor() {
    super();

    this.createElement = this.createElement.bind(this);

    this.state = {
      createTag: ''
    }
  }

  createElement(tag) {
    this.setState({
      createTag: tag
    });
  }

  render() {
    let el;

    if (this.state.createTag === '') {
      el = 'Click a button to create a tag';
    } else {
      el = <Tag tag={this.state.createTag}/>;
    }

    return (
      <div>
        <div className="ej2">
          <Button tag={'div'} handleClick={this.createElement}/>
          <Button tag={'span'} handleClick={this.createElement}/>
          <Button tag={'a'} handleClick={this.createElement}/>
          {el}
        </div>
      </div>
    );
  }
};

ReactDOM.render(<Ejercicio2/>,
  document.getElementById('ejercicio2')
);