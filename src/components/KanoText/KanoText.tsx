'use client';
import useSound from 'use-sound';
// import bubbleSound from "@/assets/sounds/slow-bubble2s.mp3";
// import { useEffect, useRef } from 'react';
import styles from './KanoText.module.scss';
// import { useIsIOS } from '@/hooks/useIsIOS';

interface Props {
  children: string;
}

export default function KanoText({ children }: Props) {
  const [play, { stop }] = useSound('/audio/slow-bubble2s.mp3')
  const parsed = children.split(/(香乃)/).map((part, idx) =>
    part === '香乃' ? (
      <span
        key={idx}
        className={styles.kanoBounce}
        onMouseEnter={() => play()} onMouseLeave={() => stop()}
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
    </>
  );
}