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

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var classes = function classes(type, icon) {
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
var Alert = function Alert(_a) {
    var _b = _a.type, type = _b === void 0 ? "info" : _b, children = _a.children, _c = _a.title, title = _c === void 0 ? "" : _c, _d = _a.dismissable, dismissable = _d === void 0 ? false : _d, _e = _a.className, className = _e === void 0 ? null : _e, _f = _a.onDismiss, onDismiss = _f === void 0 ? null : _f, _g = _a.withIcon, withIcon = _g === void 0 ? true : _g, _h = _a.icon, icon = _h === void 0 ? null : _h;
    var _j = React__default["default"].useState(false), dismissed = _j[0], setDismissed = _j[1];
    var handleDismiss = function handleDismiss(e) {
        setDismissed(true);
        if (onDismiss) onDismiss(e);
    };
    if (dismissed) return null;
    var _k = classes(type, icon), alertClass = _k[0], iconClass = _k[1];
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "alert ".concat(alertClass, " ").concat(className || "")
    }, withIcon ? /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "alert__icon ".concat(iconClass)
    }) : null, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "alert__message"
    }, title && /*#__PURE__*/ React__default["default"].createElement("h4", null, title), children), dismissable && /*#__PURE__*/ React__default["default"].createElement("a", {
        className: "alert__close icon-close",
        onClick: handleDismiss
    }));
};
Alert.Warning = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Alert, __assign({
        type: "warning"
    }, props));
};
Alert.Danger = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Alert, __assign({
        type: "danger"
    }, props));
};
Alert.Error = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Alert, __assign({
        type: "error"
    }, props));
};
Alert.Success = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Alert, __assign({
        type: "success"
    }, props));
};
Alert.Info = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Alert, __assign({
        type: "info"
    }, props));
};
Alert.Dark = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Alert, __assign({
        type: "dark"
    }, props));
};
Alert.Light = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Alert, __assign({
        type: "light"
    }, props));
};
Alert.WarningAlt = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Alert, __assign({
        type: "warning-alt"
    }, props));
};

var ConditionalWrapper = function ConditionalWrapper(_a) {
    var condition = _a.condition, wrapper = _a.wrapper, children = _a.children;
    return condition ? /*#__PURE__*/ React__default["default"].cloneElement(wrapper, null, children) : /*#__PURE__*/ React__default["default"].isValidElement(children) ? children : /*#__PURE__*/ React__default["default"].createElement(React__default["default"].Fragment, null, children);
};
var DisplayIf = function DisplayIf(_a) {
    var condition = _a.condition, children = _a.children;
    return condition ? /*#__PURE__*/ React__default["default"].isValidElement(children) ? children : /*#__PURE__*/ React__default["default"].createElement(React__default["default"].Fragment, null, children) : null;
};

var appendClass = function appendClass(c, what) {
    if (what === void 0) {
        what = undefined;
    }
    if (c) {
        if (typeof what === "function") return " ".concat(what());
        return " ".concat(what || c);
    }
    return "";
};

function _instanceof$1(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
var Element = function Element(_a) {
    var _b = _a.selected, selected = _b === void 0 ? false : _b, _c = _a.icon, icon = _c === void 0 ? null : _c, children = _a.children, _d = _a.className, className = _d === void 0 ? null : _d, props = __rest(_a, [
        "selected",
        "icon",
        "children",
        "className"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement("a", __assign({
        className: "".concat(selected ? "selected" : "").concat(className ? " ".concat(className) : "")
    }, props), icon ? /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "icon-".concat(icon)
    }) : null, /*#__PURE__*/ React__default["default"].createElement(ConditionalWrapper, {
        condition: Boolean(icon),
        wrapper: /*#__PURE__*/ React__default["default"].createElement("span", {
            className: "qtr-margin-left"
        })
    }, children));
};
var Divider = function Divider() {
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "divider"
    });
};
var Group$1 = function Group(_a) {
    var children = _a.children;
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "dropdown__group"
    }, children);
};
var GroupHeader = function GroupHeader(_a) {
    var header = _a.header;
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "dropdown__group-header"
    }, header);
};
var DropdownHeader$1 = function DropdownHeader(_a) {
    var type = _a.type, handleClick = _a.handleClick, className = _a.className, header = _a.header;
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
                className: "btn ".concat(className)
            }, header);
        default:
            return /*#__PURE__*/ React__default["default"].isValidElement(header) ? /*#__PURE__*/ React__default["default"].cloneElement(header, {
                onClick: handleClick
            }) : null;
    }
};
var Dropdown = function Dropdown(_a) {
    var _b = _a.openTo, openTo = _b === void 0 ? "right" : _b, children = _a.children, _c = _a.type, type = _c === void 0 ? "button" : _c, _d = _a.className, className = _d === void 0 ? null : _d, _e = _a.header, header = _e === void 0 ? null : _e, _f = _a.divClassName, divClassName = _f === void 0 ? null : _f, _g = _a.up, up = _g === void 0 ? false : _g, _h = _a.onClose, onClose = _h === void 0 ? null : _h, _j = _a.onOpen, onOpen = _j === void 0 ? null : _j, _k = _a.stopPropagation, stopPropagation = _k === void 0 ? false : _k, _l = _a.alwaysClose, alwaysClose = _l === void 0 ? false : _l, outsideIsOpen = _a.isOpen;
    var _m = React.useState(false), isOpen = _m[0], setIsOpen = _m[1];
    var divRef = React.useRef(undefined);
    React.useEffect(function() {
        if (typeof outsideIsOpen !== "undefined" && outsideIsOpen !== null) setIsOpen(outsideIsOpen);
    }, [
        outsideIsOpen
    ]);
    // eslint-disable-next-line prefer-const
    var handleOutsideClick;
    var handleClick = React.useCallback(function(e) {
        if (stopPropagation) {
            e.stopPropagation();
            e.preventDefault();
        }
        setIsOpen(function(current) {
            if (!current) {
                // attach/remove event handler
                document.addEventListener("click", handleOutsideClick, true);
            } else {
                document.removeEventListener("click", handleOutsideClick, true);
            }
            var newIsOpen = !current;
            if (newIsOpen && onOpen) onOpen(e);
            if (!newIsOpen && onClose) onClose(e);
            return newIsOpen;
        });
    }, [
        stopPropagation,
        onClose,
        onOpen
    ]);
    handleOutsideClick = function handleOutsideClick(e) {
        // ignore clicks on the component itself
        if (!_instanceof$1(e.target, Node) || !(divRef === null || divRef === void 0 ? void 0 : divRef.current)) return;
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
        className: "dropdown".concat(appendClass([
            "left",
            "center"
        ].includes(openTo), "dropdown--".concat(openTo))).concat(appendClass(up, "dropdown--up")).concat(appendClass(isOpen, "active")).concat(appendClass(divClassName)),
        ref: divRef
    }, /*#__PURE__*/ React__default["default"].createElement(DropdownHeader$1, {
        type: type,
        handleClick: handleClick,
        className: className,
        header: header
    }), /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "dropdown__menu"
    }, children));
};
Dropdown.Divider = Divider;
Dropdown.Element = Element;
Dropdown.Group = Group$1;
Dropdown.GroupHeader = GroupHeader;

var FileCard = function FileCard(_a) {
    var file = _a.file, i = _a.i, removeFile = _a.removeFile, inline = _a.inline;
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "file-drop__card col-lg-4 col-md-6 col-sm-6",
        key: "".concat(i, "-").concat(file.name)
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "panel panel--bordered hover-emboss--small",
        onClick: function onClick(e) {
            return e.stopPropagation();
        }
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
        onClick: function onClick() {
            return removeFile(i);
        }
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
        onClick: function onClick() {
            return removeFile(i);
        }
    }, /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "icon-close",
        title: "Remove the file."
    })), /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "text-ellipsis half-margin-bottom"
    }, file.name), /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "file-icon text-muted icon-file-o qtr-margin-right"
    }), /*#__PURE__*/ React__default["default"].createElement("small", null, bytes__default["default"].format(file.size, {
        unitSeparator: " "
    })))));
};
var DropzoneMessage = function DropzoneMessage(_a) {
    var inline = _a.inline, accept = _a.accept, maxFileSize = _a.maxFileSize;
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
var DropzoneFiles = function DropzoneFiles(_a) {
    var files = _a.files, inline = _a.inline, showTotalSelected = _a.showTotalSelected, removeFile = _a.removeFile;
    if (!Array.isArray(files) || !files.length) {
        return null;
    }
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "dropzone-previews"
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "file-drop__container container--fluid"
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "row"
    }, files.map(function(file, i) {
        return /*#__PURE__*/ React__default["default"].createElement(FileCard, {
            key: i,
            file: file,
            i: i,
            inline: inline,
            removeFile: removeFile
        });
    }))), showTotalSelected ? /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "file-drop__filecnt"
    }, files.length, " selected") : null);
};
var Dropzone = function Dropzone(_a1) {
    var error = _a1.error, loose = _a1.loose, compressed = _a1.compressed, inline = _a1.inline, label = _a1.label, name = _a1.name, value = _a1.value, customMaxFileSize = _a1.maxFileSize, maxFiles = _a1.maxFiles, onChange = _a1.onChange, showTotalSelected = _a1.showTotalSelected, props = __rest(_a1, [
        "error",
        "loose",
        "compressed",
        "inline",
        "label",
        "name",
        "value",
        "maxFileSize",
        "maxFiles",
        "onChange",
        "showTotalSelected"
    ]);
    var maxFileSize = React.useMemo(function() {
        if (customMaxFileSize) {
            return bytes__default["default"].parse(customMaxFileSize);
        } else {
            return null;
        }
    }, [
        customMaxFileSize
    ]);
    var padding = React.useMemo(function() {
        var tmp = "";
        if (loose) tmp = "dropzone--loose";
        if (compressed) tmp = "dropzone--compressed";
        if (inline && Array.isArray(value) && value.length) {
            switch(tmp){
                case "dropzone--loose":
                    tmp = "".concat(tmp, " half-padding-bottom");
                    break;
                case "dropzone--compressed":
                    tmp = "".concat(tmp, " no-padding-bottom");
                    break;
                default:
                    tmp = "".concat(tmp, " qtr-padding-bottom");
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
    var handleDrop = React.useCallback(function(filesToUpload) {
        if (maxFileSize) filesToUpload = filesToUpload.filter(function(file) {
            return file.size <= maxFileSize;
        });
        if (maxFiles && filesToUpload.length > maxFiles) filesToUpload = filesToUpload.slice(0, maxFiles);
        onChange(filesToUpload);
    }, [
        maxFileSize,
        maxFiles,
        onChange
    ]);
    var removeFile = function removeFile(toRemove) {
        onChange(Array.isArray(value) ? value.filter(function(_, idx) {
            return toRemove !== idx;
        }) : value);
    };
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "form-group".concat(appendClass(error, "form-group--error"))
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "form-group__text"
    }, label ? /*#__PURE__*/ React__default["default"].createElement("label", {
        htmlFor: name
    }, label) : null, /*#__PURE__*/ React__default["default"].createElement(ReactDropzone__default["default"], __assign({}, props, {
        onDrop: handleDrop,
        maxSize: maxFileSize
    }), function(_a) {
        var getRootProps = _a.getRootProps, getInputProps = _a.getInputProps;
        return /*#__PURE__*/ React__default["default"].createElement("div", __assign({
            className: "dropzone ".concat(padding)
        }, getRootProps()), /*#__PURE__*/ React__default["default"].createElement("input", __assign({}, getInputProps())), /*#__PURE__*/ React__default["default"].createElement(DropzoneFiles, {
            files: value,
            showTotalSelected: showTotalSelected,
            inline: inline,
            removeFile: removeFile
        }), Array.isArray(value) && value.length ? null : /*#__PURE__*/ React__default["default"].createElement(DropzoneMessage, {
            maxFileSize: maxFileSize,
            inline: inline,
            accept: props.accept
        }));
    })), error ? /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "help-block text-danger",
        role: "alert"
    }, /*#__PURE__*/ React__default["default"].createElement("span", null, error)) : null);
};

var Dots = /*#__PURE__*/ React.forwardRef(function(_a, ref) {
    var _b = _a.color, color = _b === void 0 ? "primary" : _b;
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "loading-dots".concat(color !== "primary" ? " loading-dots--".concat(color) : ""),
        ref: ref
    }, /*#__PURE__*/ React__default["default"].createElement("span", null), /*#__PURE__*/ React__default["default"].createElement("span", null), /*#__PURE__*/ React__default["default"].createElement("span", null));
});

var Spinner = /*#__PURE__*/ React.forwardRef(function(_a, ref) {
    var _b = _a.size, size = _b === void 0 ? "default" : _b, _c = _a.text, text = _c === void 0 ? null : _c;
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "flex-center flex-middle",
        style: {
            flex: 1
        },
        ref: ref
    }, /*#__PURE__*/ React__default["default"].createElement("div", null, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "loader".concat(size !== "default" ? " loader--".concat(size) : "", " flex-center")
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "wrapper flex flex-center"
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "wheel"
    }))), !text ? null : /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "base-margin-top text-center"
    }, text || "Loading...")));
});

