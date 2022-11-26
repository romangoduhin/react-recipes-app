import React from 'react';
import styles from "./RandomButton.module.scss";

function RandomButton() {
    return <div className={styles.wrapper}>
        <div className={styles.randomButton}>
            <img src="/questionIcon.png" alt="icon"/>

        </div>

        <br/>

        <p className={styles.text}>Random recipe</p>
    </div>
}

export default RandomButton;