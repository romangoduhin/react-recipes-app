import React from 'react';
import styles from './HomePage.module.scss';
import Search from "./components/Search/Search";


function HomePage() {
    return <div className={styles.wrapper}>
        <Search/>
    </div>
}

export default HomePage;