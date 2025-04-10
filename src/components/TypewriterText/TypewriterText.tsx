'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './TypewriterText.module.scss';

interface Props {
    text: string;
    speed?: number; // 每個字多久打出來（毫秒）
}

export default function TypewriterText({ text, speed = 60 }: Props) {
    const [displayedText, setDisplayedText] = useState('');
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef<HTMLParagraphElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        let i = 0;
        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + text.charAt(i));
            i++;
            if (i >= text.length) clearInterval(interval);
        }, speed);

        return () => clearInterval(interval);
    }, [hasStarted, text, speed]);

    return (
        <p ref={ref} className={styles.typewriter}>
            {displayedText}
        </p>
    );
}
