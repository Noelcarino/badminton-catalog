import React from 'react';
import { Apparel, NavBar, Racquet, Shoes, Strings} from './component';
import styles from './App.module.scss'

const App = () => {
    return (
        <>
            <h1 className={styles.App}>APP</h1>
            <Apparel/>
            <NavBar/>
            <Racquet/>
            <Shoes/>
            <Strings/>

        </>
    )
}

export default App;
