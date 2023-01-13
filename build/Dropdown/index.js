import { useFloatingTree, useFloatingNodeId, useFloatingParentNodeId, useFloating, offset, flip, shift, autoUpdate, useInteractions, useHover, safePolygon, useClick, useRole, useDismiss, useListNavigation, useTypeahead, FloatingNode, FloatingPortal, FloatingFocusManager, FloatingTree } from '@floating-ui/react';
import React, { forwardRef, isValidElement, useState, useRef, Children, useEffect, cloneElement } from 'react';
import cx from 'classnames';
import { useMergeRefs } from 'use-callback-ref';
import { Transition } from 'react-transition-group';
import { useFloatingContext } from '../FloatingProvider/index.js';

var styles = {"submenu":"Dropdown-module_submenu__uXrqH","dropdown":"Dropdown-module_dropdown__QOREt","active":"Dropdown-module_active__p0UcD","dropdown_appear":"Dropdown-module_dropdown_appear__FJDEz","disappear":"Dropdown-module_disappear__9T3XQ","dropdown_disappear":"Dropdown-module_dropdown_disappear__3is4U","menu_root":"Dropdown-module_menu_root__in1ol","with_chevron":"Dropdown-module_with_chevron__ngan7"};

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
const MenuElement = /*#__PURE__*/ forwardRef(({ selected , className , icon , children , submenu , ...props }, ref)=>{
    return /*#__PURE__*/ React.createElement("a", _extends({
        ref: ref
    }, props, {
        className: cx(className, {
            selected: selected && !submenu,
            [styles.submenu]: submenu
        })
    }), icon ? /*#__PURE__*/ isValidElement(icon) ? /*#__PURE__*/ React.createElement(React.Fragment, null, icon, /*#__PURE__*/ isValidElement(children) ? children : /*#__PURE__*/ React.createElement("span", {
        className: "qtr-margin-left"
    }, children)) : /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("span", {
        className: icon
    }), /*#__PURE__*/ React.createElement("span", {
        className: "qtr-margin-left"
    }, children)) : children);
});
MenuElement.displayName = "MenuElement";
const Menu = /*#__PURE__*/ forwardRef(({ children , label , noChevron , placement , strategy: providedStrategy , portalRoot , alwaysClose , onOpen , nested , ...props }, ref)=>{
    var ref1;
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const [allowHover, setAllowHover] = useState(false);
    const listItemsRef = useRef([]);
    const listContentRef = useRef(Children.map(children, (child)=>/*#__PURE__*/ isValidElement(child) ? child.props.label : null));
    const tree = useFloatingTree();
    const nodeId = useFloatingNodeId();
    const parentId = useFloatingParentNodeId();
    nested !== null && nested !== void 0 ? nested : nested = parentId != null;
    const { x , y , reference , floating , strategy , refs , context  } = useFloating({
        open,
        onOpenChange: (st)=>{
            if (typeof onOpen === "function") onOpen();
            setOpen(st);
        },
        middleware: [
            offset({
                mainAxis: nested ? 0 : 2,
                alignmentAxis: nested ? -5 : 0
            }),
            flip(),
            shift()
        ],
        placement: nested ? "right-start" : placement,
        nodeId,
        whileElementsMounted: autoUpdate,
        strategy: providedStrategy
    });
    const { getReferenceProps , getFloatingProps , getItemProps  } = useInteractions([
        useHover(context, {
            handleClose: safePolygon({
                restMs: 25
            }),
            enabled: nested && allowHover,
            delay: {
                open: 75
            }
        }),
        useClick(context, {
            toggle: !nested,
            event: "mousedown",
            ignoreMouse: nested
        }),
        useRole(context, {
            role: "menu"
        }),
        useDismiss(context),
        useListNavigation(context, {
            listRef: listItemsRef,
            activeIndex,
            nested,
            onNavigate: setActiveIndex
        }),
        useTypeahead(context, {
            listRef: listContentRef,
            onMatch: open ? setActiveIndex : undefined,
            activeIndex
        })
    ]);
    useEffect(()=>{
        function onTreeClick() {
            if (alwaysClose) setOpen(false);
            if (parentId === null) {
                var ref;
                (ref = refs.domReference.current) === null || ref === void 0 ? void 0 : ref.focus();
            }
        }
        tree === null || tree === void 0 ? void 0 : tree.events.on("click", onTreeClick);
        return ()=>{
            tree === null || tree === void 0 ? void 0 : tree.events.off("click", onTreeClick);
        };
    }, [
        parentId,
        tree,
        refs,
        alwaysClose
    ]);
    useEffect(()=>{
        function onPointerMove() {
            setAllowHover(true);
        }
        function onKeyDown() {
            setAllowHover(false);
        }
        window.addEventListener("pointermove", onPointerMove, {
            once: true,
            capture: true
        });
        window.addEventListener("keydown", onKeyDown, true);
        return ()=>{
            window.removeEventListener("pointermove", onPointerMove, {
                capture: true
            });
            window.removeEventListener("keydown", onKeyDown, true);
        };
    }, [
        allowHover
    ]);
    const floatingNodeRef = useRef(null);
    const mergedReferenceRef = useMergeRefs([
        ref,
        reference
    ]);
    const rootCtx = useFloatingContext();
    portalRoot !== null && portalRoot !== void 0 ? portalRoot : portalRoot = (rootCtx === null || rootCtx === void 0 ? void 0 : (ref1 = rootCtx.rootRef) === null || ref1 === void 0 ? void 0 : ref1.current) || undefined;
    return /*#__PURE__*/ React.createElement(FloatingNode, {
        id: nodeId
    }, /*#__PURE__*/ isValidElement(label) ? /*#__PURE__*/ cloneElement(label, {
        ...getReferenceProps({
            ...props,
            ref: mergedReferenceRef,
            onClick (event) {
                event.stopPropagation();
                event.currentTarget.focus();
            },
            ...nested ? {
                className: cx("menu_item", {
                    open
                }),
                role: "menuitem",
                onKeyDown (event) {
                    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
                        setOpen(false);
                    }
                }
            } : {
                className: cx(styles.menu_root, label.props.className, {
                    open,
                    [styles.with_chevron]: !noChevron
                })
            }
        })
    }) : /*#__PURE__*/ React.createElement(MenuElement, _extends({
        submenu: nested
    }, getReferenceProps({
        ...props,
        ref: mergedReferenceRef,
        onClick (event) {
            event.stopPropagation();
            event.currentTarget.focus();
        },
        ...nested ? {
            className: cx("menu_item", {
                open
            }),
            role: "menuitem",
            onKeyDown (event) {
                if (event.key === "ArrowUp" || event.key === "ArrowDown") {
                    setOpen(false);
                }
            }
        } : {
            className: cx(styles.menu_root, {
                open,
                [styles.with_chevron]: !noChevron
            })
        }
    })), label), /*#__PURE__*/ React.createElement(FloatingPortal, {
        root: portalRoot
    }, /*#__PURE__*/ React.createElement(Transition, {
        in: open,
        mountOnEnter: true,
        unmountOnExit: true,
        timeout: {
            enter: 100,
            exit: 250
        },
        nodeRef: floatingNodeRef
    }, (state)=>{
         return React.createElement(FloatingFocusManager, {
            context: context,
            modal: !nested,
            returnFocus: !nested,
            order: [
                "reference",
                "content"
            ]
        }, /*#__PURE__*/ React.createElement("div", _extends({}, getFloatingProps({
            className: cx("dropdown", styles.active, styles.dropdown, {
                [styles.disappear]: state === "exiting" || state === "exited"
            }),
            ref (r) {
                floatingNodeRef.current = r;
                floating(r);
            },
            style: {
                position: strategy,
                top: y !== null && y !== void 0 ? y : 0,
                left: x !== null && x !== void 0 ? x : 0
            },
            onKeyDown (event) {
                if (event.key === "Tab") {
                    setOpen(false);
                }
            }
        })), /*#__PURE__*/ React.createElement("div", {
            className: "dropdown__menu",
            onClick: alwaysClose ? ()=>{
                tree === null || tree === void 0 ? void 0 : tree.events.emit("click");
            } : undefined
        }, Children.map(children, (child, index)=>{
             return isValidElement(child) && /*#__PURE__*/ cloneElement(child, getItemProps({
                tabIndex: -1,
                role: "menuitem",
                className: "menu_item",
                ref (node) {
                    listItemsRef.current[index] = node;
                },
                onClick (e) {
                    if (child.props.onClick) child.props.onClick(e);
                    else tree === null || tree === void 0 ? void 0 : tree.events.emit("click");
                },
                onPointerEnter () {
                    if (allowHover) {
                        setActiveIndex(index);
                    }
                }
            }));
        }))));
    })));
});
Menu.displayName = "Menu";
const Dropdown = /*#__PURE__*/ forwardRef(({ children , placement ="bottom-start" , ...props }, ref)=>{
    return /*#__PURE__*/ React.createElement(FloatingTree, null, /*#__PURE__*/ React.createElement(Menu, _extends({
        placement: placement
    }, props, {
        nested: false,
        ref: ref
    }), children));
});
Dropdown.displayName = "Dropdown";
const MenuDivider = /*#__PURE__*/ forwardRef(({ className , ...props }, ref)=>/*#__PURE__*/ React.createElement("div", _extends({}, props, {
        className: cx("divider", className),
        ref: ref
    })));
MenuDivider.displayName = "MenuDivider";
const MenuGroup = /*#__PURE__*/ forwardRef(({ className , header , children , ...props }, ref)=>/*#__PURE__*/ React.createElement("div", _extends({
        className: cx("dropdown__group", className)
    }, props, {
        ref: ref
    }), header ? /*#__PURE__*/ React.createElement("div", {
        className: "dropdown__group-header"
    }, header) : null, children));
MenuGroup.displayName = "MenuGroup";

export { Dropdown, Menu, MenuDivider, MenuElement, MenuGroup };
//# sourceMappingURL=index.js.map
