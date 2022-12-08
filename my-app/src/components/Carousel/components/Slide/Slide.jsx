import React from 'react';
import styles from "./Slide.module.scss";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import {NavLink} from "react-router-dom";

function Slide({data}) {
    function getParsedHtml(string) {
        return parse(string);
    }

    return <div className={styles.slide}>
        <div className={styles.imageWrapper}>
            <img src={data.image ? data.image : "/logoSmall.png"} alt="recipe image"/>
            <div className={styles.border}></div>

            <NavLink to={`/recipe/${data.id}`} className={styles.openButton}>
                Open
            </NavLink>
        </div>

        <div className={styles.content}>
            <div className={styles.title}>
                <p><span>RECIPE</span> {data.sourceName && <>| FROM {data.sourceName}</>}</p>

                <NavLink to={`/recipe/${data.id}`}>
                    {data.title}
                </NavLink>
            </div>

            <div className={styles.summary}>
                <p>{getParsedHtml(data.summary)}</p>
            </div>
        </div>
    </div>
}

Slide.defaultProps = {
    data: null,
}

Slide.propTypes = {
    data: PropTypes.object,
}

export default Slide;