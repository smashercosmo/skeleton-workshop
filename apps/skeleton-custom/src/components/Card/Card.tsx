import type {ReactElement, ReactNode, Ref} from "react";

import { Skeleton } from "@components/Skeleton";

import styles from "./Card.module.css";

type Element = (ReactElement<{
    children?: ReactNode;
    className?: string;
    inert?: boolean | "true";
    ref?: Ref<HTMLElement>;
  }> & {
    ref?: Ref<HTMLElement>;
  })
  | string | number

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
            <h3 className={styles.header}>{data?.header ?? null}</h3>
          </Skeleton>
          <Skeleton lines={2}>
            <p className={styles.paragraph}>
              {data?.paragraph2 ?? null}
            </p>
          </Skeleton>
        </div>
      </div>
    </div>
  );
}
