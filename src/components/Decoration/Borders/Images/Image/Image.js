import React from 'react';

import styles from './Image.modules.css';

const image = props => {
    return (
        <img 
        src={props.src}
        className={styles.Image}
        
        style={{ 
        height: props.height, 
        width: props.width,
        top: props.top,
        bottom: props.bottom,
        left: props.left,
        right: props.right,
        position: props.position,
        boxShadow: props.shadow,
        border: props.border,
        borderRadius: props.bradius,
        zIndex: props.zIndex,
        objectFit: props.objectFit,
        margin: props.margin,
        float: props.float,
        padding: props.padding,
        }}
        >
        </img>
    )
};

export default image;