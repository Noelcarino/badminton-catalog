import React from 'react'
import styles from './DropDownMenu.module.scss';

import {Link} from "react-router-dom";

const DropDownMenu = () => {
    return (
        <div className={styles.container}>
            <Link className={styles.link} to='/apparel'>Apparel</Link>
            <Link className={styles.link} to='/racquet'>Racquet</Link>
            <Link className={styles.link} to='/shoes'>Shoes</Link>
            <Link className={styles.link} to='/strings'>Strings</Link>
            
        </div>
    )
}

export default DropDownMenu;
