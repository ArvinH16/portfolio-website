import { useReducedMotion } from 'framer-motion';
import { forwardRef, useEffect, useId, useRef } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

const path =
  'M0 29 20 0h7v16h14v-5.85L48 0v29h-7v-8H27v8h-7v-8h-6.48L8 29H0Zm20-17.4L16.97 16H20v-4.4Z';

// Outer contour only (no counter), used for the light trace
const outline = 'M0 29 20 0h7v16h14v-5.85L48 0v29h-7v-8H27v8h-7v-8h-6.48L8 29H0Z';

/**
 * Pass `trace` to run a light around the outline on mount, and change
 * its value (e.g. increment a counter) to replay it.
 */
export const Monogram = forwardRef(({ highlight, trace, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;
  const glowRef = useRef();
  const lineRef = useRef();
  const reduceMotion = useReducedMotion();
  const hasTrace = trace !== undefined && trace !== false;

  useEffect(() => {
    if (!hasTrace || reduceMotion) return;

    const keyframes = [
      { strokeDashoffset: 0, opacity: 0 },
      { opacity: 1, offset: 0.12 },
      { opacity: 1, offset: 0.8 },
      { strokeDashoffset: -100, opacity: 0 },
    ];

    const options = {
      duration: 1600,
      // Give the page a moment to settle before the first run
      delay: trace === true || trace === 0 ? 600 : 0,
      easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    };

    const animations = [glowRef.current, lineRef.current].map(element =>
      element?.animate(keyframes, options)
    );

    return () => animations.forEach(animation => animation?.cancel());
  }, [hasTrace, trace, reduceMotion]);

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="48"
      height="29"
      viewBox="0 0 48 29"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d={path} />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
      {hasTrace && (
        <>
          <path ref={glowRef} className={styles.traceGlow} d={outline} pathLength="100" />
          <path ref={lineRef} className={styles.traceLine} d={outline} pathLength="100" />
        </>
      )}
    </svg>
  );
});
