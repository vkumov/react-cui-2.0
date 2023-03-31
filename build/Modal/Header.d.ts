import { type FC, type HTMLProps, type PropsWithChildren } from "react";
/**
 * Modal Header
 */
type ModalHeaderProps = PropsWithChildren<{
    className?: string;
}> & HTMLProps<HTMLDivElement>;
export declare const ModalHeader: FC<ModalHeaderProps>;
export {};
