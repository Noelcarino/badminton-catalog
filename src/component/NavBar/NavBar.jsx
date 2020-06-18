import React from 'react';
import {Apparel, Racquet, Shoes, Strings} from './../index'
import styles from './NavBar.module.scss'

function NavBar() {
    return (
        <div className={styles.container}>
            <h1>navbar</h1>
            <Apparel/>
            <Racquet/>
            <Shoes/>
            <Strings/>
            <input placeholder='Search'></input>

        </div>
    )
}

export default NavBar;
