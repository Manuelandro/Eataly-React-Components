import React from 'react';
import { css } from 'aphrodite'

import styles from './styles'

const isOpening = (s1, s2) => !s1.isVisible && s2.isVisible;
const isClosing = (s1, s2) => s1.isVisible && !s2.isVisible;

export default class Modal extends React.Component {

  constructor(props) {
    super(props)
  }

  onOverlayClicked() {
    if (this.props.onOverlayClicked) {
      this.props.onOverlayClicked();
    }
  }

  onCloseClicked() {
    if (this.props.onCloseClicked) {
      this.props.onCloseClicked();
    }
  }

  show() {
    const { dispatch, show_action } = this.props
    dispatch({ type: show_action })
  }

  hide() {
    const { dispatch, hide_action } = this.props
    dispatch({ type: hide_action })
  }

  _onOverlayClicked() {
    const { hideOnOverlayClicked, onOverlayClicked } = this.props
    if (hideOnOverlayClicked) {
      this.hide();
    }

    if (onOverlayClicked) {
      onOverlayClicked();
    }
  }

  render() {
    const { isVisible } = this.props;
    let overlay;

     if (this.props.showOverlay) {
      overlay = (
        <div onClick={() => this._onOverlayClicked()}
          className={css(styles.overlayStyles)}
        />
      );
    }

    return isVisible ? (
        <section className="skylight-wrapper">
            {overlay}
            <div className={css(styles.dialogStyles)}>
              <a role="button" onClick={() => this.hide()}
                className={css(styles.closeButtonStyle)}
              >
                &times;
               </a>
              {this.props.children}
            </div>
        </section>
    ) : <div />;
  }
}

Modal.displayName = 'Modal';

Modal.propTypes = {
  onCloseClicked: React.PropTypes.func,
  onOverlayClicked: React.PropTypes.func,
  showOverlay: React.PropTypes.bool,
  isVisible: React.PropTypes.bool,
  afterClose: React.PropTypes.func,
  afterOpen: React.PropTypes.func,
  beforeClose: React.PropTypes.func,
  beforeOpen: React.PropTypes.func,
  hideOnOverlayClicked: React.PropTypes.bool,
};

Modal.defaultProps = {
  showOverlay: true,
  hideOnOverlayClicked: false,
};