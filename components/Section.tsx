import React, { FC, PropsWithChildren } from "react";

import { appendClass } from "../utils";

interface SectionProps {
  className: string;
}

const Section: FC<PropsWithChildren<SectionProps>> = ({
  children,
  className = null,
}) => <div className={`section${appendClass(className)}`}>{children}</div>;

export { Section };
