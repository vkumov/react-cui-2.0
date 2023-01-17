import React, { useContext, createContext, forwardRef, useRef, useEffect, useState, useCallback, cloneElement, createElement } from 'react';
import { useMergeRefs } from 'use-callback-ref';
import { useFloating, offset, flip, shift, autoUpdate, useDismiss, useClick, useInteractions, FloatingPortal, FloatingFocusManager } from '@floating-ui/react';
import cx from 'classnames';
import { Transition } from 'react-transition-group';
import { useLockedBody } from '../hooks/useLockedBody.js';
import { useFloatingContext } from '../FloatingProvider/index.js';

var styles = {"wrapper":"Popover-module_wrapper__m7aDv","body":"Popover-module_body__ytz0O","popover_appear":"Popover-module_popover_appear__dJaAP","disappear":"Popover-module_disappear__w-dyh","overlay":"Popover-module_overlay__u9dvj","overlay_appear":"Popover-module_overlay_appear__b1qOJ"};

const PopoverContext = /*#__PURE__*/ createContext(null);
const PopoverProvider = ({ children , ...props })=>/*#__PURE__*/ React.createElement(PopoverContext.Provider, {
        value: props
    }, children);
const usePopoverContext = ()=>useContext(PopoverContext);

function _extends$1() {
    _extends$1 = Object.assign || function(target) {
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
    return _extends$1.apply(this, arguments);
}
const Overlay = ({ show , children , background ="var(--cui-background-color)" , className  })=>{
    const ref = useRef(null);
    return /*#__PURE__*/ React.createElement(Transition, {
        in: show,
        mountOnEnter: true,
        unmountOnExit: true,
        timeout: 250,
        nodeRef: ref
    }, (state)=>/*#__PURE__*/ React.createElement("div", {
            style: {
                background
            },
            className: cx(styles.overlay, className, {
                [styles.disappear]: state === "exiting" || state === "exited"
            }),
            ref: ref
        }, children));
};
const GenericPopover = /*#__PURE__*/ forwardRef(function GenericPopoverRefed({ className , children , wrapperClassName , state , offset: offsetOptions , ...props }, ref) {
    const ownRef = useRef(null);
    const merged = useMergeRefs([
        ref,
        ownRef
    ]);
    useEffect(()=>{
        const r = ownRef.current;
        var _mainAxis;
        if (r && offsetOptions && typeof offsetOptions !== "function") r.style.setProperty("--offset", `${typeof offsetOptions === "number" ? offsetOptions : (_mainAxis = offsetOptions.mainAxis) !== null && _mainAxis !== void 0 ? _mainAxis : 4}px`);
        return ()=>{
            if (r) r.style.setProperty("--offset", "4px");
        };
    }, [
        offsetOptions
    ]);
    return /*#__PURE__*/ React.createElement("div", _extends$1({
        ref: merged,
        className: cx(styles.wrapper, wrapperClassName, {
            [styles.disappear]: state === "exiting" || state === "exited"
        })
    }, props), /*#__PURE__*/ React.createElement("div", {
        className: cx("panel panel--bordered panel--raised", styles.body, className)
    }, children));
});
const Popover = ({ children , element , onClose , onOpen , showClassName , overlay: overlayProvided , showOverlay: overlayShowProvided , placement , portalRoot , offset: offsetOptions = 4 , closeRef , initialFocus , guardsFocus , modalFocus , closeOnFocusOut  })=>{
    var ref;
    const [show, setShow] = useLockedBody(false, "root");
    const { x , y , reference , floating , strategy , context  } = useFloating({
        placement,
        middleware: [
            offset(offsetOptions),
            flip(),
            shift({
                padding: {
                    left: 8,
                    right: 8
                }
            })
        ],
        open: show,
        onOpenChange: (newOpen)=>{
            if (newOpen && typeof onOpen === "function") onOpen();
            if (!newOpen && typeof onClose === "function") onClose();
            setShow(newOpen);
        },
        whileElementsMounted: autoUpdate
    });
    const dismiss = useDismiss(context);
    const click = useClick(context);
    const { getReferenceProps , getFloatingProps  } = useInteractions([
        click,
        dismiss
    ]);
    const [overlayShow, setOverlayShow] = useState(overlayShowProvided);
    const [overlay, setOverlay] = useState(overlayProvided);
    const ref1 = useMergeRefs([
        reference,
        element.ref
    ]);
    const transitionRef = useRef(null);
    const floatingRef = useMergeRefs([
        transitionRef,
        floating
    ]);
    const rootCtx = useFloatingContext();
    portalRoot !== null && portalRoot !== void 0 ? portalRoot : portalRoot = (rootCtx === null || rootCtx === void 0 ? void 0 : (ref = rootCtx.rootRef) === null || ref === void 0 ? void 0 : ref.current) || undefined;
    const closeCb = useCallback(()=>setShow(false), [
        setShow
    ]);
    if (closeRef) closeRef.current = closeCb;
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ cloneElement(element, getReferenceProps({
        ref: ref1,
        ...element.props,
        className: cx(element.props.className, showClassName ? {
            [showClassName]: show
        } : undefined)
    })), /*#__PURE__*/ React.createElement(Transition, {
        in: show,
        mountOnEnter: true,
        unmountOnExit: true,
        timeout: 250,
        nodeRef: transitionRef
    }, (state)=>/*#__PURE__*/ React.createElement(FloatingPortal, {
            root: portalRoot
        }, /*#__PURE__*/ React.createElement(FloatingFocusManager, {
            context: context,
            initialFocus: initialFocus,
            guards: guardsFocus,
            modal: modalFocus,
            closeOnFocusOut: closeOnFocusOut
        }, /*#__PURE__*/ React.createElement(GenericPopover, _extends$1({
            ref: floatingRef,
            style: {
                position: strategy,
                top: y !== null && y !== void 0 ? y : 0,
                left: x !== null && x !== void 0 ? x : 0
            },
            state: state,
            offset: offsetOptions
        }, getFloatingProps()), /*#__PURE__*/ React.createElement(PopoverProvider, {
            setOverlayState: setOverlayShow,
            setOverlay: setOverlay
        }, /*#__PURE__*/ React.createElement(Overlay, {
            show: overlayShow || false
        }, overlay), children))))));
};

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
const PopoverTitle = /*#__PURE__*/ forwardRef(({ className , noLine , ...props }, ref)=>{
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("h5", _extends({
        ref: ref,
        className: cx("no-margin-bottom", className)
    }, props)), !noLine && /*#__PURE__*/ React.createElement("hr", {
        className: "half-margin-top"
    }));
});
PopoverTitle.displayName = "PopoverTitle";

