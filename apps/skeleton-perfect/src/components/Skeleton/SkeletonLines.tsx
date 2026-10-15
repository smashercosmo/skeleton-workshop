import clsx from "clsx";
import { Fragment } from "react";

import commonStyles from "./Skeleton.module.css";
import styles from "./SkeletonLines.module.css";

export function SkeletonLines({ lines }: { lines?: number }) {
  if (!lines) {
    return null;
  }

  return (
    <>
      {Array.from({ length: lines }).map((_, index) => {
        return (
          <Fragment key={index}>
            <span key={index} className={clsx(styles.text, commonStyles.skeleton)}>
              &nbsp;
            </span>
            {index === lines - 1 ? <br /> : null}
          </Fragment>
        );
      })}
    </>
  );
}
