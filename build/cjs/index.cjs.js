'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDropzone = require('react-dropzone');
var bytes = require('bytes');
var reactToastify = require('react-toastify');
var Transition = require('react-transition-group/Transition');
var ReactModal = require('react-modal');
var EventEmitter = require('eventemitter3');
var reactDom = require('react-dom');
var useCallbackRef = require('use-callback-ref');
var Select = require('react-select');
var CreatableSelect = require('react-select/creatable');
var RCSlider = require('rc-slider');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDropzone__default = /*#__PURE__*/_interopDefaultLegacy(ReactDropzone);
var bytes__default = /*#__PURE__*/_interopDefaultLegacy(bytes);
var Transition__default = /*#__PURE__*/_interopDefaultLegacy(Transition);
var ReactModal__default = /*#__PURE__*/_interopDefaultLegacy(ReactModal);
var EventEmitter__default = /*#__PURE__*/_interopDefaultLegacy(EventEmitter);
var Select__default = /*#__PURE__*/_interopDefaultLegacy(Select);
var CreatableSelect__default = /*#__PURE__*/_interopDefaultLegacy(CreatableSelect);
var RCSlider__default = /*#__PURE__*/_interopDefaultLegacy(RCSlider);

const classes = (type, icon)=>{
    switch(type){
        case "warning":
            return [
                "alert--warning",
                icon || "icon-warning-outline"
            ];
        case "warning-alt":
            return [
                "alert--warning-alt",
                icon || "icon-warning-outline"
            ];
        case "danger":
        case "error":
            return [
                "alert--warning-alt",
                icon || "icon-error-outline"
            ];
        case "success":
            return [
                "alert--success",
                icon || "icon-check-outline"
            ];
        case "dark":
            return [
                "alert--dark",
                icon || "icon-help-outline"
            ];
        case "light":
            return [
                "alert--light",
                icon || "icon-help-outline"
            ];
        default:
            return [
                "alert--info",
                icon || "icon-info-outline"
            ];
    }
};
const Alert = ({ type ="info" , children , title ="" , dismissable =false , className =null , onDismiss =null , withIcon =true , icon =null ,  })=>{
    const [dismissed, setDismissed] = React__default["default"].useState(false);
    const handleDismiss = (e)=>{
        setDismissed(true);
        if (onDismiss) onDismiss(e);
    };
    if (dismissed) return null;
    const [alertClass, iconClass] = classes(type, icon);
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: `alert ${alertClass} ${className || ""}`
    }, withIcon ? /*#__PURE__*/ React__default["default"].createElement("div", {
        className: `alert__icon ${iconClass}`
    }) : null, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "alert__message"
    }, title && /*#__PURE__*/ React__default["default"].createElement("h4", null, title), children), dismissable && /*#__PURE__*/ React__default["default"].createElement("a", {
        className: "alert__close icon-close",
        onClick: handleDismiss
    }));
};
Alert.Warning = (props)=>/*#__PURE__*/ React__default["default"].createElement(Alert, {
        type: "warning",
        ...props
    })
;
Alert.Danger = (props)=>/*#__PURE__*/ React__default["default"].createElement(Alert, {
        type: "danger",
        ...props
    })
;
Alert.Error = (props)=>/*#__PURE__*/ React__default["default"].createElement(Alert, {
        type: "error",
        ...props
    })
;
Alert.Success = (props)=>/*#__PURE__*/ React__default["default"].createElement(Alert, {
        type: "success",
        ...props
    })
;
Alert.Info = (props)=>/*#__PURE__*/ React__default["default"].createElement(Alert, {
        type: "info",
        ...props
    })
;
Alert.Dark = (props)=>/*#__PURE__*/ React__default["default"].createElement(Alert, {
        type: "dark",
        ...props
    })
;
Alert.Light = (props)=>/*#__PURE__*/ React__default["default"].createElement(Alert, {
        type: "light",
        ...props
    })
;
Alert.WarningAlt = (props)=>/*#__PURE__*/ React__default["default"].createElement(Alert, {
        type: "warning-alt",
        ...props
    })
;

const appendClass = (c, what = undefined)=>{
    if (c) {
        if (typeof what === "function") return ` ${what()}`;
        return ` ${what || c}`;
    }
    return "";
};

const ConditionalWrapper = ({ condition , wrapper , children ,  })=>condition ? /*#__PURE__*/ React__default["default"].cloneElement(wrapper, null, children) : /*#__PURE__*/ React__default["default"].isValidElement(children) ? children : /*#__PURE__*/ React__default["default"].createElement(React__default["default"].Fragment, null, children)
;
const DisplayIf = ({ condition , children  })=>condition ? /*#__PURE__*/ React__default["default"].isValidElement(children) ? children : /*#__PURE__*/ React__default["default"].createElement(React__default["default"].Fragment, null, children) : null
;

const Element = ({ selected =false , icon =null , children , className =null , ...props })=>/*#__PURE__*/ React__default["default"].createElement("a", {
        className: `${selected ? "selected" : ""}${className ? ` ${className}` : ""}`,
        ...props
    }, icon ? /*#__PURE__*/ React__default["default"].createElement("span", {
        className: `icon-${icon}`
    }) : null, /*#__PURE__*/ React__default["default"].createElement(ConditionalWrapper, {
        condition: Boolean(icon),
        wrapper: /*#__PURE__*/ React__default["default"].createElement("span", {
            className: "qtr-margin-left"
        })
    }, children))
;
const Divider = ()=>/*#__PURE__*/ React__default["default"].createElement("div", {
        className: "divider"
    })
;
const Group$1 = ({ children  })=>/*#__PURE__*/ React__default["default"].createElement("div", {
        className: "dropdown__group"
    }, children)
;
const GroupHeader = ({ header  })=>/*#__PURE__*/ React__default["default"].createElement("div", {
        className: "dropdown__group-header"
    }, header)
;
const Menu = /*#__PURE__*/ React.forwardRef(({ children , className , ...props }, ref)=>{
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: `dropdown__menu${appendClass(className)}`,
        ...props,
        ref: ref
    }, children);
});

const DropdownHeader$1 = ({ type , handleClick , className , header ,  })=>{
    switch(type){
        case "icon":
            return /*#__PURE__*/ React__default["default"].createElement("span", {
                onClick: handleClick,
                className: className
            });
        case "link":
            return /*#__PURE__*/ React__default["default"].createElement("a", {
                onClick: handleClick,
                className: className
            }, header);
        case "div":
            return /*#__PURE__*/ React__default["default"].createElement("div", {
                onClick: handleClick,
                className: className
            }, header);
        case "button":
            return /*#__PURE__*/ React__default["default"].createElement("button", {
                type: "button",
                onClick: handleClick,
                className: `btn ${className}`
            }, header);
        default:
            return /*#__PURE__*/ React__default["default"].isValidElement(header) ? /*#__PURE__*/ React__default["default"].cloneElement(header, {
                onClick: handleClick
            }) : null;
    }
};
const Dropdown = ({ openTo ="right" , children , type ="button" , className =null , header =null , divClassName =null , up =false , onClose =null , onOpen =null , stopPropagation =false , alwaysClose =false , isOpen: outsideIsOpen , ...props })=>{
    const [isOpen, setIsOpen] = React.useState(false);
    const divRef = React.useRef(undefined);
    React.useEffect(()=>{
        if (typeof outsideIsOpen !== "undefined" && outsideIsOpen !== null) setIsOpen(outsideIsOpen);
    }, [
        outsideIsOpen
    ]);
    // eslint-disable-next-line prefer-const
    let handleOutsideClick;
    const handleClick = React.useCallback((e)=>{
        if (stopPropagation) {
            e.stopPropagation();
            e.preventDefault();
        }
        setIsOpen((current)=>{
            if (!current) {
                // attach/remove event handler
                document.addEventListener("click", handleOutsideClick, true);
            } else {
                document.removeEventListener("click", handleOutsideClick, true);
            }
            const newIsOpen = !current;
            if (newIsOpen && onOpen) onOpen(e);
            if (!newIsOpen && onClose) onClose(e);
            return newIsOpen;
        });
    }, [
        stopPropagation,
        onClose,
        onOpen
    ]);
    handleOutsideClick = (e)=>{
        // ignore clicks on the component itself
        if (!(e.target instanceof Node) || !(divRef === null || divRef === void 0 ? void 0 : divRef.current)) return;
        if (!alwaysClose && divRef.current && divRef.current.contains(e.target)) return;
        if (!divRef.current.contains(e.target)) {
            handleClick(e);
            return;
        }
        if (!divRef.current.isSameNode(e.target.parentNode) && alwaysClose) {
            handleClick(e);
            return;
        }
    };
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: `dropdown${appendClass([
            "left",
            "center"
        ].includes(openTo), `dropdown--${openTo}`)}${appendClass(up, "dropdown--up")}${appendClass(isOpen, "active")}${appendClass(divClassName)}`,
        ref: divRef,
        ...props
    }, /*#__PURE__*/ React__default["default"].createElement(DropdownHeader$1, {
        type: type,
        handleClick: handleClick,
        className: className,
        header: header
    }), /*#__PURE__*/ React__default["default"].createElement(Menu, null, children));
};
Dropdown.Divider = Divider;
Dropdown.Element = Element;
Dropdown.Group = Group$1;
Dropdown.GroupHeader = GroupHeader;
Dropdown.Menu = Menu;

const FileCard = ({ file , i , removeFile , inline  })=>/*#__PURE__*/ React__default["default"].createElement("div", {
        className: "file-drop__card col-lg-4 col-md-6 col-sm-6",
        key: `${i}-${file.name}`
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "panel panel--bordered hover-emboss--small",
        onClick: (e)=>e.stopPropagation()
    }, inline ? /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "panel__body flex flex-row"
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "text-left flex-fill",
        style: {
            maxWidth: "calc(100% - 20px)"
        }
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "text-ellipsis"
    }, file.name), /*#__PURE__*/ React__default["default"].createElement("small", {
        style: {
            whiteSpace: "nowrap"
        }
    }, bytes__default["default"].format(file.size, {
        unitSeparator: " "
    }))), /*#__PURE__*/ React__default["default"].createElement("a", {
        className: "link pull-right",
        onClick: ()=>removeFile(i)
    }, /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "icon-close",
        title: "Remove the file."
    }))) : /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "panel__body"
    }, /*#__PURE__*/ React__default["default"].createElement("a", {
        className: "link pull-right",
        style: {
            marginRight: "5px"
        },
        onClick: ()=>removeFile(i)
    }, /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "icon-close",
        title: "Remove the file."
    })), /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "text-ellipsis half-margin-bottom"
    }, file.name), /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "file-icon text-muted icon-file-o qtr-margin-right"
    }), /*#__PURE__*/ React__default["default"].createElement("small", null, bytes__default["default"].format(file.size, {
        unitSeparator: " "
    })))))
