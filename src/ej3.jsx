class Ejercicio3 extends React.Component {
    constructor() {
        super();

        this.state = {
            counter: 0
        };
    }

    setCounter(value) {
        this.setState({
            counter: value
        });
    }

    increaseValue() {
        this.setCounter(this.state.counter + 1);
    }

    setinitialValue() {
        let value = prompt('Set counter initial value', 0);

        this.setCounter(value === null ? 0 : value);
    }

    render() {
        return (
            <div>
                <div className="ej3">
                    <span className="counter">{this.state.counter}</span>
                    <button href="#" onClick={this.increaseValue.bind(this)}> + </button>
                    <a href="#" onClick={this.setinitialValue.bind(this)}>Change initial value</a>
                </div>
            </div>
        );
    }
};

ReactDOM.render(<Ejercicio3/>,
    document.getElementById('ejercicio3')
);