import React from 'react';

import styles from './Logo.module.css';

const logo = (props) => {
    return (
        <div className={styles.Logo} style={{height: props.height}}>
            <img src={props.img} alt='mylogo'/>
        </div>
    )
};

export default logo;