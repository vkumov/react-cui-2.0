import React, { FC, PropsWithChildren } from "react";
import { appendClass as ac } from "../../utils";

/**
 * Modal Header
 */

type ModalHeaderProps = PropsWithChildren<{
  className?: string;
}>;

export const ModalHeader: FC<ModalHeaderProps> = ({
  className = null,
  children,
  ...props
}) => (
  <div className={`modal__header${ac(className)}`} {...props}>
    {children}
  </div>
);
