import React, { PropTypes } from 'react'
import { css } from 'aphrodite'

import styles from './styles'


const propTypes = {
    classes: PropTypes.string,
    text: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
}

const defaultProps = {
    classes: 'btnOrange',
    text: 'button',
    diabled: false
}


class Button extends React.Component {
    constructor(props) {
        super(props)

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(e) {

        const { disabled, onClick } = this.props

        if(disabled) {
            e.preventDefault()
            return
        }

        if(onClick) {
            onClick(e)
        }
    }

    render() {

        const { classes, text } = this.props

        return(
            <button onClick={this.clickHandler} className={css(styles[this.props.classes])}>{text}</button>
        )
    }
}


Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button