;
const DropzoneMessage = ({ inline , accept , maxFileSize  })=>{
    if (inline) {
        return /*#__PURE__*/ React__default["default"].createElement("div", {
            className: "dropzone-message flex flex-row flex-center-vertical"
        }, /*#__PURE__*/ React__default["default"].createElement("h5", {
            className: "text-muted text-left flex-fill no-margin"
        }, "Click Here or Drop Files to Upload"), accept && /*#__PURE__*/ React__default["default"].createElement("span", {
            className: "text-muted text-small half-margin-right"
        }, "Allowed files: ", typeof accept === "string" ? accept.split(",").join(", ") : accept), /*#__PURE__*/ React__default["default"].createElement("span", {
            className: "file-drop__icon icon-upload"
        }));
    }
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "dropzone-message"
    }, /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "file-drop__icon icon-upload"
    }), /*#__PURE__*/ React__default["default"].createElement("h4", {
        className: "text-muted"
    }, "Click Here or Drop Files to Upload"), accept && /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "text-muted"
    }, "Allowed files: ", accept.split(",").join(", ")), maxFileSize && /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "text-muted"
    }, "Max file size: ", bytes__default["default"].format(maxFileSize, {
        unitSeparator: " "
    })));
};
const DropzoneFiles = ({ files , inline , showTotalSelected , removeFile  })=>{
    if (!Array.isArray(files) || !files.length) {
        return null;
    }
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "dropzone-previews"
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "file-drop__container container--fluid"
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "row"
    }, files.map((file, i)=>/*#__PURE__*/ React__default["default"].createElement(FileCard, {
            key: i,
            file: file,
            i: i,
            inline: inline,
            removeFile: removeFile
        })
    ))), showTotalSelected ? /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "file-drop__filecnt"
    }, files.length, " selected") : null);
};
const Dropzone = ({ error , loose , compressed , inline , label , name , value , maxFileSize: customMaxFileSize , maxFiles , onChange , showTotalSelected , ...props })=>{
    const maxFileSize = React.useMemo(()=>{
        if (customMaxFileSize) {
            return bytes__default["default"].parse(customMaxFileSize);
        } else {
            return null;
        }
    }, [
        customMaxFileSize
    ]);
    const padding = React.useMemo(()=>{
        let tmp = "";
        if (loose) tmp = "dropzone--loose";
        if (compressed) tmp = "dropzone--compressed";
        if (inline && Array.isArray(value) && value.length) {
            switch(tmp){
                case "dropzone--loose":
                    tmp = `${tmp} half-padding-bottom`;
                    break;
                case "dropzone--compressed":
                    tmp = `${tmp} no-padding-bottom`;
                    break;
                default:
                    tmp = `${tmp} qtr-padding-bottom`;
                    break;
            }
        }
        return tmp;
    }, [
        loose,
        compressed,
        value,
        inline
    ]);
    const handleDrop = React.useCallback((filesToUpload)=>{
        if (maxFileSize) filesToUpload = filesToUpload.filter((file)=>file.size <= maxFileSize
        );
        if (maxFiles && filesToUpload.length > maxFiles) filesToUpload = filesToUpload.slice(0, maxFiles);
        onChange(filesToUpload);
    }, [
        maxFileSize,
        maxFiles,
        onChange
    ]);
    const removeFile = (toRemove)=>{
        onChange(Array.isArray(value) ? value.filter((_, idx)=>toRemove !== idx
        ) : value);
    };
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: `form-group${appendClass(error, "form-group--error")}`
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "form-group__text"
    }, label ? /*#__PURE__*/ React__default["default"].createElement("label", {
        htmlFor: name
    }, label) : null, /*#__PURE__*/ React__default["default"].createElement(ReactDropzone__default["default"], {
        ...props,
        onDrop: handleDrop,
        maxSize: maxFileSize
    }, ({ getRootProps , getInputProps  })=>/*#__PURE__*/ React__default["default"].createElement("div", {
            className: `dropzone ${padding}`,
            ...getRootProps()
        }, /*#__PURE__*/ React__default["default"].createElement("input", {
            ...getInputProps()
        }), /*#__PURE__*/ React__default["default"].createElement(DropzoneFiles, {
            files: value,
            showTotalSelected: showTotalSelected,
            inline: inline,
            removeFile: removeFile
        }), Array.isArray(value) && value.length ? null : /*#__PURE__*/ React__default["default"].createElement(DropzoneMessage, {
            maxFileSize: maxFileSize,
            inline: inline,
            accept: props.accept
        }))
    )), error ? /*#__PURE__*/ React__default["default"].createElement("div", {
        className: `help-block text-danger`,
        role: "alert"
    }, /*#__PURE__*/ React__default["default"].createElement("span", null, error)) : null);
};

const Dots = /*#__PURE__*/ React.forwardRef(({ color ="primary"  }, ref)=>/*#__PURE__*/ React__default["default"].createElement("div", {
        className: `loading-dots${color !== "primary" ? ` loading-dots--${color}` : ""}`,
        ref: ref
    }, /*#__PURE__*/ React__default["default"].createElement("span", null), /*#__PURE__*/ React__default["default"].createElement("span", null), /*#__PURE__*/ React__default["default"].createElement("span", null))
);

const Spinner = /*#__PURE__*/ React.forwardRef(({ size ="default" , text =null  }, ref)=>/*#__PURE__*/ React__default["default"].createElement("div", {
        className: "flex-center flex-middle",
        style: {
            flex: 1
        },
        ref: ref
    }, /*#__PURE__*/ React__default["default"].createElement("div", null, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: `loader${size !== "default" ? ` loader--${size}` : ""} flex-center`
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "wrapper flex flex-center"
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "wheel"
    }))), !text ? null : /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "base-margin-top text-center"
    }, text || "Loading...")))
);

const Progressbar = /*#__PURE__*/ React.forwardRef(({ size ="default" , withLabel =false , label =null , color =null , className =null , percentage , ...props }, ref)=>/*#__PURE__*/ React__default["default"].createElement("div", {
        className: `progressbar${appendClass(size !== "default", `progressbar--${size}`)}${appendClass(color, `progressbar--${color}`)}${appendClass(className)}`,
        "data-percentage": percentage,
        ...props,
        ref: ref
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "progressbar__fill"
    }), withLabel ? label ? /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "progressbar__label"
    }, label) : /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "progressbar__label"
    }, `${percentage}%`) : null)
);

exports.Button = void 0;
exports.Button = /*#__PURE__*/ React.forwardRef(({ size ="default" , color ="primary" , wide =false , justified =false , circle =false , className =null , asLink =false , style =null , selected =false , type =null , icon =false , ...props }, ref)=>/*#__PURE__*/ React.createElement(asLink ? "a" : "button", {
        className: `btn${appendClass(size !== "default", `btn--${size}`)} btn--${color}${appendClass(wide, "btn--wide")}${appendClass(justified, "btn--justified")}${appendClass(icon, "btn--icon")}${appendClass(circle, "btn--circle")}${appendClass(selected, "selected")}${appendClass(className)}${appendClass(asLink, "flex-middle flex-center")}`,
        style: {
            ...style || {},
            ...asLink ? {
                display: "flex"
            } : {}
        },
        ...asLink ? {} : {
            type: type || "button"
        },
        ...props,
        ref
    })
);
exports.Button.Primary = /*#__PURE__*/ React.forwardRef((props, ref)=>/*#__PURE__*/ React__default["default"].createElement(exports.Button, {
        ...props,
        color: "primary",
        ref: ref
    })
);
exports.Button.Secondary = /*#__PURE__*/ React.forwardRef((props, ref)=>/*#__PURE__*/ React__default["default"].createElement(exports.Button, {
        ...props,
        color: "secondary",
        ref: ref
    })
);
exports.Button.Success = /*#__PURE__*/ React.forwardRef((props, ref)=>/*#__PURE__*/ React__default["default"].createElement(exports.Button, {
        ...props,
        color: "success",
        ref: ref
    })
);
exports.Button.Dark = /*#__PURE__*/ React.forwardRef((props, ref)=>/*#__PURE__*/ React__default["default"].createElement(exports.Button, {
        ...props,
        color: "dark",
        ref: ref
    })
);
exports.Button.Ghost = /*#__PURE__*/ React.forwardRef(({ fullGhost =false , className , ...props }, ref)=>/*#__PURE__*/ React__default["default"].createElement(exports.Button, {
        className: `${appendClass(fullGhost, "btn--full-ghost")}${appendClass(className)}`,
        ...props,
        color: "ghost",
        ref: ref
    })
);
exports.Button.Link = /*#__PURE__*/ React.forwardRef((props, ref)=>/*#__PURE__*/ React__default["default"].createElement(exports.Button, {
        ...props,
        color: "link",
        ref: ref
    })
);
exports.Button.Light = /*#__PURE__*/ React.forwardRef((props, ref)=>/*#__PURE__*/ React__default["default"].createElement(exports.Button, {
        ...props,
        color: "light",
        ref: ref
    })
);
exports.Button.Danger = /*#__PURE__*/ React.forwardRef((props, ref)=>/*#__PURE__*/ React__default["default"].createElement(exports.Button, {
        ...props,
        color: "danger",
        ref: ref
    })
);

const ButtonGroup = /*#__PURE__*/ React.forwardRef(({ square =false , withDivider =false , className =null , ...props }, ref)=>/*#__PURE__*/ React__default["default"].createElement("div", {
        className: `btn-group${appendClass(square, "btn-group--square")}${appendClass(withDivider, " btn-group--divider")}${appendClass(className)}`,
        ...props,
        ref: ref
    })
);

const Label = ({ size ="default" , color ="primary" , bordered =false , removable =false , onRemove =null , raised =false , className =null , children , ...props })=>/*#__PURE__*/ React__default["default"].createElement("span", {
        className: `label label--${color}${appendClass(size !== "default", `label--${size}`)}${appendClass(bordered, "label--bordered")}${appendClass(raised, "label--raised")}${appendClass(className)}`,
        ...props
    }, children, removable ? /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "icon-close",
        onClick: onRemove
    }) : null)
;
Label.Primary = (props)=>/*#__PURE__*/ React__default["default"].createElement(Label, {
        color: "primary",
        ...props
    })
;
Label.Secondary = (props)=>/*#__PURE__*/ React__default["default"].createElement(Label, {
        color: "secondary",
        ...props
    })
;
Label.Tertiary = (props)=>/*#__PURE__*/ React__default["default"].createElement(Label, {
        color: "tertiary",
        ...props
    })
;
Label.Success = (props)=>/*#__PURE__*/ React__default["default"].createElement(Label, {
        color: "success",
        ...props
    })
;
Label.Info = (props)=>/*#__PURE__*/ React__default["default"].createElement(Label, {
        color: "info",
        ...props
    })
;
Label.WarningAlt = (props)=>/*#__PURE__*/ React__default["default"].createElement(Label, {
        color: "warning-alt",
        ...props
    })
;
Label.Warning = (props)=>/*#__PURE__*/ React__default["default"].createElement(Label, {
        color: "warning",
        ...props
    })
;
Label.Danger = (props)=>/*#__PURE__*/ React__default["default"].createElement(Label, {
        color: "danger",
        ...props
    })
;
Label.Dark = (props)=>/*#__PURE__*/ React__default["default"].createElement(Label, {
        color: "dark",
        ...props
    })
;
Label.Light = (props)=>/*#__PURE__*/ React__default["default"].createElement(Label, {
        color: "light",
        ...props
    })
;

const Panel = /*#__PURE__*/ React__default["default"].forwardRef(({ color ="plain" , padding ="default" , bordered =false , raised =false , well =false , className =null , ...props }, ref)=>/*#__PURE__*/ React__default["default"].createElement("div", {
        className: `panel${appendClass(color !== "plain", `panel--${color}`)}${appendClass(padding !== "default", `panel--${padding}`)}${appendClass(bordered, ()=>{
            if (typeof bordered === "string") return `panel--bordered-${bordered}`;
            if (Array.isArray(bordered)) return bordered.map((b)=>`panel--bordered-${b}`
            ).join(" ");
            return "panel--bordered";
        })}${appendClass(raised, "panel--raised")}${appendClass(well, "panel--well")}${appendClass(className)}`,
        ref: ref,
        ...props
    })
);

const copyStringToClipboard = async (str)=>{
    str = typeof str === "string" ? str : str.toString();
    if (!(navigator === null || navigator === void 0 ? void 0 : navigator.clipboard)) {
        const el = document.createElement("textarea");
        el.value = str;
        el.setAttribute("readonly", "");
        el.style.position = "absolute";
        el.style.left = "-9999px";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
    } else {
        await navigator.clipboard.writeText(str);
    }
};

const iconType = (type)=>{
    switch(type){
        case "success":
            return "text-success icon-check-outline";
        case "error":
            return "text-danger icon-error-outline";
        case "warning":
            return "text-warning icon-warning-outline";
        case "info":
            return "text-info icon-info-outline";
        case "loading":
            return "text-muted icon-spinner spin";
        case "none":
            return null;
        default:
            return "text-muted icon-alert";
    }
};
const ToastIcon = ({ type  })=>{
    return type ? /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "toast__icon"
    }, /*#__PURE__*/ React__default["default"].createElement("span", {
        className: iconType(type)
    })) : null;
};
const Toast = ({ title , message , type , copyError =false , bordered =false ,  })=>/*#__PURE__*/ React__default["default"].createElement("div", {
        className: `toast${appendClass(bordered, "toast--bordered")}`
    }, /*#__PURE__*/ React__default["default"].createElement(ToastIcon, {
        type: type
    }), /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "toast__body"
    }, title ? /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "toast__title"
    }, title) : null, message ? /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "toast__message"
    }, message, type === "error" && copyError ? /*#__PURE__*/ React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/ React__default["default"].createElement("br", null), /*#__PURE__*/ React__default["default"].createElement("br", null), /*#__PURE__*/ React__default["default"].createElement("a", {
        onClick: ()=>typeof message === "string" || typeof message === "number" ? void copyStringToClipboard(message) : void 0
    }, "Copy to clipboard")) : null) : null))
