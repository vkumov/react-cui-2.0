import React, { type FC } from "react";
type ConditionalWrapperProps = {
    condition: boolean;
    wrapper: JSX.Element;
    children: React.ReactNode;
};
export declare const ConditionalWrapper: FC<ConditionalWrapperProps>;
type IfProps = {
    condition: boolean;
    children: React.ReactNode;
};
export declare const DisplayIf: FC<IfProps>;
export {};
