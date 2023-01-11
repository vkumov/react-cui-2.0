import React, { FC } from 'react';

type ConditionalWrapperProps = {
    condition: boolean;
    wrapper: JSX.Element;
    children: React.ReactNode;
};
declare const ConditionalWrapper: FC<ConditionalWrapperProps>;
type IfProps = {
    condition: boolean;
    children: React.ReactNode;
};
declare const DisplayIf: FC<IfProps>;

export { ConditionalWrapper, DisplayIf };