;
const toast = (type, title, message, copyError = true, containerId = "_GLOBAL_", args = {})=>{
    var _a;
    if (type === "loading") {
        (_a = args.autoClose) !== null && _a !== void 0 ? _a : args.autoClose = false;
    }
    return reactToastify.toast(()=>/*#__PURE__*/ React__default["default"].createElement(Toast, {
            ...{
                type,
                title,
                message,
                copyError
            }
        })
    , {
        containerId,
        ...args
    });
};
toast.success = (...args)=>toast("success", ...args)
;
toast.error = (...args)=>toast("error", ...args)
;
toast.warning = (...args)=>toast("warning", ...args)
;
toast.info = (...args)=>toast("info", ...args)
;
toast.loading = (...args)=>toast("loading", ...args)
;
toast.none = (...args)=>toast("none", ...args)
;
toast.update = (toastId, updates, options)=>{
    options.render = /*#__PURE__*/ React__default["default"].createElement(Toast, {
        ...updates
    });
    reactToastify.toast.update(toastId, options);
};
toast.dismiss = (...args)=>reactToastify.toast.dismiss(...args)
;

const ToastContainer = ({ position ="bottom-right" , autoClose =5000 , draggable =false , hideProgressBar =true , containerId ="_GLOBAL_" , transition =reactToastify.Slide , bordered , shadow ="lg" , bodyClassName , toastClassName , ...props })=>/*#__PURE__*/ React__default["default"].createElement(reactToastify.ToastContainer, {
        transition: transition,
        position: position,
        autoClose: autoClose,
        draggable: draggable,
        hideProgressBar: hideProgressBar,
        containerId: containerId,
        ...props,
        closeButton: false,
        bodyClassName: `${bodyClassName || ""}${appendClass(bordered, "toast--bordered")}`,
        toastClassName: `${toastClassName || ""}${appendClass(shadow === "md", "toast--shadow-md")}${appendClass(shadow === "sm", "toast--shadow-sm")}`,
        style: {
            width: "unset"
        }
    })
;

const Footer = ()=>/*#__PURE__*/ React__default["default"].createElement("footer", {
        className: "footer"
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "footer__links"
    }, /*#__PURE__*/ React__default["default"].createElement("ul", {
        className: "list list--inline"
    }, /*#__PURE__*/ React__default["default"].createElement("li", null, /*#__PURE__*/ React__default["default"].createElement("a", {
        href: "http://www.cisco.com/cisco/web/siteassets/contacts/index.html",
        target: "_blank",
        rel: "noopener noreferrer"
    }, "Contacts")), /*#__PURE__*/ React__default["default"].createElement("li", null, /*#__PURE__*/ React__default["default"].createElement("a", {
        href: "https://secure.opinionlab.com/ccc01/o.asp?id=jBjOhqOJ",
        target: "_blank",
        rel: "noopener noreferrer"
    }, "Feedback")), /*#__PURE__*/ React__default["default"].createElement("li", null, /*#__PURE__*/ React__default["default"].createElement("a", {
        href: "https://www.cisco.com/c/en/us/about/help.html",
        target: "_blank",
        rel: "noopener noreferrer"
    }, "Help")), /*#__PURE__*/ React__default["default"].createElement("li", null, /*#__PURE__*/ React__default["default"].createElement("a", {
        href: "http://www.cisco.com/c/en/us/about/sitemap.html",
        target: "_blank",
        rel: "noopener noreferrer"
    }, "Site Map")), /*#__PURE__*/ React__default["default"].createElement("li", null, /*#__PURE__*/ React__default["default"].createElement("a", {
        href: "https://www.cisco.com/c/en/us/about/legal/terms-conditions.html",
        target: "_blank",
        rel: "noopener noreferrer"
    }, "Terms & Conditions")), /*#__PURE__*/ React__default["default"].createElement("li", null, /*#__PURE__*/ React__default["default"].createElement("a", {
        href: "https://www.cisco.com/c/en/us/about/legal/privacy-full.html",
        target: "_blank",
        rel: "noopener noreferrer"
    }, "Privacy Statement")), /*#__PURE__*/ React__default["default"].createElement("li", null, /*#__PURE__*/ React__default["default"].createElement("a", {
        href: "https://www.cisco.com/c/en/us/about/legal/privacy-full.html#cookies",
        target: "_blank",
        rel: "noopener noreferrer"
    }, "Cookie Policy")), /*#__PURE__*/ React__default["default"].createElement("li", null, /*#__PURE__*/ React__default["default"].createElement("a", {
        href: "https://www.cisco.com/c/en/us/about/legal/trademarks.html",
        target: "_blank",
        rel: "noopener noreferrer"
    }, "Trademarks")))))
;

const Header = ({ children , fluid =false , ...props })=>/*#__PURE__*/ React__default["default"].createElement("header", {
        className: "header",
        ...props
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: `container${fluid ? "-fluid" : ""}`
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "header-panels"
    }, children)))
;
const HeaderPanel = ({ children , center =false , right =false , className =null , ...props })=>/*#__PURE__*/ React__default["default"].createElement("div", {
        className: `header-panel${appendClass(center, "header-panel--center")}${appendClass(right, "header-panel--right")}${appendClass(className)}`,
        ...props
    }, children)
;
const HeaderTitle = ({ icon =true , link =null , title , ...props })=>/*#__PURE__*/ React__default["default"].createElement(HeaderPanel, {
        ...props
    }, icon ? /*#__PURE__*/ React__default["default"].createElement("a", {
        className: "header__logo",
        href: link || "http://www.cisco.com",
        target: "_blank",
        rel: "noopener noreferrer"
    }, /*#__PURE__*/ React__default["default"].createElement("span", {
        className: typeof icon === "string" ? `icon-${icon}` : "icon-cisco"
    })) : null, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "header__title"
    }, title))
;

const Wrapper$1 = /*#__PURE__*/ React__default["default"].createElement("div", {
    className: "responsive-table"
});
const GenericTable = /*#__PURE__*/ React.forwardRef(({ outerWrap =true , lined =false , bordered =false , striped =false , selectable =false , fixed =false , wrapped =false , compressed =false , loose =false , className =null , ...props }, forwardedRef)=>/*#__PURE__*/ React__default["default"].createElement(ConditionalWrapper, {
        condition: outerWrap,
        wrapper: Wrapper$1
    }, /*#__PURE__*/ React__default["default"].createElement("table", {
        className: `table${appendClass(lined, "table--lined")}${appendClass(bordered, "table--bordered")}${appendClass(striped, "table--striped")}${appendClass(selectable, "table--selectable")}${appendClass(fixed, "table--fixed")}${appendClass(wrapped, "table--wrapped")}${appendClass(compressed, "table--compressed")}${appendClass(loose, "table--loose")}${appendClass(className)}`,
        ...props,
        ref: forwardedRef
    }))
);

const PaginationContext = /*#__PURE__*/ React__default["default"].createContext(null);

const Button = ({ content , position , active =false , disabled =false ,  })=>/*#__PURE__*/ React__default["default"].createElement(PaginationContext.Consumer, null, ({ changePage  })=>/*#__PURE__*/ React__default["default"].createElement("li", {
            className: active ? "active" : ""
        }, /*#__PURE__*/ React__default["default"].createElement("a", {
            className: disabled ? "disabled" : "",
            onClick: (e)=>changePage(e, position)
        }, content))
    )
;
const FirstPrev = ()=>{
    const { perPage , firstAndLast , position , icons , prev , beginAt  } = React__default["default"].useContext(PaginationContext);
    const disabled = position < perPage + beginAt;
    const r = [];
    if (icons && firstAndLast) r.push(/*#__PURE__*/ React__default["default"].createElement(Button, {
        content: /*#__PURE__*/ React__default["default"].createElement("span", {
            className: "icon-chevron-left-double"
        }),
        disabled: disabled,
        key: "first-page",
        position: beginAt
    }));
    r.push(/*#__PURE__*/ React__default["default"].createElement(Button, {
        content: icons ? /*#__PURE__*/ React__default["default"].createElement("span", {
            className: "icon-chevron-left"
        }) : prev,
        disabled: disabled,
        key: "previous-page",
        position: position - perPage
    }));
    return /*#__PURE__*/ React__default["default"].createElement(React__default["default"].Fragment, null, r);
};
const NextLast = ()=>{
    const { beginAt , perPage , total , firstAndLast , position , icons , next  } = React__default["default"].useContext(PaginationContext);
    const pages = Math.floor(total / perPage) + 1;
    const disabled = position > total - perPage + beginAt;
    const r = [];
    r.push(/*#__PURE__*/ React__default["default"].createElement(Button, {
        content: icons ? /*#__PURE__*/ React__default["default"].createElement("span", {
            className: "icon-chevron-right"
        }) : next,
        disabled: disabled,
        key: "next-page",
        position: position + perPage
    }));
    if (icons && firstAndLast) r.push(/*#__PURE__*/ React__default["default"].createElement(Button, {
        content: /*#__PURE__*/ React__default["default"].createElement("span", {
            className: "icon-chevron-right-double"
        }),
        disabled: disabled,
        key: "last-page",
        position: (pages - 1) * perPage + beginAt
    }));
    return /*#__PURE__*/ React__default["default"].createElement(React__default["default"].Fragment, null, r);
};
const Pages = ({ start , finish  })=>/*#__PURE__*/ React__default["default"].createElement(PaginationContext.Consumer, null, ({ perPage , active , beginAt  })=>[
            ...Array(finish - start + 1)
        ].map((v, i)=>{
            const current = start + i;
            return /*#__PURE__*/ React__default["default"].createElement(Button, {
                active: active === current,
                content: `${current}`,
                key: `${current}-page`,
                position: (current - 1) * perPage + beginAt
            });
        })
    )
;
const Pagination = ({ beginAt =1 , rounded =false , firstAndLast =true , icons =false , next ="Next" , perPage =1 , prev ="Previous" , size ="default" , className =null , position , total , onPageChange , ...rest })=>{
    const pages = Math.ceil(total / perPage);
    const active = Math.floor(position / perPage) + 1;
    const changePage = (e, newPosition)=>{
        if (typeof onPageChange === "function") onPageChange(e, newPosition);
    };
    return /*#__PURE__*/ React__default["default"].createElement(PaginationContext.Provider, {
        value: {
            active,
            beginAt,
            changePage,
            firstAndLast,
            icons,
            next,
            perPage,
            position,
            prev,
            total
        }
    }, /*#__PURE__*/ React__default["default"].createElement("ul", {
        className: `pagination${size !== "default" ? ` pagination--${size}` : ""}${rounded ? " pagination--rounded" : ""}${className ? ` ${className}` : ""}`,
        ...rest
    }, /*#__PURE__*/ React__default["default"].createElement(FirstPrev, null), active < 4 || pages === 4 ? /*#__PURE__*/ React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/ React__default["default"].createElement(Pages, {
        start: 1,
        finish: Math.min(pages, 4)
    }), pages > 4 ? /*#__PURE__*/ React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/ React__default["default"].createElement("li", null, /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "icon-more"
    })), /*#__PURE__*/ React__default["default"].createElement(Button, {
        content: pages,
        key: `${pages}-page`,
        position: (pages - 1) * perPage + beginAt
    })) : null) : /*#__PURE__*/ React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/ React__default["default"].createElement(Button, {
        active: active === beginAt,
        content: "1",
        key: "1-page",
        position: beginAt
    }), /*#__PURE__*/ React__default["default"].createElement("li", null, /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "icon-more"
    })), active < pages - 2 ? /*#__PURE__*/ React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/ React__default["default"].createElement(Pages, {
        start: active - 1,
        finish: active + 1
    }), /*#__PURE__*/ React__default["default"].createElement("li", null, /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "icon-more"
    })), /*#__PURE__*/ React__default["default"].createElement(Button, {
        active: active === pages,
        content: pages,
        key: `${pages}-page`,
        position: (pages - 1) * perPage + beginAt
    })) : /*#__PURE__*/ React__default["default"].createElement(Pages, {
        start: pages - 3,
        finish: pages
    })), /*#__PURE__*/ React__default["default"].createElement(NextLast, null)));
};

