import React from 'react';

import styles from './Neon.module.css';

const neon = (props) => {
    return (
        <div className={styles.Neon} style={{
            height: props.height, 
            width: props.width,
            left: props.left,
            top: props.top,
            right: props.right,
            bottom: props.bottom,
            border: props.border,
            boxShadow: props.shadow,
            borderRadius: props.bradius,
            backgroundColor: props.bgcolor,
            zIndex: props.zindex,
        }}></div>
    )
}

export default neon;