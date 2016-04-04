(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ejercicio1 = function (_React$Component) {
    _inherits(Ejercicio1, _React$Component);

    function Ejercicio1() {
        _classCallCheck(this, Ejercicio1);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Ejercicio1).call(this));

        _this.state = {
            isVisible: true
        };
        return _this;
    }

    _createClass(Ejercicio1, [{
        key: 'hideContainer',
        value: function hideContainer(ev) {
            this.setState({
                isVisible: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: this.state.isVisible ? 'ej1' : 'ej1 hide' },
                    React.createElement(
                        'a',
                        { href: '#', onClick: this.hideContainer.bind(this) },
                        'Click this to hide the box'
                    )
                )
            );
        }
    }]);

    return Ejercicio1;
}(React.Component);

;

ReactDOM.render(React.createElement(Ejercicio1, null), document.getElementById('ejercicio1'));

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ejercicio2 = function (_React$Component) {
    _inherits(Ejercicio2, _React$Component);

    function Ejercicio2() {
        _classCallCheck(this, Ejercicio2);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Ejercicio2).call(this));

        _this.state = {
            selectedElement: ''
        };
        return _this;
    }

    _createClass(Ejercicio2, [{
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
            return React.createElement(
                'div',
                null,
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
                )
            );
        }
    }]);

    return Ejercicio2;
}(React.Component);

;

ReactDOM.render(React.createElement(Ejercicio2, null), document.getElementById('ejercicio2'));

},{}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ejercicio3 = function (_React$Component) {
    _inherits(Ejercicio3, _React$Component);

    function Ejercicio3() {
        _classCallCheck(this, Ejercicio3);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Ejercicio3).call(this));

        _this.state = {
            selectedElement: ''
        };
        return _this;
    }

    _createClass(Ejercicio3, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement('div', { className: 'ej3' })
            );
        }
    }]);

    return Ejercicio3;
}(React.Component);

;

ReactDOM.render(React.createElement(Ejercicio3, null), document.getElementById('ejercicio3'));

},{}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ejercicio4 = function (_React$Component) {
    _inherits(Ejercicio4, _React$Component);

    function Ejercicio4() {
        _classCallCheck(this, Ejercicio4);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Ejercicio4).call(this));

        _this.state = {
            selectedElement: ''
        };
        return _this;
    }

    _createClass(Ejercicio4, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement('div', { className: 'ej4' })
            );
        }
    }]);

    return Ejercicio4;
}(React.Component);

;

ReactDOM.render(React.createElement(Ejercicio4, null), document.getElementById('ejercicio4'));

},{}]},{},[1,2,3,4]);
