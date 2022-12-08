import React from 'react';
import styles from "./InfoPanel.module.scss";
import IconButton from "../../../../components/IconButton/IconButton";
import PropTypes from "prop-types";


function InfoPanel({cookingTime, servingsCount, isVegan, isVegetarian}) {
    return <div className={styles.infoPanel}>
        <div>
            <span>Cooking time</span>
            <b>{cookingTime} m</b>
        </div>

        <div>
            <span>Servings</span>
            <b>{servingsCount}</b>
        </div>

        <div>
            <span>Vegan</span>
            <b>{isVegan ? "Yes" : "No"}</b>
        </div>

        <div>
            <span>Vegetarian</span>
            <b>{isVegetarian ? "Yes" : "No"}</b>
        </div>
    </div>
}

InfoPanel.defaultProps = {
    cookingTime: 0,
    servingsCount: 0,
    isVegan: false,
    isVegetarian: false
}

InfoPanel.propTypes = {
    cookingTime: PropTypes.number,
    servingsCount: PropTypes.number,
    isVegan: PropTypes.bool,
    isVegetarian: PropTypes.bool
}

export default InfoPanel;