import React from 'react';
import styles from "./DifficultyIndicator.module.scss";
import PropTypes from "prop-types";

function DifficultyIndicator({level}) {
    const levelsCount = 4;

    function getIndicator() {
        const arr = new Array(levelsCount).fill(1);

        const circles = arr.map((el, id) => {
            if (id < level) {
                return <div key={id} className={styles.active}></div>
            } else return <div key={id}></div>
        })
        return circles;
    }

    return (
        <div className={styles.indicator}>
            {getIndicator()}
        </div>
    );
}

DifficultyIndicator.defaultProps = {
    level: 0
}

DifficultyIndicator.propTypes = {
    level: PropTypes.number,
}

export default DifficultyIndicator;