import { ReactNode, FC } from 'react';
import { Placement } from '@floating-ui/react';

type WithTooltipProps = {
    children: JSX.Element;
    tooltip: ReactNode;
    placement?: Placement;
};
declare const WithTooltip: FC<WithTooltipProps>;

export { WithTooltip, WithTooltipProps };
