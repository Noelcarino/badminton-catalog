import React from 'react'
import ApparelItem from './apparelitem';
import styles from './Apparel.module.scss'
import { useEffect, useState } from 'react';


// import {Link} from 'react-router-dom';


const Apparel = () => {
    const [data, setState] = useState([]);
    useEffect(() => {
        fetch('/api/getapparel.php')
            .then( res => res.json())
            .then(res => {
                setState(res);
            })
    }, [])

    let apparelToRender;

    if (data) {
        apparelToRender = data.map( apparel => {
            return <ApparelItem key={apparel.id} apparel={apparel} />
            // return <div key={apparel.id}>{apparel.apparel_name}</div>
        })
    } else {
        apparelToRender = "Loading..";
    }
    return (
        <div className={styles.container}>
            {/* <Link to='/apparel'> */}
            <h1>Apparel</h1>
            {/* </Link> */}
            <div className={styles.apparel_container}>
                {apparelToRender}
            </div>

        </div>
    )
}

export default Apparel;
