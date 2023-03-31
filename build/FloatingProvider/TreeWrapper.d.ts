import { type ComponentProps, type FC, type ReactNode } from "react";
import { FloatingPortal } from "@floating-ui/react";
export declare const FloatingTreeWrapper: FC<{
    children: ReactNode;
    withPortal?: boolean;
    portalRoot?: ComponentProps<typeof FloatingPortal>["root"];
    portalId?: ComponentProps<typeof FloatingPortal>["id"];
    force?: boolean;
}>;
