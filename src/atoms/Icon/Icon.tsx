import React from 'react';
import styles from './Icon.module.css'

interface IconProps {
    icon?: boolean | null
}

function Icon({icon}: IconProps) {
    return (<div className={styles.iconContainer}>
            {icon !== null ? icon? <span className="material-icons-outlined">check_circle</span> :
                <span className="material-icons-outlined">cancel</span> : null}

        </div>

    );
}

export default Icon;