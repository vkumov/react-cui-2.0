import { type FC, type HTMLProps, type PropsWithChildren } from "react";
/**
 * Modal Footer
 */
type ModalFooterProps = PropsWithChildren<{
    className?: string;
}> & HTMLProps<HTMLDivElement>;
export declare const ModalFooter: FC<ModalFooterProps>;
export {};
