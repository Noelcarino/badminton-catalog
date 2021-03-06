import React from 'react';
//import Test from './test';
import { Beginner, Intermediate, Advance, NavBar, DropDownMenu, Apparel, Racquet, Shoes, Strings, Home } from './component';
import styles from './App.module.scss'

import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

const App = () => {
    return (
        <>
            <Router>
                <NavBar/>
                {/* <DropDownMenu/> */}
                <Switch>
                    <Route component={Beginner} path='/beginner'/>
                    <Route component={Intermediate} path='/intermediate'/>
                    <Route component={Advance} path='/advance'/>
                    <Route component={Apparel} path='/apparel'/>
                    <Route component={Racquet} path='/racquet'/>
                    <Route component={Shoes} path='/shoes'/>
                    <Route component={Strings} path='/strings'/>
                    <Route component={Home} exact path='/'/>
                </Switch>
            </Router>
            {/* <Test /> */}
        </>
    )
}

export default App;
