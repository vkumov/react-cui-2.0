import { FC, MutableRefObject, ReactNode, ComponentProps } from 'react';
import { FloatingPortal } from '@floating-ui/react';

interface ContextMenuProps {
    contextMenuRef: MutableRefObject<HTMLElement | null>;
    onContextMenu?: (e: globalThis.MouseEvent) => boolean | Promise<boolean>;
    children: ReactNode;
    portalId?: ComponentProps<typeof FloatingPortal>["id"];
}
declare const ContextMenu: FC<ContextMenuProps>;

export { ContextMenu };
