class Ejercicio3 extends React.Component {
    constructor() {
        super();

        this.state = {
            counter: 0
        };
        this.increaseValue = this.increaseValue.bind(this);
        this.setinitialValue = this.setinitialValue.bind(this)
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

        this.setCounter(value === null || value !== 'number' ? 0 : value);
    }

    render() {
        return (
            <div>
                <div className="ej3">
                    <span className="counter">{this.state.counter}</span>
                    <button href="#" onClick={this.increaseValue}> + </button>
                    <a href="#" onClick={this.setinitialValue}>Change initial value</a>
                </div>
            </div>
        );
    }
};

ReactDOM.render(<Ejercicio3/>,
    document.getElementById('ejercicio3')
);