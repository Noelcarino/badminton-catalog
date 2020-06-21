import React from 'react'
import styles from './DropDownMenu.module.scss';

import {Link} from "react-router-dom";

const DropDownMenu = () => {
    return (
        <div className={styles.container}>
            <Link to='/apparel'>Apparel</Link>
            <Link to='/racquet'>Racquet</Link>
            <Link to='/shoes'>Shoes</Link>
            <Link to='/strings'>Strings</Link>
        </div>
    )
}

export default DropDownMenu;
