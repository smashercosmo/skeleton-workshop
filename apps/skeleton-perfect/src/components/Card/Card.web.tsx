import type { ReactElement, ReactNode } from "react";

import { Skeleton } from "@components/Skeleton";

import styles from "./Card.module.css";

type Element = ReactElement<{ children?: ReactNode }> | string | number;

type Props = {
  isLoading?: boolean;
  data?: {
    imageURL: string;
    videoURL: string;
    header: Element;
    paragraph1: Element;
    paragraph2: Element;
  };
};

export function Card({ isLoading, data }: Props) {
  return (
    <div>
      <div className={styles.root}>
        <div className={styles.left}>
          <skeleton-web loading={isLoading}>
            <img className={styles.image} width={400} src={data?.imageURL ?? ""} alt="" />
          </skeleton-web>
          <skeleton-web loading={isLoading}>
            <video id="video" className={styles.video} controls width={400}>
              <source src="/shared-assets/videos/flower.webm" type="video/webm" />
            </video>
          </skeleton-web>
        </div>
        <div className={styles.right}>
          <h3 className={styles.header}>
            <skeleton-web loading={isLoading}>
              {data?.header ??
                "This is a placeholder text. This is a placeholder text. This is a placeholder text. This is a placeholder text. This is a placeholder text. This is a placeholder text. This is a placeholder text. This is a placeholder text. This is a placeholder text."}
            </skeleton-web>
          </h3>
          <p className={styles.paragraph}>
            <Skeleton>
              {data?.paragraph2 ??
                "This is a placeholder text. This is a placeholder text. This is a placeholder text. This is a placeholder text. This is a placeholder text. This is a placeholder text. This is a placeholder text. This is a placeholder text. This is a placeholder text."}
            </Skeleton>
          </p>
        </div>
      </div>
    </div>
  );
}
