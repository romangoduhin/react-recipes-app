import React from 'react';
import PropTypes from "prop-types";
import ReactLoading from 'react-loading';


function Loading({color, height, width}) {
    return <ReactLoading type={'bubbles'} color={color} height={height} width={width}/>
}

Loading.defaultProps = {
    color: '#ef4229',
    height: '200px',
    width: '200px',
}

Loading.propTypes = {
    color: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
}

export default Loading;