'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('Counter');

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.handleAddOne = _this.handleAddOne.bind(_this);
    _this.handleMinusOne = _this.handleMinusOne.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);

    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(Counter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      try {
        var count = parseInt(localStorage.getItem('count'), 10);
        if (!isNaN(count)) {
          this.setState(function () {
            return { count: count };
          });
        }
      } catch (e) {
        // Do nothing
        console.error('componentDidMount', e);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) {
        console.log('saving data');
        localStorage.setItem('count', this.state.count);
      }
    }
  }, {
    key: 'handleAddOne',
    value: function handleAddOne() {
      console.log('Add One');
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
      console.log(this.state);
    }
  }, {
    key: 'handleMinusOne',
    value: function handleMinusOne() {
      console.log('Minus One');
      this.setState(function (prevState) {
        return {
          count: prevState.count - 1
        };
      });
      console.log(this.state);
    }
  }, {
    key: 'handleReset',
    value: function handleReset() {
      console.log('Reset');
      this.setState(function () {
        return {
          count: 0
        };
      });
      console.log(this.state);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Count: ',
          this.state.count,
          ' ',
          this.state.name
        ),
        React.createElement(
          'button',
          { onClick: this.handleAddOne },
          '+1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleMinusOne },
          '-1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleReset },
          'Reset!'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

var appRoot = document.getElementById('app');
ReactDOM.render(React.createElement(Counter, { count: 12 }), appRoot);
