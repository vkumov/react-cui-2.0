import React, { useState, useRef, cloneElement, forwardRef } from 'react';
import { Transition } from 'react-transition-group';
import { useMergeRefs } from 'use-callback-ref';
import { useFloating, offset, flip, shift, arrow, useRole, useHover, useInteractions, FloatingPortal } from '@floating-ui/react';
import { useFloatingContext } from '../FloatingProvider/index.js';

function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
const Tooltip = /*#__PURE__*/ forwardRef(function TooltipRefed({ className , children , ...props }, ref) {
    return /*#__PURE__*/ React.createElement("div", _extends({
        ref: ref,
        className: "tooltip__wrapper"
    }, props), /*#__PURE__*/ React.createElement("div", {
        className: className
    }, children));
});
function useTooltip(placement) {
    const [show, setShow] = useState(false);
    const arrowRef = useRef(null);
    const fl = useFloating({
        middleware: [
            offset(6),
            flip(),
            shift({
                padding: {
                    left: 8,
                    right: 8
                }
            }),
            arrow({
                element: arrowRef
            })
        ],
        open: show,
        onOpenChange: setShow,
        placement
    });
    const role = useRole(fl.context, {
        role: "tooltip"
    });
    const hover = useHover(fl.context, {
        delay: {
            open: 500,
            close: 0
        },
        move: false
    });
    const { getReferenceProps , getFloatingProps  } = useInteractions([
        role,
        hover
    ]);
    return {
        ...fl,
        getFloatingProps,
        show,
        getReferenceProps,
        arrowRef
    };
}
const TooltipWrapper = ({ children , x , y , floating , show , strategy , getFloatingProps , middlewareData , arrowRef , placement , root: rootProvided  })=>{
    const { x: arrowX , y: arrowY  } = middlewareData.arrow || {
        x: 0,
        y: 0
    };
    const floatingRef = useRef(null);
    const staticSide = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    }[placement.split("-")[0]];
    const modalContext = useFloatingContext();
    const root = (rootProvided !== null && rootProvided !== void 0 ? rootProvided : modalContext) ? modalContext.rootRef.current : undefined;
    return /*#__PURE__*/ React.createElement(Transition, {
        in: show,
        mountOnEnter: true,
        unmountOnExit: true,
        timeout: 200,
        nodeRef: floatingRef
    }, (state)=>/*#__PURE__*/ React.createElement(FloatingPortal, {
            root: root
        }, /*#__PURE__*/ React.createElement(Tooltip, _extends({
            ref: (r)=>{
                floating(r);
                floatingRef.current = r;
            },
            style: {
                position: strategy,
                top: y !== null && y !== void 0 ? y : 0,
                left: x !== null && x !== void 0 ? x : 0
            }
        }, getFloatingProps({
            className: `tooltip__body ${state === "exiting" || state === "exited" ? "tooltip--disappear" : "tooltip--appear"}`
        })), children, /*#__PURE__*/ React.createElement("div", {
            ref: arrowRef,
            className: "tooltip__arrow",
            style: {
                left: arrowX != null ? `${arrowX}px` : "",
                top: arrowY != null ? `${arrowY}px` : "",
                right: "",
                bottom: "",
                [staticSide]: "-4px"
            }
        }))));
};
const WithTooltip = ({ children , tooltip , placement ="top"  })=>{
    const { getReferenceProps , reference , ...tt } = useTooltip(placement);
    const ref = useMergeRefs([
        reference,
        children.ref
    ]);
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ cloneElement(children, getReferenceProps({
        ref,
        ...children.props
    })), /*#__PURE__*/ React.createElement(TooltipWrapper, _extends({}, tt), tooltip));
};

export { TooltipWrapper as Tooltip, WithTooltip, useTooltip };
//# sourceMappingURL=index.js.map
