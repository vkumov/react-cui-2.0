import { type ComponentProps, type FC } from "react";
import { FloatingPortal } from "@floating-ui/react";
export type DynamicModalProps = {
    portalRoot?: ComponentProps<typeof FloatingPortal>["root"];
    portalId?: ComponentProps<typeof FloatingPortal>["id"];
    closeTimeout?: number;
};
export declare const DynamicModal: FC<DynamicModalProps>;
export { DynamicModal as ConfirmationListener };
