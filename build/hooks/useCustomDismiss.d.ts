import { ReferenceType, FloatingContext, ElementProps } from '@floating-ui/react';

type Options = {
    enabled?: boolean;
    modal?: boolean;
};
declare function useCustomDismiss<RT extends ReferenceType = ReferenceType>({ open, onOpenChange, events, nodeId, elements: { floating }, }: FloatingContext<RT>, { enabled, modal }?: Options): ElementProps;

export { useCustomDismiss };
