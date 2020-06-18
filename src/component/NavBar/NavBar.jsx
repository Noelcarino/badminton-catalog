/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styles from './NavBar.module.scss';

import testLogo from '../../image/testLogo.png';

import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={styles.container}>  
                <Link to='/'>
                    <img src={testLogo} alt='test image'/>
                </Link>
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
