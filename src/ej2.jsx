class Button extends React.Component {
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

class Ejercicio2 extends React.Component {
  constructor() {
    super();

    this.createElement = this.createElement.bind(this);
  }

  createElement(tag) {
    let parentElement = document.querySelector('.ej2'),
      element = document.createElement(tag),
      infoText = document.querySelector('.info');

    if (parentElement.childNodes.length > 4) {
      parentElement.removeChild(parentElement.childNodes[4]);
    }

    element.innerText = 'Hello, World!';
    parentElement.appendChild(element);
    infoText.innerText = `<${tag}> tag created`;
  }

  render() {
    return (
      <div>
        <div className="ej2">
          <Button tag={'div'} handleClick={this.createElement}/>
          <Button tag={'span'} handleClick={this.createElement}/>
          <Button tag={'a'} handleClick={this.createElement}/>
          <p className="info"></p>
        </div>
      </div>
    );
  }
};

ReactDOM.render(<Ejercicio2/>,
  document.getElementById('ejercicio2')
);