import React from 'react';

import styles from './Text.module.css';

const textInfo = props => {
    return (
        <React.Fragment>
            <h1 style={{
                textAlign: 'center', 
                color: '#3090ff', 
                zIndex: '200', 
                position: 'relative'
                }}>О нас</h1>
            <p className={styles.Text}>{props.text}</p>
        </React.Fragment>
    )
};

export default textInfo;