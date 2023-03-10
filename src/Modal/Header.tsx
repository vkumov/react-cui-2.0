import React, { type FC, type HTMLProps, type PropsWithChildren } from "react";

import { appendClass as ac } from "src/utils";

/**
 * Modal Header
 */

type ModalHeaderProps = PropsWithChildren<{
  className?: string;
}> &
  HTMLProps<HTMLDivElement>;

export const ModalHeader: FC<ModalHeaderProps> = ({
  className = null,
  children,
  ...props
}) => (
  <div className={`modal__header${ac(className)}`} {...props}>
    {children}
  </div>
);
