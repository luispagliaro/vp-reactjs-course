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
    _this.hideContainer = _this.hideContainer.bind(_this);
    return _this;
  }

  _createClass(Ejercicio1, [{
    key: 'hideContainer',
    value: function hideContainer() {
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
            { href: '#', onClick: this.hideContainer },
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
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Button, [{
    key: "handleClick",
    value: function handleClick() {
      this.props.handleClick(this.props.tag);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        { onClick: this.handleClick },
        "Create a <",
        this.props.tag,
        "> tag"
      );
    }
  }]);

  return Button;
}(React.Component);

var Tag = function (_React$Component2) {
  _inherits(Tag, _React$Component2);

  function Tag() {
    _classCallCheck(this, Tag);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tag).call(this));
  }

  _createClass(Tag, [{
    key: "render",
    value: function render() {
      var tag = this.props.tag,
          el = React.createElement(tag, { className: "tag" }, 'Hello, World!');
      return React.createElement(
        "div",
        null,
        el,
        React.createElement(
          "p",
          { className: "info" },
          "<",
          tag,
          "> tag created"
        )
      );
    }
  }]);

  return Tag;
}(React.Component);

var Ejercicio2 = function (_React$Component3) {
  _inherits(Ejercicio2, _React$Component3);

  function Ejercicio2() {
    _classCallCheck(this, Ejercicio2);

    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(Ejercicio2).call(this));

    _this3.createElement = _this3.createElement.bind(_this3);

    _this3.state = {
      createTag: ''
    };
    return _this3;
  }

  _createClass(Ejercicio2, [{
    key: "createElement",
    value: function createElement(tag) {
      this.setState({
        createTag: tag
      });
    }
  }, {
    key: "render",
    value: function render() {
      var el = void 0;

      if (this.state.createTag === '') {
        el = "Click a button to create a tag";
      } else {
        el = React.createElement(Tag, { tag: this.state.createTag });
      }

      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "ej2" },
          React.createElement(Button, { tag: 'div', handleClick: this.createElement }),
          React.createElement(Button, { tag: 'span', handleClick: this.createElement }),
          React.createElement(Button, { tag: 'a', handleClick: this.createElement }),
          el
        )
      );
    }
  }]);

  return Ejercicio2;
}(React.Component);

;

ReactDOM.render(React.createElement(Ejercicio2, null), document.getElementById('ejercicio2'));

},{}],3:[function(require,module,exports){
"use strict";

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
      counter: 0
    };
    _this.increaseValue = _this.increaseValue.bind(_this);
    _this.setinitialValue = _this.setinitialValue.bind(_this);
    return _this;
  }

  _createClass(Ejercicio3, [{
    key: "setCounter",
    value: function setCounter(value) {
      this.setState({
        counter: value
      });
    }
  }, {
    key: "increaseValue",
    value: function increaseValue() {
      this.setCounter(this.state.counter + 1);
    }
  }, {
    key: "setinitialValue",
    value: function setinitialValue() {
      var value = prompt('Set counter initial value');

      this.setCounter(isNaN(value) || value <= 0 ? this.state.counter : +value);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "ej3" },
          React.createElement(
            "span",
            { className: "counter" },
            this.state.counter
          ),
          React.createElement(
            "button",
            { href: "#", onClick: this.increaseValue },
            " + "
          ),
          React.createElement(
            "a",
            { href: "#", onClick: this.setinitialValue },
            "Change initial value"
          )
        )
      );
    }
  }]);

  return Ejercicio3;
}(React.Component);

;

ReactDOM.render(React.createElement(Ejercicio3, null), document.getElementById('ejercicio3'));

},{}],4:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ejercicio4 = function (_React$Component) {
  _inherits(Ejercicio4, _React$Component);

  function Ejercicio4() {
    _classCallCheck(this, Ejercicio4);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Ejercicio4).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Ejercicio4, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement("div", { className: "ej4" })
      );
    }
  }]);

  return Ejercicio4;
}(React.Component);

;

ReactDOM.render(React.createElement(Ejercicio4, null), document.getElementById('ejercicio4'));

},{}]},{},[1,2,3,4]);
