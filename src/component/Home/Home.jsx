import React from 'react';
import SlideShow from './slideShow/slideShow'
import CategoryCards from './CategoryCards/CategoryCards';
// import paintSmear from '../../image/slideshow/paintSmear.png'
import styles from './Home.module.scss'

const LandingPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.background}>

            <div className={styles.slider}>
                <div className={styles.leftSide}>
                    <h1 className={styles.intro}>WELCOME TO THE SHUTTLE</h1>
                    <p className={styles.description}>Home of all your badminton needs</p>
                    <div className={styles.categoryCardsContainer}>
                        <CategoryCards/>    
                    </div>
                </div>
                <div className={styles.rightSide}>
                    <SlideShow/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default LandingPage;
