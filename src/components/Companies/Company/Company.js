import React from 'react';

import styles from './Company.module.css'

const company = props => {
    return (
        <div className={styles.Company}>
            <div style={{width: '100%', height: '90px', verticalAlign: 'top', paddingBottom: '40px'}}>
                <img src={props.img} />
            </div>
            <div style={{width: '95%', textAlign: 'center', margin: '0 auto'}}>
                <h1>{props.name}</h1>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default company;