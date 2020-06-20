import React from 'react'
import styles from './CategoryCards.module.scss'

import { Link } from 'react-router-dom'
const CategoryCards = () => {
    const dataSet = [
        {
            name: 'Apparel',
            image:'image',
            link:'/apparel',
        },
        {
            name: 'Racquets',
            image:'image',
            link:'/racquet',
        },
        {
            name: 'Shoes',
            image:'image',
            link:'/shoes',
        },
        {
            name: 'Strings',
            image:'image',
            link:'/strings',
        }
    ]

    return (
        <div className={styles.container}>
            {dataSet.map((data) => (
                <Link to={data.link}>
                    <div className={styles.cardContainer}>
                        <h1 className={styles.image}>{data.image}</h1>
                        <h1 className={styles.name}>{data.name}</h1>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default CategoryCards;
