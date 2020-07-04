import React from 'react';
import styles from './Racquet.module.scss'

import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { render } from '@testing-library/react';

const Racquet = () => {
    const [data, setState] = useState(['hello']);
    useEffect(() => {
        fetch('/api/getdata.php')
            .then(res => res.json())
            .then(res => {
                console.log(res[0]);
                setState(res);
            })
    }, []);

    let itemsToRender;

    if (data){
        itemsToRender = data.map(racquet => {
            return <div key={racquet.id}>{racquet.racquet_name}</div>;
        })
    } else {
        itemsToRender = "Loading...";
    }
    return (
        <div className={styles.container}>
            <Link to='/racquet'>
            <h1>Racquet</h1>
            {itemsToRender}
            </Link>
        </div>
    )
}

export default Racquet;
