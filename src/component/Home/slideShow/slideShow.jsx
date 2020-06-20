import React from 'react';

import player1 from '../../../image/slideshow/player1.png'
import player2 from '../../../image/slideshow/player2.png'
import player3 from '../../../image/slideshow/player3.png'



import styles from './slideShow.module.scss'

import { Fade } from 'react-slideshow-image';
 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const SlideShow = () => {
  return (
    <div className={styles.container}>
      <Fade {...fadeProperties}>
            <img className={styles.image} alt='slideShowImage' src={player1} />
            <img className={styles.image} alt='slideShowImage' src={player2} />
            <img className={styles.image} alt='slideShowImage' src={player3} />
      </Fade>
    </div>
  )
}

export default SlideShow