const DefaultTablePagination = ({ perPageUp =false , paginationProps ={} , total , position , onPageChange , onPerPageChange ,  })=>{
    const [perPage, setPerPage] = React__default["default"].useState(50);
    React__default["default"].useEffect(()=>{
        if (typeof onPerPageChange === "function") onPerPageChange(perPage);
    }, [
        perPage,
        onPerPageChange
    ]);
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "flex-middle"
    }, /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "qtr-margin-right"
    }, "Page:"), /*#__PURE__*/ React__default["default"].createElement(Pagination, {
        firstAndLast: true,
        icons: true,
        perPage: perPage,
        total: total,
        position: position,
        onPageChange: onPageChange,
        beginAt: 0,
        className: "no-margin-top",
        ...paginationProps
    }), /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "text-muted qtr-margin-left qtr-margin-right"
    }, "|"), /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "qtr-margin-right"
    }, "Per page:"), /*#__PURE__*/ React__default["default"].createElement(Dropdown, {
        type: "link",
        header: perPage,
        openTo: "left",
        alwaysClose: true,
        up: perPageUp
    }, [
        10,
        25,
        50,
        100,
        250,
        500
    ].map((v)=>/*#__PURE__*/ React__default["default"].createElement(Dropdown.Element, {
            onClick: ()=>setPerPage(v)
            ,
            key: v,
            selected: v === perPage
        }, v)
    )));
};

const asArray = (v)=>Array.isArray(v) ? v : [
        v
    ]
;
const Table = /*#__PURE__*/ React.forwardRef(({ pagination =DefaultTablePagination , paginationLocation ="bottom-right" , paginationProps ={
    icons: true,
    firstAndLast: true
} , data =null , children =null , start =1 , ...props }, forwardedRef)=>{
    const [position, setPosition] = React__default["default"].useState(typeof start === "number" ? start : 0);
    const [perPage, setPerPage] = React__default["default"].useState(50);
    const tbody = React__default["default"].useMemo(()=>children ? asArray(children).find((child)=>child.type === "tbody"
        ) : null
    , [
        children
    ]);
    const thead = React__default["default"].useMemo(()=>children ? asArray(children).find((child)=>child.type === "thead"
        ) : null
    , [
        children
    ]);
    const total = React__default["default"].useMemo(()=>(data ? data.length : asArray(tbody.props.children).length) || 0
    , [
        data,
        tbody
    ]);
    React__default["default"].useEffect(()=>setPosition(0)
    , [
        data,
        tbody
    ]);
    return /*#__PURE__*/ React__default["default"].createElement(React__default["default"].Fragment, null, Boolean(paginationLocation.includes("top-")) && /*#__PURE__*/ React__default["default"].createElement("div", {
        className: `flex base-margin-bottom${appendClass(paginationLocation === "top-right", "flex-right")}`
    }, /*#__PURE__*/ React__default["default"].createElement(pagination, {
        total,
        position,
        onPageChange: (_, p)=>setPosition(p)
        ,
        onPerPageChange: (p)=>setPerPage(p)
        ,
        paginationProps
    })), /*#__PURE__*/ React__default["default"].createElement(GenericTable, {
        ...props,
        ref: forwardedRef
    }, thead, /*#__PURE__*/ React__default["default"].createElement("tbody", null, data ? data.slice(position, position + perPage).map((row, rid)=>/*#__PURE__*/ React__default["default"].createElement("tr", {
            key: rid
        }, row.map((col, cid)=>/*#__PURE__*/ React__default["default"].createElement("td", {
                key: cid
            }, col)
        ))
    ) : asArray(tbody.props.children).slice(position, position + perPage))), Boolean(paginationLocation.includes("bottom-")) && /*#__PURE__*/ React__default["default"].createElement("div", {
        className: `flex base-margin-top${appendClass(paginationLocation === "bottom-right", "flex-right")}`
    }, /*#__PURE__*/ React__default["default"].createElement(pagination, {
        total,
        position,
        onPageChange: (_, p)=>setPosition(p)
        ,
        onPerPageChange: (p)=>setPerPage(p)
        ,
        perPageUp: true,
        paginationProps
    })));
});

const Checkbox = /*#__PURE__*/ React.forwardRef(({ inline =false , asFormGroup =true , children =null , spacing =null , ...input }, ref)=>/*#__PURE__*/ React__default["default"].createElement(ConditionalWrapper, {
        condition: asFormGroup,
        wrapper: /*#__PURE__*/ React__default["default"].createElement("div", {
            className: `form-group${appendClass(inline, "form-group--inline")}${appendClass(spacing && spacing !== "default", `form-group--${spacing}`)}`
        })
    }, /*#__PURE__*/ React__default["default"].createElement("label", {
        className: "checkbox"
    }, /*#__PURE__*/ React__default["default"].createElement("input", {
        type: "checkbox",
        ...input,
        ref: ref
    }), /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "checkbox__input"
    }), children ? /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "checkbox__label"
    }, children) : null))
);

const Switch = /*#__PURE__*/ React.forwardRef(({ left =null , right =null , disabled =false , inline =false , spacing =null , asFormGroup =true , className =null , id =null , style =null , ...input }, forwardedRef)=>/*#__PURE__*/ React__default["default"].createElement(ConditionalWrapper, {
        condition: asFormGroup,
        wrapper: /*#__PURE__*/ React__default["default"].createElement("div", {
            className: `form-group${appendClass(inline, "form-group--inline")}${appendClass(className)}${appendClass(spacing, ` form-group--${spacing}`)}`,
            style: style
        })
    }, /*#__PURE__*/ React__default["default"].createElement("label", {
        className: `switch${disabled ? " disabled" : ""}`,
        htmlFor: id || input.name
    }, /*#__PURE__*/ React__default["default"].createElement("input", {
        type: "checkbox",
        ...input,
        id: id || input.name,
        checked: input.checked,
        ref: forwardedRef
    }), left ? /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "switch__label"
    }, left) : null, /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "switch__input"
    }), right ? /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "switch__label"
    }, right) : null))
);

const InputHelpBaloon = ({ baloon  })=>/*#__PURE__*/ React__default["default"].createElement("span", {
        "data-balloon": baloon,
        "data-balloon-length": "large",
        "data-balloon-pos": "up",
        className: "qtr-margin-left"
    }, /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "icon-question-circle",
        style: {
            cursor: "help"
        }
    }))
;

const InputHelpBlock = ({ text =null  })=>text && /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "form-group__help",
        role: "alert"
    }, /*#__PURE__*/ React__default["default"].createElement("span", null, text))
;

const Input = /*#__PURE__*/ React.forwardRef(({ type ="text" , inline =null , helpBlock =true , label =null , icon =null , iconClick =null , className =null , plain =false , horizontal =null , horizontalLabelClassName ="col-3" , error =null , prefix =null , ...input }, ref)=>/*#__PURE__*/ React__default["default"].createElement("div", {
        className: `form-group${appendClass(className)}${appendClass(error, "form-group--error")}${appendClass(inline === "form" || inline === "both", "form-group--inline")}${appendClass(inline === "label" || inline === "both", "label--inline")}${appendClass(icon, "input--icon")}${appendClass(horizontal, "form-group--horizontal")}`
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "form-group__text"
    }, /*#__PURE__*/ React__default["default"].createElement(ConditionalWrapper, {
        wrapper: /*#__PURE__*/ React__default["default"].createElement("div", {
            className: "flex labeled"
        }),
        condition: !!prefix
    }, prefix ? /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "input-label"
    }, prefix) : null, /*#__PURE__*/ React__default["default"].createElement("input", {
        type: type,
        ref: ref,
        ...input,
        className: appendClass(plain, "form-group--plaintext")
    })), label ? /*#__PURE__*/ React__default["default"].createElement("label", {
        htmlFor: input.id,
        className: appendClass(horizontal, horizontalLabelClassName)
    }, label) : null, icon ? /*#__PURE__*/ React__default["default"].createElement("button", {
        type: "button",
        className: "link",
        tabIndex: -1,
        onClick: iconClick
    }, /*#__PURE__*/ React__default["default"].createElement("span", {
        className: `icon-${icon}`
    })) : null), /*#__PURE__*/ React__default["default"].createElement(DisplayIf, {
        condition: !inline && helpBlock && !!error
    }, /*#__PURE__*/ React__default["default"].createElement(InputHelpBlock, {
        text: error
    })))
);

const ModalHeader = ({ className =null , children , ...props })=>/*#__PURE__*/ React__default["default"].createElement("div", {
        className: `modal__header${appendClass(className)}`,
        ...props
    }, children)
;

const ModalFooter = ({ className =null , children , ...props })=>/*#__PURE__*/ React__default["default"].createElement("div", {
        className: `modal__footer${appendClass(className)}`,
        ...props
    }, children)
;

const ModalBody = ({ className =null , children , ...props })=>/*#__PURE__*/ React__default["default"].createElement("div", {
        className: `modal__body${appendClass(className)}`,
        ...props
    }, children)
;

const Modal = ({ size =null , autoClose =true , animationDuration =250 , closeIcon =false , title =null , closeHandle =null , left =false , transitionEvents =null , dialogProps =null , contentProps =null , maximize =false , children , isOpen , ...props })=>{
    const [maximized, setMaximized] = React__default["default"].useState(false);
    React__default["default"].useEffect(()=>setMaximized(false)
    , [
        isOpen
    ]);
    const realSize = React__default["default"].useMemo(()=>maximized ? "full" : size
    , [
        maximized,
        size
    ]);
    const maximizeCb = React__default["default"].useCallback(()=>{
        setMaximized((curr)=>!curr
        );
    }, []);
    const nodeRef = React__default["default"].useRef(null);
    return /*#__PURE__*/ React__default["default"].createElement(Transition__default["default"], {
        in: isOpen,
        mountOnEnter: true,
        unmountOnExit: true,
        timeout: animationDuration,
        nodeRef: nodeRef,
        ...transitionEvents
    }, (state)=>/*#__PURE__*/ React__default["default"].createElement(ReactModal__default["default"], {
            ...props,
            onRequestClose: autoClose && closeHandle ? closeHandle : undefined,
            overlayClassName: "modal-backdrop",
            isOpen: [
                "entering",
                "entered"
            ].includes(state),
            className: `modal${appendClass(realSize, `modal--${realSize}`)}${appendClass(left, "modal--left")}`,
            closeTimeoutMS: typeof animationDuration === "object" ? animationDuration.exit : animationDuration,
            ref: nodeRef
        }, /*#__PURE__*/ React__default["default"].createElement("div", {
            className: "modal__dialog",
            ...dialogProps,
            onClick: (e)=>e.stopPropagation()
        }, /*#__PURE__*/ React__default["default"].createElement("div", {
            className: "modal__content",
            ...contentProps
        }, /*#__PURE__*/ React__default["default"].createElement(DisplayIf, {
            condition: !!(closeIcon && closeHandle) || maximize
        }, /*#__PURE__*/ React__default["default"].createElement(ConditionalWrapper, {
            condition: !!(closeIcon && closeHandle) && maximize,
            wrapper: /*#__PURE__*/ React__default["default"].createElement("div", {
                className: "modal__close"
            })
        }, Boolean(maximize) && /*#__PURE__*/ React__default["default"].createElement("a", {
            className: `${appendClass(!(closeIcon && closeHandle), "modal__close")}${appendClass(closeIcon && closeHandle, "qtr-margin-right")}`,
            onClick: maximizeCb
        }, /*#__PURE__*/ React__default["default"].createElement("span", {
            className: maximized ? "icon-minimize" : "icon-maximize"
        })), Boolean(closeIcon && closeHandle) && /*#__PURE__*/ React__default["default"].createElement("a", {
            className: !maximize ? "modal__close" : "",
            onClick: closeHandle
        }, /*#__PURE__*/ React__default["default"].createElement("span", {
            className: "icon-close"
        })))), Boolean(title) && /*#__PURE__*/ React__default["default"].createElement(ModalHeader, null, /*#__PURE__*/ React__default["default"].createElement("h1", {
            className: "modal__title"
        }, title)), children)))
    );
};
Modal.Small = (props)=>/*#__PURE__*/ React__default["default"].createElement(Modal, {
        ...props,
        size: "small"
    })
