import React, { useEffect, useMemo } from "react";
import {
  useFloatingTree,
  type ElementProps,
  type FloatingContext,
  type FloatingNodeType,
  type ReferenceType,
} from "@floating-ui/react";
import useEvent from "react-use-event-hook";

function getDocument(node: Element | null) {
  return node?.ownerDocument || document;
}

function getChildren<RT extends ReferenceType = ReferenceType>(
  nodes: Array<FloatingNodeType<RT>>,
  id: string | undefined
) {
  let allChildren =
    nodes.filter((node) => node.parentId === id && node.context?.open) || [];
  let currentChildren = allChildren;

  while (currentChildren.length) {
    currentChildren =
      nodes.filter((node) =>
        currentChildren?.some(
          (n) => node.parentId === n.id && node.context?.open
        )
      ) || [];

    allChildren = allChildren.concat(currentChildren);
  }

  return allChildren;
}

type Options = {
  enabled?: boolean;
};

export function useCustomDismiss<RT extends ReferenceType = ReferenceType>(
  {
    open,
    onOpenChange,
    events,
    nodeId,
    elements: { floating },
  }: FloatingContext<RT>,
  { enabled = true }: Options = {}
): ElementProps {
  const tree = useFloatingTree();

  const closeOnEscapeKeyDown = useEvent(
    (event: React.KeyboardEvent<Element> | KeyboardEvent) => {
      if (!open || !enabled || event.key !== "Escape") {
        return;
      }

      const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];

      event.stopPropagation();

      if (children.length > 0) return;

      events.emit("dismiss", {
        type: "escapeKey",
        data: {
          returnFocus: { preventScroll: false },
        },
      });

      onOpenChange(false);
    }
  );

  useEffect(() => {
    if (!open || !enabled) {
      return;
    }

    const doc = getDocument(floating);
    doc.addEventListener("keydown", closeOnEscapeKeyDown);

    return () => {
      doc.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown, enabled, floating, open]);

  return useMemo(() => {
    if (!enabled) {
      return {};
    }

    return {
      reference: {
        onKeyDown: closeOnEscapeKeyDown,
      },
      floating: {
        onKeyDown: closeOnEscapeKeyDown,
      },
    };
  }, [closeOnEscapeKeyDown, enabled]);
}
