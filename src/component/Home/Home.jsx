import React from 'react';
import SlideShow from './slideShow/slideShow'
import CategoryCards from './CategoryCards/CategoryCards';
// import paintSmear from '../../image/slideshow/paintSmear.png'
import styles from './Home.module.scss'

const LandingPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.slider}>
                <div className={styles.leftSide}>
                    <h1>THINK OF A WELCOME SENTENCE</h1>
                    <h2>add some description of the website and what we offer</h2>
                    <div className={styles.categoryCardsContainer}>
                        <CategoryCards/>    
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <SlideShow/>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
