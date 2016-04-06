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
        el = 'Click a button to create a tag';
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

},{}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputFieldEl = function (_React$Component) {
  _inherits(InputFieldEl, _React$Component);

  function InputFieldEl() {
    _classCallCheck(this, InputFieldEl);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InputFieldEl).call(this));

    _this.state = {
      valid: ''
    };

    _this.checkEmail = _this.checkEmail.bind(_this);
    return _this;
  }

  _createClass(InputFieldEl, [{
    key: 'checkEmail',
    value: function checkEmail(e) {
      if (this.props.inputType === 'email') {
        var value = e.target.value,
            regex = /(\b^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b)$/;

        if (regex.test(value)) {
          this.setState({
            valid: true
          });
        } else {
          this.setState({
            valid: false
          });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var errorEl = '',
          valid = this.state.valid;

      if (valid !== '' && !valid) {
        errorEl = React.createElement(InputError, { el: this.props.inputLabel });
      }

      return React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          { htmlFor: this.props.inputId },
          this.props.inputLabel
        ),
        React.createElement('input', { id: this.props.inputId, type: this.props.inputType, placeholder: this.props.inputPlaceholder, onChange: this.checkEmail, required: true }),
        errorEl
      );
    }
  }]);

  return InputFieldEl;
}(React.Component);

var CheckBoxEl = function (_React$Component2) {
  _inherits(CheckBoxEl, _React$Component2);

  function CheckBoxEl() {
    _classCallCheck(this, CheckBoxEl);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(CheckBoxEl).call(this));

    _this2.handleClick = _this2.handleClick.bind(_this2);
    return _this2;
  }

  _createClass(CheckBoxEl, [{
    key: 'handleClick',
    value: function handleClick(e) {
      this.props.handleClick(e);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement('input', { id: this.props.inputId, type: 'checkbox', onClick: this.handleClick }),
        React.createElement(
          'label',
          { htmlFor: this.props.inputId },
          this.props.inputLabel
        )
      );
    }
  }]);

  return CheckBoxEl;
}(React.Component);

var InputError = function (_React$Component3) {
  _inherits(InputError, _React$Component3);

  function InputError() {
    _classCallCheck(this, InputError);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputError).call(this));
  }

  _createClass(InputError, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'error' },
        'Error: the ',
        this.props.el,
        ' is not valid'
      );
    }
  }]);

  return InputError;
}(React.Component);

var LogInCTA = function (_React$Component4) {
  _inherits(LogInCTA, _React$Component4);

  function LogInCTA() {
    _classCallCheck(this, LogInCTA);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(LogInCTA).call(this));
  }

  _createClass(LogInCTA, [{
    key: 'render',
    value: function render() {
      return React.createElement('input', { type: 'submit', value: 'Log in' });
    }
  }]);

  return LogInCTA;
}(React.Component);

var ForgotPassCTA = function (_React$Component5) {
  _inherits(ForgotPassCTA, _React$Component5);

  function ForgotPassCTA() {
    _classCallCheck(this, ForgotPassCTA);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ForgotPassCTA).call(this));
  }

  _createClass(ForgotPassCTA, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'a',
        { href: '#' },
        'Forgot your password?'
      );
    }
  }]);

  return ForgotPassCTA;
}(React.Component);

var LoginForm = function (_React$Component6) {
  _inherits(LoginForm, _React$Component6);

  function LoginForm() {
    _classCallCheck(this, LoginForm);

    var _this6 = _possibleConstructorReturn(this, Object.getPrototypeOf(LoginForm).call(this));

    _this6.state = {
      passInputType: 'password'
    };

    _this6.showPassword = _this6.showPassword.bind(_this6);
    return _this6;
  }

  _createClass(LoginForm, [{
    key: 'showPassword',
    value: function showPassword(e) {
      var value = e.target.checked;

      if (value) {
        this.setState({
          passInputType: 'text'
        });
      } else {
        this.setState({
          passInputType: 'password'
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        null,
        React.createElement(
          'fieldset',
          null,
          React.createElement(
            'legend',
            null,
            'Log in with your email account'
          ),
          React.createElement(InputFieldEl, { inputId: 'emailInput', inputType: 'email', inputLabel: 'E-mail', inputPlaceholder: 'somebody@example.com' }),
          React.createElement(InputFieldEl, { inputId: 'passInput', inputType: this.state.passInputType, inputLabel: 'Password', inputPlaceholder: 'Enter password' }),
          React.createElement(CheckBoxEl, { inputId: 'checkboxInput', inputLabel: 'Show password', handleClick: this.showPassword }),
          React.createElement(LogInCTA, null),
          React.createElement(ForgotPassCTA, null)
        )
      );
    }
  }]);

  return LoginForm;
}(React.Component);

;

ReactDOM.render(React.createElement(LoginForm, null), document.getElementById('login'));

},{}]},{},[1,2,3,4,5]);
