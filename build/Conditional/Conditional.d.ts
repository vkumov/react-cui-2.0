import React, { FC } from "react";
declare type ConditionalWrapperProps = {
    condition: boolean;
    wrapper: JSX.Element;
    children: React.ReactNode;
};
export declare const ConditionalWrapper: FC<ConditionalWrapperProps>;
declare type IfProps = {
    condition: boolean;
    children: React.ReactNode;
};
export declare const DisplayIf: FC<IfProps>;
export {};
