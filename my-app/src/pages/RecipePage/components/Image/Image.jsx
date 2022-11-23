import React from 'react';
import styles from "./Image.module.scss";
import PropTypes from "prop-types";


function Image({src}) {
    const imgSrc = src ? src : "./logoSmall.png";

    return <div className={styles.imageWrapper}>
        <img className={styles.image} src={imgSrc}
             alt="recipe image"/>
    </div>
}

Image.defaultProps = {
    src: '',
}

Image.propTypes = {
    src: PropTypes.string,
}

export default Image;