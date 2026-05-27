import clsx from "clsx";
import {
  cloneElement,
  type ReactElement,
  type ReactNode,
  type Ref,
  useContext,
  Children,
  version as reactVersion,
} from "react";

import { SkeletonContext } from "./context";
import styles from "./Skeleton.module.css";
import { SkeletonLines } from "./SkeletonLines";

const transparentGif = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

function inertValue(value: boolean) {
  const pieces = reactVersion.split(".");
  const major = parseInt(pieces[0], 10);
  if (major >= 19) {
    return value;
  }
  // compatibility with React < 19
  return value ? "true" : undefined;
}

export function Skeleton({
  lines,
  children,
}: {
  lines?: number;
  children:
    | (ReactElement<{
        children?: ReactNode;
        className?: string;
        src?: string;
        poster?: string;
        controls?: boolean;
        inert?: boolean | "true";
        ref?: Ref<HTMLElement>;
      }> & {
        ref?: Ref<HTMLElement>;
      })
    | string
    | number;
}) {
  const isLoading = useContext(SkeletonContext);

  if (isLoading == null) {
    return children;
  }

  if (typeof children === "string" || typeof children === "number") {
    return <>{isLoading ? <span className={clsx(styles.skeleton, styles.text)}>{children}</span> : children}</>;
  }

  const child = Children.only(children);
  const ref = child.props.ref ?? child.ref;
  const grandchildren = child.props.children;

  return (
    <>
      {isLoading
        ? cloneElement(
            child,
            {
              ref,
              src: child.type === "img" ? transparentGif : undefined,
              poster: child.type === "video" ? transparentGif : undefined,
              controls: child.type === "video" ? false : undefined,
              inert: inertValue(true),
              className: lines ? child.props.className : clsx(child.props.className, styles.skeleton),
            },
            lines ? (
              <SkeletonLines lines={lines} />
            ) : grandchildren ? (
              typeof grandchildren === "string" && !grandchildren.trim() ? (
                <>&nbsp;</>
              ) : (
                grandchildren
              )
            ) : null,
          )
        : child}
    </>
  );
}
