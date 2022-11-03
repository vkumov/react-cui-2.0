import React, { cloneElement } from 'react';
import { appendClass } from '../utils/index.js';
import Transition from 'react-transition-group/Transition';
import { useFloating, useClick, useRole, useDismiss, useInteractions, FloatingPortal, FloatingOverlay, FloatingFocusManager } from '@floating-ui/react-dom-interactions';
import { DisplayIf, ConditionalWrapper } from '../Conditional/index.js';
import { useFloatingContext } from '../FloatingProvider/index.js';
import { Button } from '../Button/index.js';
import { Input } from '../Input/index.js';
import { eventManager } from '../utils/eventManager.js';

function _extends$4() {
    _extends$4 = Object.assign || function(target) {
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
    return _extends$4.apply(this, arguments);
}
const ModalHeader = ({ className =null , children , ...props })=>/*#__PURE__*/ React.createElement("div", _extends$4({
        className: `modal__header${appendClass(className)}`
    }, props), children)
;

function _extends$3() {
    _extends$3 = Object.assign || function(target) {
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
    return _extends$3.apply(this, arguments);
}
const ModalFooter = ({ className =null , children , ...props })=>/*#__PURE__*/ React.createElement("div", _extends$3({
        className: `modal__footer${appendClass(className)}`
    }, props), children)
;

function _extends$2() {
    _extends$2 = Object.assign || function(target) {
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
    return _extends$2.apply(this, arguments);
}
const ModalBody = ({ className =null , children , ...props })=>/*#__PURE__*/ React.createElement("div", _extends$2({
        className: `modal__body${appendClass(className)}`
    }, props), children)
;

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
const Modal = ({ size =null , autoClose =true , animationDuration =250 , closeIcon =false , title =null , closeHandle =null , left =false , transitionEvents =null , dialogProps =null , contentProps =null , maximize =false , children , isOpen , refElement , root: rootProvided , lockScroll , ancestorScroll ,  })=>{
    const [maximized, setMaximized] = React.useState(false);
    React.useEffect(()=>setMaximized(false)
    , [
        isOpen
    ]);
    const realSize = React.useMemo(()=>maximized ? "full" : size
    , [
        maximized,
        size
    ]);
    const modalContext = useFloatingContext();
    const root = (rootProvided !== null && rootProvided !== void 0 ? rootProvided : modalContext) ? modalContext.rootRef.current : undefined;
    const { reference , floating , context  } = useFloating({
        open: isOpen,
        onOpenChange: (state)=>!state ? void closeHandle() : void 0
    });
    React.useEffect(()=>{
        if (refElement) reference(refElement);
    }, [
        refElement
    ]);
    const click = useClick(context);
    const role = useRole(context, {
        role: "dialog"
    });
    const dismiss = useDismiss(context, {
        enabled: autoClose,
        ancestorScroll
    });
    const { getFloatingProps  } = useInteractions([
        click,
        role,
        dismiss
    ]);
    const nodeRef = React.useRef(null);
    return /*#__PURE__*/ React.createElement(Transition, _extends$1({
        in: isOpen,
        mountOnEnter: true,
        unmountOnExit: true,
        timeout: animationDuration,
        nodeRef: nodeRef
    }, transitionEvents), (state)=>/*#__PURE__*/ React.createElement(FloatingPortal, {
            root: root
        }, /*#__PURE__*/ React.createElement(FloatingOverlay, {
            className: `modal-backdrop${appendClass(state === "exiting", "modal-backdrop--before-close")}`,
            lockScroll: lockScroll,
            ref: nodeRef,
            onClick: ()=>autoClose ? closeHandle() : void 0
        }, /*#__PURE__*/ React.createElement(FloatingFocusManager, {
            context: context
        }, /*#__PURE__*/ React.createElement("div", _extends$1({
            ref: floating
        }, getFloatingProps({
            className: `modal${appendClass(realSize, `modal--${realSize}`)}${appendClass(left, "modal--left")}`,
            onClick: ()=>autoClose ? closeHandle() : void 0
        })), /*#__PURE__*/ React.createElement("div", _extends$1({
            className: "modal__dialog"
        }, dialogProps, {
            onClick: (e)=>e.stopPropagation()
        }), /*#__PURE__*/ React.createElement("div", _extends$1({
            className: "modal__content"
        }, contentProps), /*#__PURE__*/ React.createElement(DisplayIf, {
            condition: !!(closeIcon && closeHandle) || maximize
        }, /*#__PURE__*/ React.createElement(ConditionalWrapper, {
            condition: !!(closeIcon && closeHandle) && maximize,
            wrapper: /*#__PURE__*/ React.createElement("div", {
                className: "modal__close"
            })
        }, Boolean(maximize) && /*#__PURE__*/ React.createElement("a", {
            className: `${appendClass(!(closeIcon && closeHandle), "modal__close")}${appendClass(closeIcon && closeHandle, "qtr-margin-right")}`,
            onClick: ()=>setMaximized((curr)=>!curr
                )
        }, /*#__PURE__*/ React.createElement("span", {
            className: maximized ? "icon-minimize" : "icon-maximize"
        })), Boolean(closeIcon && closeHandle) && /*#__PURE__*/ React.createElement("a", {
            className: !maximize ? "modal__close" : "",
            onClick: closeHandle
        }, /*#__PURE__*/ React.createElement("span", {
            className: "icon-close"
        })))), Boolean(title) && /*#__PURE__*/ React.createElement(ModalHeader, null, /*#__PURE__*/ React.createElement("h1", {
            className: "modal__title"
        }, title)), children))))))
    );
};
Modal.Small = (props)=>/*#__PURE__*/ React.createElement(Modal, _extends$1({}, props, {
        size: "small"
    }))
;
Modal.Large = (props)=>/*#__PURE__*/ React.createElement(Modal, _extends$1({}, props, {
        size: "large"
    }))
;
Modal.Full = (props)=>/*#__PURE__*/ React.createElement(Modal, _extends$1({}, props, {
        size: "full"
    }))
;
Modal.Fluid = (props)=>/*#__PURE__*/ React.createElement(Modal, _extends$1({}, props, {
        size: "fluid"
    }))
;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

const ConfirmationModal = ({ isOpen =false , confirmType ="primary" , autoClose =true , confirmText ="Confirm" , confirmHandle , closeHandle , prompt , dontAskAgain ={
    show: false
} ,  })=>{
    const [doing, setDoing] = React.useState(false);
    const [dontAsk, setDontAsk] = React.useState(false);
    return /*#__PURE__*/ React.createElement(Modal, {
        isOpen: isOpen,
        closeIcon: true,
        closeHandle: closeHandle,
        autoClose: autoClose,
        title: "Confirmation"
    }, /*#__PURE__*/ React.createElement(ModalBody, null, prompt, (dontAskAgain === null || dontAskAgain === void 0 ? void 0 : dontAskAgain.show) ? /*#__PURE__*/ React.createElement("div", {
        className: "form-group"
    }, /*#__PURE__*/ React.createElement("label", {
        className: "checkbox"
    }, /*#__PURE__*/ React.createElement("input", {
        type: "checkbox",
        checked: dontAsk,
        onChange: (e)=>{
            setDontAsk(e.target.checked);
        }
    }), /*#__PURE__*/ React.createElement("span", {
        className: "checkbox__input"
    }), /*#__PURE__*/ React.createElement("span", {
        className: "checkbox__label"
    }, dontAskAgain.text || "Don't ask again"))) : null), /*#__PURE__*/ React.createElement(ModalFooter, null, /*#__PURE__*/ React.createElement(Button.Light, {
        onClick: closeHandle
    }, "Close"), /*#__PURE__*/ React.createElement(Button, {
        color: confirmType,
        disabled: doing,
        onClick: async ()=>{
            setDoing(true);
            if (await confirmHandle(dontAsk)) setDoing(false);
        }
    }, confirmText, doing ? /*#__PURE__*/ React.createElement("span", {
        className: "icon-animation spin qtr-margin-left"
    }) : null)));
};

function PromptModal({ title , question , onSave: cb , onClose , initial , type , isOpen , hint , validate  }) {
    const [val, setVal] = React.useState(initial);
    const [doing, setDoing] = React.useState(false);
    const onSave = React.useCallback(async ()=>{
        if (typeof validate === "function" && !await validate(val)) return;
        setDoing(true);
        await cb(val);
        setDoing(false);
        onClose();
    }, [
        onClose,
        cb,
        val,
        validate
    ]);
    React.useEffect(()=>setVal(initial)
    , [
        initial
    ]);
    const inpRef = React.useRef(undefined);
    React.useEffect(()=>{
        if (isOpen && inpRef.current) inpRef.current.focus();
    }, [
        isOpen
    ]);
    return /*#__PURE__*/ React.createElement(Modal, {
        isOpen: isOpen,
        closeIcon: true,
        closeHandle: onClose,
        title: title
    }, /*#__PURE__*/ React.createElement(ModalBody, null, /*#__PURE__*/ React.createElement(Input, {
        type: type,
        onChange: (e)=>setVal(e.target.value)
        ,
        onKeyUp: (e)=>{
            if (e.key === "Enter") {
                onSave();
            }
        },
        name: "promptInput",
        value: val,
        label: /*#__PURE__*/ React.createElement(React.Fragment, null, question, /*#__PURE__*/ React.createElement(DisplayIf, {
            condition: !!hint && typeof hint === "string"
        }, /*#__PURE__*/ React.createElement("span", {
            "data-balloon": hint,
            "data-balloon-length": "large",
            "data-balloon-pos": "up"
        }, /*#__PURE__*/ React.createElement("span", {
            className: "icon-question-circle qtr-margin-left",
            style: {
                cursor: "help"
            }
        })))),
        ref: inpRef
    })), /*#__PURE__*/ React.createElement(ModalFooter, null, /*#__PURE__*/ React.createElement(Button, {
        color: "light",
        onClick: onClose,
        disabled: doing
    }, "Close"), /*#__PURE__*/ React.createElement(Button, {
        color: "primary",
        onClick: onSave,
        disabled: doing
    }, "OK", doing ? /*#__PURE__*/ React.createElement("span", {
        className: "icon-animation spin qtr-margin-left"
    }) : null)));
}

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
const ConfirmationListener = ()=>{
    const [modals, setModals] = React.useState([]);
    const addModal = React.useCallback((modal)=>setModals((curr)=>[
                ...curr,
                {
                    id: Date.now(),
                    shown: true,
                    ...modal
                }
            ]
        )
    , []);
    const hideModal = React.useCallback((id)=>{
        setModals((curr)=>curr.map((m)=>m.id === id ? {
                    ...m,
                    shown: false
                } : m
            )
        );
    }, []);
    const deleteModal = React.useCallback((id)=>{
        setModals((curr)=>curr.filter((m)=>{
                if (m.id === id && typeof m.onClosed === "function") m.onClosed();
                return m.id !== id;
            })
        );
    }, []);
    const closeModal = React.useCallback((id, cb)=>{
        hideModal(id);
        setTimeout(()=>deleteModal(id)
        , 500);
        if (cb) cb();
    }, [
        hideModal,
        deleteModal
    ]);
    React.useEffect(()=>{
        const cb = (m)=>addModal(m)
        ;
        eventManager.on("showModal", cb);
        return ()=>{
            eventManager.off("showModal", cb);
        };
    }, [
        addModal
    ]);
    if (!modals.length) return null;
    return /*#__PURE__*/ React.createElement(React.Fragment, null, modals.map((modal)=>{
        if (modal.modalType === "dynamic") return /*#__PURE__*/ React.createElement(Modal, _extends({}, modal.modalProps, {
            key: modal.id,
            isOpen: modal.shown,
            closeHandle: ()=>closeModal(modal.id, modal.onModalClose)
            ,
            title: modal.title
        }), modal.fullBody ? typeof modal.fullBody === "function" ? modal.fullBody({
            close: ()=>closeModal(modal.id, modal.onModalClose)
        }) : /*#__PURE__*/ cloneElement(modal.fullBody, {
            close: ()=>closeModal(modal.id, modal.onModalClose)
        }) : /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(ModalBody, null, modal.body), /*#__PURE__*/ React.createElement(ModalFooter, null, modal.buttons.map((button, idx)=>/*#__PURE__*/ React.createElement(Button, {
                key: idx,
                color: button.color || "light",
                onClick: (e)=>{
                    if (typeof button.onClick === "function") button.onClick(e, ()=>closeModal(modal.id, modal.onModalClose)
                    );
                    else closeModal(modal.id, modal.onModalClose);
                }
            }, button.text)
        ))));
        if (modal.modalType === "notification") return /*#__PURE__*/ React.createElement(Modal, {
            key: modal.id,
            isOpen: modal.shown,
            closeIcon: true,
            closeHandle: ()=>closeModal(modal.id, modal.onModalClose)
            ,
            title: modal.title
        }, /*#__PURE__*/ React.createElement(ModalBody, null, modal.body), /*#__PURE__*/ React.createElement(ModalFooter, null, /*#__PURE__*/ React.createElement(Button, {
            color: modal.buttonColor || "light",
            onClick: ()=>closeModal(modal.id, modal.onModalClose)
        }, modal.button)));
        if (modal.modalType === "prompt") {
            if (typeof modal.options !== "undefined") {
                const { initial ="" , type ="text" , hint =undefined , validate =undefined ,  } = modal.options;
                return /*#__PURE__*/ React.createElement(PromptModal, {
                    key: modal.id,
                    isOpen: modal.shown,
                    onClose: ()=>closeModal(modal.id, modal.onModalClose)
                    ,
                    onSave: modal.cb,
                    title: modal.title,
                    question: modal.question,
                    initial: initial,
                    type: type,
                    hint: hint,
                    validate: validate
                });
            }
            return /*#__PURE__*/ React.createElement(PromptModal, {
                key: modal.id,
                isOpen: modal.shown,
                onClose: ()=>closeModal(modal.id, modal.onModalClose)
                ,
                onSave: modal.cb,
                title: modal.title,
                question: modal.question,
                initial: modal.initial,
                type: modal.type,
                hint: modal.hint
            });
        }
        if (modal.modalType === "confirmation") return /*#__PURE__*/ React.createElement(ConfirmationModal, {
            key: modal.id,
            isOpen: modal.shown,
            prompt: modal.prompt,
            confirmHandle: async (dontAskAgain)=>{
                const r = await modal.onConfirm(dontAskAgain);
                if (r) closeModal(modal.id, modal.onModalClose);
                return true;
            },
            closeHandle: ()=>closeModal(modal.id, modal.onModalClose)
            ,
            confirmText: modal.confirmText,
            confirmType: modal.confirmType,
            dontAskAgain: modal.dontAskAgain
        });
        return null;
    }));
};

function confirmation(prompt1, onConfirm, confirmType = "primary", confirmText = "Confirm", dontAskAgain = {
    show: false
}) {
    if (!prompt1) throw new Error("Prompt must be specified");
    if (!onConfirm || typeof onConfirm !== "function") throw new Error("onConfirm must be specified and must be a function");
    return new Promise((resolve)=>eventManager.emit("showModal", {
            modalType: "confirmation",
            prompt: /*#__PURE__*/ React.createElement("p", null, prompt1),
            onConfirm,
            confirmText,
            confirmType,
            dontAskAgain,
            onModalClose: resolve
        })
    );
}
const notificationModal = (title, body, buttonColor = "light", button = "OK")=>{
    if (!title || !body) throw new Error("Title and body must be specified");
    return new Promise((resolve)=>{
        eventManager.emit("showModal", {
            modalType: "notification",
            title,
            body,
            buttonColor,
            button,
            onClosed: resolve
        });
    });
};
function prompt(title, question, cb, initial, type = "text", hint = undefined) {
    if (!title || !question) throw new Error("Title and question must be specified");
    if (typeof initial === "object") {
        return new Promise((resolve)=>eventManager.emit("showModal", {
                modalType: "prompt",
                title,
                question,
                cb,
                options: initial,
                onModalClose: resolve
            })
        );
    }
    return new Promise((resolve)=>eventManager.emit("showModal", {
            modalType: "prompt",
            title,
            initial,
            type,
            question,
            cb,
            hint,
            onModalClose: resolve
        })
    );
}
const dynamicModal = ({ title , fullBody =null , body =null , buttons =[] , modalProps ={} ,  })=>{
    return new Promise((resolve)=>{
        eventManager.emit("showModal", {
            modalType: "dynamic",
            title,
            fullBody,
            body,
            buttons,
            modalProps,
            onModalClose: resolve
        });
    });
};

export { ConfirmationListener, ConfirmationModal, ConfirmationListener as DynamicModal, Modal, ModalBody, ModalFooter, ModalHeader, PromptModal, confirmation, dynamicModal, notificationModal as notification, notificationModal, prompt };
//# sourceMappingURL=index.js.map
