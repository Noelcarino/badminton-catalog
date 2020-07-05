import React from 'react';
import styles from './Apparel.module.scss'
import shoe from '../../../image/shoes/badminton-shoe.jpeg';

export default class ApparelItem extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(this.props.apparel);
    }
    render(){
        return (
            <div className={styles.apparel_item}>
                <div className={styles.apparel_fake_image}>
                    <img 
                    src={shoe}
                    className={styles.apparel_image}
                    alt="badminton-shoe"/>
                </div>
                <p>Name: {this.props.apparel.apparel_name}</p>
                <p>Brand: {this.props.apparel.apparel_brand}</p>
                <p>Size: {this.props.apparel.apparel_size}</p>
            </div>
        )
    }
}