var Progressbar = /*#__PURE__*/ React.forwardRef(function(_a, ref) {
    var _b = _a.size, size = _b === void 0 ? "default" : _b, _c = _a.withLabel, withLabel = _c === void 0 ? false : _c, _d = _a.label, label = _d === void 0 ? null : _d, _e = _a.color, color = _e === void 0 ? null : _e, _f = _a.className, className = _f === void 0 ? null : _f, percentage = _a.percentage, props = __rest(_a, [
        "size",
        "withLabel",
        "label",
        "color",
        "className",
        "percentage"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement("div", __assign({
        className: "progressbar".concat(appendClass(size !== "default", "progressbar--".concat(size))).concat(appendClass(color, "progressbar--".concat(color))).concat(appendClass(className)),
        "data-percentage": percentage
    }, props, {
        ref: ref
    }), /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "progressbar__fill"
    }), withLabel ? label ? /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "progressbar__label"
    }, label) : /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "progressbar__label"
    }, "".concat(percentage, "%")) : null);
});

var Button$1 = function Button(_a) {
    var _b = _a.size, size = _b === void 0 ? "default" : _b, _c = _a.color, color = _c === void 0 ? "primary" : _c, _d = _a.wide, wide = _d === void 0 ? false : _d, _e = _a.justified, justified = _e === void 0 ? false : _e, _f = _a.circle, circle = _f === void 0 ? false : _f, _g = _a.className, className = _g === void 0 ? null : _g, _h = _a.asLink, asLink = _h === void 0 ? false : _h, _j = _a.style, style = _j === void 0 ? null : _j, _k = _a.selected, selected = _k === void 0 ? false : _k, _l = _a.type, type = _l === void 0 ? null : _l, _m = _a.icon, icon = _m === void 0 ? false : _m, props = __rest(_a, [
        "size",
        "color",
        "wide",
        "justified",
        "circle",
        "className",
        "asLink",
        "style",
        "selected",
        "type",
        "icon"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement(asLink ? "a" : "button", __assign(__assign({
        className: "btn".concat(appendClass(size !== "default", "btn--".concat(size)), " btn--").concat(color).concat(appendClass(wide, "btn--wide")).concat(appendClass(justified, "btn--justified")).concat(appendClass(icon, "btn--icon")).concat(appendClass(circle, "btn--circle")).concat(appendClass(selected, "selected")).concat(appendClass(className)).concat(appendClass(asLink, "flex-middle flex-center")),
        style: __assign(__assign({}, style || {}), asLink ? {
            display: "flex"
        } : {})
    }, asLink ? {} : {
        type: type || "button"
    }), props));
};
Button$1.Primary = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Button$1, __assign({}, props, {
        color: "primary"
    }));
};
Button$1.Secondary = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Button$1, __assign({}, props, {
        color: "secondary"
    }));
};
Button$1.Success = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Button$1, __assign({}, props, {
        color: "success"
    }));
};
Button$1.Dark = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Button$1, __assign({}, props, {
        color: "dark"
    }));
};
Button$1.Ghost = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Button$1, __assign({}, props, {
        color: "ghost"
    }));
};
Button$1.Link = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Button$1, __assign({}, props, {
        color: "link"
    }));
};
Button$1.Light = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Button$1, __assign({}, props, {
        color: "light"
    }));
};
Button$1.Danger = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Button$1, __assign({}, props, {
        color: "danger"
    }));
};

var ButtonGroup = /*#__PURE__*/ React.forwardRef(function(_a, ref) {
    var _b = _a.square, square = _b === void 0 ? false : _b, _c = _a.withDivider, withDivider = _c === void 0 ? false : _c, _d = _a.className, className = _d === void 0 ? null : _d, props = __rest(_a, [
        "square",
        "withDivider",
        "className"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement("div", __assign({
        className: "btn-group".concat(appendClass(square, "btn-group--square")).concat(appendClass(withDivider, " btn-group--divider")).concat(appendClass(className))
    }, props, {
        ref: ref
    }));
});

var Label = function Label(_a) {
    var _b = _a.size, size = _b === void 0 ? "default" : _b, _c = _a.color, color = _c === void 0 ? "primary" : _c, _d = _a.bordered, bordered = _d === void 0 ? false : _d, _e = _a.removable, removable = _e === void 0 ? false : _e, _f = _a.onRemove, onRemove = _f === void 0 ? null : _f, _g = _a.raised, raised = _g === void 0 ? false : _g, _h = _a.className, className = _h === void 0 ? null : _h, children = _a.children, props = __rest(_a, [
        "size",
        "color",
        "bordered",
        "removable",
        "onRemove",
        "raised",
        "className",
        "children"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement("span", __assign({
        className: "label label--".concat(color).concat(appendClass(size !== "default", "label--".concat(size))).concat(appendClass(bordered, "label--bordered")).concat(appendClass(raised, "label--raised")).concat(appendClass(className))
    }, props), children, removable ? /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "icon-close",
        onClick: onRemove
    }) : null);
};
Label.Primary = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Label, __assign({
        color: "primary"
    }, props));
};
Label.Secondary = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Label, __assign({
        color: "secondary"
    }, props));
};
Label.Tertiary = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Label, __assign({
        color: "tertiary"
    }, props));
};
Label.Success = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Label, __assign({
        color: "success"
    }, props));
};
Label.Info = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Label, __assign({
        color: "info"
    }, props));
};
Label.WarningAlt = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Label, __assign({
        color: "warning-alt"
    }, props));
};
Label.Warning = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Label, __assign({
        color: "warning"
    }, props));
};
Label.Danger = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Label, __assign({
        color: "danger"
    }, props));
};
Label.Dark = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Label, __assign({
        color: "dark"
    }, props));
};
Label.Light = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Label, __assign({
        color: "light"
    }, props));
};

var Panel = /*#__PURE__*/ React__default["default"].forwardRef(function(_a, ref) {
    var _b = _a.color, color = _b === void 0 ? "plain" : _b, _c = _a.padding, padding = _c === void 0 ? "default" : _c, _d = _a.bordered, bordered = _d === void 0 ? false : _d, _e = _a.raised, raised = _e === void 0 ? false : _e, _f = _a.well, well = _f === void 0 ? false : _f, _g = _a.className, className = _g === void 0 ? null : _g, props = __rest(_a, [
        "color",
        "padding",
        "bordered",
        "raised",
        "well",
        "className"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement("div", __assign({
        className: "panel".concat(appendClass(color !== "plain", "panel--".concat(color))).concat(appendClass(padding !== "default", "panel--".concat(padding))).concat(appendClass(bordered, function() {
            if (typeof bordered === "string") return "panel--bordered-".concat(bordered);
            if (Array.isArray(bordered)) return bordered.map(function(b) {
                return "panel--bordered-".concat(b);
            }).join(" ");
            return "panel--bordered";
        })).concat(appendClass(raised, "panel--raised")).concat(appendClass(well, "panel--well")).concat(appendClass(className)),
        ref: ref
    }, props));
});

var copyStringToClipboard = function copyStringToClipboard(str) {
    return __awaiter(void 0, void 0, void 0, function() {
        var el;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    str = typeof str === "string" ? str : str.toString();
                    if (!!(navigator === null || navigator === void 0 ? void 0 : navigator.clipboard)) return [
                        3 /*break*/ ,
                        1
                    ];
                    el = document.createElement("textarea");
                    el.value = str;
                    el.setAttribute("readonly", "");
                    el.style.position = "absolute";
                    el.style.left = "-9999px";
                    document.body.appendChild(el);
                    el.select();
                    document.execCommand("copy");
                    document.body.removeChild(el);
                    return [
                        3 /*break*/ ,
                        3
                    ];
                case 1:
                    return [
                        4 /*yield*/ ,
                        navigator.clipboard.writeText(str)
                    ];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
};

var iconType = function iconType(type) {
    switch(type){
        case "success":
            return "text-success icon-check-outline";
        case "error":
            return "text-danger icon-error-outline";
        case "warning":
            return "text-warning icon-warning-outline";
        case "info":
            return "text-info icon-info-outline";
        case "none":
            return null;
        default:
            return "text-muted icon-alert";
    }
};
var ToastIcon = function ToastIcon(_a) {
    var type = _a.type;
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "toast__icon ".concat(iconType(type) || "")
    });
};
var Toast = function Toast(_a) {
    var title = _a.title, message = _a.message, type = _a.type, copyError = _a.copyError;
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "toast"
    }, /*#__PURE__*/ React__default["default"].createElement(ToastIcon, {
        type: type
    }), /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "toast__body"
    }, title ? /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "toast__title"
    }, title) : null, message ? /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "toast__message"
    }, message, type === "error" && copyError ? /*#__PURE__*/ React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/ React__default["default"].createElement("br", null), /*#__PURE__*/ React__default["default"].createElement("br", null), /*#__PURE__*/ React__default["default"].createElement("a", {
        onClick: function onClick() {
            return typeof message === "string" || typeof message === "number" ? void copyStringToClipboard(message) : void 0;
        }
    }, "Copy to clipboard")) : null) : null));
};
var toast = function toast(type, title, message, copyError, containerId, args) {
    if (copyError === void 0) {
        copyError = true;
    }
    if (containerId === void 0) {
        containerId = "_GLOBAL_";
    }
    if (args === void 0) {
        args = {};
    }
    return reactToastify.toast(/*#__PURE__*/ React__default["default"].createElement(Toast, __assign({}, {
        type: type,
        title: title,
        message: message,
        copyError: copyError
    })), __assign({
        containerId: containerId
    }, args));
};
toast.success = function() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    return toast.apply(void 0, __spreadArray([
        "success"
    ], args, false));
};
toast.error = function() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    return toast.apply(void 0, __spreadArray([
        "error"
    ], args, false));
};
toast.warning = function() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    return toast.apply(void 0, __spreadArray([
        "warning"
    ], args, false));
};
toast.info = function() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    return toast.apply(void 0, __spreadArray([
        "info"
    ], args, false));
};
toast.none = function() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    return toast.apply(void 0, __spreadArray([
        "none"
    ], args, false));
};
toast.update = function() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    return reactToastify.toast.update.apply(reactToastify.toast, args);
};
toast.dismiss = function() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    return reactToastify.toast.dismiss.apply(reactToastify.toast, args);
};

var ToastContainer = function ToastContainer(_a) {
    var _b = _a.position, position = _b === void 0 ? "bottom-right" : _b, _c = _a.autoClose, autoClose = _c === void 0 ? 5000 : _c, _d = _a.draggable, draggable = _d === void 0 ? false : _d, _e = _a.hideProgressBar, hideProgressBar = _e === void 0 ? true : _e, _f = _a.containerId, containerId = _f === void 0 ? "_GLOBAL_" : _f, props = __rest(_a, [
        "position",
        "autoClose",
        "draggable",
        "hideProgressBar",
        "containerId"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement(reactToastify.ToastContainer, __assign({
        transition: reactToastify.Slide,
        position: position,
        autoClose: autoClose,
        draggable: draggable,
        hideProgressBar: hideProgressBar,
        containerId: containerId
    }, props, {
        closeButton: false,
        style: {
            width: "unset"
        }
    }));
};

var Footer = function Footer() {
    return /*#__PURE__*/ React__default["default"].createElement("footer", {
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
    }, "Trademarks")))));
};

