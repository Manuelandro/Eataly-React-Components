import React, { PropTypes } from 'react'
import { css } from 'aphrodite'

import styles from './styles'

const propTypes = {
    text: PropTypes.string,
    classes: PropTypes.string
}

const defaultProps = {
    text: 'Questo è un p',
    classes: 'basic'
}

class P extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const { classes, text, newStyle } = this.props
        const className = (typeof newStyle !== 'undefined') ? newStyle : css(styles[classes])

        return(
            <p className={className}>{text}</p>
        )
    }
}


P.propTypes = propTypes
P.defaultProps = defaultProps


export default P