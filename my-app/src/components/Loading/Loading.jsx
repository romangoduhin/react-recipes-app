import React from 'react';
import PropTypes from "prop-types";
import ReactLoading from 'react-loading';
import styles from "./Loading.module.scss";

function Loading({color, height, width}) {
    return <div className={styles.loading}>
        <ReactLoading type={'bubbles'} color={color} height={height} width={width}/>
    </div>
}

Loading.defaultProps = {
    color: '#178841',
    height: "200px",
    width: "250px"
}

Loading.propTypes = {
    color: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
}

export default Loading;