var Header = function Header(_a) {
    var children = _a.children, _b = _a.fluid, fluid = _b === void 0 ? false : _b, props = __rest(_a, [
        "children",
        "fluid"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement("header", __assign({
        className: "header"
    }, props), /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "container".concat(fluid ? "-fluid" : "")
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "header-panels"
    }, children)));
};
var HeaderPanel = function HeaderPanel(_a) {
    var children = _a.children, _b = _a.center, center = _b === void 0 ? false : _b, _c = _a.right, right = _c === void 0 ? false : _c, _d = _a.className, className = _d === void 0 ? null : _d, props = __rest(_a, [
        "children",
        "center",
        "right",
        "className"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement("div", __assign({
        className: "header-panel".concat(appendClass(center, "header-panel--center")).concat(appendClass(right, "header-panel--right")).concat(appendClass(className))
    }, props), children);
};
var HeaderTitle = function HeaderTitle(_a) {
    var _b = _a.icon, icon = _b === void 0 ? true : _b, _c = _a.link, link = _c === void 0 ? null : _c, title = _a.title, props = __rest(_a, [
        "icon",
        "link",
        "title"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement(HeaderPanel, __assign({}, props), icon ? /*#__PURE__*/ React__default["default"].createElement("a", {
        className: "header__logo",
        href: link || "http://www.cisco.com",
        target: "_blank",
        rel: "noopener noreferrer"
    }, /*#__PURE__*/ React__default["default"].createElement("span", {
        className: typeof icon === "string" ? "icon-".concat(icon) : "icon-cisco"
    })) : null, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "header__title"
    }, title));
};

var Wrapper$1 = /*#__PURE__*/ React__default["default"].createElement("div", {
    className: "responsive-table"
});
var GenericTable = /*#__PURE__*/ React.forwardRef(function(_a, forwardedRef) {
    var _b = _a.outerWrap, outerWrap = _b === void 0 ? true : _b, _c = _a.lined, lined = _c === void 0 ? false : _c, _d = _a.bordered, bordered = _d === void 0 ? false : _d, _e = _a.striped, striped = _e === void 0 ? false : _e, _f = _a.selectable, selectable = _f === void 0 ? false : _f, _g = _a.fixed, fixed = _g === void 0 ? false : _g, _h = _a.wrapped, wrapped = _h === void 0 ? false : _h, _j = _a.compressed, compressed = _j === void 0 ? false : _j, _k = _a.loose, loose = _k === void 0 ? false : _k, _l = _a.className, className = _l === void 0 ? null : _l, props = __rest(_a, [
        "outerWrap",
        "lined",
        "bordered",
        "striped",
        "selectable",
        "fixed",
        "wrapped",
        "compressed",
        "loose",
        "className"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement(ConditionalWrapper, {
        condition: outerWrap,
        wrapper: Wrapper$1
    }, /*#__PURE__*/ React__default["default"].createElement("table", __assign({
        className: "table".concat(appendClass(lined, "table--lined")).concat(appendClass(bordered, "table--bordered")).concat(appendClass(striped, "table--striped")).concat(appendClass(selectable, "table--selectable")).concat(appendClass(fixed, "table--fixed")).concat(appendClass(wrapped, "table--wrapped")).concat(appendClass(compressed, "table--compressed")).concat(appendClass(loose, "table--loose")).concat(appendClass(className))
    }, props, {
        ref: forwardedRef
    })));
});

var PaginationContext = /*#__PURE__*/ React__default["default"].createContext(null);

var Button = function Button(_a1) {
    var content = _a1.content, position = _a1.position, _b = _a1.active, active = _b === void 0 ? false : _b, _c = _a1.disabled, disabled = _c === void 0 ? false : _c;
    return /*#__PURE__*/ React__default["default"].createElement(PaginationContext.Consumer, null, function(_a) {
        var changePage = _a.changePage;
        return /*#__PURE__*/ React__default["default"].createElement("li", {
            className: active ? "active" : ""
        }, /*#__PURE__*/ React__default["default"].createElement("a", {
            className: disabled ? "disabled" : "",
            onClick: function onClick(e) {
                return changePage(e, position);
            }
        }, content));
    });
};
var FirstPrev = function FirstPrev() {
    var _a = React__default["default"].useContext(PaginationContext), perPage = _a.perPage, firstAndLast = _a.firstAndLast, position = _a.position, icons = _a.icons, prev = _a.prev, beginAt = _a.beginAt;
    var disabled = position < perPage + beginAt;
    var r = [];
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
var NextLast = function NextLast() {
    var _a = React__default["default"].useContext(PaginationContext), beginAt = _a.beginAt, perPage = _a.perPage, total = _a.total, firstAndLast = _a.firstAndLast, position = _a.position, icons = _a.icons, next = _a.next;
    var pages = Math.floor(total / perPage) + 1;
    var disabled = position > total - perPage + beginAt;
    var r = [];
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
var Pages = function Pages(_a2) {
    var start = _a2.start, finish = _a2.finish;
    return /*#__PURE__*/ React__default["default"].createElement(PaginationContext.Consumer, null, function(_a) {
        var perPage = _a.perPage, active = _a.active, beginAt = _a.beginAt;
        return __spreadArray([], Array(finish - start + 1), true).map(function(v, i) {
            var current = start + i;
            return /*#__PURE__*/ React__default["default"].createElement(Button, {
                active: active === current,
                content: "".concat(current),
                key: "".concat(current, "-page"),
                position: (current - 1) * perPage + beginAt
            });
        });
    });
};
var Pagination = function Pagination(_a) {
    var _b = _a.beginAt, beginAt = _b === void 0 ? 1 : _b, _c = _a.rounded, rounded = _c === void 0 ? false : _c, _d = _a.firstAndLast, firstAndLast = _d === void 0 ? true : _d, _e = _a.icons, icons = _e === void 0 ? false : _e, _f = _a.next, next = _f === void 0 ? "Next" : _f, _g = _a.perPage, perPage = _g === void 0 ? 1 : _g, _h = _a.prev, prev = _h === void 0 ? "Previous" : _h, _j = _a.size, size = _j === void 0 ? "default" : _j, _k = _a.className, className = _k === void 0 ? null : _k, position = _a.position, total = _a.total, onPageChange = _a.onPageChange, rest = __rest(_a, [
        "beginAt",
        "rounded",
        "firstAndLast",
        "icons",
        "next",
        "perPage",
        "prev",
        "size",
        "className",
        "position",
        "total",
        "onPageChange"
    ]);
    var pages = Math.ceil(total / perPage);
    var active = Math.floor(position / perPage) + 1;
    var changePage = function changePage(e, newPosition) {
        if (typeof onPageChange === "function") onPageChange(e, newPosition);
    };
    return /*#__PURE__*/ React__default["default"].createElement(PaginationContext.Provider, {
        value: {
            active: active,
            beginAt: beginAt,
            changePage: changePage,
            firstAndLast: firstAndLast,
            icons: icons,
            next: next,
            perPage: perPage,
            position: position,
            prev: prev,
            total: total
        }
    }, /*#__PURE__*/ React__default["default"].createElement("ul", __assign({
        className: "pagination".concat(size !== "default" ? " pagination--".concat(size) : "").concat(rounded ? " pagination--rounded" : "").concat(className ? " ".concat(className) : "")
    }, rest), /*#__PURE__*/ React__default["default"].createElement(FirstPrev, null), active < 4 || pages === 4 ? /*#__PURE__*/ React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/ React__default["default"].createElement(Pages, {
        start: 1,
        finish: Math.min(pages, 4)
    }), pages > 4 ? /*#__PURE__*/ React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/ React__default["default"].createElement("li", null, /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "icon-more"
    })), /*#__PURE__*/ React__default["default"].createElement(Button, {
        content: pages,
        key: "".concat(pages, "-page"),
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
        key: "".concat(pages, "-page"),
        position: (pages - 1) * perPage + beginAt
    })) : /*#__PURE__*/ React__default["default"].createElement(Pages, {
        start: pages - 3,
        finish: pages
    })), /*#__PURE__*/ React__default["default"].createElement(NextLast, null)));
};

var DefaultTablePagination = function DefaultTablePagination(_a) {
    var _b = _a.perPageUp, perPageUp = _b === void 0 ? false : _b, _c = _a.paginationProps, paginationProps = _c === void 0 ? {} : _c, total = _a.total, position = _a.position, onPageChange = _a.onPageChange, onPerPageChange = _a.onPerPageChange;
    var _d = React__default["default"].useState(50), perPage = _d[0], setPerPage = _d[1];
    React__default["default"].useEffect(function() {
        if (typeof onPerPageChange === "function") onPerPageChange(perPage);
    }, [
        perPage,
        onPerPageChange
    ]);
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "flex-middle"
    }, /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "qtr-margin-right"
    }, "Page:"), /*#__PURE__*/ React__default["default"].createElement(Pagination, __assign({
        firstAndLast: true,
        icons: true,
        perPage: perPage,
        total: total,
        position: position,
        onPageChange: onPageChange,
        beginAt: 0,
        className: "no-margin-top"
    }, paginationProps)), /*#__PURE__*/ React__default["default"].createElement("span", {
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
    ].map(function(v) {
        return /*#__PURE__*/ React__default["default"].createElement(Dropdown.Element, {
            onClick: function onClick() {
                return setPerPage(v);
            },
            key: v,
            selected: v === perPage
        }, v);
    })));
};

var asArray = function asArray(v) {
    return Array.isArray(v) ? v : [
        v
    ];
};
var Table = /*#__PURE__*/ React.forwardRef(function(_a, forwardedRef) {
    var _b = _a.pagination, pagination = _b === void 0 ? DefaultTablePagination : _b, _c = _a.paginationLocation, paginationLocation = _c === void 0 ? "bottom-right" : _c, _d = _a.paginationProps, paginationProps = _d === void 0 ? {
        icons: true,
        firstAndLast: true
    } : _d, _e = _a.data, data = _e === void 0 ? null : _e, _f = _a.children, children = _f === void 0 ? null : _f, _g = _a.start, start = _g === void 0 ? 1 : _g, props = __rest(_a, [
        "pagination",
        "paginationLocation",
        "paginationProps",
        "data",
        "children",
        "start"
    ]);
    var _h = React__default["default"].useState(typeof start === "number" ? start : 0), position = _h[0], setPosition = _h[1];
    var _j = React__default["default"].useState(50), perPage = _j[0], setPerPage = _j[1];
    var tbody = React__default["default"].useMemo(function() {
        return children ? asArray(children).find(function(child) {
            return child.type === "tbody";
        }) : null;
    }, [
        children
    ]);
    var thead = React__default["default"].useMemo(function() {
        return children ? asArray(children).find(function(child) {
            return child.type === "thead";
        }) : null;
    }, [
        children
    ]);
    var total = React__default["default"].useMemo(function() {
        return (data ? data.length : asArray(tbody.props.children).length) || 0;
    }, [
        data,
        tbody
    ]);
    React__default["default"].useEffect(function() {
        return setPosition(0);
    }, [
        data,
        tbody
    ]);
    return /*#__PURE__*/ React__default["default"].createElement(React__default["default"].Fragment, null, Boolean(paginationLocation.includes("top-")) && /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "flex base-margin-bottom".concat(appendClass(paginationLocation === "top-right", "flex-right"))
    }, /*#__PURE__*/ React__default["default"].createElement(pagination, {
        total: total,
        position: position,
        onPageChange: function onPageChange(_, p) {
            return setPosition(p);
        },
        onPerPageChange: function onPerPageChange(p) {
            return setPerPage(p);
        },
        paginationProps: paginationProps
    })), /*#__PURE__*/ React__default["default"].createElement(GenericTable, __assign({}, props, {
        ref: forwardedRef
    }), thead, /*#__PURE__*/ React__default["default"].createElement("tbody", null, data ? data.slice(position, position + perPage).map(function(row, rid) {
        return /*#__PURE__*/ React__default["default"].createElement("tr", {
            key: rid
        }, row.map(function(col, cid) {
            return /*#__PURE__*/ React__default["default"].createElement("td", {
                key: cid
            }, col);
        }));
    }) : asArray(tbody.props.children).slice(position, position + perPage))), Boolean(paginationLocation.includes("bottom-")) && /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "flex base-margin-top".concat(appendClass(paginationLocation === "bottom-right", "flex-right"))
    }, /*#__PURE__*/ React__default["default"].createElement(pagination, {
        total: total,
        position: position,
        onPageChange: function onPageChange(_, p) {
            return setPosition(p);
        },
        onPerPageChange: function onPerPageChange(p) {
            return setPerPage(p);
        },
        perPageUp: true,
        paginationProps: paginationProps
    })));
});

var Checkbox = /*#__PURE__*/ React.forwardRef(function(_a, ref) {
    var _b = _a.inline, inline = _b === void 0 ? false : _b, _c = _a.asFormGroup, asFormGroup = _c === void 0 ? true : _c, _d = _a.children, children = _d === void 0 ? null : _d, _e = _a.spacing, spacing = _e === void 0 ? null : _e, input = __rest(_a, [
        "inline",
        "asFormGroup",
        "children",
        "spacing"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement(ConditionalWrapper, {
        condition: asFormGroup,
        wrapper: /*#__PURE__*/ React__default["default"].createElement("div", {
            className: "form-group".concat(appendClass(inline, "form-group--inline")).concat(appendClass(spacing && spacing !== "default", "form-group--".concat(spacing)))
        })
    }, /*#__PURE__*/ React__default["default"].createElement("label", {
        className: "checkbox"
    }, /*#__PURE__*/ React__default["default"].createElement("input", __assign({
        type: "checkbox"
    }, input, {
        ref: ref
    })), /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "checkbox__input"
    }), children ? /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "checkbox__label"
    }, children) : null));
});

var Switch = /*#__PURE__*/ React.forwardRef(function(_a, forwardedRef) {
    var _b = _a.left, left = _b === void 0 ? null : _b, _c = _a.right, right = _c === void 0 ? null : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.inline, inline = _e === void 0 ? false : _e, _f = _a.spacing, spacing = _f === void 0 ? null : _f, _g = _a.asFormGroup, asFormGroup = _g === void 0 ? true : _g, _h = _a.className, className = _h === void 0 ? null : _h, _j = _a.id, id = _j === void 0 ? null : _j, _k = _a.style, style = _k === void 0 ? null : _k, input = __rest(_a, [
        "left",
        "right",
        "disabled",
        "inline",
        "spacing",
        "asFormGroup",
        "className",
        "id",
        "style"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement(ConditionalWrapper, {
        condition: asFormGroup,
        wrapper: /*#__PURE__*/ React__default["default"].createElement("div", {
            className: "form-group".concat(appendClass(inline, "form-group--inline")).concat(appendClass(className)).concat(appendClass(spacing, " form-group--".concat(spacing))),
            style: style
        })
    }, /*#__PURE__*/ React__default["default"].createElement("label", {
        className: "switch".concat(disabled ? " disabled" : ""),
        htmlFor: id || input.name
    }, /*#__PURE__*/ React__default["default"].createElement("input", __assign({
        type: "checkbox"
    }, input, {
        id: id || input.name,
        checked: input.checked,
        ref: forwardedRef
    })), left ? /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "switch__label"
    }, left) : null, /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "switch__input"
    }), right ? /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "switch__label"
    }, right) : null));
});

