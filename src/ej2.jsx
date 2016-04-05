class Ejercicio2 extends React.Component {
  constructor() {
    super();

    this.createElemen = this.createElement.bind(this);
  }

  createElement(e) {
    let selectedElement = e.target.getAttribute('data-element'),
      parentElement = document.querySelector('.ej2'),
      element = document.createElement(selectedElement),
      infoText = document.querySelector('.info');

    if (parentElement.childNodes.length > 4) {
      parentElement.removeChild(parentElement.childNodes[4]);
    }

    element.innerText = 'Hello, World!';
    parentElement.appendChild(element);
    infoText.innerText = selectedElement + ' tag created';
  }

  render() {
    return (
      <div>
        <div className="ej2">
          <button data-element="div" onClick={this.createElement}>Create a DIV tag</button>
          <button data-element="span" onClick={this.createElement}>Create a SPAN tag</button>
          <button data-element="a" onClick={this.createElement}>Create a A tag</button>
          <p className="info"></p>
        </div>
      </div>
    );
  }
};

ReactDOM.render(<Ejercicio2/>,
  document.getElementById('ejercicio2')
);