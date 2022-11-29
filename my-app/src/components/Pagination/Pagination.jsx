import React from 'react';
import styles from "./Pagination.module.scss";
import PropTypes from "prop-types";


function Pagination({pageSize, totalCount, currentPage, onPageChanged}) {
    const pagesCount = Math.ceil(totalCount / pageSize)

    function toPrevPage() {
        if (currentPage > 1) {
            onPageChanged(currentPage - 1)
        }
    }

    function toNextPage() {
        if (currentPage < pagesCount) {
            onPageChanged(currentPage + 1)
        }
    }

    function getPageList() {
        let pagesArr = []

        for (let i = 1; i <= pagesCount; i++) {
            pagesArr.push(i);
        }

        return pagesArr.map(el => {
            return <span className={currentPage === el ? `${styles.page} ${styles.active}` : `${styles.page}`}
                         onClick={() => onPageChanged(el)}
                         key={el}
            >
                {el}
            </span>
        })
    }

    return <div className={styles.pagination}>
        <div className={styles.list}>
            <button onClick={toPrevPage}>previous</button>

            {getPageList()}

            <button onClick={toNextPage}>next</button>
        </div>

    </div>
}


Pagination.defaultProps = {
    pageSize: 10,
    itemsCount: 10,
    currentPage: 1,
    onPageChanged: () => {
    },
}

Pagination.propTypes = {
    pageSize: PropTypes.number,
    itemsCount: PropTypes.number,
    currentPage: PropTypes.number,
    onPageChanged: PropTypes.func,
}
export default Pagination;