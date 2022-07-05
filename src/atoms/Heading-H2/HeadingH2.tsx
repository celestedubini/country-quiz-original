import React from 'react';
import styles from './HeadingH2.module.css'

interface HeadingH2Props {
    copy: string
    className: 'question' | 'results'
}

function HeadingH2({copy, className}: HeadingH2Props) {
    return (
        <h2 className={styles[className]}>{copy}</h2>
    );
}

export default HeadingH2;