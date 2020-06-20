/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useState} from 'react';
import DropDownMenu from './DropDownMenu/DropDownMenu';
import styles from './NavBar.module.scss';

import testLogo from '../../image/testLogo.png';

import {Link} from "react-router-dom";

const NavBar = () => {
    const [hoverBeginner, setHoverBeginner] = useState(false)
    const [hoverIntermediate, setHoverIntermediate] = useState(false)
    const [hoverAdvance, setHoverAdvance] = useState(false)

    return (
        <div className={styles.container}>  
                <Link to='/'>
                    <img src={testLogo} alt='test image'/>
                </Link>

                <div
                    className={styles.categoryContainer}
                >
                    <div className={styles.dropDownWrapper}
                    onMouseEnter={() => setHoverBeginner(true)}
                    onMouseLeave={() => setHoverBeginner(false)}
                    >
                        <Link className={styles.link} to='/beginner'>Beginner</Link>
                        {hoverBeginner? <DropDownMenu/>:null}
                    </div>

                    <div className={styles.dropDownWrapper}
                    onMouseEnter={() => setHoverIntermediate(true)}
                    onMouseLeave={() => setHoverIntermediate(false)}
                    >
                        <Link className={styles.link} to='/intermediate'>intermediate</Link>
                        {hoverIntermediate? <DropDownMenu/>:null}
                    </div>

                    <div className={styles.dropDownWrapper}
                    onMouseEnter={() => setHoverAdvance(true)}
                    onMouseLeave={() => setHoverAdvance(false)}
                    >
                        <Link className={styles.link} to='/advance'>Advance</Link>
                        {hoverAdvance? <DropDownMenu/>:null}
                    </div>






                </div>

                <input className={styles.searchBar} placeholder='Search'></input>

        </div>  
    )
}

export default NavBar;