var InputHelpBaloon = function InputHelpBaloon(_a) {
    var baloon = _a.baloon;
    return /*#__PURE__*/ React__default["default"].createElement("span", {
        "data-balloon": baloon,
        "data-balloon-length": "large",
        "data-balloon-pos": "up",
        className: "qtr-margin-left"
    }, /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "icon-question-circle",
        style: {
            cursor: "help"
        }
    }));
};

var InputHelpBlock = function InputHelpBlock(_a) {
    var _b = _a.text, text = _b === void 0 ? null : _b;
    return text && /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "form-group__help",
        role: "alert"
    }, /*#__PURE__*/ React__default["default"].createElement("span", null, text));
};

var Input = /*#__PURE__*/ React.forwardRef(function(_a, ref) {
    var _b = _a.type, type = _b === void 0 ? "text" : _b, _c = _a.inline, inline = _c === void 0 ? null : _c, _d = _a.helpBlock, helpBlock = _d === void 0 ? true : _d, _e = _a.label, label = _e === void 0 ? null : _e, _f = _a.icon, icon = _f === void 0 ? null : _f, _g = _a.iconClick, iconClick = _g === void 0 ? null : _g, _h = _a.className, className = _h === void 0 ? null : _h, _j = _a.plain, plain = _j === void 0 ? false : _j, _k = _a.horizontal, horizontal = _k === void 0 ? null : _k, _l = _a.horizontalLabelClassName, horizontalLabelClassName = _l === void 0 ? "col-3" : _l, _m = _a.error, error = _m === void 0 ? null : _m, _o = _a.prefix, prefix = _o === void 0 ? null : _o, input = __rest(_a, [
        "type",
        "inline",
        "helpBlock",
        "label",
        "icon",
        "iconClick",
        "className",
        "plain",
        "horizontal",
        "horizontalLabelClassName",
        "error",
        "prefix"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "form-group".concat(appendClass(className)).concat(appendClass(error, "form-group--error")).concat(appendClass(inline === "form" || inline === "both", "form-group--inline")).concat(appendClass(inline === "label" || inline === "both", "label--inline")).concat(appendClass(icon, "input--icon")).concat(appendClass(horizontal, "form-group--horizontal"))
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "form-group__text"
    }, /*#__PURE__*/ React__default["default"].createElement(ConditionalWrapper, {
        wrapper: /*#__PURE__*/ React__default["default"].createElement("div", {
            className: "flex labeled"
        }),
        condition: !!prefix
    }, prefix ? /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "input-label"
    }, prefix) : null, /*#__PURE__*/ React__default["default"].createElement("input", __assign({
        type: type,
        ref: ref
    }, input, {
        className: appendClass(plain, "form-group--plaintext")
    }))), label ? /*#__PURE__*/ React__default["default"].createElement("label", {
        htmlFor: input.id,
        className: appendClass(horizontal, horizontalLabelClassName)
    }, label) : null, icon ? /*#__PURE__*/ React__default["default"].createElement("button", {
        type: "button",
        className: "link",
        tabIndex: -1,
        onClick: iconClick
    }, /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "icon-".concat(icon)
    })) : null), /*#__PURE__*/ React__default["default"].createElement(DisplayIf, {
        condition: !inline && helpBlock && !!error
    }, /*#__PURE__*/ React__default["default"].createElement(InputHelpBlock, {
        text: error
    })));
});

var ModalHeader = function ModalHeader(_a) {
    var _b = _a.className, className = _b === void 0 ? null : _b, children = _a.children, props = __rest(_a, [
        "className",
        "children"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement("div", __assign({
        className: "modal__header".concat(appendClass(className))
    }, props), children);
};

var ModalFooter = function ModalFooter(_a) {
    var _b = _a.className, className = _b === void 0 ? null : _b, children = _a.children, props = __rest(_a, [
        "className",
        "children"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement("div", __assign({
        className: "modal__footer".concat(appendClass(className))
    }, props), children);
};

var ModalBody = function ModalBody(_a) {
    var _b = _a.className, className = _b === void 0 ? null : _b, children = _a.children, props = __rest(_a, [
        "className",
        "children"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement("div", __assign({
        className: "modal__body".concat(appendClass(className))
    }, props), children);
};

var Modal = function Modal(_a) {
    var _b = _a.size, size = _b === void 0 ? null : _b, _c = _a.autoClose, autoClose = _c === void 0 ? true : _c, _d = _a.animationDuration, animationDuration = _d === void 0 ? 250 : _d, _e = _a.closeIcon, closeIcon = _e === void 0 ? false : _e, _f = _a.title, title = _f === void 0 ? null : _f, _g = _a.closeHandle, closeHandle = _g === void 0 ? null : _g, _h = _a.left, left = _h === void 0 ? false : _h, _j = _a.transitionEvents, transitionEvents = _j === void 0 ? null : _j, _k = _a.dialogProps, dialogProps = _k === void 0 ? null : _k, _l = _a.contentProps, contentProps = _l === void 0 ? null : _l, _m = _a.maximize, maximize = _m === void 0 ? false : _m, children = _a.children, isOpen = _a.isOpen, props = __rest(_a, [
        "size",
        "autoClose",
        "animationDuration",
        "closeIcon",
        "title",
        "closeHandle",
        "left",
        "transitionEvents",
        "dialogProps",
        "contentProps",
        "maximize",
        "children",
        "isOpen"
    ]);
    var _o = React__default["default"].useState(false), maximized = _o[0], setMaximized = _o[1];
    React__default["default"].useEffect(function() {
        return setMaximized(false);
    }, [
        isOpen
    ]);
    var realSize = React__default["default"].useMemo(function() {
        return maximized ? "full" : size;
    }, [
        maximized,
        size
    ]);
    var maximizeCb = React__default["default"].useCallback(function() {
        setMaximized(function(curr) {
            return !curr;
        });
    }, []);
    return /*#__PURE__*/ React__default["default"].createElement(Transition__default["default"], __assign({
        in: isOpen,
        mountOnEnter: true,
        unmountOnExit: true,
        timeout: animationDuration
    }, transitionEvents), function(state) {
        return /*#__PURE__*/ React__default["default"].createElement(ReactModal__default["default"], __assign({}, props, {
            onRequestClose: autoClose && closeHandle ? closeHandle : undefined,
            overlayClassName: "modal-backdrop",
            isOpen: [
                "entering",
                "entered"
            ].includes(state),
            className: "modal".concat(appendClass(realSize, "modal--".concat(realSize))).concat(appendClass(left, "modal--left")),
            closeTimeoutMS: typeof animationDuration === "object" ? animationDuration.exit : animationDuration
        }), /*#__PURE__*/ React__default["default"].createElement("div", __assign({
            className: "modal__dialog"
        }, dialogProps, {
            onClick: function onClick(e) {
                return e.stopPropagation();
            }
        }), /*#__PURE__*/ React__default["default"].createElement("div", __assign({
            className: "modal__content"
        }, contentProps), /*#__PURE__*/ React__default["default"].createElement(DisplayIf, {
            condition: !!(closeIcon && closeHandle) || maximize
        }, /*#__PURE__*/ React__default["default"].createElement(ConditionalWrapper, {
            condition: !!(closeIcon && closeHandle) && maximize,
            wrapper: /*#__PURE__*/ React__default["default"].createElement("div", {
                className: "modal__close"
            })
        }, Boolean(maximize) && /*#__PURE__*/ React__default["default"].createElement("a", {
            className: "".concat(appendClass(!(closeIcon && closeHandle), "modal__close")).concat(appendClass(closeIcon && closeHandle, "qtr-margin-right")),
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
        }, title)), children)));
    });
};
Modal.Small = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Modal, __assign({}, props, {
        size: "small"
    }));
};
Modal.Large = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Modal, __assign({}, props, {
        size: "large"
    }));
};
Modal.Full = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Modal, __assign({}, props, {
        size: "full"
    }));
};
Modal.Fluid = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Modal, __assign({}, props, {
        size: "fluid"
    }));
};
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

var ConfirmationModal = function ConfirmationModal(_a1) {
    var _b = _a1.isOpen, isOpen = _b === void 0 ? false : _b, _c = _a1.confirmType, confirmType = _c === void 0 ? "primary" : _c, _d = _a1.autoClose, autoClose = _d === void 0 ? true : _d, _e = _a1.confirmText, confirmText = _e === void 0 ? "Confirm" : _e, confirmHandle = _a1.confirmHandle, closeHandle = _a1.closeHandle, prompt = _a1.prompt, _f = _a1.dontAskAgain, dontAskAgain = _f === void 0 ? {
        show: false
    } : _f;
    var _g = React__default["default"].useState(false), doing = _g[0], setDoing = _g[1];
    var _h = React__default["default"].useState(false), dontAsk = _h[0], setDontAsk = _h[1];
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
        onChange: function onChange(e) {
            setDontAsk(e.target.checked);
        }
    }), /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "checkbox__input"
    }), /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "checkbox__label"
    }, dontAskAgain.text || "Don't ask again"))) : null), /*#__PURE__*/ React__default["default"].createElement(ModalFooter, null, /*#__PURE__*/ React__default["default"].createElement(Button$1.Light, {
        onClick: closeHandle
    }, "Close"), /*#__PURE__*/ React__default["default"].createElement(Button$1, {
        color: confirmType,
        disabled: doing,
        onClick: function onClick() {
            return __awaiter(void 0, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            setDoing(true);
                            return [
                                4 /*yield*/ ,
                                confirmHandle(dontAsk)
                            ];
                        case 1:
                            if (_a.sent()) setDoing(false);
                            return [
                                2 /*return*/ 
                            ];
                    }
                });
            });
        }
    }, confirmText, doing ? /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "icon-animation spin qtr-margin-left"
    }) : null)));
};

