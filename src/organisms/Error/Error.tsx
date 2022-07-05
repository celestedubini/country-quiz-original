import React from 'react';
import HeadingH2 from "../../atoms/Heading-H2/HeadingH2";
import styles from './Error.module.css'

function Error() {
    return (
        <div className={styles.errorContainer}>
            <HeadingH2 copy="Oops! Something went wrong." className="question"/>
            <p>Please try again.</p>
        </div>
    );
}

export default Error;