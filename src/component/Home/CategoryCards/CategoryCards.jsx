import React from 'react'
import styles from './CategoryCards.module.scss'

import apparel from '../../../image/card/apparel.png';
import racquet from '../../../image/card/racquet.png';
import shoe from '../../../image/card/shoes.png';
import strings from '../../../image/card/strings.png';

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
            <div className={styles.cardContainer}>
                {dataSet.map(({title, image, link}) => (
                    <Link className={styles.link} to={link}>
                        <div className={styles.card}>
                            <img className={styles.image} src={image} alt='cardImage'/>
                            <h4 className={styles.title}>{title}</h4>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CategoryCards;
