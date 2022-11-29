import React from 'react';
import styles from "./Summary.module.scss";
import parse from "html-react-parser";
import PropTypes from "prop-types";


function Summary({summary}) {
    function getParsedHtml(string) {
        return parse(string);
    }

    return <div className={styles.summary}>
        <h2>Description</h2>
        <br/>
        <span>{getParsedHtml(summary)}</span>
    </div>
}

Summary.defaultProps = {
    summary: '',
}

Summary.propTypes = {
    summary: PropTypes.string,
}

export default Summary;