function PromptModal(_a) {
    var _this = this;
    var title = _a.title, question = _a.question, cb = _a.onSave, onClose = _a.onClose, initial = _a.initial, type = _a.type, isOpen = _a.isOpen, hint = _a.hint, validate = _a.validate;
    var _b1 = React__default["default"].useState(initial), val = _b1[0], setVal = _b1[1];
    var _c = React__default["default"].useState(false), doing = _c[0], setDoing = _c[1];
    var onSave = React__default["default"].useCallback(function() {
        return __awaiter(_this, void 0, void 0, function() {
            var _$_a;
            return __generator(this, function(_b) {
                switch(_b.label){
                    case 0:
                        _$_a = typeof validate === "function";
                        if (!_$_a) return [
                            3 /*break*/ ,
                            2
                        ];
                        return [
                            4 /*yield*/ ,
                            validate(val)
                        ];
                    case 1:
                        _$_a = !_b.sent();
                        _b.label = 2;
                    case 2:
                        if (_$_a) return [
                            2 /*return*/ 
                        ];
                        setDoing(true);
                        return [
                            4 /*yield*/ ,
                            cb(val)
                        ];
                    case 3:
                        _b.sent();
                        setDoing(false);
                        onClose();
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    }, [
        onClose,
        cb,
        val,
        validate
    ]);
    React__default["default"].useEffect(function() {
        return setVal(initial);
    }, [
        initial
    ]);
    var inpRef = React__default["default"].useRef(undefined);
    React__default["default"].useEffect(function() {
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
        onChange: function onChange(e) {
            return setVal(e.target.value);
        },
        onKeyUp: function onKeyUp(e) {
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
    })), /*#__PURE__*/ React__default["default"].createElement(ModalFooter, null, /*#__PURE__*/ React__default["default"].createElement(Button$1, {
        color: "light",
        onClick: onClose,
        disabled: doing
    }, "Close"), /*#__PURE__*/ React__default["default"].createElement(Button$1, {
        color: "primary",
        onClick: onSave,
        disabled: doing
    }, "OK", doing ? /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "icon-animation spin qtr-margin-left"
    }) : null)));
}

var eventManager = new EventEmitter__default["default"]();

var ConfirmationListener = function ConfirmationListener() {
    var _a1 = React__default["default"].useState([]), modals = _a1[0], setModals = _a1[1];
    var addModal = React__default["default"].useCallback(function(modal) {
        return setModals(function(curr) {
            return __spreadArray(__spreadArray([], curr, true), [
                __assign({
                    id: Date.now(),
                    shown: true
                }, modal)
            ], false);
        });
    }, []);
    var hideModal = React__default["default"].useCallback(function(id) {
        setModals(function(curr) {
            return curr.map(function(m) {
                return m.id === id ? __assign(__assign({}, m), {
                    shown: false
                }) : m;
            });
        });
    }, []);
    var deleteModal = React__default["default"].useCallback(function(id) {
        setModals(function(curr) {
            return curr.filter(function(m) {
                if (m.id === id && typeof m.onClosed === "function") m.onClosed();
                return m.id !== id;
            });
        });
    }, []);
    var closeModal = React__default["default"].useCallback(function(id, cb) {
        hideModal(id);
        setTimeout(function() {
            return deleteModal(id);
        }, 500);
        if (cb) cb();
    }, [
        hideModal,
        deleteModal
    ]);
    React__default["default"].useEffect(function() {
        var cb = function cb(m) {
            return addModal(m);
        };
        eventManager.on("showModal", cb);
        return function() {
            eventManager.off("showModal", cb);
        };
    }, [
        addModal
    ]);
    if (!modals.length) return null;
    return /*#__PURE__*/ React__default["default"].createElement(React__default["default"].Fragment, null, modals.map(function(modal) {
        if (modal.modalType === "dynamic") return /*#__PURE__*/ React__default["default"].createElement(Modal, __assign({}, modal.modalProps, {
            key: modal.id,
            isOpen: modal.shown,
            closeHandle: function closeHandle() {
                return closeModal(modal.id, modal.onModalClose);
            },
            title: modal.title
        }), modal.fullBody ? typeof modal.fullBody === "function" ? modal.fullBody({
            close: function close() {
                return closeModal(modal.id, modal.onModalClose);
            }
        }) : /*#__PURE__*/ React.cloneElement(modal.fullBody, {
            close: function close() {
                return closeModal(modal.id, modal.onModalClose);
            }
        }) : /*#__PURE__*/ React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/ React__default["default"].createElement(ModalBody, null, modal.body), /*#__PURE__*/ React__default["default"].createElement(ModalFooter, null, modal.buttons.map(function(button, idx) {
            return /*#__PURE__*/ React__default["default"].createElement(Button$1, {
                key: idx,
                color: button.color || "light",
                onClick: function onClick(e) {
                    if (typeof button.onClick === "function") button.onClick(e, function() {
                        return closeModal(modal.id, modal.onModalClose);
                    });
                    else closeModal(modal.id, modal.onModalClose);
                }
            }, button.text);
        }))));
        if (modal.modalType === "notification") return /*#__PURE__*/ React__default["default"].createElement(Modal, {
            key: modal.id,
            isOpen: modal.shown,
            closeIcon: true,
            closeHandle: function closeHandle() {
                return closeModal(modal.id, modal.onModalClose);
            },
            title: modal.title
        }, /*#__PURE__*/ React__default["default"].createElement(ModalBody, null, modal.body), /*#__PURE__*/ React__default["default"].createElement(ModalFooter, null, /*#__PURE__*/ React__default["default"].createElement(Button$1, {
            color: modal.buttonColor || "light",
            onClick: function onClick() {
                return closeModal(modal.id, modal.onModalClose);
            }
        }, modal.button)));
        if (modal.modalType === "prompt") {
            if (typeof modal.options !== "undefined") {
                var _a = modal.options, _b = _a.initial, initial = _b === void 0 ? "" : _b, _c = _a.type, type = _c === void 0 ? "text" : _c, _d = _a.hint, hint = _d === void 0 ? undefined : _d, _e = _a.validate, validate = _e === void 0 ? undefined : _e;
                return /*#__PURE__*/ React__default["default"].createElement(PromptModal, {
                    key: modal.id,
                    isOpen: modal.shown,
                    onClose: function onClose() {
                        return closeModal(modal.id, modal.onModalClose);
                    },
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
                onClose: function onClose() {
                    return closeModal(modal.id, modal.onModalClose);
                },
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
            confirmHandle: function confirmHandle(dontAskAgain) {
                return __awaiter(void 0, void 0, void 0, function() {
                    var r;
                    return __generator(this, function(_a) {
                        switch(_a.label){
                            case 0:
                                return [
                                    4 /*yield*/ ,
                                    modal.onConfirm(dontAskAgain)
                                ];
                            case 1:
                                r = _a.sent();
                                if (r) closeModal(modal.id, modal.onModalClose);
                                return [
                                    2 /*return*/ ,
                                    true
                                ];
                        }
                    });
                });
            },
            closeHandle: function closeHandle() {
                return closeModal(modal.id, modal.onModalClose);
            },
            confirmText: modal.confirmText,
            confirmType: modal.confirmType,
            dontAskAgain: modal.dontAskAgain
        });
        return null;
    }));
};

function confirmation(prompt1, onConfirm, confirmType, confirmText, dontAskAgain) {
    if (confirmType === void 0) {
        confirmType = "primary";
    }
    if (confirmText === void 0) {
        confirmText = "Confirm";
    }
    if (dontAskAgain === void 0) {
        dontAskAgain = {
            show: false
        };
    }
    if (!prompt1) throw new Error("Prompt must be specified");
    if (!onConfirm || typeof onConfirm !== "function") throw new Error("onConfirm must be specified and must be a function");
    eventManager.emit("showModal", {
        modalType: "confirmation",
        prompt: /*#__PURE__*/ React__default["default"].createElement("p", null, prompt1),
        onConfirm: onConfirm,
        confirmText: confirmText,
        confirmType: confirmType,
        dontAskAgain: dontAskAgain
    });
}
var notificationModal = function notificationModal(title, body, buttonColor, button) {
    if (buttonColor === void 0) {
        buttonColor = "light";
    }
    if (button === void 0) {
        button = "OK";
    }
    if (!title || !body) throw new Error("Title and body must be specified");
    return new Promise(function(resolve) {
        eventManager.emit("showModal", {
            modalType: "notification",
            title: title,
            body: body,
            buttonColor: buttonColor,
            button: button,
            onClosed: resolve
        });
    });
};
function prompt(title, question, cb, initial, type, hint) {
    if (type === void 0) {
        type = "text";
    }
    if (hint === void 0) {
        hint = undefined;
    }
    if (!title || !question) throw new Error("Title and question must be specified");
    if (typeof initial === "object") {
        eventManager.emit("showModal", {
            modalType: "prompt",
            title: title,
            question: question,
            cb: cb,
            options: initial
        });
        return;
    }
    eventManager.emit("showModal", {
        modalType: "prompt",
        title: title,
        initial: initial,
        type: type,
        question: question,
        cb: cb,
        hint: hint
    });
}
var dynamicModal = function dynamicModal(_a) {
    var title = _a.title, _b = _a.fullBody, fullBody = _b === void 0 ? null : _b, _c = _a.body, body = _c === void 0 ? null : _c, _d = _a.buttons, buttons = _d === void 0 ? [] : _d, _e = _a.modalProps, modalProps = _e === void 0 ? {} : _e;
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(_f) {
            return [
                2 /*return*/ ,
                new Promise(function(resolve) {
                    eventManager.emit("showModal", {
                        modalType: "dynamic",
                        title: title,
                        fullBody: fullBody,
                        body: body,
                        buttons: buttons,
                        modalProps: modalProps,
                        onModalClose: resolve
                    });
                })
            ];
        });
    });
};

var Icon = function Icon(_a) {
    var icon = _a.icon, _b = _a.size, size = _b === void 0 ? null : _b, _c = _a.className, className = _c === void 0 ? null : _c, props = __rest(_a, [
        "icon",
        "size",
        "className"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement("span", __assign({
        className: "icon-".concat(icon).concat(appendClass(className)).concat(appendClass(size, "icon-size-".concat(size)))
    }, props));
};

/**
 * Creates DOM element to be used as React root.
 * @returns {HTMLElement}
 */ function createRootElement(id) {
    var rootContainer = document.createElement("div");
    rootContainer.setAttribute("id", id);
    return rootContainer;
}
/**
 * Appends element as last child of body.
 * @param {HTMLElement} rootElem
 */ function addRootElement(rootElem) {
    document.body.insertBefore(rootElem, document.body.lastElementChild.nextElementSibling);
}
/**
 * Hook to create a React Portal.
 * Automatically handles creating and tearing-down the root elements (no SRR
 * makes this trivial), so there is no need to ensure the parent target already
 * exists.
 * @example
 * const target = usePortal(id, [id]);
 * return createPortal(children, target);
 * @param {String} id The id of the target container, e.g 'modal' or 'spotlight'
 * @returns {HTMLElement} The DOM node to use as the Portal target.
 */ function usePortal(id) {
    var getRootElem = /**
     * It's important we evaluate this lazily:
     * - We need first render to contain the DOM element, so it shouldn't happen
     *   in useEffect. We would normally put this in the constructor().
     * - We can't do 'const rootElemRef = useRef(document.createElement('div))',
     *   since this will run every single render (that's a lot).
     * - We want the ref to consistently point to the same DOM element and only
     *   ever run once.
     * @link https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
     */ function getRootElem() {
        if (!rootElemRef.current) {
            rootElemRef.current = document.createElement("div");
        }
        return rootElemRef.current;
    };
    var rootElemRef = React.useRef(null);
    React.useEffect(function setupElement() {
        // Look for existing target dom element to append to
        var existingParent = document.querySelector("#".concat(id));
        // Parent is either a new root or the existing dom element
        var parentElem = existingParent || createRootElement(id);
        // If there is no existing DOM element, add a new one.
        if (!existingParent) {
            addRootElement(parentElem);
        }
        // Add the detached element to the parent
        parentElem.appendChild(rootElemRef.current);
        return function removeElement() {
            rootElemRef.current.remove();
            if (parentElem.childNodes.length === -1) {
                parentElem.remove();
            }
        };
    }, []);
    return getRootElem();
}

/**
 * @example
 * <Portal>
 *   <p>Thinking with portals</p>
 * </Portal>
 */ var Portal = function Portal(_a) {
    var id = _a.id, children = _a.children;
    var target = usePortal(id);
    return /*#__PURE__*/ reactDom.createPortal(children, target);
};

var Accordion = function Accordion(_a) {
    var children = _a.children, _b = _a.toggles, toggles = _b === void 0 ? false : _b, _c = _a.bordered, bordered = _c === void 0 ? false : _c;
    return /*#__PURE__*/ React__default["default"].createElement("ul", {
        className: "accordion".concat(bordered ? " accordion--bordered" : "")
    }, React__default["default"].Children.map(children, function(child) {
        return /*#__PURE__*/ React__default["default"].isValidElement(child) ? /*#__PURE__*/ React__default["default"].cloneElement(child, {
            toggles: toggles
        }) : null;
    }));
};

var AccordionElement = function AccordionElement(_a) {
    var children = _a.children, _b = _a.defaultOpen, defaultOpen = _b === void 0 ? false : _b, _c = _a.toggles, toggles = _c === void 0 ? false : _c, title = _a.title;
    var _d = React__default["default"].useState(defaultOpen), isOpen = _d[0], setIsOpen = _d[1];
    return /*#__PURE__*/ React__default["default"].createElement("li", {
        className: isOpen ? "active" : ""
    }, /*#__PURE__*/ React__default["default"].createElement("a", {
        className: "accordion__title",
        onClick: function onClick() {
            return setIsOpen(function(prev) {
                return !prev;
            });
        }
    }, /*#__PURE__*/ React__default["default"].createElement("span", null, title), toggles ? /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "accordion__toggle icon-chevron-down"
    }) : null), /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "accordion__content"
    }, children));
};

