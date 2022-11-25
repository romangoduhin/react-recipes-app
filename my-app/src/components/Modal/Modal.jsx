import React from 'react';
import ReactDOM from "react-dom";


function Modal({children}) {
    return ReactDOM.createPortal(children, document.body)
}

export default Modal;