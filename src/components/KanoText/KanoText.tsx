'use client';
import { useRef } from 'react';
import styles from './KanoText.module.scss';
import { useIsIOS } from '@/hooks/useIsIOS';

interface Props {
  children: string;
}

export default function KanoText({ children }: Props) {
  const isRealIOS = useIsIOS();

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((e) => {
        // alert('播放被拒絕:' + e);
        console.log('播放被拒絕:', e);
      });
    }
  };

  const parsed = children.split(/(香乃)/).map((part, idx) =>
    part === '香乃' ? (
      <span
        key={idx}
        className={styles.kanoBounce}
        onClick={playSound}
        onTouchStart={playSound}
        onMouseEnter={isRealIOS ? undefined : playSound}
      >
        {part}
      </span>
    ) : (
      <span key={idx}>{part}</span>
    )
  );

  return (
    <>
      {parsed}
      <audio
        ref={audioRef}
        src="/audio/slow-bubble2s.mp3"
        preload={isRealIOS ? 'none' : 'auto'}
      />
    </>
  );
}