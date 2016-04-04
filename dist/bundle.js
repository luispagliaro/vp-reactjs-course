(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contenedor = function (_React$Component) {
    _inherits(Contenedor, _React$Component);

    function Contenedor() {
        _classCallCheck(this, Contenedor);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Contenedor).call(this));

        _this.state = {
            isVisible: true,
            selectedElement: ''
        };
        return _this;
    }

    _createClass(Contenedor, [{
        key: 'hideContainer',
        value: function hideContainer(ev) {
            this.setState({
                isVisible: false
            });
        }
    }, {
        key: 'insertContent',
        value: function insertContent(ev) {
            this.setState({
                selectedElement: ev.target.getAttribute('data-element')
            });

            var selectedElement = ev.target.getAttribute('data-element'),
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
    }, {
        key: 'render',
        value: function render() {
            var classVisible = this.state.isVisible ? 'ej1' : 'ej1 hide';

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'ReactJS'
                ),
                React.createElement(
                    'h2',
                    null,
                    'Ejercicio 1'
                ),
                React.createElement(
                    'p',
                    null,
                    'Generar un contenedor (DIV) que al hacer clic en un CTA (A) se oculte.'
                ),
                React.createElement(
                    'div',
                    { className: classVisible },
                    React.createElement(
                        'a',
                        { href: '#', onClick: this.hideContainer.bind(this) },
                        'Click this to hide the box'
                    )
                ),
                React.createElement(
                    'h2',
                    null,
                    'Ejercicio 2'
                ),
                React.createElement(
                    'p',
                    null,
                    'Dados 3 CTAs (DIV, SPAN, A) al hacer clic imprimir "hello world" dentro del tag al que se le hizo clic.'
                ),
                React.createElement(
                    'div',
                    { className: 'ej2' },
                    React.createElement(
                        'button',
                        { 'data-element': 'div', onClick: this.insertContent.bind(this) },
                        'DIV'
                    ),
                    React.createElement(
                        'button',
                        { 'data-element': 'span', onClick: this.insertContent.bind(this) },
                        'SPAN'
                    ),
                    React.createElement(
                        'button',
                        { 'data-element': 'a', onClick: this.insertContent.bind(this) },
                        'A'
                    ),
                    React.createElement('p', { className: 'info' })
                ),
                React.createElement(
                    'h2',
                    null,
                    'Ejercicio 3'
                ),
                React.createElement(
                    'p',
                    null,
                    'Crear un cuenta ganado, permitiendo que sea inicializado con un valor deseado distinto de 0.'
                ),
                React.createElement('div', { className: 'ej3' }),
                React.createElement(
                    'h2',
                    null,
                    'Ejercicio 4'
                ),
                React.createElement(
                    'p',
                    null,
                    'Imprimir los elementos de una lista (UL) donde sean hijos del componente (this.props.children)'
                ),
                React.createElement('div', { className: 'ej4' })
            );
        }
    }]);

    return Contenedor;
}(React.Component);

;

ReactDOM.render(React.createElement(Contenedor, null), document.getElementById('container'));

},{}]},{},[1]);
