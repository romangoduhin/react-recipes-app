import React from 'react';
import ReactDOM from "react-dom";
import styles from './Modal.module.scss';
import PropTypes from "prop-types";


function Modal({children, backgroundColor}) {
    return ReactDOM.createPortal(
        <div style={{backgroundColor: backgroundColor}} className={styles.modal}>{children}</div>, document.body)
}

Modal.defaultProps = {
    backgroundColor: 'rgba(51,51,51, 0.7)',
}

Modal.propTypes = {
    backgroundColor: PropTypes.string,
}

export default Modal;