import React from 'react';

import styles from './InfoHalf.module.css'

const infoHalf = props => {
    return (
        <div className={styles.InfoHalf}>
            {props.children}
        </div>
    )
};

export default infoHalf;

