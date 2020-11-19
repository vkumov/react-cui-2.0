import React, { FC, PropsWithChildren } from "react";
import PropTypes from "prop-types";

import { appendClass as ac } from "../../utils";

/**
 * Modal Body
 */

type ModalBodyProps = PropsWithChildren<{
  className?: string;
}>;

export const ModalBody: FC<ModalBodyProps> = ({
  className = null,
  children,
  ...props
}) => (
  <div className={`modal__body${ac(className)}`} {...props}>
    {children}
  </div>
);

ModalBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
