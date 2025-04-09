// components/PhotoFrame.tsx
import styles from './PhotoFrame.module.scss';
import React from 'react';

export default function PhotoFrame({children}:{children: React.ReactNode}) {
    return (
        <div className={styles.photoFrame}>
            {children}
        </div>
    );
}
