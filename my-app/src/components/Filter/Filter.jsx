import React, {useEffect, useState} from 'react';
import styles from "./Filter.module.scss";
import PropTypes from "prop-types";


function Filter({values, onFilterApply}) {
    const buttons = [
        {
            proper: 'title',
            direction: 'incr',
            content: <span>Alphabet &#8593;</span>,
            onClick() {
                handleChangeMode(this.proper, this.direction)
            }
        },
        {
            proper: 'title',
            direction: 'decr',
            content: <span>Alphabet &#8595;</span>,
            onClick() {
                handleChangeMode(this.proper, this.direction)
            }
        },
        {
            proper: 'aggregateLikes',
            direction: 'decr',
            content: <span>Likes &#8593;</span>,
            onClick() {
                handleChangeMode(this.proper, this.direction)
            }
        },
        {
            proper: 'aggregateLikes',
            direction: 'incr',
            content: <span>Likes &#8595;</span>,
            onClick() {
                handleChangeMode(this.proper, this.direction)
            }
        },
        {
            proper: 'readyInMinutes',
            direction: 'decr',
            content: <span>Cooking time &#8593;</span>,
            onClick() {
                handleChangeMode(this.proper, this.direction)
            }
        },
        {
            proper: 'readyInMinutes',
            direction: 'incr',
            content: <span>Cooking time &#8595;</span>,
            onClick() {
                handleChangeMode(this.proper, this.direction)
            }
        }
    ]

    const [prop, setProp] = useState('aggregateLikes');
    const [direction, setDirection] = useState('incr');

    function getButtons() {
        return buttons.map(el => <li
            className={el.proper === prop && el.direction === direction ? `${styles.active}` : undefined}
            onClick={el.onClick.bind(el)}>{el.content}</li>)
    }

    function handleChangeMode(prop, direction) {
        setProp(prop)
        setDirection(direction)
    }

    useEffect(() => {
        if (prop && direction) {
            let sortedArr;
            if (direction === 'incr') {
                sortedArr = values.sort((a, b) => {
                    return a[prop] < b[prop] ? 1 : -1;
                })
            } else if (direction === 'decr') {
                sortedArr = values.sort((a, b) => {
                    return a[prop] > b[prop] ? 1 : -1;
                })
            }
            onFilterApply(sortedArr)
        }
    }, [prop, direction])

    return <ul className={styles.filter}>
        {getButtons()}
    </ul>
}

Filter.defaultProps = {
    values: null,
    onFilterApply: () => {
    },
}

Filter.propTypes = {
    values: PropTypes.array,
    onFilterApply: PropTypes.func,
}

export default Filter;