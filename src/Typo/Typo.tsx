import React, { type FC, type PropsWithChildren } from "react";
import cx from "classnames";

interface DisplayNoSizeProps {
  as?: React.FunctionComponent<any> | React.ComponentClass<any> | string;
  className?: string;
}

interface DisplaySizeProps {
  size: 0 | 1 | 2 | 3 | 4;
}

export const Display: FC<
  PropsWithChildren<DisplayNoSizeProps & DisplaySizeProps>
> = ({ as = "h1", className = null, size, ...props }) =>
  React.createElement(as, {
    ...props,
    className: cx(`display-${size}`, className),
  });

export const Display0: FC<PropsWithChildren<DisplayNoSizeProps>> = (props) => (
  <Display {...props} size={0} />
);
export const Display1: FC<PropsWithChildren<DisplayNoSizeProps>> = (props) => (
  <Display {...props} size={1} />
);
export const Display2: FC<PropsWithChildren<DisplayNoSizeProps>> = (props) => (
  <Display {...props} size={2} />
);
export const Display3: FC<PropsWithChildren<DisplayNoSizeProps>> = (props) => (
  <Display {...props} size={3} />
);
export const Display4: FC<PropsWithChildren<DisplayNoSizeProps>> = (props) => (
  <Display {...props} size={4} />
);
