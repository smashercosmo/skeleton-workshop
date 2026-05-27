import { Skeleton } from "@mui/material";

import styles from "./Card.module.css";

type Props = {
  isLoading: boolean;
};

export function Card({ isLoading }: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        {isLoading ? (
          <Skeleton className={styles.image} height="auto" variant="rectangular" />
        ) : (
          <img className={styles.image} width={400} src="https://placehold.co/400x225" alt="" />
        )}
        {isLoading ? (
          <Skeleton className={styles.video} height="auto" variant="rectangular" />
        ) : (
          <video className={styles.video} controls width={400} height={225}>
            <source src="/shared-assets/videos/flower.webm" type="video/webm" />
            <source src="/shared-assets/videos/flower.mp4" type="video/mp4" />
          </video>
        )}
      </div>
      <div className={styles.right}>
        {isLoading ? (
          <div>
            <Skeleton className={styles.header} variant="text" />
            <Skeleton className={styles.header} variant="text" />
            <Skeleton className={styles.header} variant="text" />
            <Skeleton className={styles.header} variant="text" />
          </div>
        ) : (
          <h3 className={styles.header}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br />
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h3>
        )}
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
    </div>
  );
}
