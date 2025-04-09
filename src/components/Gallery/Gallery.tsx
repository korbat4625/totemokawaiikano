'use client';
import PhotoFrame from '@/components/PhotoFrame/PhotoFrame';
import styles from '@/styles/Home.module.scss';
import { motion } from 'framer-motion';
import kano08 from '@/assets/images/kano-08.jpg';
import kano02 from '@/assets/images/kano-02.jpg';
import kano09 from '@/assets/images/kano-09.jpg';
import kano13 from '@/assets/images/kano-13.jpg';
import Image from 'next/image';

const photos = [
    kano08,
    // kano02,
    kano13,
    kano09
];

interface IProps {

}

export const Gallery: React.FC<IProps> = () => {
    return <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className={styles.gallery}
        id="gallery"
    >
        <h2>!! 超~級 !! 可 !! 愛 !! 📸</h2>
        <div className={styles.grid}>
            {photos.map((src, idx) => (
                <PhotoFrame key={idx}>
                    <div className={styles.card}>
                        {/* <img src={src} alt={`回憶 ${idx + 1}`} /> */}
                        <Image src={src} alt={`回憶 ${idx + 1}`}></Image>
                    </div>
                </PhotoFrame>
            ))}
        </div>
    </motion.section>
};  