import React from 'react';
import styles from './Home.module.scss';
import Search from "./components/Search/Search";


function Home() {
    return <div className={styles.wrapper}>
        <Search/>
    </div>
}

export default Home;