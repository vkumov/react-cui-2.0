import React, {
  cloneElement,
  forwardRef,
  useMemo,
  useRef,
  useState,
  type ComponentProps,
  type FC,
  type HTMLProps,
  type MutableRefObject,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import {
  FloatingPortal,
  arrow,
  flip,
  offset,
  shift,
  useFloating,
  useHover,
  useInteractions,
  useMergeRefs,
  useRole,
  type Placement,
  type Side,
} from "@floating-ui/react";
import { Transition } from "react-transition-group";

import { useFloatingContext } from "src/FloatingProvider";

const TooltipContent = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  function TooltipRefed({ className, children, ...props }, ref) {
    return (
      <div ref={ref} className="tooltip__wrapper" {...props}>
        <div className={className}>{children}</div>
      </div>
    );
  }
);

type UseTooltipReturn = ReturnType<typeof useFloating> & {
  getFloatingProps: ReturnType<typeof useInteractions>["getFloatingProps"];
  show: boolean;
  getReferenceProps: ReturnType<typeof useInteractions>["getReferenceProps"];
  arrowRef: MutableRefObject<any>;
};

function useTooltip(placement?: Placement): UseTooltipReturn {
  const [show, setShow] = useState(false);
  const arrowRef = useRef(null);
  const fl = useFloating({
    middleware: [
      offset(6),
      flip(),
      shift({ padding: { left: 8, right: 8 } }),
      arrow({ element: arrowRef }),
    ],
    open: show,
    onOpenChange: setShow,
    placement,
  });

  const role = useRole(fl.context, { role: "tooltip" });
  const hover = useHover(fl.context, {
    delay: {
      open: 500,
      close: 0,
    },
    move: false,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    role,
    hover,
  ]);

  return useMemo(
    () => ({
      ...fl,
      getFloatingProps,
      show,
      getReferenceProps,
      arrowRef,
    }),
    [getFloatingProps, show, getReferenceProps, arrowRef, fl]
  );
}

const TooltipWrapper: FC<
  PropsWithChildren<
    Omit<ReturnType<typeof useTooltip>, "getReferenceProps" | "reference">
  > & {
    root?: ComponentProps<typeof FloatingPortal>["root"];
    portalId?: ComponentProps<typeof FloatingPortal>["id"];
  }
> = ({
  children,
  x,
  y,
  show,
  strategy,
  getFloatingProps,
  middlewareData,
  arrowRef,
  placement,
  root: rootProvided,
  portalId,
  refs,
}) => {
  const { x: arrowX, y: arrowY } = middlewareData.arrow || { x: 0, y: 0 };
  const floatingRef = useRef<any>(null);

  const staticSide = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right",
  }[placement.split("-")[0]] as Side;

  const { root, id } = useFloatingContext({
    root: rootProvided,
    portalId,
    fallbackPortalId: "--cui-tooltip-portal",
  });
  const ref = useMergeRefs([refs.setFloating, floatingRef]);

  return (
    <FloatingPortal root={root} id={id}>
      <Transition
        in={show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        nodeRef={floatingRef}
      >
        {(state) => (
          <TooltipContent
            ref={ref}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
            }}
            {...getFloatingProps({
              className: `tooltip__body ${
                state === "exiting" || state === "exited"
                  ? "tooltip--disappear"
                  : "tooltip--appear"
              }`,
            })}
          >
            {children}
            <div
              ref={arrowRef}
              className="tooltip__arrow"
              style={{
                left: arrowX != null ? `${arrowX}px` : "",
                top: arrowY != null ? `${arrowY}px` : "",
                right: "",
                bottom: "",
                [staticSide]: "-4px",
              }}
            />
          </TooltipContent>
        )}
      </Transition>
    </FloatingPortal>
  );
};

// export { TooltipWrapper as Tooltip };

export type WithTooltipProps = {
  children: JSX.Element;
  tooltip: ReactNode;
  placement?: Placement;
};

export const WithTooltip: FC<WithTooltipProps> = forwardRef(
  ({ children, tooltip, placement = "top", ...props }, forwardedRef) => {
    const { getReferenceProps, refs, ...tt } = useTooltip(placement);

    const ref = useMergeRefs([
      refs.setReference,
      forwardedRef,
      (children as any).ref,
    ]);

    return (
      <>
        {cloneElement(
          children,
          getReferenceProps({ ref, ...children.props, ...props })
        )}
        <TooltipWrapper refs={refs} {...tt}>
          {tooltip}
        </TooltipWrapper>
      </>
    );
  }
);

WithTooltip.displayName = "WithTooltip";
