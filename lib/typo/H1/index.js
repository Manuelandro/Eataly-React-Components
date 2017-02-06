import React, { PropTypes } from 'react'
import { css } from 'aphrodite'

import styles from './styles'

const propTypes = {
    text: PropTypes.string,
    classes: PropTypes.string
}

const defaultProps = {
    text: 'Questo è un h1',
    classes: 'basic'
}

class H1 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const { classes, text, newStyle } = this.props
        const className = (typeof newStyle !== 'undefined') ? newStyle : css(styles[classes])

        return(
            <h1 className={className}>{text}</h1>
        )
    }
}


H1.propTypes = propTypes
H1.defaultProps = defaultProps


export default H1