var Wrapper = function Wrapper(_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? null : _b;
    return /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "badge-wrapper".concat(appendClass(className))
    }, children);
};
var Badge = function Badge(_a) {
    var _b = _a.color, color = _b === void 0 ? "primary" : _b, _c = _a.size, size = _c === void 0 ? "default" : _c, children = _a.children, _d = _a.className, className = _d === void 0 ? null : _d, props = __rest(_a, [
        "color",
        "size",
        "children",
        "className"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement("span", __assign({
        className: "".concat("badge badge--".concat(color)).concat(appendClass(size !== "default", "badge--".concat(size))).concat(appendClass(className))
    }, props), children);
};
Badge.Dot = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Badge, __assign({}, props, {
        size: "dot"
    }));
};
Badge.Tiny = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Badge, __assign({}, props, {
        size: "tiny"
    }));
};
Badge.Small = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Badge, __assign({}, props, {
        size: "small"
    }));
};
Badge.Default = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Badge, __assign({}, props, {
        size: "default"
    }));
};
Badge.Large = function(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Badge, __assign({}, props, {
        size: "large"
    }));
};
Badge.Wrapper = Wrapper;
var WithBadge = function WithBadge(_a) {
    var children = _a.children, badge = _a.badge, _b = _a.wrapperClass, wrapperClass = _b === void 0 ? null : _b, props = __rest(_a, [
        "children",
        "badge",
        "wrapperClass"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement(Badge.Wrapper, {
        className: wrapperClass
    }, children, /*#__PURE__*/ React__default["default"].createElement(Badge, __assign({}, props), badge));
};

/**
 * a type-safe version of the `usePrevious` hook described here:
 * @see {@link https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state}
 */ function usePrevious(value) {
    var ref = React.useRef();
    React.useEffect(function() {
        ref.current = value;
    }, [
        value
    ]);
    return ref.current;
}

var firstDefined = function firstDefined() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++){
        args[_i] = arguments[_i];
    }
    return args.find(function(el) {
        return typeof el !== "undefined" && el !== null;
    });
};
var Tab = function Tab(_a) {
    var _b = _a.active, active = _b === void 0 ? false : _b, _c = _a.className, className = _c === void 0 ? null : _c, _d = _a.activeClassName, activeClassName = _d === void 0 ? null : _d, _e = _a.unmountInactive, unmountInactive = _e === void 0 ? false : _e, children = _a.children;
    if (!active && unmountInactive) return null;
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "tab-pane".concat(appendClass(active, "active")).concat(appendClass(active && activeClassName, activeClassName)).concat(appendClass(className))
    }, children);
};
var isActive = function isActive(openTab, id, idx) {
    return openTab === null ? idx === 0 : openTab === firstDefined(id, idx);
};
var TabsHeader = function TabsHeader(_a) {
    var _b = _a.tabsClassName, tabsClassName = _b === void 0 ? null : _b, _c = _a.center, center = _c === void 0 ? false : _c, _d = _a.right, right = _d === void 0 ? false : _d, _e = _a.justified, justified = _e === void 0 ? false : _e, _f = _a.embossed, embossed = _f === void 0 ? false : _f, _g = _a.bordered, bordered = _g === void 0 ? false : _g, _h = _a.vertical, vertical = _h === void 0 ? false : _h, _j = _a.inline, inline = _j === void 0 ? false : _j, _k = _a.openTab, openTab = _k === void 0 ? null : _k, _l = _a.sticky, sticky = _l === void 0 ? false : _l, onTabChange = _a.onTabChange, children = _a.children;
    return /*#__PURE__*/ React__default["default"].createElement("ul", {
        className: "tabs".concat(appendClass(tabsClassName)).concat(appendClass(center, "tabs--centered")).concat(appendClass(right, "tabs--right")).concat(appendClass(justified, "tabs--justified")).concat(appendClass(embossed, "tabs--embossed")).concat(appendClass(bordered, "tabs--bordered")).concat(appendClass(vertical, "tabs--vertical")).concat(appendClass(inline, "tabs--inline")),
        style: sticky ? {
            position: "sticky",
            top: "0"
        } : {}
    }, React__default["default"].Children.map(children, function(child, idx) {
        if (!/*#__PURE__*/ React__default["default"].isValidElement(child)) return child;
        var _$_a = child.props, id = _$_a.id, title = _$_a.title;
        return /*#__PURE__*/ React__default["default"].createElement("li", {
            className: "tab".concat(appendClass(isActive(openTab, id, idx), "active")),
            key: firstDefined(id, idx)
        }, /*#__PURE__*/ React__default["default"].createElement("a", {
            onClick: function onClick() {
                return onTabChange(firstDefined(id, idx));
            }
        }, title));
    }));
};
var composeColumnSize = function composeColumnSize(columnWidth) {
    if (typeof columnWidth === "string" || typeof columnWidth === "number") return "col-".concat(columnWidth);
    return Object.keys(columnWidth).map(function(k) {
        return "col-".concat(k, "-").concat(columnWidth[k]);
    }).join(" ");
};
var ColumnWrap = function ColumnWrap(_a) {
    var columnWidth = _a.columnWidth, className = _a.className, props = __rest(_a, [
        "columnWidth",
        "className"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement("div", __assign({
        className: "".concat(composeColumnSize(columnWidth)).concat(appendClass(className))
    }, props));
};
var Tabs = function Tabs(_a) {
    var _b1 = _a.defaultTab, defaultTab = _b1 === void 0 ? null : _b1, _c = _a.tabsClassName, tabsClassName = _c === void 0 ? null : _c, _d = _a.contentClassName, contentClassName = _d === void 0 ? null : _d, _e = _a.center, center = _e === void 0 ? false : _e, _f = _a.right, right = _f === void 0 ? false : _f, _g = _a.justified, justified = _g === void 0 ? false : _g, _h = _a.embossed, embossed = _h === void 0 ? false : _h, _j = _a.bordered, bordered = _j === void 0 ? false : _j, _k = _a.vertical, vertical = _k === void 0 ? false : _k, _l = _a.sticky, sticky = _l === void 0 ? false : _l, _m = _a.inline, inline = _m === void 0 ? false : _m, _o = _a.renderHeader, renderHeader = _o === void 0 ? function renderHeader(header) {
        return header;
    } : _o, _p = _a.renderBody, renderBody = _p === void 0 ? function renderBody(body) {
        return body;
    } : _p, _q = _a.onTabChange, onTabChange = _q === void 0 ? null : _q, _r = _a.leftColumn, leftColumn = _r === void 0 ? {
        columnWidth: 3
    } : _r, _s = _a.rightColumn, rightColumn = _s === void 0 ? {
        columnWidth: 9
    } : _s, _t = _a.rowProps, _u = _t === void 0 ? {} : _t, rowClassName = _u.className, rowProps = __rest(_u, [
        "className"
    ]), _v = _a.beforeTabChange, beforeTabChange = _v === void 0 ? null : _v, children = _a.children;
    var _w = React__default["default"].useState(defaultTab || null), openTab = _w[0], setOpenTab = _w[1];
    var prevTab = usePrevious(openTab);
    React__default["default"].useEffect(function() {
        setOpenTab(defaultTab);
    }, [
        defaultTab
    ]);
    React__default["default"].useEffect(function() {
        (function() {
            return __awaiter(void 0, void 0, void 0, function() {
                var _$_a;
                return __generator(this, function(_b) {
                    switch(_b.label){
                        case 0:
                            if (openTab === prevTab) return [
                                2 /*return*/ 
                            ];
                            _$_a = typeof beforeTabChange === "function";
                            if (!_$_a) return [
                                3 /*break*/ ,
                                2
                            ];
                            return [
                                4 /*yield*/ ,
                                beforeTabChange(prevTab, openTab)
                            ];
                        case 1:
                            _$_a = !_b.sent();
                            _b.label = 2;
                        case 2:
                            if (_$_a) setOpenTab(prevTab);
                            if (typeof onTabChange === "function") onTabChange(openTab);
                            return [
                                2 /*return*/ 
                            ];
                    }
                });
            });
        })();
    }, [
        openTab,
        prevTab
    ]);
    var header1 = /*#__PURE__*/ React__default["default"].createElement(ConditionalWrapper, {
        condition: vertical,
        wrapper: /*#__PURE__*/ React__default["default"].createElement(ColumnWrap, __assign({}, leftColumn))
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
    var body1 = /*#__PURE__*/ React__default["default"].createElement(ConditionalWrapper, {
        condition: vertical,
        wrapper: /*#__PURE__*/ React__default["default"].createElement(ColumnWrap, __assign({}, rightColumn))
    }, renderBody(/*#__PURE__*/ React__default["default"].createElement("div", {
        className: "tab-content".concat(contentClassName ? " ".concat(contentClassName) : "")
    }, React__default["default"].Children.map(children, function(child, idx) {
        return /*#__PURE__*/ React__default["default"].isValidElement(child) ? /*#__PURE__*/ React__default["default"].cloneElement(child, {
            active: isActive(openTab, child.props.id, idx)
        }) : child;
    }))));
    return /*#__PURE__*/ React__default["default"].createElement(ConditionalWrapper, {
        condition: vertical,
        wrapper: /*#__PURE__*/ React__default["default"].createElement("div", __assign({
            className: "row".concat(appendClass(rowClassName)),
            style: sticky ? {
                position: "relative"
            } : {}
        }, rowProps))
    }, /*#__PURE__*/ React__default["default"].createElement(DisplayIf, {
        condition: vertical && !right || !vertical
    }, header1), body1, /*#__PURE__*/ React__default["default"].createElement(DisplayIf, {
        condition: vertical && right
    }, header1));
};

var Section = /*#__PURE__*/ React.forwardRef(function(_a, ref) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? null : _b, props = __rest(_a, [
        "children",
        "className"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement("div", __assign({
        className: "section".concat(appendClass(className))
    }, props, {
        ref: ref
    }), children);
});

var Display = function Display(_a) {
    var _b = _a.as, as = _b === void 0 ? "h1" : _b, _c = _a.className, className = _c === void 0 ? null : _c, size = _a.size, props = __rest(_a, [
        "as",
        "className",
        "size"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement(as, __assign(__assign({}, props), {
        className: "display-".concat(size).concat(appendClass(className))
    }));
};
var Display0 = function Display0(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Display, __assign({}, props, {
        size: 0
    }));
};
var Display1 = function Display1(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Display, __assign({}, props, {
        size: 1
    }));
};
var Display2 = function Display2(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Display, __assign({}, props, {
        size: 2
    }));
};
var Display3 = function Display3(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Display, __assign({}, props, {
        size: 3
    }));
};
var Display4 = function Display4(props) {
    return /*#__PURE__*/ React__default["default"].createElement(Display, __assign({}, props, {
        size: 4
    }));
};

var TimelineItem = function TimelineItem(_a) {
    var _b = _a.icon, icon = _b === void 0 ? /*#__PURE__*/ React__default["default"].createElement(Icon, {
        icon: "circle"
    }) : _b, _c = _a.time, time = _c === void 0 ? null : _c, _d = _a.className, className = _d === void 0 ? null : _d, _e = _a.contentClassName, contentClassName = _e === void 0 ? null : _e, _f = _a.simplified, simplified = _f === void 0 ? false : _f, _g = _a.header, header = _g === void 0 ? null : _g, children = _a.children;
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "timeline__item".concat(appendClass(className))
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "timeline__icon"
    }, icon), time && !simplified ? /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "timeline__time"
    }, time) : null, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "timeline__content".concat(appendClass(contentClassName))
    }, header ? /*#__PURE__*/ React.isValidElement(header) ? header : /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "timeline__header"
    }, header) : null, time && simplified ? /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "timeline__time"
    }, time) : null, children));
};
var Timeline = function Timeline(_a) {
    var _b = _a.center, center = _b === void 0 ? false : _b, _c = _a.right, right = _c === void 0 ? false : _c, _d = _a.className, className = _d === void 0 ? null : _d, _e = _a.simplified, simplified = _e === void 0 ? false : _e, children = _a.children;
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "timeline".concat(appendClass(center, "timeline--centered")).concat(appendClass(right, "timeline--right")).concat(appendClass(simplified, "simplified")).concat(appendClass(className))
    }, React__default["default"].Children.map(children, function(child) {
        return /*#__PURE__*/ React.isValidElement(child) ? /*#__PURE__*/ React.cloneElement(child, {
            simplified: simplified
        }) : child;
    }));
};

var Step = /*#__PURE__*/ React.forwardRef(function(_a, ref) {
    var _b = _a.visited, visited = _b === void 0 ? false : _b, _c = _a.active, active = _c === void 0 ? false : _c, _d = _a.className, className = _d === void 0 ? null : _d, icon = _a.icon, children = _a.children, consequativeIdx = _a.consequativeIdx;
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "step".concat(appendClass(visited, "visited")).concat(appendClass(active, "active")).concat(appendClass(className)),
        ref: ref
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "step__icon"
    }, icon !== null && icon !== void 0 ? icon : consequativeIdx), /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "step__label"
    }, children));
});

var Steps = /*#__PURE__*/ React.forwardRef(function(_a, ref) {
    var _b = _a.size, size = _b === void 0 ? "default" : _b, _c = _a.color, color = _c === void 0 ? "primary" : _c, _d = _a.vertical, vertical = _d === void 0 ? false : _d, _e = _a.className, className = _e === void 0 ? null : _e, children = _a.children;
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "steps".concat(appendClass(size !== "default", "steps--".concat(size)), " steps--").concat(color).concat(appendClass(vertical, "steps--vertical")).concat(appendClass(className)),
        ref: ref
    }, React__default["default"].Children.toArray(children).filter(Boolean).map(function(child, idx) {
        return /*#__PURE__*/ React.isValidElement(child) ? /*#__PURE__*/ React__default["default"].cloneElement(child, {
            consequativeIdx: idx + 1
        }) : child;
    }));
});

var VerticalCenter = function VerticalCenter(_a) {
    var children = _a.children;
    return /*#__PURE__*/ React__default["default"].createElement("div", {
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
    }, children));
};

var Textarea = function Textarea(_a) {
    var _b = _a.label, label = _b === void 0 ? null : _b, _c = _a.textareaClass, textareaClass = _c === void 0 ? null : _c, _d = _a.innerDivClass, innerDivClass = _d === void 0 ? null : _d, _e = _a.className, className = _e === void 0 ? null : _e, _f = _a.id, id = _f === void 0 ? null : _f, _g = _a.inputRef, inputRef = _g === void 0 ? null : _g, _h = _a.inline, inline = _h === void 0 ? false : _h, _j = _a.error, error = _j === void 0 ? null : _j, textarea = __rest(_a, [
        "label",
        "textareaClass",
        "innerDivClass",
        "className",
        "id",
        "inputRef",
        "inline",
        "error"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "form-group".concat(appendClass(inline, "form-group--inline")).concat(appendClass(className)).concat(appendClass(error, "form-group--error"))
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "form-group__text".concat(appendClass(innerDivClass))
    }, /*#__PURE__*/ React__default["default"].createElement("textarea", __assign({
        className: textareaClass,
        ref: inputRef
    }, textarea), textarea.value), label ? /*#__PURE__*/ React__default["default"].createElement("label", {
        htmlFor: id
    }, label) : null), error ? /*#__PURE__*/ React__default["default"].createElement(InputHelpBlock, {
        text: error
    }) : null);
};