;
Modal.Large = (props)=>/*#__PURE__*/ React__default["default"].createElement(Modal, {
        ...props,
        size: "large"
    })
;
Modal.Full = (props)=>/*#__PURE__*/ React__default["default"].createElement(Modal, {
        ...props,
        size: "full"
    })
;
Modal.Fluid = (props)=>/*#__PURE__*/ React__default["default"].createElement(Modal, {
        ...props,
        size: "fluid"
    })
;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

const ConfirmationModal = ({ isOpen =false , confirmType ="primary" , autoClose =true , confirmText ="Confirm" , confirmHandle , closeHandle , prompt , dontAskAgain ={
    show: false
} ,  })=>{
    const [doing, setDoing] = React__default["default"].useState(false);
    const [dontAsk, setDontAsk] = React__default["default"].useState(false);
    return /*#__PURE__*/ React__default["default"].createElement(Modal, {
        isOpen: isOpen,
        closeIcon: true,
        closeHandle: closeHandle,
        autoClose: autoClose,
        title: "Confirmation"
    }, /*#__PURE__*/ React__default["default"].createElement(ModalBody, null, prompt, (dontAskAgain === null || dontAskAgain === void 0 ? void 0 : dontAskAgain.show) ? /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "form-group"
    }, /*#__PURE__*/ React__default["default"].createElement("label", {
        className: "checkbox"
    }, /*#__PURE__*/ React__default["default"].createElement("input", {
        type: "checkbox",
        checked: dontAsk,
        onChange: (e)=>{
            setDontAsk(e.target.checked);
        }
    }), /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "checkbox__input"
    }), /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "checkbox__label"
    }, dontAskAgain.text || "Don't ask again"))) : null), /*#__PURE__*/ React__default["default"].createElement(ModalFooter, null, /*#__PURE__*/ React__default["default"].createElement(exports.Button.Light, {
        onClick: closeHandle
    }, "Close"), /*#__PURE__*/ React__default["default"].createElement(exports.Button, {
        color: confirmType,
        disabled: doing,
        onClick: async ()=>{
            setDoing(true);
            if (await confirmHandle(dontAsk)) setDoing(false);
        }
    }, confirmText, doing ? /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "icon-animation spin qtr-margin-left"
    }) : null)));
};

function PromptModal({ title , question , onSave: cb , onClose , initial , type , isOpen , hint , validate ,  }) {
    const [val, setVal] = React__default["default"].useState(initial);
    const [doing, setDoing] = React__default["default"].useState(false);
    const onSave = React__default["default"].useCallback(async ()=>{
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
    React__default["default"].useEffect(()=>setVal(initial)
    , [
        initial
    ]);
    const inpRef = React__default["default"].useRef(undefined);
    React__default["default"].useEffect(()=>{
        if (isOpen && inpRef.current) inpRef.current.focus();
    }, [
        isOpen
    ]);
    return /*#__PURE__*/ React__default["default"].createElement(Modal, {
        isOpen: isOpen,
        closeIcon: true,
        closeHandle: onClose,
        title: title
    }, /*#__PURE__*/ React__default["default"].createElement(ModalBody, null, /*#__PURE__*/ React__default["default"].createElement(Input, {
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
        label: /*#__PURE__*/ React__default["default"].createElement(React__default["default"].Fragment, null, question, /*#__PURE__*/ React__default["default"].createElement(DisplayIf, {
            condition: !!hint && typeof hint === "string"
        }, /*#__PURE__*/ React__default["default"].createElement("span", {
            "data-balloon": hint,
            "data-balloon-length": "large",
            "data-balloon-pos": "up"
        }, /*#__PURE__*/ React__default["default"].createElement("span", {
            className: "icon-question-circle qtr-margin-left",
            style: {
                cursor: "help"
            }
        })))),
        ref: inpRef
    })), /*#__PURE__*/ React__default["default"].createElement(ModalFooter, null, /*#__PURE__*/ React__default["default"].createElement(exports.Button, {
        color: "light",
        onClick: onClose,
        disabled: doing
    }, "Close"), /*#__PURE__*/ React__default["default"].createElement(exports.Button, {
        color: "primary",
        onClick: onSave,
        disabled: doing
    }, "OK", doing ? /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "icon-animation spin qtr-margin-left"
    }) : null)));
}

const eventManager = new EventEmitter__default["default"]();

