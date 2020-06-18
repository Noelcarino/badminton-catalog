import React from 'react';
import styles from './Racquet.module.scss'

import {Link} from 'react-router-dom';

const Racquet = () => {
    return (
        <div className={styles.container}>
            <Link to='/racquet'>
            <h1>Racquet</h1>
            </Link>
        </div>
    )
}

export default Racquet;
