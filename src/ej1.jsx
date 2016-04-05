class Ejercicio1 extends React.Component {
  constructor() {
    super();

    this.state = {
      isVisible: true
    };
    this.hideContainer = this.hideContainer.bind(this);
  }

  hideContainer() {
    this.setState({
      isVisible: false
    });
  }

  render() {
    return (
      <div>
        <div className={this.state.isVisible ? 'ej1' : 'ej1 hide'}>
          <a href="#" onClick={this.hideContainer}>Click this to hide the box</a>
        </div>
      </div>
    );
  }
};

ReactDOM.render(<Ejercicio1/>,
  document.getElementById('ejercicio1')
);