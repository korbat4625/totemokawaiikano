'use client';
import { useRef } from 'react';
import styles from './KanoText.module.scss';

interface Props {
  children: string;
}

export default function KanoText({ children }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = () => {
    audioRef.current?.play();
  };

  const parsed = children.split(/(香乃)/).map((part, idx) =>
    part === '香乃' ? (
      <span
        key={idx}
        className={styles.kanoBounce}
        onMouseEnter={playSound}
      >
        {part}
        <audio
          ref={audioRef}
          src={'/audio/slow-bubble2s.mp3'}
          preload="auto"
        />
      </span>
    ) : (
      <span key={idx}>{part}</span>
    )
  );

  return <>{parsed}</>;
}
