import React from 'react';
import styles from "./RandomButton.module.scss";
import PropTypes from "prop-types";


function RandomButton({handleSwitchModal}) {
    return <>
        <div className={styles.wrapper}>
            <div className={styles.randomButton} onClick={handleSwitchModal}>
                <img src="/questionIcon.png" alt="icon"/>
            </div>

            <p className={styles.text}>Random recipe</p>
        </div>
    </>
}


RandomButton.defaultProps = {
    handleSwitchModal: () => {
    },
}

RandomButton.propTypes = {
    handleSwitchModal: PropTypes.func,
}

export default RandomButton;