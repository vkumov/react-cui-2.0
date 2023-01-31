import React, { FC, HTMLProps, PropsWithChildren, forwardRef } from "react";

import { appendClass as ac } from "src/utils";

/**
 * Modal Body
 */

type ModalBodyProps = PropsWithChildren<{
  className?: string;
}> &
  HTMLProps<HTMLDivElement>;

export const ModalBody: FC<ModalBodyProps> = forwardRef(
  ({ className = null, children, ...props }, ref) => (
    <div className={`modal__body${ac(className)}`} {...props} ref={ref}>
      {children}
    </div>
  )
);
