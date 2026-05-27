import type { ReactElement, ReactNode } from "react";

import { Skeleton } from "@components/Skeleton";

import styles from "./Card.module.css";

type Element = ReactElement<{ children?: ReactNode }> | string | number;

type Props = {
  data?: {
    imageURL: string;
    videoURL: string;
    header: Element;
    paragraph1: Element;
    paragraph2: Element;
  };
};

export function Card({ data }: Props) {
  return (
    <div>
      <div className={styles.root}>
        <div className={styles.left}>
          <Skeleton>
            <img className={styles.image} width={400} src={data?.imageURL} alt="" />
          </Skeleton>
          <Skeleton>
            <video className={styles.video} controls width={400}>
              <source src={data?.videoURL} type="video/webm" />
            </video>
          </Skeleton>
        </div>
        <div className={styles.right}>
          <Skeleton lines={4}>
            <h3 className={styles.header}>{data?.header ?? ""}</h3>
          </Skeleton>
          {/* First way to render skeleton for a text block. Upside: it doesn't require placeholder text. */}
          {/* Downsides: it doesn't wrap and looks a bit less natural, requires setting `text-box-edge` and `text-box-trim` in CSS */}
          <Skeleton lines={4}>
            <p className={styles.paragraph}>{data?.paragraph1 ?? ""}</p>
          </Skeleton>
          {/* Second way to render skeleton for a text block. Upside: it wraps and looks more natural, doesn't require any additional css. */}
          {/* Downsides: needs a placeholder text. */}
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