const ConfirmationListener = ()=>{
    const [modals, setModals] = React__default["default"].useState([]);
    const addModal = React__default["default"].useCallback((modal)=>setModals((curr)=>[
                ...curr,
                {
                    id: Date.now(),
                    shown: true,
                    ...modal
                }
            ]
        )
    , []);
    const hideModal = React__default["default"].useCallback((id)=>{
        setModals((curr)=>curr.map((m)=>m.id === id ? {
                    ...m,
                    shown: false
                } : m
            )
        );
    }, []);
    const deleteModal = React__default["default"].useCallback((id)=>{
        setModals((curr)=>curr.filter((m)=>{
                if (m.id === id && typeof m.onClosed === "function") m.onClosed();
                return m.id !== id;
            })
        );
    }, []);
    const closeModal = React__default["default"].useCallback((id, cb)=>{
        hideModal(id);
        setTimeout(()=>deleteModal(id)
        , 500);
        if (cb) cb();
    }, [
        hideModal,
        deleteModal
    ]);
    React__default["default"].useEffect(()=>{
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
    return /*#__PURE__*/ React__default["default"].createElement(React__default["default"].Fragment, null, modals.map((modal)=>{
        if (modal.modalType === "dynamic") return /*#__PURE__*/ React__default["default"].createElement(Modal, {
            ...modal.modalProps,
            key: modal.id,
            isOpen: modal.shown,
            closeHandle: ()=>closeModal(modal.id, modal.onModalClose)
            ,
            title: modal.title
        }, modal.fullBody ? typeof modal.fullBody === "function" ? modal.fullBody({
            close: ()=>closeModal(modal.id, modal.onModalClose)
        }) : /*#__PURE__*/ React.cloneElement(modal.fullBody, {
            close: ()=>closeModal(modal.id, modal.onModalClose)
        }) : /*#__PURE__*/ React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/ React__default["default"].createElement(ModalBody, null, modal.body), /*#__PURE__*/ React__default["default"].createElement(ModalFooter, null, modal.buttons.map((button, idx)=>/*#__PURE__*/ React__default["default"].createElement(exports.Button, {
                key: idx,
                color: button.color || "light",
                onClick: (e)=>{
                    if (typeof button.onClick === "function") button.onClick(e, ()=>closeModal(modal.id, modal.onModalClose)
                    );
                    else closeModal(modal.id, modal.onModalClose);
                }
            }, button.text)
        ))));
        if (modal.modalType === "notification") return /*#__PURE__*/ React__default["default"].createElement(Modal, {
            key: modal.id,
            isOpen: modal.shown,
            closeIcon: true,
            closeHandle: ()=>closeModal(modal.id, modal.onModalClose)
            ,
            title: modal.title
        }, /*#__PURE__*/ React__default["default"].createElement(ModalBody, null, modal.body), /*#__PURE__*/ React__default["default"].createElement(ModalFooter, null, /*#__PURE__*/ React__default["default"].createElement(exports.Button, {
            color: modal.buttonColor || "light",
            onClick: ()=>closeModal(modal.id, modal.onModalClose)
        }, modal.button)));
        if (modal.modalType === "prompt") {
            if (typeof modal.options !== "undefined") {
                const { initial ="" , type ="text" , hint =undefined , validate =undefined ,  } = modal.options;
                return /*#__PURE__*/ React__default["default"].createElement(PromptModal, {
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
            return /*#__PURE__*/ React__default["default"].createElement(PromptModal, {
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
        if (modal.modalType === "confirmation") return /*#__PURE__*/ React__default["default"].createElement(ConfirmationModal, {
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
    eventManager.emit("showModal", {
        modalType: "confirmation",
        prompt: /*#__PURE__*/ React__default["default"].createElement("p", null, prompt1),
        onConfirm,
        confirmText,
        confirmType,
        dontAskAgain
    });
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
        eventManager.emit("showModal", {
            modalType: "prompt",
            title,
            question,
            cb,
            options: initial
        });
        return;
    }
    eventManager.emit("showModal", {
        modalType: "prompt",
        title,
        initial,
        type,
        question,
        cb,
        hint
    });
}
const dynamicModal = async ({ title , fullBody =null , body =null , buttons =[] , modalProps ={} ,  })=>{
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

const Icon = ({ icon , size =null , className =null , ...props })=>/*#__PURE__*/ React__default["default"].createElement("span", {
        className: `icon-${icon}${appendClass(className)}${appendClass(size, `icon-size-${size}`)}`,
        ...props
    })
;

// useLayoutEffect will show warning if used during ssr, e.g. with Next.js
// useIsomorphicEffect removes it by replacing useLayoutEffect with useEffect during ssr
const useIsomorphicEffect = typeof document !== "undefined" ? React.useLayoutEffect : React.useEffect;

function usePortal(target) {
    const [mounted, setMounted] = React.useState(false);
    const ref = React.useRef();
    useIsomorphicEffect(()=>{
        setMounted(true);
        ref.current = !target ? document.createElement("div") : typeof target === "string" ? document.querySelector(target) : target;
        if (!target) {
            document.body.appendChild(ref.current);
        }
        return ()=>{
            !target && document.body.removeChild(ref.current);
        };
    }, [
        target
    ]);
    if (!mounted) {
        return null;
    }
    return ref.current;
}

const defaultProps = {
    zIndex: 1,
    position: "relative"
};
function Portal(props) {
    const { children , zIndex , target , className , position  } = {
        ...defaultProps,
        ...props
    };
    const portal = usePortal(target);
    if (!portal) {
        return null;
    }
    return /*#__PURE__*/ reactDom.createPortal(/*#__PURE__*/ React__default["default"].createElement("div", {
        className: className,
        style: {
            position: position,
            zIndex
        }
    }, children), portal);
}

const Accordion = ({ children , toggles =false , bordered =false ,  })=>{
    return /*#__PURE__*/ React__default["default"].createElement("ul", {
        className: `accordion${bordered ? " accordion--bordered" : ""}`
    }, React__default["default"].Children.map(children, (child)=>/*#__PURE__*/ React__default["default"].isValidElement(child) ? /*#__PURE__*/ React__default["default"].cloneElement(child, {
            toggles
        }) : null
    ));
};

const AccordionElement = ({ children , defaultOpen =false , toggles =false , title ,  })=>{
    const [isOpen, setIsOpen] = React__default["default"].useState(defaultOpen);
    return /*#__PURE__*/ React__default["default"].createElement("li", {
        className: isOpen ? "active" : ""
    }, /*#__PURE__*/ React__default["default"].createElement("a", {
        className: "accordion__title",
        onClick: ()=>setIsOpen((prev)=>!prev
            )
    }, /*#__PURE__*/ React__default["default"].createElement("span", null, title), toggles ? /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "accordion__toggle icon-chevron-down"
    }) : null), /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "accordion__content"
    }, children));
};

const Wrapper = ({ children , className =null  })=>/*#__PURE__*/ React__default["default"].createElement("span", {
        className: `badge-wrapper${appendClass(className)}`
    }, children)
;
const Badge = ({ color ="primary" , size ="default" , children , className =null , ...props })=>/*#__PURE__*/ React__default["default"].createElement("span", {
        className: `${`badge badge--${color}`}${appendClass(size !== "default", `badge--${size}`)}${appendClass(className)}`,
        ...props
    }, children)
;
Badge.Dot = (props)=>/*#__PURE__*/ React__default["default"].createElement(Badge, {
        ...props,
        size: "dot"
    })
;
Badge.Tiny = (props)=>/*#__PURE__*/ React__default["default"].createElement(Badge, {
        ...props,
        size: "tiny"
    })
;
Badge.Small = (props)=>/*#__PURE__*/ React__default["default"].createElement(Badge, {
        ...props,
        size: "small"
    })
;
Badge.Default = (props)=>/*#__PURE__*/ React__default["default"].createElement(Badge, {
        ...props,
        size: "default"
    })
;
Badge.Large = (props)=>/*#__PURE__*/ React__default["default"].createElement(Badge, {
        ...props,
        size: "large"
    })
;
Badge.Wrapper = Wrapper;
const WithBadge = ({ children , badge , wrapperClass =null , ...props })=>/*#__PURE__*/ React__default["default"].createElement(Badge.Wrapper, {
        className: wrapperClass
    }, children, /*#__PURE__*/ React__default["default"].createElement(Badge, {
        ...props
    }, badge))
;

/**
 * a type-safe version of the `usePrevious` hook described here:
 * @see {@link https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state}
 */ function usePrevious(value) {
    const ref = React.useRef();
    React.useEffect(()=>{
        ref.current = value;
    }, [
        value
    ]);
    return ref.current;
}

const firstDefined = (...args)=>args.find((el)=>typeof el !== "undefined" && el !== null
    )
;
const Tab = ({ active =false , className =null , activeClassName =null , unmountInactive =false , children ,  })=>{
    if (!active && unmountInactive) return null;
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: `tab-pane${appendClass(active, "active")}${appendClass(active && activeClassName, activeClassName)}${appendClass(className)}`
    }, children);
};
const isActive = (openTab, id, idx)=>openTab === null ? idx === 0 : openTab === firstDefined(id, idx)
;
const TabsHeader = ({ tabsClassName =null , center =false , right =false , justified =false , embossed =false , bordered =false , vertical =false , inline =false , openTab =null , sticky =false , onTabChange , children ,  })=>/*#__PURE__*/ React__default["default"].createElement("ul", {
        className: `tabs${appendClass(tabsClassName)}${appendClass(center, "tabs--centered")}${appendClass(right, "tabs--right")}${appendClass(justified, "tabs--justified")}${appendClass(embossed, "tabs--embossed")}${appendClass(bordered, "tabs--bordered")}${appendClass(vertical, "tabs--vertical")}${appendClass(inline, "tabs--inline")}`,
        style: sticky ? {
            position: "sticky",
            top: "0"
        } : {}
    }, React__default["default"].Children.map(children, (child, idx)=>{
        if (!/*#__PURE__*/ React__default["default"].isValidElement(child)) return child;
        const { props: { id , title  } ,  } = child;
        return /*#__PURE__*/ React__default["default"].createElement("li", {
            className: `tab${appendClass(isActive(openTab, id, idx), "active")}`,
            key: firstDefined(id, idx)
        }, /*#__PURE__*/ React__default["default"].createElement("a", {
            onClick: ()=>onTabChange(firstDefined(id, idx))
        }, title));
    }))
;
const composeColumnSize = (columnWidth)=>{
    if (typeof columnWidth === "string" || typeof columnWidth === "number") return `col-${columnWidth}`;
    return Object.keys(columnWidth).map((k)=>`col-${k}-${columnWidth[k]}`
    ).join(" ");
};
const ColumnWrap = ({ columnWidth , className , ...props })=>/*#__PURE__*/ React__default["default"].createElement("div", {
        className: `${composeColumnSize(columnWidth)}${appendClass(className)}`,
        ...props
    })
;
const Tabs = ({ defaultTab =null , tabsClassName =null , contentClassName =null , center =false , right =false , justified =false , embossed =false , bordered =false , vertical =false , sticky =false , inline =false , renderHeader =(header)=>header
 , renderBody =(body)=>body
 , onTabChange =null , leftColumn ={
    columnWidth: 3
} , rightColumn ={
    columnWidth: 9
} , rowProps: { className: rowClassName , ...rowProps } = {} , beforeTabChange =null , children ,  })=>{
    const [openTab, setOpenTab] = React__default["default"].useState(defaultTab || null);
    const prevTab = usePrevious(openTab);
    React__default["default"].useEffect(()=>{
        setOpenTab(defaultTab);
    }, [
        defaultTab
    ]);
    React__default["default"].useEffect(()=>{
        (async ()=>{
            if (openTab === prevTab) return;
            if (typeof beforeTabChange === "function" && !await beforeTabChange(prevTab, openTab)) setOpenTab(prevTab);
            if (typeof onTabChange === "function") onTabChange(openTab);
        })();
    }, [
        openTab,
        prevTab
    ]);
    const header = /*#__PURE__*/ React__default["default"].createElement(ConditionalWrapper, {
        condition: vertical,
        wrapper: /*#__PURE__*/ React__default["default"].createElement(ColumnWrap, {
            ...leftColumn
        })
    }, renderHeader(/*#__PURE__*/ React__default["default"].createElement(TabsHeader, {
        tabsClassName: tabsClassName,
        center: center,
        right: right,
        justified: justified,
        embossed: embossed,
        bordered: bordered,
        vertical: vertical,
        sticky: sticky,
        inline: inline,
        openTab: openTab,
        onTabChange: setOpenTab
    }, children)));
    const body = /*#__PURE__*/ React__default["default"].createElement(ConditionalWrapper, {
        condition: vertical,
        wrapper: /*#__PURE__*/ React__default["default"].createElement(ColumnWrap, {
            ...rightColumn
        })
    }, renderBody(/*#__PURE__*/ React__default["default"].createElement("div", {
        className: `tab-content${contentClassName ? ` ${contentClassName}` : ""}`
    }, React__default["default"].Children.map(children, (child, idx)=>/*#__PURE__*/ React__default["default"].isValidElement(child) ? /*#__PURE__*/ React__default["default"].cloneElement(child, {
            active: isActive(openTab, child.props.id, idx)
        }) : child
    ))));
    return /*#__PURE__*/ React__default["default"].createElement(ConditionalWrapper, {
        condition: vertical,
        wrapper: /*#__PURE__*/ React__default["default"].createElement("div", {
            className: `row${appendClass(rowClassName)}`,
            style: sticky ? {
                position: "relative"
            } : {},
            ...rowProps
        })
    }, /*#__PURE__*/ React__default["default"].createElement(DisplayIf, {
        condition: vertical && !right || !vertical
    }, header), body, /*#__PURE__*/ React__default["default"].createElement(DisplayIf, {
        condition: vertical && right
    }, header));
};

const Section = /*#__PURE__*/ React.forwardRef(({ children , className =null , ...props }, ref)=>/*#__PURE__*/ React__default["default"].createElement("div", {
        className: `section${appendClass(className)}`,
        ...props,
        ref: ref
    }, children)
);

const Display = ({ as ="h1" , className =null , size , ...props })=>/*#__PURE__*/ React__default["default"].createElement(as, {
        ...props,
        className: `display-${size}${appendClass(className)}`
    })
;
const Display0 = (props)=>/*#__PURE__*/ React__default["default"].createElement(Display, {
        ...props,
        size: 0
    })
;
const Display1 = (props)=>/*#__PURE__*/ React__default["default"].createElement(Display, {
        ...props,
        size: 1
    })
;
const Display2 = (props)=>/*#__PURE__*/ React__default["default"].createElement(Display, {
        ...props,
        size: 2
    })
;
const Display3 = (props)=>/*#__PURE__*/ React__default["default"].createElement(Display, {
        ...props,
        size: 3
    })
;
const Display4 = (props)=>/*#__PURE__*/ React__default["default"].createElement(Display, {
        ...props,
        size: 4
    })
;

const TimelineItem = ({ icon =/*#__PURE__*/ React__default["default"].createElement(Icon, {
    icon: "circle"
}) , time =null , className =null , contentClassName =null , simplified =false , header =null , children ,  })=>/*#__PURE__*/ React__default["default"].createElement("div", {
        className: `timeline__item${appendClass(className)}`
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "timeline__icon"
    }, icon), time && !simplified ? /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "timeline__time"
    }, time) : null, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: `timeline__content${appendClass(contentClassName)}`
    }, header ? /*#__PURE__*/ React.isValidElement(header) ? header : /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "timeline__header"
    }, header) : null, time && simplified ? /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "timeline__time"
    }, time) : null, children))
;
const Timeline = ({ center =false , right =false , className =null , simplified =false , children ,  })=>/*#__PURE__*/ React__default["default"].createElement("div", {
        className: `timeline${appendClass(center, "timeline--centered")}${appendClass(right, "timeline--right")}${appendClass(simplified, "simplified")}${appendClass(className)}`
    }, React__default["default"].Children.map(children, (child)=>/*#__PURE__*/ React.isValidElement(child) ? /*#__PURE__*/ React.cloneElement(child, {
            simplified
        }) : child
    ))
;

const Step = /*#__PURE__*/ React.forwardRef(({ visited =false , active =false , className =null , icon , children , consequativeIdx ,  }, ref)=>/*#__PURE__*/ React__default["default"].createElement("div", {
        className: `step${appendClass(visited, "visited")}${appendClass(active, "active")}${appendClass(className)}`,
        ref: ref
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "step__icon"
    }, icon !== null && icon !== void 0 ? icon : consequativeIdx), /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "step__label"
    }, children))
);

const Steps = /*#__PURE__*/ React.forwardRef(({ size ="default" , color ="primary" , vertical =false , className =null , children ,  }, ref)=>/*#__PURE__*/ React__default["default"].createElement("div", {
        className: `steps${appendClass(size !== "default", `steps--${size}`)} steps--${color}${appendClass(vertical, "steps--vertical")}${appendClass(className)}`,
        ref: ref
    }, React__default["default"].Children.toArray(children).filter(Boolean).map((child, idx)=>/*#__PURE__*/ React.isValidElement(child) ? /*#__PURE__*/ React__default["default"].cloneElement(child, {
            consequativeIdx: idx + 1
        }) : child
    ))
);

const VerticalCenter = ({ children  })=>/*#__PURE__*/ React__default["default"].createElement("div", {
        className: "content-fluid",
        style: {
            display: "flex",
            minHeight: "100vh",
            flexDirection: "column"
        }
    }, /*#__PURE__*/ React__default["default"].createElement("main", {
        style: {
            display: "flex",
            flexDirection: "column",
            flex: 1
        }
    }, children))
;

const Textarea = ({ label =null , textareaClass =null , innerDivClass =null , className =null , id =null , inputRef =null , inline =false , error =null , ...textarea })=>{
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: `form-group${appendClass(inline, "form-group--inline")}${appendClass(className)}${appendClass(error, "form-group--error")}`
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: `form-group__text${appendClass(innerDivClass)}`
    }, /*#__PURE__*/ React__default["default"].createElement("textarea", {
        className: textareaClass,
        ref: inputRef,
        ...textarea
    }, textarea.value), label ? /*#__PURE__*/ React__default["default"].createElement("label", {
        htmlFor: id
    }, label) : null), error ? /*#__PURE__*/ React__default["default"].createElement(InputHelpBlock, {
        text: error
    }) : null);
};

const DropdownHeader = ({ variants , selectedIdx , setIdx , placeholder ="Select" ,  })=>{
    var _a1;
    return /*#__PURE__*/ React__default["default"].createElement(Dropdown, {
        type: "link",
        header: ((_a1 = variants[selectedIdx]) === null || _a1 === void 0 ? void 0 : _a1.display) || placeholder,
        alwaysClose: true,
        className: "flex-center-vertical",
        stopPropagation: true
    }, variants.map((v, idx)=>{
        var _a;
        return /*#__PURE__*/ React__default["default"].createElement("a", {
            key: v.variant,
            onClick: ()=>setIdx(idx)
            ,
            className: ((_a = variants[selectedIdx]) === null || _a === void 0 ? void 0 : _a.variant) === v.variant ? "selected" : ""
        }, v.display);
    }));
};
const ListHeader = ({ variants , selectedIdx , setIdx  })=>/*#__PURE__*/ React__default["default"].createElement("ul", {
        className: "list list--inline divider--vertical"
    }, variants.map((v, idx)=>{
        var _a;
        return /*#__PURE__*/ React__default["default"].createElement("li", {
            key: v.variant
        }, /*#__PURE__*/ React__default["default"].createElement(ConditionalWrapper, {
            condition: ((_a = variants[selectedIdx]) === null || _a === void 0 ? void 0 : _a.variant) !== v.variant,
            wrapper: /*#__PURE__*/ React__default["default"].createElement("a", {
                key: v.variant,
                onClick: ()=>setIdx(idx)
            })
        }, v.display));
    }))
