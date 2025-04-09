'use client';
import { useState, useEffect } from 'react';
import styles from './TypewriterText.module.scss';

interface Props {
    text: string;
    speed?: number; // 每個字多久打出來（毫秒）
}

export default function TypewriterText({ text, speed = 60 }: Props) {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + text.charAt(i));
            i++;
            if (i >= text.length) clearInterval(interval);
        }, speed);
        return () => clearInterval(interval);
    }, [text, speed]);

    return <p className={styles.typewriter}>{displayedText}</p>;
}