var DropdownHeader = function DropdownHeader(_a) {
    var _b;
    var variants = _a.variants, selectedIdx = _a.selectedIdx, setIdx = _a.setIdx, _c = _a.placeholder, placeholder = _c === void 0 ? "Select" : _c;
    return /*#__PURE__*/ React__default["default"].createElement(Dropdown, {
        type: "link",
        header: ((_b = variants[selectedIdx]) === null || _b === void 0 ? void 0 : _b.display) || placeholder,
        alwaysClose: true,
        className: "flex-center-vertical",
        stopPropagation: true
    }, variants.map(function(v, idx) {
        var _$_a;
        return /*#__PURE__*/ React__default["default"].createElement("a", {
            key: v.variant,
            onClick: function onClick() {
                return setIdx(idx);
            },
            className: ((_$_a = variants[selectedIdx]) === null || _$_a === void 0 ? void 0 : _$_a.variant) === v.variant ? "selected" : ""
        }, v.display);
    }));
};
var ListHeader = function ListHeader(_a) {
    var variants = _a.variants, selectedIdx = _a.selectedIdx, setIdx = _a.setIdx;
    return /*#__PURE__*/ React__default["default"].createElement("ul", {
        className: "list list--inline divider--vertical"
    }, variants.map(function(v, idx) {
        var _$_a;
        return /*#__PURE__*/ React__default["default"].createElement("li", {
            key: v.variant
        }, /*#__PURE__*/ React__default["default"].createElement(ConditionalWrapper, {
            condition: ((_$_a = variants[selectedIdx]) === null || _$_a === void 0 ? void 0 : _$_a.variant) !== v.variant,
            wrapper: /*#__PURE__*/ React__default["default"].createElement("a", {
                key: v.variant,
                onClick: function onClick() {
                    return setIdx(idx);
                }
            })
        }, v.display));
    }));
};
var VariantSelector = function VariantSelector(_a) {
    var _b = _a.disableable, disableable = _b === void 0 ? false : _b, _c = _a.title, title = _c === void 0 ? null : _c, _d = _a.inline, inline = _d === void 0 ? false : _d, _e = _a.onChange, onChange = _e === void 0 ? null : _e, _f = _a.enableTitleAppend, enableTitleAppend = _f === void 0 ? null : _f, _g = _a.className, className = _g === void 0 ? null : _g, _h = _a.list, list = _h === void 0 ? false : _h, _j = _a.variant, variant = _j === void 0 ? null : _j, variants = _a.variants, _k = _a.name, name = _k === void 0 ? "" : _k;
    var _l = React.useState(function() {
        var idx = variants.findIndex(function(v) {
            return v.selected || v.variant === variant;
        });
        return !disableable && idx < 0 ? 0 : idx;
    }), variantIdx = _l[0], setIdx = _l[1];
    React.useEffect(function() {
        var idx = variants.findIndex(function(v) {
            return v.variant === variant;
        });
        setIdx(function(curr) {
            return idx < 0 || idx === curr ? curr : idx;
        });
    }, [
        variant,
        variants
    ]);
    React.useEffect(function() {
        if (variantIdx >= 0 && typeof onChange === "function") onChange(variants[variantIdx]);
    }, [
        variantIdx
    ]);
    var dd = function dd(el, t) {
        return /*#__PURE__*/ React__default["default"].createElement(el, {
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
        }));
    };
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "form-group".concat(appendClass(inline, " inline-variants")).concat(appendClass(className))
    }, disableable ? /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "flex-center-vertical"
    }, /*#__PURE__*/ React__default["default"].createElement("label", {
        className: "switch",
        htmlFor: "".concat(name, ".disableable")
    }, /*#__PURE__*/ React__default["default"].createElement("input", {
        type: "checkbox",
        onChange: function onChange() {
            return setIdx(function(p) {
                return p >= 0 ? -1 : 0;
            });
        },
        checked: variantIdx >= 0,
        id: "".concat(name, ".disableable")
    }), /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "switch__input"
    }), /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "switch__label"
    }, title)), variantIdx >= 0 ? dd("span", enableTitleAppend) : null) : dd("div", title), disableable && variantIdx < 0 ? null : /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "tabs-wrap panel base-padding-top"
    }, variants[variantIdx].component));
};

var Radio = /*#__PURE__*/ React.forwardRef(function(_a, forwardedRef) {
    var _b = _a.spacing, spacing = _b === void 0 ? null : _b, _c = _a.inline, inline = _c === void 0 ? false : _c, _d = _a.label, label = _d === void 0 ? null : _d, _e = _a.className, className = _e === void 0 ? null : _e, id = _a.id, _f = _a.divProps, divProps = _f === void 0 ? {} : _f, input = __rest(_a, [
        "spacing",
        "inline",
        "label",
        "className",
        "id",
        "divProps"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement("div", __assign({
        className: "form-group".concat(appendClass(inline, "form-group--inline")).concat(appendClass(spacing, "form-group--".concat(spacing))).concat(appendClass(className))
    }, divProps), /*#__PURE__*/ React__default["default"].createElement("label", {
        className: "radio",
        htmlFor: id || input.name
    }, /*#__PURE__*/ React__default["default"].createElement("input", __assign({
        type: "radio",
        id: id
    }, input, {
        ref: forwardedRef
    })), /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "radio__input"
    }), label ? /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "radio__label"
    }, label) : null));
});
var Radios = function Radios(_a) {
    var values = _a.values, initialValue = _a.value, onChange = _a.onChange, name = _a.name;
    var _b = React.useState(initialValue), value = _b[0], setValue = _b[1];
    React.useEffect(function() {
        setValue(initialValue);
    }, [
        initialValue
    ]);
    var onRadioChange = React.useCallback(function(e) {
        e.persist();
        setValue(function(curr) {
            var v;
            if (e.target.checked) v = e.target.value;
            else v = curr;
            if (typeof onChange === "function") onChange(v);
            return v;
        });
    }, [
        onChange
    ]);
    return /*#__PURE__*/ React__default["default"].createElement(React__default["default"].Fragment, null, values.map(function(v, idx) {
        return /*#__PURE__*/ React__default["default"].createElement(Radio, {
            id: v.value,
            label: v.label,
            key: v.value,
            name: "".concat(name, ".").concat(idx),
            onChange: onRadioChange,
            checked: value === v.value
        });
    }));
};

var emptyList = [];
var InputChips = /*#__PURE__*/ React__default["default"].forwardRef(function(_a, ref) {
    var _b = _a.chipsColor, chipsColor = _b === void 0 ? "light" : _b, _c = _a.addOnBlur, addOnBlur = _c === void 0 ? true : _c, _d = _a.delimiters, delimiters = _d === void 0 ? [
        13
    ] : _d, _e = _a.label, label = _e === void 0 ? null : _e, _f = _a.allowRepeat, allowRepeat = _f === void 0 ? false : _f, _g = _a.allowRegex, allowRegex = _g === void 0 ? null : _g, _h = _a.valueValidator, valueValidator = _h === void 0 ? null : _h, _j = _a.maxChips, maxChips = _j === void 0 ? null : _j, _k = _a.baloon, baloon = _k === void 0 ? null : _k, _l = _a.className, className = _l === void 0 ? null : _l, _m = _a.id, id = _m === void 0 ? null : _m, _o = _a.error, error = _o === void 0 ? null : _o, _p = _a.value, initialValue = _p === void 0 ? null : _p, onChange = _a.onChange, _q = _a.outerWrap, outerWrap = _q === void 0 ? true : _q, _r = _a.chipsOutside, chipsOutside = _r === void 0 ? false : _r, _s = _a.renderChip, renderChip = _s === void 0 ? null : _s, _t = _a.onBlur, onBlur = _t === void 0 ? null : _t, _u = _a.onChipRemove, onChipRemove = _u === void 0 ? null : _u, onClick = _a.onClick, noInput = _a.noInput, input = __rest(_a, [
        "chipsColor",
        "addOnBlur",
        "delimiters",
        "label",
        "allowRepeat",
        "allowRegex",
        "valueValidator",
        "maxChips",
        "baloon",
        "className",
        "id",
        "error",
        "value",
        "onChange",
        "outerWrap",
        "chipsOutside",
        "renderChip",
        "onBlur",
        "onChipRemove",
        "onClick",
        "noInput"
    ]);
    var _v = React.useState(emptyList), value = _v[0], setValue = _v[1];
    React.useEffect(function() {
        setValue(function(curr) {
            return initialValue || curr || emptyList;
        });
    }, [
        initialValue
    ]);
    var addValue = React.useCallback(function(v) {
        if (typeof valueValidator === "function") {
            if (!valueValidator(v)) return;
        }
        setValue(function(curr) {
            if (allowRepeat || !(curr || []).includes(v)) {
                var n = (curr || []).concat(v);
                if (typeof onChange === "function") onChange(n);
                return n;
            } else return curr;
        });
    }, [
        allowRepeat,
        valueValidator,
        onChange
    ]);
    var handleKeyDown = React.useCallback(function(event) {
        var d = delimiters;
        if (typeof d === "string") {
            var map = Array.prototype.map;
            d = map.call(d, function(ch) {
                return ch.charCodeAt(0);
            });
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
    var handleBlur = React.useCallback(function(event) {
        var _$_a;
        if (addOnBlur && ((_$_a = event.target) === null || _$_a === void 0 ? void 0 : _$_a.value)) {
            var value_1 = event.target.value;
            if (allowRegex && RegExp(allowRegex).test(value_1)) {
                addValue(value_1);
            } else if (!allowRegex) {
                addValue(value_1);
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
    var handleDelete = React.useCallback(function(idx) {
        setValue(function(curr) {
            curr.splice(idx, 1);
            if (typeof onChange === "function") onChange(curr.slice());
            return curr.slice();
        });
        if (typeof onChipRemove === "function") onChipRemove(idx);
    }, [
        onChange,
        onChipRemove
    ]);
    var showInput = (!maxChips || maxChips && Array.isArray(value) && value.length < maxChips) && !noInput;
    return /*#__PURE__*/ React__default["default"].createElement(ConditionalWrapper, {
        wrapper: /*#__PURE__*/ React__default["default"].createElement("div", {
            className: "form-group".concat(appendClass(className)).concat(appendClass(error, "form-group--error")),
            ref: ref
        }),
        condition: outerWrap
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "form-group__text chips".concat(appendClass(!outerWrap && className, className))
    }, label ? /*#__PURE__*/ React__default["default"].createElement("label", {
        htmlFor: id || input.name
    }, label, baloon ? /*#__PURE__*/ React__default["default"].createElement(InputHelpBaloon, {
        baloon: baloon
    }) : null) : null, chipsOutside && Array.isArray(value) && value.length ? /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "chips-outer qtr-margin-bottom"
    }, /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "chips-inner"
    }, value.map(function(v, i) {
        return renderChip ? renderChip({
            value: v,
            idx: i,
            onDelete: function onDelete() {
                return handleDelete(i);
            }
        }) : /*#__PURE__*/ React__default["default"].createElement(Label, {
            removable: true,
            onRemove: function onRemove() {
                return handleDelete(i);
            },
            color: chipsColor,
            size: "small",
            key: "".concat(v, "-").concat(i),
            className: "no-margin-bottom"
        }, v);
    }))) : null, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "input ".concat(appendClass(!showInput, "dbl-padding-right")),
        onClick: onClick
    }, !chipsOutside && Array.isArray(value) && value.length ? /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "chips-outer"
    }, /*#__PURE__*/ React__default["default"].createElement("span", {
        className: "chips-inner"
    }, value.map(function(v, i) {
        return renderChip ? renderChip({
            value: v,
            idx: i,
            onDelete: function onDelete() {
                return handleDelete(i);
            }
        }) : /*#__PURE__*/ React__default["default"].createElement(Label, {
            removable: true,
            onRemove: function onRemove(e) {
                e.stopPropagation();
                e.preventDefault();
                handleDelete(i);
            },
            color: chipsColor,
            size: "small",
            key: "".concat(v, "-").concat(i),
            className: "no-margin-bottom"
        }, v);
    }))) : null, showInput ? /*#__PURE__*/ React__default["default"].createElement("input", __assign({
        type: "text",
        onKeyDown: handleKeyDown,
        onBlur: handleBlur,
        id: id || input.name
    }, input)) : null)), error ? /*#__PURE__*/ React__default["default"].createElement(InputHelpBlock, {
        text: error
    }) : null);
});

