import React, { forwardRef, useEffect, useRef, type HTMLProps } from "react";
import { useMergeRefs, type offset } from "@floating-ui/react";
import cx from "classnames";
import type { TransitionStatus } from "react-transition-group";

import styles from "./Popover.module.scss";

export const GenericPopover = forwardRef<
  HTMLDivElement,
  HTMLProps<HTMLDivElement> & {
    wrapperClassName?: string;
    state: TransitionStatus;
    offset?: Parameters<typeof offset>[0];
  }
>(function GenericPopoverRefed(
  {
    className,
    children,
    wrapperClassName,
    state,
    offset: offsetOptions,
    ...props
  },
  ref
) {
  const ownRef = useRef<HTMLDivElement>(null);
  const merged = useMergeRefs([ref, ownRef]);

  useEffect(() => {
    const r = ownRef.current;

    if (r && offsetOptions && typeof offsetOptions !== "function")
      r.style.setProperty(
        "--offset",
        `${
          typeof offsetOptions === "number"
            ? offsetOptions
            : offsetOptions.mainAxis ?? 4
        }px`
      );

    return () => {
      if (r) r.style.setProperty("--offset", "4px");
    };
  }, [offsetOptions]);

  return (
    <div
      ref={merged}
      className={cx(styles.wrapper, wrapperClassName, {
        [styles.disappear]: state === "exiting" || state === "exited",
      })}
      {...props}
    >
      <div
        className={cx(
          "panel panel--bordered panel--raised",
          styles.body,
          className
        )}
        tabIndex={-1}
      >
        {children}
      </div>
    </div>
  );
});