;
const VariantSelector = ({ disableable =false , title =null , inline =false , onChange =null , enableTitleAppend =null , className =null , list =false , variant =null , variants , name ="" ,  })=>{
    const [variantIdx, setIdx] = React.useState(()=>{
        const idx = variants.findIndex((v)=>v.selected || v.variant === variant
        );
        return !disableable && idx < 0 ? 0 : idx;
    });
    React.useEffect(()=>{
        const idx = variants.findIndex((v)=>v.variant === variant
        );
        setIdx((curr)=>idx < 0 || idx === curr ? curr : idx
        );
    }, [
        variant,
        variants
    ]);
    React.useEffect(()=>{
        if (variantIdx >= 0 && typeof onChange === "function") onChange(variants[variantIdx]);
    }, [
        variantIdx
    ]);
    const dd = (el, t)=>/*#__PURE__*/ React__default["default"].createElement(el, {
            className: "secondary-tabs"
        }, t ? /*#__PURE__*/ React__default["default"].createElement("span", {
            className: "half-margin-right"
        }, t) : null, list ? /*#__PURE__*/ React__default["default"].createElement(ListHeader, {
            variants: variants,
            selectedIdx: variantIdx,
            setIdx: setIdx
        }) : /*#__PURE__*/ React__default["default"].createElement(DropdownHeader, {
            variants: variants,
            selectedIdx: variantIdx,
            setIdx: setIdx
        }))
    ;
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: `form-group${appendClass(inline, " inline-variants")}${appendClass(className)}`
    }, disableable ? /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "flex-center-vertical"
    }, /*#__PURE__*/ React__default["default"].createElement("label", {
        className: "switch",
        htmlFor: `${name}.disableable`
    }, /*#__PURE__*/ React__default["default"].createElement("input", {
        type: "checkbox",
        onChange: ()=>setIdx((p)=>p >= 0 ? -1 : 0
            )
        ,
        checked: variantIdx >= 0,
        id: `${name}.disableable`
    }), /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "switch__input"
    }), /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "switch__label"
    }, title)), variantIdx >= 0 ? dd("span", enableTitleAppend) : null) : dd("div", title), disableable && variantIdx < 0 ? null : /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "tabs-wrap panel base-padding-top"
    }, variants[variantIdx].component));
};

const Radio = /*#__PURE__*/ React.forwardRef(({ spacing =null , inline =false , label =null , className =null , id , divProps ={} , ...input }, forwardedRef)=>/*#__PURE__*/ React__default["default"].createElement("div", {
        className: `form-group${appendClass(inline, "form-group--inline")}${appendClass(spacing, `form-group--${spacing}`)}${appendClass(className)}`,
        ...divProps
    }, /*#__PURE__*/ React__default["default"].createElement("label", {
        className: "radio",
        htmlFor: id || input.name
    }, /*#__PURE__*/ React__default["default"].createElement("input", {
        type: "radio",
        id: id,
        ...input,
        ref: forwardedRef
    }), /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "radio__input"
    }), label ? /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "radio__label"
    }, label) : null))
);
const Radios = ({ values , value , onChange , name  })=>{
    const onRadioChange = React.useCallback((e)=>{
        e.persist();
        if (e.target.checked) {
            onChange(e.target.value);
        }
    }, [
        onChange
    ]);
    return /*#__PURE__*/ React__default["default"].createElement(React__default["default"].Fragment, null, values.map((v, idx)=>/*#__PURE__*/ React__default["default"].createElement(Radio, {
            id: v.value,
            label: v.label,
            key: v.value,
            name: `${name}.${idx}`,
            onChange: onRadioChange,
            checked: value === v.value,
            value: v.value
        })
    ));
};

const emptyList = [];
const InputChips = /*#__PURE__*/ React__default["default"].forwardRef(({ chipsColor ="light" , addOnBlur =true , delimiters =[
    13
] , label =null , allowRepeat =false , allowRegex =null , valueValidator =null , maxChips =null , baloon =null , className =null , id =null , error =null , value: initialValue = null , onChange , outerWrap =true , chipsOutside =false , renderChip =null , onBlur =null , onChipRemove =null , onClick , noInput , ...input }, ref)=>{
    const [value1, setValue] = React.useState(emptyList);
    React.useEffect(()=>{
        setValue((curr)=>initialValue || curr || emptyList
        );
    }, [
        initialValue
    ]);
    const addValue = React.useCallback((v)=>{
        if (typeof valueValidator === "function") {
            if (!valueValidator(v)) return;
        }
        setValue((curr)=>{
            if (allowRepeat || !(curr || []).includes(v)) {
                const n = (curr || []).concat(v);
                if (typeof onChange === "function") onChange(n);
                return n;
            } else return curr;
        });
    }, [
        allowRepeat,
        valueValidator,
        onChange
    ]);
    const handleKeyDown = React.useCallback((event)=>{
        let d = delimiters;
        if (typeof d === "string") {
            const { map  } = Array.prototype;
            d = map.call(d, (ch)=>ch.charCodeAt(0)
            );
        }
        if (Array.isArray(d) && d.includes(event.keyCode)) {
            addValue(event.target.value);
            event.target.value = "";
            event.stopPropagation();
            event.preventDefault();
        }
    }, [
        delimiters,
        addValue
    ]);
    const handleBlur = React.useCallback((event)=>{
        var _a;
        if (addOnBlur && ((_a = event.target) === null || _a === void 0 ? void 0 : _a.value)) {
            const { value  } = event.target;
            if (allowRegex && RegExp(allowRegex).test(value)) {
                addValue(value);
            } else if (!allowRegex) {
                addValue(value);
            }
        }
        event.target.value = "";
        if (typeof onBlur === "function") onBlur(event);
    }, [
        addOnBlur,
        allowRegex,
        addValue,
        onBlur
    ]);
    const handleDelete = React.useCallback((idx)=>{
        setValue((curr)=>{
            curr.splice(idx, 1);
            if (typeof onChange === "function") onChange(curr.slice());
            return curr.slice();
        });
        if (typeof onChipRemove === "function") onChipRemove(idx);
    }, [
        onChange,
        onChipRemove
    ]);
    const showInput = (!maxChips || maxChips && Array.isArray(value1) && value1.length < maxChips) && !noInput;
    return /*#__PURE__*/ React__default["default"].createElement(ConditionalWrapper, {
        wrapper: /*#__PURE__*/ React__default["default"].createElement("div", {
            className: `form-group${appendClass(className)}${appendClass(error, "form-group--error")}`,
            ref: ref
        }),
        condition: outerWrap
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: `form-group__text chips${appendClass(!outerWrap && className, className)}`
    }, label ? /*#__PURE__*/ React__default["default"].createElement("label", {
        htmlFor: id || input.name
    }, label, baloon ? /*#__PURE__*/ React__default["default"].createElement(InputHelpBaloon, {
        baloon: baloon
    }) : null) : null, chipsOutside && Array.isArray(value1) && value1.length ? /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "chips-outer qtr-margin-bottom"
    }, /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "chips-inner"
    }, value1.map((v, i)=>renderChip ? renderChip({
            value: v,
            idx: i,
            onDelete: ()=>handleDelete(i)
        }) : /*#__PURE__*/ React__default["default"].createElement(Label, {
            removable: true,
            onRemove: ()=>handleDelete(i)
            ,
            color: chipsColor,
            size: "small",
            key: `${v}-${i}`,
            className: "no-margin-bottom"
        }, v)
    ))) : null, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: `input ${appendClass(!showInput, "dbl-padding-right")}`,
        onClick: onClick
    }, !chipsOutside && Array.isArray(value1) && value1.length ? /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "chips-outer"
    }, /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "chips-inner"
    }, value1.map((v, i)=>renderChip ? renderChip({
            value: v,
            idx: i,
            onDelete: ()=>handleDelete(i)
        }) : /*#__PURE__*/ React__default["default"].createElement(Label, {
            removable: true,
            onRemove: (e)=>{
                e.stopPropagation();
                e.preventDefault();
                handleDelete(i);
            },
            color: chipsColor,
            size: "small",
            key: `${v}-${i}`,
            className: "no-margin-bottom"
        }, v)
    ))) : null, showInput ? /*#__PURE__*/ React__default["default"].createElement("input", {
        type: "text",
        onKeyDown: handleKeyDown,
        onBlur: handleBlur,
        id: id || input.name,
        ...input
    }) : null)), error ? /*#__PURE__*/ React__default["default"].createElement(InputHelpBlock, {
        text: error
    }) : null);
});

function isOption(element) {
    return element.type === "option";
}
function isOptGroup(element) {
    return element.type === "optgroup";
}
const SelectChildren = ({ children , handleOptionClick , isSelected  })=>React__default["default"].Children.map(children, (child, idx)=>{
        if (!/*#__PURE__*/ React.isValidElement(child)) return child;
        if (isOption(child)) return /*#__PURE__*/ React__default["default"].createElement("a", {
            key: idx,
            onClick: (e)=>handleOptionClick(e, child.props.value)
            ,
            className: `${appendClass(isSelected(child.props.value), "selected")}${appendClass(child.props.disabled, "disabled")}`
        }, child.props.children);
        if (isOptGroup(child)) return /*#__PURE__*/ React__default["default"].createElement("div", {
            key: idx,
            className: "dropdown__group"
        }, /*#__PURE__*/ React__default["default"].createElement("div", {
            className: "dropdown__group-header"
        }, child.props.label), /*#__PURE__*/ React__default["default"].createElement(SelectChildren, {
            handleOptionClick: handleOptionClick,
            isSelected: isSelected
        }, child.props.children));
        return child;
    })
