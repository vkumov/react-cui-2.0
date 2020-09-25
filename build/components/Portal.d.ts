import { FC, ReactNode } from "react";
declare type PortalProps = {
    id: string;
    children: ReactNode;
};
/**
 * @example
 * <Portal>
 *   <p>Thinking with portals</p>
 * </Portal>
 */
declare const Portal: FC<PortalProps>;
export default Portal;
