'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _aphrodite = require('aphrodite');

var styles = _aphrodite.StyleSheet.create({
    basic: {
        color: '#fff',
        fontSize: '50px',
        '@media (max-width: 414px)': {
            fontSize: '40px'
        }
    }
});

exports.default = styles;