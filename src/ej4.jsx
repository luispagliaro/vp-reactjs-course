class Ejercicio4 extends React.Component {
    constructor() {
        super();

        this.state = {
            selectedElement: ''
        };
    }

    render() {
        return (
            <div>
                <div className="ej4">
                </div>
            </div>
        );
    }
};

ReactDOM.render(<Ejercicio4/>,
    document.getElementById('ejercicio4')
);