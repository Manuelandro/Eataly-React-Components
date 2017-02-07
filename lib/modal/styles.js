'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aphrodite = require('aphrodite');

var styles = _aphrodite.StyleSheet.create({
  overlayStyles: {
    display: 'block',
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    zIndex: '100000',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  dialogStyles: {
    display: 'block',
    width: '50%',
    maxWidth: '610px',
    height: '400px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    marginTop: '-200px',
    transform: 'translateX(-50%)',
    backgroundColor: '#fff',
    borderRadius: '2px',
    zIndex: '100001',
    padding: '2px',
    boxShadow: '0px 0px 4px rgba(0,0,0,.14),0px 4px 8px rgba(0,0,0,.28)',
    '@media (max-width: 960px)': {
      width: '60%'
    },
    '@media (max-width: 640px)': {
      width: '70%'
    },
    '@media (max-width: 414px)': {
      width: '95%'
    }
  },
  closeButtonStyle: {
    cursor: 'pointer',
    position: 'absolute',
    fontSize: '30px',
    right: '0px',
    top: '0px',
    width: '30px',
    backgroundColor: '#fff',
    textDecoration: 'none',
    textAlign: 'center'
  }
});

exports.default = styles;