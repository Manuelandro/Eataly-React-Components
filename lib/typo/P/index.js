'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _aphrodite = require('aphrodite');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    text: _react.PropTypes.string,
    classes: _react.PropTypes.string
};

var defaultProps = {
    text: 'Questo è un p',
    classes: 'basic'
};

var P = function (_React$Component) {
    _inherits(P, _React$Component);

    function P(props) {
        _classCallCheck(this, P);

        return _possibleConstructorReturn(this, (P.__proto__ || Object.getPrototypeOf(P)).call(this, props));
    }

    _createClass(P, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                text = _props.text,
                newStyle = _props.newStyle;

            var className = typeof newStyle !== 'undefined' ? newStyle : (0, _aphrodite.css)(_styles2.default[classes]);

            return _react2.default.createElement(
                'p',
                { className: className },
                text
            );
        }
    }]);

    return P;
}(_react2.default.Component);

P.propTypes = propTypes;
P.defaultProps = defaultProps;

exports.default = P;