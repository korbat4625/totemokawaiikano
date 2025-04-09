'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './MemoriesBlock.module.scss';

export default function MemoriesBlock() {
    const [photos, setPhotos] = useState<string[]>([]);
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
    const dialogRef = useRef<HTMLDialogElement>(null);

    const fetchPhotos = async (count: number) => {
        const res = await fetch(`/api/random-photos?count=${count}`);
        const data = await res.json();
        setPhotos(data.photos);
    };

    // ✅ 初次載入依照裝置寬度決定載入幾張
    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        const count = isMobile ? 6 : 5;
        fetchPhotos(count);
    }, []);

    const [gridKey, setGridKey] = useState(0);

    const refresh = async () => {
        const isMobile = window.innerWidth < 768;
        const count = isMobile ? 6 : 5;
        const res = await fetch(`/api/random-photos?count=${count}`);
        const data = await res.json();
        setPhotos(data.photos);

        // ✅ 變更 key 讓 <div key={gridKey}> 觸發動畫
        setGridKey(prev => prev + 1);
    };

    const openDialog = (src: string) => {
        setSelectedPhoto(src);
        dialogRef.current?.showModal();
    };

    const closeDialog = () => {
        dialogRef.current?.close();
        setSelectedPhoto(null);
    };

    return (
        <div className={styles.memoriesBlock}>
            <h2 className={styles.title}>我們的回憶區塊</h2>

            <div key={gridKey} className={styles.grid}>
                {photos.map((src, i) => (
                    <div className={styles.photo} key={i} onClick={() => openDialog(src)}>
                        <Image
                            src={src}
                            alt={`回憶 ${i + 1}`}
                            fill
                            sizes="(max-width: 600px) 100vw, 300px"
                            loading="lazy"
                            style={{ objectFit: 'cover', borderRadius: '6px' }}
                        />
                    </div>
                ))}
            </div>


            <button className={styles.button} onClick={refresh}>
                換一批回憶 ✨
            </button>

            <dialog ref={dialogRef} className={styles.dialog}>
                {selectedPhoto && (
                    <div className={styles.dialogContent}>
                        <img src={selectedPhoto} alt="原圖" />
                        <button onClick={closeDialog} className={styles.closeButton}>關閉</button>
                    </div>
                )}
            </dialog>
        </div>
    );
}
