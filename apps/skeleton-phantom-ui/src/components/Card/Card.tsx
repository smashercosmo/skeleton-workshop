import styles from "./Card.module.css";

export function Card({ isLoading = false }: { isLoading?: boolean }) {
  return (
    <div>
      <div className={styles.root}>
        <div className={styles.left}>
          <img className={styles.image} width={400} src="https://placehold.co/400x225" alt="" />
          <video className={styles.video} controls width={400} height={225}>
            <source src="/shared-assets/videos/flower.webm" type="video/webm" />
            <source src="/shared-assets/videos/flower.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.right}>
          <h3 className={styles.header}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br />
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h3>
          {isLoading ? (
            <p className={styles.paragraph} data-shimmer-ignore>
              <phantom-ui loading={isLoading} count={5} animation="pulse">
                <span className={styles.line}>&nbsp;</span>
              </phantom-ui>
            </p>
          ) : (
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
