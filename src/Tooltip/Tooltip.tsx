import React, {
  type FC,
  type PropsWithChildren,
  type HTMLProps,
  forwardRef,
  useRef,
  useState,
  MutableRefObject,
  ReactNode,
  cloneElement,
} from "react";
import { Transition } from "react-transition-group";
import { useMergeRefs } from "use-callback-ref";

import {
  arrow,
  flip,
  FloatingPortal,
  offset,
  shift,
  useFloating,
  useHover,
  useInteractions,
  type Side,
  type Placement,
  useRole,
} from "@floating-ui/react";

import { useFloatingContext } from "src/FloatingProvider";

const Tooltip = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  function TooltipRefed({ className, children, ...props }, ref) {
    return (
      <div ref={ref} className="tooltip__wrapper" {...props}>
        <div className={className}>{children}</div>
      </div>
    );
  }
);

export type UseTooltipReturn = ReturnType<typeof useFloating> & {
  getFloatingProps: ReturnType<typeof useInteractions>["getFloatingProps"];
  show: boolean;
  getReferenceProps: ReturnType<typeof useInteractions>["getReferenceProps"];
  arrowRef: MutableRefObject<any>;
};

export function useTooltip(placement?: Placement): UseTooltipReturn {
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

  return {
    ...fl,
    getFloatingProps,
    show,
    getReferenceProps,
    arrowRef,
  };
}

const TooltipWrapper: FC<
  PropsWithChildren<
    Omit<ReturnType<typeof useTooltip>, "getReferenceProps" | "reference">
  > & {
    root?: Parameters<typeof FloatingPortal>[0]["root"];
  }
> = ({
  children,
  x,
  y,
  floating,
  show,
  strategy,
  getFloatingProps,
  middlewareData,
  arrowRef,
  placement,
  root: rootProvided,
}) => {
  const { x: arrowX, y: arrowY } = middlewareData.arrow || { x: 0, y: 0 };
  const floatingRef = useRef<any>(null);

  const staticSide = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right",
  }[placement.split("-")[0]] as Side;

  const modalContext = useFloatingContext();
  const root: HTMLElement | null | undefined =
    rootProvided ?? modalContext ? modalContext.rootRef.current : undefined;

  return (
    <Transition
      in={show}
      mountOnEnter
      unmountOnExit
      timeout={200}
      nodeRef={floatingRef}
    >
      {(state) => (
        <FloatingPortal root={root}>
          <Tooltip
            ref={(r) => {
              floating(r);
              floatingRef.current = r;
            }}
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
          </Tooltip>
        </FloatingPortal>
      )}
    </Transition>
  );
};

export { TooltipWrapper as Tooltip };

export type WithTooltipProps = {
  children: JSX.Element;
  tooltip: ReactNode;
  placement?: Placement;
};

export const WithTooltip: FC<WithTooltipProps> = forwardRef(
  ({ children, tooltip, placement = "top", ...props }, forwardedRef) => {
    const { getReferenceProps, reference, ...tt } = useTooltip(placement);

    const ref = useMergeRefs([reference, forwardedRef, (children as any).ref]);

    return (
      <>
        {cloneElement(
          children,
          getReferenceProps({ ref, ...children.props, ...props })
        )}
        <TooltipWrapper {...tt}>{tooltip}</TooltipWrapper>
      </>
    );
  }
);

WithTooltip.displayName = "WithTooltip";
