import React from 'react';
import styles from "./LikesCounter.module.scss";
import PropTypes from 'prop-types';


function LikesCounter({likesCount}) {
    return <div className={styles.likes}>
        <img src="/favouriteIcon.png" alt="icon"/>
        <b>{likesCount}</b>
    </div>
}

LikesCounter.defaulProps = {
    likesCount: 0,
}

LikesCounter.propTypes = {
    likesCount: PropTypes.number,
}

export default LikesCounter;