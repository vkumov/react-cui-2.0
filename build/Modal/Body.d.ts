import { FC, HTMLProps, PropsWithChildren } from "react";
/**
 * Modal Body
 */
type ModalBodyProps = PropsWithChildren<{
    className?: string;
}> & HTMLProps<HTMLDivElement>;
export declare const ModalBody: FC<ModalBodyProps>;
export {};
