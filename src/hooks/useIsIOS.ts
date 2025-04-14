'use client'; // ← 加這個保證只在 Client 執行
import { useEffect, useState } from 'react';

export function useIsIOS(): boolean {
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        const ua = navigator.userAgent;
        const isiOS =
            /iPhone|iPad|iPod/i.test(ua) ||
            (ua.includes('Macintosh') && 'ontouchend' in document);

        setIsIOS(isiOS);
    }, []);

    return isIOS;
}