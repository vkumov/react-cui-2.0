import { FC, HTMLProps, PropsWithChildren } from "react";
/**
 * Modal Header
 */
type ModalHeaderProps = PropsWithChildren<{
    className?: string;
}> & HTMLProps<HTMLDivElement>;
export declare const ModalHeader: FC<ModalHeaderProps>;
export {};
