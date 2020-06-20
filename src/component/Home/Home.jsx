import React from 'react';
import categoryCards from './CategoryCards/CategoryCards'

import styles from './Home.module.scss'
import CategoryCards from './CategoryCards/CategoryCards';

const LandingPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.slider}>
                <div className={styles.intro}>
                    <h1>THINK OF A WELCOME SENTENCE</h1>
                    <h2>add some description of the website and what we offer</h2>
                </div>
                <div className={styles.image}>
                    <h1>have a rotating set of images. probably 1 for each category. Create an array of images and rotate through them probably? this is where the actual "slider" feature will be</h1>
                </div>
            </div>
            <div className={styles.categoryCards}>
                <CategoryCards/>
            </div>
        </div>
    )
}

export default LandingPage;
