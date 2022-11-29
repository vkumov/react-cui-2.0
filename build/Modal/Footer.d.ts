import { FC, HTMLProps, PropsWithChildren } from "react";
/**
 * Modal Footer
 */
type ModalFooterProps = PropsWithChildren<{
    className?: string;
}> & HTMLProps<HTMLDivElement>;
export declare const ModalFooter: FC<ModalFooterProps>;
export {};