function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function isOption(element) {
    return element.type === "option";
}
function isOptGroup(element) {
    return element.type === "optgroup";
}
var SelectChildren = function(_a) {
    var children = _a.children, handleOptionClick = _a.handleOptionClick, isSelected = _a.isSelected;
    return React__default["default"].Children.map(children, function(child, idx) {
        if (!/*#__PURE__*/ React.isValidElement(child)) return child;
        if (isOption(child)) return /*#__PURE__*/ React__default["default"].createElement("a", {
            key: idx,
            onClick: function onClick(e) {
                return handleOptionClick(e, child.props.value);
            },
            className: "".concat(appendClass(isSelected(child.props.value), "selected")).concat(appendClass(child.props.disabled, "disabled"))
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
    });
};
var collectDisplays = function(children) {
    var t = [];
    React__default["default"].Children.forEach(children, function(child) {
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
var EditableSelect = /*#__PURE__*/ React.forwardRef(function(_a, inputRef) {
    var _b;
    var _c = _a.compressed, compressed = _c === void 0 ? false : _c, _d = _a.prompt, prompt = _d === void 0 ? "Select an option" : _d, _f = _a.inline, inline = _f === void 0 ? false : _f, _g = _a.type, type = _g === void 0 ? "text" : _g, children = _a.children, _h = _a.label, label = _h === void 0 ? null : _h, _j = _a.error, error = _j === void 0 ? null : _j, _k = _a.onChange, onChange = _k === void 0 ? null : _k, _l = _a.value, initialValue = _l === void 0 ? undefined : _l, _m = _a.editable, editable = _m === void 0 ? false : _m, _o = _a.multi, multi = _o === void 0 ? false : _o, _p = _a.displayValues, displayValues = _p === void 0 ? false : _p, disabled = _a.disabled, className = _a.className, divRef = _a.divRef, options = _a.options, _q = _a.onSelect, onSelect = _q === void 0 ? null : _q, _r = _a.onDeselect, onDeselect = _r === void 0 ? null : _r, input = __rest(_a, [
        "compressed",
        "prompt",
        "inline",
        "type",
        "children",
        "label",
        "error",
        "onChange",
        "value",
        "editable",
        "multi",
        "displayValues",
        "disabled",
        "className",
        "divRef",
        "options",
        "onSelect",
        "onDeselect"
    ]);
    var _s = React.useState(false), isOpen = _s[0], setOpen = _s[1];
    var _t = React.useState(initialValue), value = _t[0], setValue = _t[1];
    var ref = React.useRef(undefined);
    var display = React.useMemo(function() {
        return collectDisplays(children);
    }, [
        children
    ]);
    var handleClick = React.useCallback(function(newState) {
        if (newState === void 0) {
            newState = true;
        }
        if (disabled) return;
        setOpen(newState);
    }, [
        disabled
    ]);
    React.useEffect(function() {
        if (isOpen) {
            var onOutsideClick_1 = function onOutsideClick_1(e) {
                // ignore clicks on the component itself
                if (!_instanceof(e.target, Node) || !(ref === null || ref === void 0 ? void 0 : ref.current)) return;
                if (ref.current && ref.current.contains(e.target)) return;
                if (ref.current && !ref.current.contains(e.target)) {
                    handleClick(false);
                }
            };
            document.addEventListener("click", onOutsideClick_1, true);
            return function() {
                return document.removeEventListener("click", onOutsideClick_1, true);
            };
        }
    }, [
        isOpen,
        handleClick
    ]);
    var handleOptionClick = React.useCallback(function(_e, newValue) {
        var _$_a;
        if (multi) {
            var added_1 = true;
            setValue(function(curr) {
                if (curr === null || curr === void 0 ? void 0 : curr.includes(newValue)) {
                    added_1 = false;
                    return curr.filter(function(v) {
                        return v !== newValue;
                    });
                } else return (curr || []).concat(newValue);
            });
            var r = (_$_a = added_1 ? onSelect : onDeselect) === null || _$_a === void 0 ? void 0 : _$_a.call(undefined, newValue);
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
    var isSelected = function isSelected(checkValue) {
        return multi ? value === null || value === void 0 ? void 0 : value.includes(checkValue) : value === checkValue;
    };
    React.useEffect(function() {
        setValue(initialValue);
    }, [
        initialValue
    ]);
    React.useEffect(function() {
        if (multi && initialValue && !Array.isArray(initialValue)) throw Error("Value must be an array if multi select is allowed.");
    }, [
        multi,
        initialValue
    ]);
    React.useEffect(function() {
        if (typeof onChange === "function") onChange(value);
    }, [
        value
    ]);
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "form-group dropdown".concat(appendClass(compressed, "input--compressed")).concat(appendClass(isOpen, "active")).concat(appendClass(inline, "form-group--inline")).concat(appendClass(error, "form-group--error")).concat(appendClass(disabled, "disabled")).concat(appendClass(className)),
        ref: useCallbackRef.useMergeRefs([
            ref,
            divRef
        ])
    }, multi ? /*#__PURE__*/ React__default["default"].createElement(InputChips, __assign({
        className: "select editable",
        label: label
    }, input, {
        placeholder: !Array.isArray(value) || !value.length ? input.placeholder || prompt : "",
        readOnly: !editable,
        onClick: function onClick() {
            return handleClick(true);
        },
        onChange: function onChange() {
            return void 0;
        },
        onChipRemove: function onChipRemove(idx) {
            var val;
            setValue(function(curr) {
                val = curr[idx];
                return curr.filter(function(_v, i) {
                    return i !== idx;
                });
            });
            if (typeof onDeselect === "function") onDeselect(val);
        },
        value: displayValues ? value : display.filter(function(d) {
            return value === null || value === void 0 ? void 0 : value.includes(d.value);
        }).map(function(d) {
            return d.display;
        }),
        noInput: inline && !editable && Array.isArray(value) && value.length > 0,
        outerWrap: false,
        ref: inputRef
    })) : /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "form-group__text select editable",
        onClick: function onClick() {
            return handleClick(true);
        }
    }, /*#__PURE__*/ React__default["default"].createElement("input", __assign({
        type: type,
        placeholder: input.placeholder || prompt,
        autoComplete: "off",
        readOnly: !editable
    }, input, {
        onChange: function onChange(e) {
            if (!editable) return;
            e.persist();
            setValue(e.target.value);
        },
        value: editable ? value || "" : !displayValues ? ((_b = display === null || display === void 0 ? void 0 : display.find(function(el) {
            return el.value === value;
        })) === null || _b === void 0 ? void 0 : _b.display) || "" : value,
        ref: inputRef
    })), label ? /*#__PURE__*/ React__default["default"].createElement("label", {
        htmlFor: input.id
    }, label) : null), /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "dropdown__menu"
    }, /*#__PURE__*/ React__default["default"].createElement(SelectChildren, {
        handleOptionClick: handleOptionClick,
        isSelected: isSelected
    }, options ? options.map(function(opt, idx) {
        return /*#__PURE__*/ React__default["default"].createElement("option", {
            key: idx,
            value: opt.value
        }, opt.value);
    }) : children)), error ? /*#__PURE__*/ React__default["default"].createElement(InputHelpBlock, {
        text: error
    }) : null);
});

var MultiValueContainer = function MultiValueContainer(props) {
    var _a;
    var color = props.selectProps.multiValueColor || "primary";
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "label label--".concat(color, " label--small").concat(appendClass((_a = props.innerProps) === null || _a === void 0 ? void 0 : _a.className))
    }, props.children);
};
var MultiValueLabel = function MultiValueLabel(props) {
    return /*#__PURE__*/ React__default["default"].createElement("span", null, props.children);
};
var MultiValueRemove = function MultiValueRemove(_a) {
    var _b = _a.innerProps; _b.className; var props = __rest(_b, [
        "className"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement("span", __assign({
        className: "icon-close"
    }, props));
};
var Group = function Group(_a) {
    var className = _a.className, children = _a.children, Heading = _a.Heading, headingProps = _a.headingProps, innerProps = _a.innerProps, props = __rest(_a, [
        "className",
        "children",
        "Heading",
        "headingProps",
        "innerProps"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement("div", __assign({
        className: "dropdown__group".concat(appendClass(className))
    }, innerProps), /*#__PURE__*/ React__default["default"].createElement(Heading, __assign({}, props, {
        id: headingProps.id
    }), headingProps.data.label), children);
};
var GroupHeading = function GroupHeading(_a) {
    var className = _a.className, children = _a.children; __rest(_a, [
        "className",
        "children"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "dropdown__group-header".concat(appendClass(className))
    }, children);
};

var ReactSelect = /*#__PURE__*/ React.forwardRef(function(_a, ref) {
    var _b = _a.label, label = _b === void 0 ? null : _b, className = _a.className, error = _a.error, props = __rest(_a, [
        "label",
        "className",
        "error"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "form-group".concat(appendClass(className)).concat(appendClass(error, "form-group--error"))
    }, label && /*#__PURE__*/ React__default["default"].createElement("label", null, label), /*#__PURE__*/ React__default["default"].createElement(Select__default["default"], __assign({
        className: "react-select-container qtr-margin-top",
        classNamePrefix: "react-select",
        components: {
            MultiValueContainer: MultiValueContainer,
            MultiValueLabel: MultiValueLabel,
            MultiValueRemove: MultiValueRemove,
            Group: Group,
            GroupHeading: GroupHeading
        }
    }, props, {
        ref: ref
    })), Boolean(error) && typeof error !== "boolean" ? /*#__PURE__*/ React__default["default"].createElement(InputHelpBlock, {
        text: error
    }) : null);
});

var CreatableReactSelect = /*#__PURE__*/ React.forwardRef(function(_a, ref) {
    var _b = _a.label, label = _b === void 0 ? null : _b, className = _a.className, error = _a.error, props = __rest(_a, [
        "label",
        "className",
        "error"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "form-group".concat(appendClass(className)).concat(appendClass(error, "form-group--error"))
    }, label && /*#__PURE__*/ React__default["default"].createElement("label", null, label), /*#__PURE__*/ React__default["default"].createElement(CreatableSelect__default["default"], __assign({
        className: "react-select-container qtr-margin-top",
        classNamePrefix: "react-select",
        components: {
            MultiValueContainer: MultiValueContainer,
            MultiValueLabel: MultiValueLabel,
            MultiValueRemove: MultiValueRemove,
            Group: Group,
            GroupHeading: GroupHeading
        },
        formatCreateLabel: function formatCreateLabel(inputValue) {
            return /*#__PURE__*/ React__default["default"].createElement(React__default["default"].Fragment, null, props.isMulti ? "Add " : "Use ", /*#__PURE__*/ React__default["default"].createElement("span", {
                className: "text-bold"
            }, inputValue));
        }
    }, props, {
        ref: ref
    })), Boolean(error) && typeof error !== "boolean" ? /*#__PURE__*/ React__default["default"].createElement(InputHelpBlock, {
        text: error
    }) : null);
});

var isGrouped = function isGrouped(v) {
    return "options" in v;
};
var findOption = function(value, options) {
    var found;
    for(var _i = 0, options_1 = options; _i < options_1.length; _i++){
        var it = options_1[_i];
        if (isGrouped(it)) found = findOption(value, it.options);
        else found = it.value === value ? it : null;
        if (found) return found;
    }
};

var VSeparator = /*#__PURE__*/ React.forwardRef(function(_a, ref) {
    var _b = _a.size, size = _b === void 0 ? "default" : _b, _c = _a.compressed, compressed = _c === void 0 ? false : _c, _d = _a.className, className = _d === void 0 ? "" : _d, props = __rest(_a, [
        "size",
        "compressed",
        "className"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement("div", __assign({
        className: "v-separator".concat(appendClass(size !== "default", "v-separator--".concat(size))).concat(appendClass(compressed, "v-separator--compressed")).concat(appendClass(className))
    }, props, {
        ref: ref
    }));
});

var Slider = /*#__PURE__*/ React.forwardRef(function(_a, ref) {
    var _b = _a.dots, dots = _b === void 0 ? true : _b, label = _a.label, className = _a.className, props = __rest(_a, [
        "dots",
        "label",
        "className"
    ]);
    return /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "form-group".concat(appendClass(className))
    }, /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "form-group__text"
    }, label && /*#__PURE__*/ React__default["default"].createElement("label", null, label), /*#__PURE__*/ React__default["default"].createElement("div", {
        className: "half-padding-left half-padding-right base-padding-bottom"
    }, /*#__PURE__*/ React__default["default"].createElement(RCSlider__default["default"], __assign({
        dots: dots
    }, props, {
        ref: ref
    })))));
});

var base16Theme = {
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

var index = {};

exports.Accordion = Accordion;
exports.AccordionElement = AccordionElement;
exports.Alert = Alert;
exports.Badge = Badge;
exports.Button = Button$1;
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
exports.GenericTable = GenericTable;
exports.Header = Header;
exports.HeaderPanel = HeaderPanel;
exports.HeaderTitle = HeaderTitle;
exports.Icon = Icon;
exports.Input = Input;
exports.InputChips = InputChips;
exports.InputHelpBaloon = InputHelpBaloon;
exports.InputHelpBlock = InputHelpBlock;
exports.Label = Label;
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
exports["default"] = index;
exports.dynamicModal = dynamicModal;
exports.findOption = findOption;
exports.isGrouped = isGrouped;
exports.notification = notificationModal;
exports.notificationModal = notificationModal;
exports.prompt = prompt;
exports.toast = toast;
//# sourceMappingURL=index.cjs.js.map
