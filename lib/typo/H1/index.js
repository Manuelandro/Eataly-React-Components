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
    text: 'Questo è un h1',
    classes: 'basic'
};

var H1 = function (_React$Component) {
    _inherits(H1, _React$Component);

    function H1(props) {
        _classCallCheck(this, H1);

        return _possibleConstructorReturn(this, (H1.__proto__ || Object.getPrototypeOf(H1)).call(this, props));
    }

    _createClass(H1, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                text = _props.text,
                newStyle = _props.newStyle;

            var className = typeof newStyle !== 'undefined' ? newStyle : (0, _aphrodite.css)(_styles2.default[classes]);

            return _react2.default.createElement(
                'h1',
                { className: className },
                text
            );
        }
    }]);

    return H1;
}(_react2.default.Component);

H1.propTypes = propTypes;
H1.defaultProps = defaultProps;

exports.default = H1;