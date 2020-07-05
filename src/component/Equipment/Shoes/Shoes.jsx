import React from 'react';
import styles from './Shoes.module.scss'
import { useEffect, useState } from 'react';


function Shoes() {
    const [data, setState] = useState([]);

    useEffect( () => {
        fetch('/api/getshoes.php')
            .then(res => res.json())
            .then(res => {
                setState(res)
            })
    }, []);

    let shoesToRender;

    if (data) {
        shoesToRender = data.map( shoes => {
            return <div key={shoes.id}>{shoes.shoe_name}</div>
        })
    } else {
        shoesToRender = "Loading...";
    }

    return (
        <div className={styles.container}>
            <h1>shoe</h1>
            {shoesToRender}
        </div>
    )
}

export default Shoes;
