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

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.state = {
      isVisible: _this.props.isVisible
    };
    return _this;
  }

  _createClass(Modal, [{
    key: 'onOverlayClicked',
    value: function onOverlayClicked() {
      if (this.props.onOverlayClicked) {
        this.props.onOverlayClicked();
      }
    }
  }, {
    key: 'onCloseClicked',
    value: function onCloseClicked() {
      if (this.props.onCloseClicked) {
        this.props.onCloseClicked();
      }
    }
  }, {
    key: 'show',
    value: function show() {
      var _props = this.props,
          dispatch = _props.dispatch,
          show_action = _props.show_action;


      if (typeof dispatch === 'function') {
        dispatch({ type: show_action });
        return;
      }

      this.setState({ isVisible: true });
    }
  }, {
    key: 'hide',
    value: function hide() {
      var _props2 = this.props,
          dispatch = _props2.dispatch,
          hide_action = _props2.hide_action;


      if (typeof dispatch === 'function') {
        dispatch({ type: hide_action });
        return;
      }

      this.setState({ isVisible: false });
    }
  }, {
    key: '_onOverlayClicked',
    value: function _onOverlayClicked() {
      var _props3 = this.props,
          hideOnOverlayClicked = _props3.hideOnOverlayClicked,
          onOverlayClicked = _props3.onOverlayClicked;


      if (hideOnOverlayClicked) {
        this.hide();
      }

      if (onOverlayClicked) {
        onOverlayClicked();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var isVisible = this.state.isVisible;
      var _props4 = this.props,
          showOverlay = _props4.showOverlay,
          children = _props4.children;


      var overlay = void 0;

      if (showOverlay) {
        overlay = _react2.default.createElement('div', { onClick: function onClick() {
            return _this2._onOverlayClicked();
          },
          className: (0, _aphrodite.css)(_styles2.default.overlayStyles)
        });
      }

      return isVisible ? _react2.default.createElement(
        'section',
        { className: 'skylight-wrapper' },
        overlay,
        _react2.default.createElement(
          'div',
          { className: (0, _aphrodite.css)(_styles2.default.dialogStyles) },
          _react2.default.createElement(
            'a',
            { role: 'button', onClick: function onClick() {
                return _this2.hide();
              },
              className: (0, _aphrodite.css)(_styles2.default.closeButtonStyle)
            },
            '\xD7'
          ),
          children
        )
      ) : _react2.default.createElement('div', null);
    }
  }]);

  return Modal;
}(_react2.default.Component);

exports.default = Modal;


Modal.displayName = 'Modal';

Modal.propTypes = {
  onCloseClicked: _react2.default.PropTypes.func,
  onOverlayClicked: _react2.default.PropTypes.func,
  showOverlay: _react2.default.PropTypes.bool,
  isVisible: _react2.default.PropTypes.bool,
  afterClose: _react2.default.PropTypes.func,
  afterOpen: _react2.default.PropTypes.func,
  beforeClose: _react2.default.PropTypes.func,
  beforeOpen: _react2.default.PropTypes.func,
  hideOnOverlayClicked: _react2.default.PropTypes.bool
};

Modal.defaultProps = {
  isVisible: false,
  showOverlay: true,
  hideOnOverlayClicked: false
};