function usePopover({ body , onClose , onOpen , popoverComponent =GenericPopover , placement , initialFocus , guardsFocus , modalFocus , closeOnFocusOut , offset: offsetOptions = 4 , portalRoot  }) {
    var ref;
    const [show, setShow] = useLockedBody(false, "root");
    const { x , y , reference , floating , strategy , context , refs  } = useFloating({
        placement,
        middleware: [
            offset(offsetOptions),
            flip(),
            shift({
                padding: {
                    left: 8,
                    right: 8
                }
            })
        ],
        open: show,
        onOpenChange: (newOpen)=>{
            if (newOpen && typeof onOpen === "function") onOpen();
            if (!newOpen && typeof onClose === "function") onClose();
            setShow(newOpen);
        },
        whileElementsMounted: autoUpdate
    });
    const dismiss = useDismiss(context);
    const click = useClick(context);
    const { getReferenceProps , getFloatingProps  } = useInteractions([
        click,
        dismiss
    ]);
    const closeCb = useCallback(()=>setShow(false), [
        setShow
    ]);
    const openCb = useCallback(()=>setShow(true), [
        setShow
    ]);
    const transitionRef = useRef(null);
    const floatingRef = useMergeRefs([
        transitionRef,
        floating
    ]);
    const rootCtx = useFloatingContext();
    portalRoot !== null && portalRoot !== void 0 ? portalRoot : portalRoot = (rootCtx === null || rootCtx === void 0 ? void 0 : (ref = rootCtx.rootRef) === null || ref === void 0 ? void 0 : ref.current) || undefined;
    const render = ()=>{
        return /*#__PURE__*/ React.createElement(Transition, {
            in: show,
            mountOnEnter: true,
            unmountOnExit: true,
            timeout: 250,
            nodeRef: transitionRef
        }, (state)=>/*#__PURE__*/ React.createElement(FloatingPortal, {
                root: portalRoot
            }, /*#__PURE__*/ React.createElement(FloatingFocusManager, {
                context: context,
                initialFocus: initialFocus,
                guards: guardsFocus,
                modal: modalFocus,
                closeOnFocusOut: closeOnFocusOut
            }, /*#__PURE__*/ createElement(popoverComponent, {
                ref: floatingRef,
                state,
                offset: offsetOptions,
                ...getFloatingProps({
                    style: {
                        position: strategy,
                        top: y !== null && y !== void 0 ? y : 0,
                        left: x !== null && x !== void 0 ? x : 0
                    }
                })
            }, body))));
    };
    return {
        getReferenceProps,
        reference,
        render,
        isShown: show,
        refs,
        close: closeCb,
        open: openCb
    };
}

export { GenericPopover, Popover, PopoverTitle, usePopover, usePopoverContext };
//# sourceMappingURL=index.js.map
