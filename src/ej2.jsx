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

class Tag extends React.Component {
  constructor() {
    super();
  }

  render() {
    let tag = this.props.tag,
      el = React.createElement(tag, {className:"tag"}, 'Hello, World!');
    return (
      <div>
        {el}
        <p className="info">&lt;{tag}&gt; tag created</p>
      </div>
    );
  }
}

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