import React from 'react';
import styles from "./ButtonWithIcon.module.scss";

function ButtonWithIcon({src}) {
    return (
        <div className={styles.button}>
            <img src={src} alt="icon"/>
        </div>
    );
}

export default ButtonWithIcon;