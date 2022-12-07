import React from 'react';
import styles from "./Method.module.scss";
import PropTypes from "prop-types";


function Method({instructions}) {
    function getSteps(steps) {
        const stepsCount = steps.length;

        return <div className={styles.steps}>
            {steps.map((step) => {
                return <div className={styles.step} key={step.number}>
                    <h4>Step {step.number} of {stepsCount}</h4>
                    <span>{step.step}</span>
                </div>
            })}
        </div>
    }

    return <div className={styles.method}>
        <h2>Method</h2>

        {getSteps(instructions)}
    </div>
}

Method.defaultProps = {
    instructions: [],
}

Method.propTypes = {
    instructions: PropTypes.array,
}

export default Method;