import React, { FC } from "react";
declare type ConditionalWrapperProps = {
    condition: boolean;
    wrapper: JSX.Element;
    children: React.ReactNode;
};
declare const ConditionalWrapper: FC<ConditionalWrapperProps>;
declare type IfProps = {
    condition: boolean;
    children: React.ReactNode;
};
declare const DisplayIf: FC<IfProps>;
export { DisplayIf, ConditionalWrapper };
