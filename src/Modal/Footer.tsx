import React, { FC, HTMLProps, PropsWithChildren, forwardRef } from "react";

import { appendClass as ac } from "src/utils";

/**
 * Modal Footer
 */

type ModalFooterProps = PropsWithChildren<{
  className?: string;
}> &
  HTMLProps<HTMLDivElement>;

export const ModalFooter: FC<ModalFooterProps> = forwardRef(
  ({ className = null, children, ...props }, ref) => (
    <div className={`modal__footer${ac(className)}`} {...props} ref={ref}>
      {children}
    </div>
  )
);
