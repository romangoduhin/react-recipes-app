import React from 'react';
import PropTypes from "prop-types";
import ReactLoading from 'react-loading';
import styles from "./Loading.module.scss";


function Loading({color, height, width}) {
    return <div className={styles.loading}>
        <ReactLoading type={'bubbles'} color={color} height={`${height}px`} width={`${width}px`}/>
    </div>
}

Loading.defaultProps = {
    color: '#ef4229',
    height: 200,
    width: 250,
}

Loading.propTypes = {
    color: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
}

export default Loading;