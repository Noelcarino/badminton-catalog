import React from 'react';
import styles from './NavBar.module.scss'

import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={styles.container}>  
                <Link to='/'>Logo, possible on click to home</Link>
                <div className={styles.category}>
                <Link to='/beginner'>Beginner</Link>
                <Link to='/intermediate'>intermediate</Link>
                <Link to='/advance'>Advance</Link>
                </div>

                <input placeholder='Search'></input>

        </div>  
    )
}

export default NavBar;
