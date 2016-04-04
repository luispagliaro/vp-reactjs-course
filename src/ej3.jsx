class Ejercicio3 extends React.Component {
    constructor() {
        super();

        this.state = {
            selectedElement: ''
        };
    }

    render() {
        return (
            <div>
                <div className="ej3">
                </div>
            </div>
        );
    }
};

ReactDOM.render(<Ejercicio3/>,
    document.getElementById('ejercicio3')
);