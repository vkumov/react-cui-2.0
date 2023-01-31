import { FC, MutableRefObject, ReactNode } from 'react';

interface ContextMenuProps {
    contextMenuRef: MutableRefObject<HTMLElement | null>;
    onContextMenu?: (e: globalThis.MouseEvent) => boolean | Promise<boolean>;
    children: ReactNode;
}
declare const ContextMenu: FC<ContextMenuProps>;

export { ContextMenu };
