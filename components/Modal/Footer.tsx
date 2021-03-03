import React, { FC, PropsWithChildren } from "react";

import { appendClass as ac } from "../../utils";

/**
 * Modal Footer
 */

type ModalFooterProps = PropsWithChildren<{
  className?: string;
}>;

export const ModalFooter: FC<ModalFooterProps> = ({
  className = null,
  children,
  ...props
}) => (
  <div className={`modal__footer${ac(className)}`} {...props}>
    {children}
  </div>
);
