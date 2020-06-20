import React from 'react'
import styles from './CategoryCards.module.scss'

import apparel from '../../../image/card/apparel.png';
import racquet from '../../../image/card/racquet.png';
import shoe from '../../../image/card/shoes.png';
import strings from '../../../image/card/strings.jpg';

import { Link } from 'react-router-dom'

const dataSet = [
    {
        title: 'Apparel',
        image:apparel,
        link:'/apparel',
    },
    {
        title: 'Racquets',
        image:racquet,
        link:'/racquet',
    },
    {
        title: 'Shoes',
        image:shoe,
        link:'/shoes',
    },
    {
        title: 'Strings',
        image:strings,
        link:'/strings',
    }
]

const CategoryCards = () => {

    return (
        <div className={styles.container}>
            {dataSet.map(({title, image, link}) => (
                <Link to={link}>
                    <div className={styles.cardContainer}>
                        <img className={styles.image} src={image}/>
                        <h1 className={styles.name}>{title}</h1>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default CategoryCards;
