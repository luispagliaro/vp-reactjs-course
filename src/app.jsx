class Contenedor extends React.Component {
    constructor() {
        super();

        this.state = {
            isVisible: true,
            selectedElement: ''
        };
    }

    hideContainer(ev) {
        this.setState({
            isVisible: false
        });
    }

    insertContent(ev) {
        this.setState({
            selectedElement: ev.target.getAttribute('data-element'),
        });

        let selectedElement = ev.target.getAttribute('data-element'),
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
        let classVisible = this.state.isVisible ? 'ej1' : 'ej1 hide';

        return (
            <div>
                <h1>ReactJS</h1>

                <h2>Ejercicio 1</h2>
                <p>Generar un contenedor (DIV) que al hacer clic en un CTA (A) se oculte.</p>
                <div className={classVisible}>
                    <a href="#" onClick={this.hideContainer.bind(this)}>Click this to hide the box</a>
                </div>

                <h2>Ejercicio 2</h2>
                <p>Dados 3 CTAs (DIV, SPAN, A) al hacer clic imprimir "hello world" dentro del tag al que se le hizo clic.</p>
                <div className="ej2">
                    <button data-element="div" onClick={this.insertContent.bind(this)}>DIV</button>
                    <button data-element="span" onClick={this.insertContent.bind(this)}>SPAN</button>
                    <button data-element="a" onClick={this.insertContent.bind(this) }>A</button>
                    <p className="info"></p>
                </div>

                <h2>Ejercicio 3</h2>
                <p>Crear un cuenta ganado, permitiendo que sea inicializado con un valor deseado distinto de 0.</p>
                <div className="ej3">
                </div>

                <h2>Ejercicio 4</h2>
                <p>Imprimir los elementos de una lista (UL) donde sean hijos del componente (this.props.children)</p>
                <div className="ej4">
                </div>
            </div>
        );
    }

};

ReactDOM.render(<Contenedor/>,
    document.getElementById('container')
);