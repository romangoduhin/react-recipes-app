import React from 'react';
import styles from "./IconButton.module.scss";
import PropTypes from "prop-types";


function IconButton({src, width, height, onClick}) {
    return <img className={styles.button}
                onClick={onClick}
                src={src}
                width={`${width}px`}
                height={`${height}px`}
                alt="icon"/>
}

IconButton.defaultProps = {
    src: '',
    width: 25,
    height: 25,
    onClick: ()=>{},
}

IconButton.propTypes = {
    src: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    onClick: PropTypes.func,
}

export default IconButton;