;
const collectDisplays = (children)=>{
    const t = [];
    React__default["default"].Children.forEach(children, (child)=>{
        if (!/*#__PURE__*/ React.isValidElement(child)) return null;
        if (isOption(child)) {
            t.push({
                display: child.props.children,
                value: child.props.value
            });
        }
        if (isOptGroup(child)) t.push(collectDisplays(child.props.children));
    });
    return t.flat();
};
const EditableSelect = /*#__PURE__*/ React.forwardRef(({ compressed =false , prompt ="Select an option" , inline =false , type ="text" , children , label =null , error =null , onChange =null , value: initialValue = undefined , editable =false , multi =false , displayValues =false , disabled , className , divRef , options , onSelect =null , onDeselect =null , ...input }, inputRef)=>{
    var _a1;
    const [isOpen, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(initialValue);
    const ref = React.useRef(undefined);
    const display = React.useMemo(()=>collectDisplays(children)
    , [
        children
    ]);
    const handleClick = React.useCallback((newState = true)=>{
        if (disabled) return;
        setOpen(newState);
    }, [
        disabled
    ]);
    React.useEffect(()=>{
        if (isOpen) {
            const onOutsideClick = (e)=>{
                // ignore clicks on the component itself
                if (!(e.target instanceof Node) || !(ref === null || ref === void 0 ? void 0 : ref.current)) return;
                if (ref.current && ref.current.contains(e.target)) return;
                if (ref.current && !ref.current.contains(e.target)) {
                    handleClick(false);
                }
            };
            document.addEventListener("click", onOutsideClick, true);
            return ()=>document.removeEventListener("click", onOutsideClick, true)
            ;
        }
    }, [
        isOpen,
        handleClick
    ]);
    const handleOptionClick = React.useCallback((_e, newValue)=>{
        var _a;
        if (multi) {
            let added = true;
            setValue((curr)=>{
                if (curr === null || curr === void 0 ? void 0 : curr.includes(newValue)) {
                    added = false;
                    return curr.filter((v)=>v !== newValue
                    );
                } else return (curr || []).concat(newValue);
            });
            const r = (_a = added ? onSelect : onDeselect) === null || _a === void 0 ? void 0 : _a.call(undefined, newValue);
            if (typeof r === "function") r();
        } else {
            setValue(newValue);
        }
        if (!multi) handleClick(false);
    }, [
        handleClick,
        multi,
        onSelect,
        onDeselect
    ]);
    const isSelected = (checkValue)=>multi ? value === null || value === void 0 ? void 0 : value.includes(checkValue) : value === checkValue
    ;
    React.useEffect(()=>{
        setValue(initialValue);
    }, [
        initialValue
    ]);
    React.useEffect(()=>{
        if (multi && initialValue && !Array.isArray(initialValue)) throw Error("Value must be an array if multi select is allowed.");
    }, [
        multi,
        initialValue
    ]);
    React.useEffect(()=>{
        if (typeof onChange === "function") onChange(value);
    }, [
        value
    ]);
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: `form-group dropdown${appendClass(compressed, "input--compressed")}${appendClass(isOpen, "active")}${appendClass(inline, "form-group--inline")}${appendClass(error, "form-group--error")}${appendClass(disabled, "disabled")}${appendClass(className)}`,
        ref: useCallbackRef.useMergeRefs([
            ref,
            divRef
        ])
    }, multi ? /*#__PURE__*/ React__default["default"].createElement(InputChips, {
        className: "select editable",
        label: label,
        ...input,
        placeholder: !Array.isArray(value) || !value.length ? input.placeholder || prompt : "",
        readOnly: !editable,
        onClick: ()=>handleClick(true)
        ,
        onChange: ()=>void 0
        ,
        onChipRemove: (idx)=>{
            let val;
            setValue((curr)=>{
                val = curr[idx];
                return curr.filter((_v, i)=>i !== idx
                );
            });
            if (typeof onDeselect === "function") onDeselect(val);
        },
        value: displayValues ? value : display.filter((d)=>value === null || value === void 0 ? void 0 : value.includes(d.value)
        ).map((d)=>d.display
        ),
        noInput: inline && !editable && Array.isArray(value) && value.length > 0,
        outerWrap: false,
        ref: inputRef
    }) : /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "form-group__text select editable",
        onClick: ()=>handleClick(true)
    }, /*#__PURE__*/ React__default["default"].createElement("input", {
        type: type,
        placeholder: input.placeholder || prompt,
        autoComplete: "off",
        readOnly: !editable,
        ...input,
        onChange: (e)=>{
            if (!editable) return;
            e.persist();
            setValue(e.target.value);
        },
        value: editable ? value || "" : !displayValues ? ((_a1 = display === null || display === void 0 ? void 0 : display.find((el)=>el.value === value
        )) === null || _a1 === void 0 ? void 0 : _a1.display) || "" : value,
        ref: inputRef
    }), label ? /*#__PURE__*/ React__default["default"].createElement("label", {
        htmlFor: input.id
    }, label) : null), /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "dropdown__menu"
    }, /*#__PURE__*/ React__default["default"].createElement(SelectChildren, {
        handleOptionClick: handleOptionClick,
        isSelected: isSelected
    }, options ? options.map((opt, idx)=>/*#__PURE__*/ React__default["default"].createElement("option", {
            key: idx,
            value: opt.value
        }, opt.value)
    ) : children)), error ? /*#__PURE__*/ React__default["default"].createElement(InputHelpBlock, {
        text: error
    }) : null);
});

const MultiValueContainer = (props)=>{
    var _a;
    const color = props.selectProps.multiValueColor || "primary";
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: `label label--${color} label--small${appendClass((_a = props.innerProps) === null || _a === void 0 ? void 0 : _a.className)}`
    }, props.children);
};
const MultiValueLabel = (props)=>{
    return /*#__PURE__*/ React__default["default"].createElement("span", null, props.children);
};
const MultiValueRemove = ({ innerProps: { className , ...props } ,  })=>{
    return /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "icon-close",
        ...props
    });
};
const Group = ({ className , children , Heading , headingProps , innerProps , ...props })=>{
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: `dropdown__group${appendClass(className)}`,
        ...innerProps
    }, /*#__PURE__*/ React__default["default"].createElement(Heading, {
        ...props,
        id: headingProps.id
    }, headingProps.data.label), children);
};
const GroupHeading = ({ className , children , ...props })=>/*#__PURE__*/ React__default["default"].createElement("div", {
        className: `dropdown__group-header${appendClass(className)}`
    }, children)
;

const ReactSelect = /*#__PURE__*/ React.forwardRef(({ label =null , className , error , ...props }, ref)=>{
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: `form-group${appendClass(className)}${appendClass(error, "form-group--error")}`
    }, label && /*#__PURE__*/ React__default["default"].createElement("label", null, label), /*#__PURE__*/ React__default["default"].createElement(Select__default["default"], {
        className: "react-select-container qtr-margin-top",
        classNamePrefix: "react-select",
        components: {
            MultiValueContainer,
            MultiValueLabel,
            MultiValueRemove,
            Group,
            GroupHeading
        },
        ...props,
        ref: ref
    }), Boolean(error) && typeof error !== "boolean" ? /*#__PURE__*/ React__default["default"].createElement(InputHelpBlock, {
        text: error
    }) : null);
});

const CreatableReactSelect = /*#__PURE__*/ React.forwardRef(({ label =null , className , error , ...props }, ref)=>{
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: `form-group${appendClass(className)}${appendClass(error, "form-group--error")}`
    }, label && /*#__PURE__*/ React__default["default"].createElement("label", null, label), /*#__PURE__*/ React__default["default"].createElement(CreatableSelect__default["default"], {
        className: "react-select-container qtr-margin-top",
        classNamePrefix: "react-select",
        components: {
            MultiValueContainer,
            MultiValueLabel,
            MultiValueRemove,
            Group,
            GroupHeading
        },
        formatCreateLabel: (inputValue)=>/*#__PURE__*/ React__default["default"].createElement(React__default["default"].Fragment, null, props.isMulti ? "Add " : "Use ", /*#__PURE__*/ React__default["default"].createElement("span", {
                className: "text-bold"
            }, inputValue))
        ,
        ...props,
        ref: ref
    }), Boolean(error) && typeof error !== "boolean" ? /*#__PURE__*/ React__default["default"].createElement(InputHelpBlock, {
        text: error
    }) : null);
});

const isGrouped = (v)=>{
    return "options" in v;
};
const findOption = (value, options)=>{
    let found;
    for (const it of options){
        if (isGrouped(it)) found = findOption(value, it.options);
        else found = it.value === value ? it : null;
        if (found) return found;
    }
};

const VSeparator = /*#__PURE__*/ React.forwardRef(({ size ="default" , compressed =false , className ="" , ...props }, ref)=>/*#__PURE__*/ React__default["default"].createElement("div", {
        className: `v-separator${appendClass(size !== "default", `v-separator--${size}`)}${appendClass(compressed, "v-separator--compressed")}${appendClass(className)}`,
        ...props,
        ref: ref
    })
);

const Slider = /*#__PURE__*/ React.forwardRef(({ dots =true , label , className , ...props }, ref)=>{
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: `form-group${appendClass(className)}`
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "form-group__text"
    }, label && /*#__PURE__*/ React__default["default"].createElement("label", null, label), /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "half-padding-left half-padding-right base-padding-bottom"
    }, /*#__PURE__*/ React__default["default"].createElement(RCSlider__default["default"], {
        dots: dots,
        ...props,
        ref: ref
    }))));
});

const base16Theme = {
    scheme: "monokai",
    author: "Vitaly Kumov based on Cisco UI kit",
    base00: "var(--cui-background-inactive)",
    base01: "#f2f2f2",
    base02: "#64bbe3",
    base03: "#b6b9bb",
    base04: "#39393b",
    base05: "#58585b",
    base06: "#626469",
    base07: "#ffffff",
    base08: "#14a792",
    base09: "#14a792",
    base0A: "#017cad",
    base0B: "#6cc04a",
    base0C: "#ffcc00",
    base0D: "#7f7f86",
    base0E: "#626469",
    base0F: "#626469"
};

const Kbd = /*#__PURE__*/ React.forwardRef(({ children , className , ...props }, ref)=>/*#__PURE__*/ React__default["default"].createElement("span", {
        className: `kbd${appendClass(className)}`,
        ref: ref,
        ...props
    }, children)
);

const Blockquote = /*#__PURE__*/ React.forwardRef(({ className , cite , color , align , children , padding , ...props }, ref)=>/*#__PURE__*/ React__default["default"].createElement("blockquote", {
        className: `${appendClass(color, `blockquote--${color}`)}${appendClass(align, `blockquote--${align}`)}${appendClass(padding && padding !== "default", `blockquote--${padding}`)}${appendClass(className)}`,
        ...props,
        ref: ref
    }, /*#__PURE__*/ React__default["default"].createElement("p", null, children), cite ? /*#__PURE__*/ React__default["default"].createElement("cite", null, cite) : null)
);

const Gauge = /*#__PURE__*/ React.forwardRef(({ color ="primary" , size ="default" , className =null , label , percentage , ...props }, ref)=>{
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: `gauge-container${appendClass(className)}`,
        ...props,
        ref: ref
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: `gauge${appendClass(size && size !== "default", `gauge--${size}`)}${appendClass(color, `gauge--${color}`)}`,
        "data-percentage": `${percentage}`
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "gauge__circle"
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "mask full"
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "fill"
    })), /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "mask half"
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "fill"
    }), /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "fill fix"
    }))), /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "gauge__inset"
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "gauge__percentage"
    }, percentage))), label ? /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "gauge__label"
    }, label) : null);
});

exports.Accordion = Accordion;
exports.AccordionElement = AccordionElement;
exports.Alert = Alert;
exports.Badge = Badge;
exports.Blockquote = Blockquote;
exports.ButtonGroup = ButtonGroup;
exports.Checkbox = Checkbox;
exports.ConditionalWrapper = ConditionalWrapper;
exports.ConfirmationListener = ConfirmationListener;
exports.ConfirmationModal = ConfirmationModal;
exports.CreatableReactSelect = CreatableReactSelect;
exports.DefaultTablePagination = DefaultTablePagination;
exports.Display = Display;
exports.Display0 = Display0;
exports.Display1 = Display1;
exports.Display2 = Display2;
exports.Display3 = Display3;
exports.Display4 = Display4;
exports.DisplayIf = DisplayIf;
exports.Dots = Dots;
exports.Dropdown = Dropdown;
exports.DropdownDivider = Divider;
exports.DropdownElement = Element;
exports.DropdownGroup = Group$1;
exports.DropdownGroupHeader = GroupHeader;
exports.Dropzone = Dropzone;
exports.DynamicModal = ConfirmationListener;
exports.EditableSelect = EditableSelect;
exports.Footer = Footer;
exports.Gauge = Gauge;
exports.GenericTable = GenericTable;
exports.Header = Header;
exports.HeaderPanel = HeaderPanel;
exports.HeaderTitle = HeaderTitle;
exports.Icon = Icon;
exports.Input = Input;
exports.InputChips = InputChips;
exports.InputHelpBaloon = InputHelpBaloon;
exports.InputHelpBlock = InputHelpBlock;
exports.Kbd = Kbd;
exports.Label = Label;
exports.Menu = Menu;
exports.Modal = Modal;
exports.ModalBody = ModalBody;
exports.ModalFooter = ModalFooter;
exports.ModalHeader = ModalHeader;
exports.Pagination = Pagination;
exports.Panel = Panel;
exports.Portal = Portal;
exports.Progressbar = Progressbar;
exports.PromptModal = PromptModal;
exports.Radio = Radio;
exports.Radios = Radios;
exports.ReactSelect = ReactSelect;
exports.Section = Section;
exports.Slider = Slider;
exports.Spinner = Spinner;
exports.Step = Step;
exports.Steps = Steps;
exports.Switch = Switch;
exports.Tab = Tab;
exports.Table = Table;
exports.Tabs = Tabs;
exports.TabsHeader = TabsHeader;
exports.Textarea = Textarea;
exports.Timeline = Timeline;
exports.TimelineItem = TimelineItem;
exports.Toast = Toast;
exports.ToastContainer = ToastContainer;
exports.VSeparator = VSeparator;
exports.VariantSelector = VariantSelector;
exports.VerticalCenter = VerticalCenter;
exports.WithBadge = WithBadge;
exports.base16Theme = base16Theme;
exports.confirmation = confirmation;
exports.dynamicModal = dynamicModal;
exports.findOption = findOption;
exports.isGrouped = isGrouped;
exports.notification = notificationModal;
exports.notificationModal = notificationModal;
exports.prompt = prompt;
exports.toast = toast;
//# sourceMappingURL=index.cjs.js.map
