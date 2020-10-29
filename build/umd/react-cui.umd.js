(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('formik'), require('react-dom'), require('react-modal')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'formik', 'react-dom', 'react-modal'], factory) :
    (global = global || self, factory(global.ReactCUI = {}, global.React, global.PropTypes, global.formik, global.ReactDOM, global.ReactModal));
}(this, (function (exports, React, PropTypes, formik, ReactDOM, ReactModal) { 'use strict';

    var React__default = 'default' in React ? React['default'] : React;
    PropTypes = PropTypes && Object.prototype.hasOwnProperty.call(PropTypes, 'default') ? PropTypes['default'] : PropTypes;
    var ReactDOM__default = 'default' in ReactDOM ? ReactDOM['default'] : ReactDOM;
    ReactModal = ReactModal && Object.prototype.hasOwnProperty.call(ReactModal, 'default') ? ReactModal['default'] : ReactModal;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

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
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    var classes = function (type, icon) {
        switch (type) {
            case "warning":
                return ["alert--warning", icon || "icon-warning-outline"];
            case "warning-alt":
                return ["alert--warning-alt", icon || "icon-warning-outline"];
            case "danger":
            case "error":
                return ["alert--warning-alt", icon || "icon-error-outline"];
            case "success":
                return ["alert--success", icon || "icon-check-outline"];
            case "dark":
                return ["alert--dark", icon || "icon-help-outline"];
            case "light":
                return ["alert--light", icon || "icon-help-outline"];
            default:
                return ["alert--info", icon || "icon-info-outline"];
        }
    };
    var Alert = function (_a) {
        var _b = _a.type, type = _b === void 0 ? "info" : _b, children = _a.children, _c = _a.title, title = _c === void 0 ? "" : _c, _d = _a.dismissable, dismissable = _d === void 0 ? false : _d, _e = _a.className, className = _e === void 0 ? null : _e, _f = _a.onDismiss, onDismiss = _f === void 0 ? null : _f, _g = _a.withIcon, withIcon = _g === void 0 ? true : _g, _h = _a.icon, icon = _h === void 0 ? null : _h;
        var _j = React__default.useState(false), dismissed = _j[0], setDismissed = _j[1];
        var handleDismiss = function (e) {
            setDismissed(true);
            if (onDismiss)
                onDismiss(e);
        };
        if (dismissed)
            return null;
        var _k = classes(type, icon), alertClass = _k[0], iconClass = _k[1];
        return (React__default.createElement("div", { className: "alert " + alertClass + " " + (className || "") },
            withIcon ? React__default.createElement("div", { className: "alert__icon " + iconClass }) : null,
            React__default.createElement("div", { className: "alert__message" },
                title && React__default.createElement("h4", null, title),
                children),
            dismissable && (React__default.createElement("a", { className: "alert__close icon-close", onClick: handleDismiss }))));
    };
    Alert.propTypes = {
        type: PropTypes.oneOf([
            "warning",
            "warning-alt",
            "danger",
            "error",
            "success",
            "dark",
            "light",
            "info",
        ]),
        dismissable: PropTypes.bool,
        title: PropTypes.string,
        onDismiss: PropTypes.func,
        withIcon: PropTypes.bool,
        icon: PropTypes.string,
        children: PropTypes.node.isRequired,
        className: PropTypes.string,
    };
    Alert.Warning = function (_a) {
        var type = _a.type, props = __rest(_a, ["type"]);
        return React__default.createElement(Alert, __assign({ type: "warning" }, props));
    };
    Alert.Danger = function (_a) {
        var type = _a.type, props = __rest(_a, ["type"]);
        return React__default.createElement(Alert, __assign({ type: "danger" }, props));
    };
    Alert.Error = function (_a) {
        var type = _a.type, props = __rest(_a, ["type"]);
        return React__default.createElement(Alert, __assign({ type: "error" }, props));
    };
    Alert.Success = function (_a) {
        var type = _a.type, props = __rest(_a, ["type"]);
        return React__default.createElement(Alert, __assign({ type: "success" }, props));
    };
    Alert.Info = function (_a) {
        var type = _a.type, props = __rest(_a, ["type"]);
        return React__default.createElement(Alert, __assign({ type: "info" }, props));
    };
    Alert.Dark = function (_a) {
        var type = _a.type, props = __rest(_a, ["type"]);
        return React__default.createElement(Alert, __assign({ type: "dark" }, props));
    };
    Alert.Light = function (_a) {
        var type = _a.type, props = __rest(_a, ["type"]);
        return React__default.createElement(Alert, __assign({ type: "light" }, props));
    };
    Alert.WarningAlt = function (_a) {
        var type = _a.type, props = __rest(_a, ["type"]);
        return (React__default.createElement(Alert, __assign({ type: "warning-alt" }, props)));
    };

    var ConditionalWrapper = function (_a) {
        var condition = _a.condition, wrapper = _a.wrapper, children = _a.children;
        return condition ? (React__default.cloneElement(wrapper, null, children)) : React__default.isValidElement(children) ? (children) : (React__default.createElement(React__default.Fragment, null, children));
    };
    ConditionalWrapper.propTypes = {
        condition: PropTypes.bool.isRequired,
        wrapper: PropTypes.element.isRequired,
        children: PropTypes.node.isRequired,
    };
    var DisplayIf = function (_a) {
        var condition = _a.condition, children = _a.children;
        return condition ? React__default.isValidElement(children) ? children : React__default.createElement(React__default.Fragment, null, "children") : null;
    };
    DisplayIf.propTypes = {
        condition: PropTypes.bool.isRequired,
        children: PropTypes.node.isRequired,
    };

    var eventManager = {
        list: new Map(),
        emitQueue: new Map(),
        on: function (event, callback) {
            if (!this.list.has(event))
                this.list.set(event, []);
            this.list.get(event).push(callback);
            return this;
        },
        off: function (event) {
            this.list.delete(event);
            return this;
        },
        cancelEmit: function (event) {
            var timers = this.emitQueue.get(event);
            if (timers) {
                timers.forEach(function (timer) { return clearTimeout(timer); });
                this.emitQueue.delete(event);
            }
            return this;
        },
        /**
         * Enqueue the event at the end of the call stack
         * Doing so let the user call toast as follow:
         * toast('1')
         * toast('2')
         * toast('3')
         * Without setTimemout the code above will not work
         */
        emit: function (event) {
            var _this = this;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (this.list.has(event)) {
                this.list.get(event).forEach(function (callback) {
                    var timer = setTimeout(function () {
                        callback.apply(void 0, args);
                    }, 0);
                    if (!_this.emitQueue.has(event))
                        _this.emitQueue.set(event, []);
                    _this.emitQueue.get(event).push(timer);
                });
            }
        },
    };
    var EVENTS = {
        SHOW_MODAL: "showModal",
    };

    var appendClass = function (c, what) {
        if (what === void 0) { what = undefined; }
        if (c) {
            if (typeof what === "function")
                return " " + what();
            return " " + (what || c);
        }
        return "";
    };

    var Element = function (_a) {
        var _b = _a.selected, selected = _b === void 0 ? false : _b, _c = _a.icon, icon = _c === void 0 ? null : _c, children = _a.children, _d = _a.className, className = _d === void 0 ? null : _d, props = __rest(_a, ["selected", "icon", "children", "className"]);
        return (React__default.createElement("a", __assign({ className: "" + (selected ? "selected" : "") + (className ? " " + className : "") }, props),
            icon ? React__default.createElement("span", { className: "icon-" + icon }) : null,
            React__default.createElement(ConditionalWrapper, { condition: Boolean(icon), wrapper: React__default.createElement("span", { className: "qtr-margin-left" }) }, children)));
    };
    Element.propTypes = {
        selected: PropTypes.bool,
        children: PropTypes.node.isRequired,
        icon: PropTypes.string,
        className: PropTypes.string,
    };
    var Divider = function () { return React__default.createElement("div", { className: "divider" }); };
    var Group = function (_a) {
        var children = _a.children;
        return (React__default.createElement("div", { className: "dropdown__group" }, children));
    };
    Group.propTypes = {
        children: PropTypes.node.isRequired,
    };
    var GroupHeader = function (_a) {
        var header = _a.header;
        return (React__default.createElement("div", { className: "dropdown__group-header" }, header));
    };
    GroupHeader.propTypes = {
        header: PropTypes.node.isRequired,
    };
    var DropdownHeader = function (_a) {
        var type = _a.type, handleClick = _a.handleClick, className = _a.className, header = _a.header;
        switch (type) {
            case "icon":
                return React__default.createElement("span", { onClick: handleClick, className: className });
            case "link":
                return (React__default.createElement("a", { onClick: handleClick, className: className }, header));
            case "div":
                return (React__default.createElement("div", { onClick: handleClick, className: className }, header));
            case "button":
                return (React__default.createElement("button", { type: "button", onClick: handleClick, className: "btn " + className }, header));
            default:
                return React__default.isValidElement(header)
                    ? React__default.cloneElement(header, { onClick: handleClick })
                    : null;
        }
    };
    var Dropdown = /** @class */ (function (_super) {
        __extends(Dropdown, _super);
        function Dropdown(props) {
            var _this = _super.call(this, props) || this;
            _this.handleClick = function (e) {
                var _a = _this.props, stopPropagation = _a.stopPropagation, onOpen = _a.onOpen, onClose = _a.onClose;
                if (stopPropagation) {
                    e.stopPropagation();
                    e.preventDefault();
                }
                var isOpen = _this.state.isOpen;
                if (!isOpen) {
                    // attach/remove event handler
                    document.addEventListener("click", _this.handleOutsideClick, false);
                }
                else {
                    document.removeEventListener("click", _this.handleOutsideClick, false);
                }
                _this.setState(function (prevState) {
                    var newIsOpen = !prevState.isOpen;
                    if (newIsOpen && onOpen)
                        onOpen(e);
                    if (!newIsOpen && onClose)
                        onClose(e);
                    return { isOpen: newIsOpen };
                });
            };
            _this.handleOutsideClick = function (e) {
                // ignore clicks on the component itself
                var alwaysClose = _this.props.alwaysClose;
                if (!alwaysClose && _this.node && _this.node.contains(e.target))
                    return;
                _this.handleClick(e);
            };
            _this.state = {
                isOpen: false,
            };
            return _this;
        }
        Dropdown.prototype.render = function () {
            var _this = this;
            var _a = this.props, openTo = _a.openTo, children = _a.children, type = _a.type, className = _a.className, header = _a.header, divClassName = _a.divClassName, up = _a.up;
            var isOpen = this.state.isOpen;
            return (React__default.createElement("div", { className: "dropdown" + appendClass(["left", "center"].includes(openTo), "dropdown--" + openTo) + appendClass(up, "dropdown--up") + appendClass(isOpen, "active") + appendClass(divClassName), ref: function (node) {
                    _this.node = node;
                } },
                React__default.createElement(DropdownHeader, { type: type, handleClick: this.handleClick, className: className, header: header }),
                React__default.createElement("div", { className: "dropdown__menu" }, children)));
        };
        Dropdown.propTypes = {
            type: PropTypes.oneOf(["icon", "link", "div", "button", "custom"]),
            className: PropTypes.string,
            header: PropTypes.node,
            openTo: PropTypes.oneOf(["left", "right", "center"]),
            alwaysClose: PropTypes.bool,
            onOpen: PropTypes.func,
            onClose: PropTypes.func,
            stopPropagation: PropTypes.bool,
            divClassName: PropTypes.string,
            children: PropTypes.node.isRequired,
            up: PropTypes.bool,
        };
        Dropdown.defaultProps = {
            type: "button",
            openTo: false,
            className: null,
            header: null,
            alwaysClose: false,
            onOpen: null,
            onClose: null,
            stopPropagation: false,
            divClassName: null,
            up: false,
        };
        Dropdown.Element = Element;
        Dropdown.Divider = Divider;
        Dropdown.Group = Group;
        Dropdown.GroupHeader = GroupHeader;
        return Dropdown;
    }(React__default.Component));

    var COMMON_MIME_TYPES = new Map([
        ['avi', 'video/avi'],
        ['gif', 'image/gif'],
        ['ico', 'image/x-icon'],
        ['jpeg', 'image/jpeg'],
        ['jpg', 'image/jpeg'],
        ['mkv', 'video/x-matroska'],
        ['mov', 'video/quicktime'],
        ['mp4', 'video/mp4'],
        ['pdf', 'application/pdf'],
        ['png', 'image/png'],
        ['zip', 'application/zip'],
        ['doc', 'application/msword'],
        ['docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    ]);
    function toFileWithPath(file, path) {
        var f = withMimeType(file);
        if (typeof f.path !== 'string') { // on electron, path is already set to the absolute path
            var webkitRelativePath = file.webkitRelativePath;
            Object.defineProperty(f, 'path', {
                value: typeof path === 'string'
                    ? path
                    // If <input webkitdirectory> is set,
                    // the File will have a {webkitRelativePath} property
                    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory
                    : typeof webkitRelativePath === 'string' && webkitRelativePath.length > 0
                        ? webkitRelativePath
                        : file.name,
                writable: false,
                configurable: false,
                enumerable: true
            });
        }
        return f;
    }
    function withMimeType(file) {
        var name = file.name;
        var hasExtension = name && name.lastIndexOf('.') !== -1;
        if (hasExtension && !file.type) {
            var ext = name.split('.')
                .pop().toLowerCase();
            var type = COMMON_MIME_TYPES.get(ext);
            if (type) {
                Object.defineProperty(file, 'type', {
                    value: type,
                    writable: false,
                    configurable: false,
                    enumerable: true
                });
            }
        }
        return file;
    }

    var FILES_TO_IGNORE = [
        // Thumbnail cache files for macOS and Windows
        '.DS_Store',
        'Thumbs.db' // Windows
    ];
    /**
     * Convert a DragEvent's DataTrasfer object to a list of File objects
     * NOTE: If some of the items are folders,
     * everything will be flattened and placed in the same list but the paths will be kept as a {path} property.
     * @param evt
     */
    function fromEvent(evt) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, isDragEvt(evt) && evt.dataTransfer
                        ? getDataTransferFiles(evt.dataTransfer, evt.type)
                        : getInputFiles(evt)];
            });
        });
    }
    function isDragEvt(value) {
        return !!value.dataTransfer;
    }
    function getInputFiles(evt) {
        var files = isInput(evt.target)
            ? evt.target.files
                ? fromList(evt.target.files)
                : []
            : [];
        return files.map(function (file) { return toFileWithPath(file); });
    }
    function isInput(value) {
        return value !== null;
    }
    function getDataTransferFiles(dt, type) {
        return __awaiter(this, void 0, void 0, function () {
            var items, files;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!dt.items) return [3 /*break*/, 2];
                        items = fromList(dt.items)
                            .filter(function (item) { return item.kind === 'file'; });
                        // According to https://html.spec.whatwg.org/multipage/dnd.html#dndevents,
                        // only 'dragstart' and 'drop' has access to the data (source node)
                        if (type !== 'drop') {
                            return [2 /*return*/, items];
                        }
                        return [4 /*yield*/, Promise.all(items.map(toFilePromises))];
                    case 1:
                        files = _a.sent();
                        return [2 /*return*/, noIgnoredFiles(flatten(files))];
                    case 2: return [2 /*return*/, noIgnoredFiles(fromList(dt.files)
                            .map(function (file) { return toFileWithPath(file); }))];
                }
            });
        });
    }
    function noIgnoredFiles(files) {
        return files.filter(function (file) { return FILES_TO_IGNORE.indexOf(file.name) === -1; });
    }
    // IE11 does not support Array.from()
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Browser_compatibility
    // https://developer.mozilla.org/en-US/docs/Web/API/FileList
    // https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList
    function fromList(items) {
        var files = [];
        // tslint:disable: prefer-for-of
        for (var i = 0; i < items.length; i++) {
            var file = items[i];
            files.push(file);
        }
        return files;
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem
    function toFilePromises(item) {
        if (typeof item.webkitGetAsEntry !== 'function') {
            return fromDataTransferItem(item);
        }
        var entry = item.webkitGetAsEntry();
        // Safari supports dropping an image node from a different window and can be retrieved using
        // the DataTransferItem.getAsFile() API
        // NOTE: FileSystemEntry.file() throws if trying to get the file
        if (entry && entry.isDirectory) {
            return fromDirEntry(entry);
        }
        return fromDataTransferItem(item);
    }
    function flatten(items) {
        return items.reduce(function (acc, files) { return __spread(acc, (Array.isArray(files) ? flatten(files) : [files])); }, []);
    }
    function fromDataTransferItem(item) {
        var file = item.getAsFile();
        if (!file) {
            return Promise.reject(item + " is not a File");
        }
        var fwp = toFileWithPath(file);
        return Promise.resolve(fwp);
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry
    function fromEntry(entry) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];
            });
        });
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry
    function fromDirEntry(entry) {
        var reader = entry.createReader();
        return new Promise(function (resolve, reject) {
            var entries = [];
            function readEntries() {
                var _this = this;
                // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader
                // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries
                reader.readEntries(function (batch) { return __awaiter(_this, void 0, void 0, function () {
                    var files, err_1, items;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!!batch.length) return [3 /*break*/, 5];
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, Promise.all(entries)];
                            case 2:
                                files = _a.sent();
                                resolve(files);
                                return [3 /*break*/, 4];
                            case 3:
                                err_1 = _a.sent();
                                reject(err_1);
                                return [3 /*break*/, 4];
                            case 4: return [3 /*break*/, 6];
                            case 5:
                                items = Promise.all(batch.map(fromEntry));
                                entries.push(items);
                                // Continue reading
                                readEntries();
                                _a.label = 6;
                            case 6: return [2 /*return*/];
                        }
                    });
                }); }, function (err) {
                    reject(err);
                });
            }
            readEntries();
        });
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry
    function fromFileEntry(entry) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        entry.file(function (file) {
                            var fwp = toFileWithPath(file, entry.fullPath);
                            resolve(fwp);
                        }, function (err) {
                            reject(err);
                        });
                    })];
            });
        });
    }

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var dist = createCommonjsModule(function (module) {
    module.exports=function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n});},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=0)}([function(e,r,t){r.__esModule=!0,r.default=function(e,r){if(e&&r){var t=Array.isArray(r)?r:r.split(","),n=e.name||"",o=e.type||"",u=o.replace(/\/.*$/,"");return t.some(function(e){var r=e.trim();return "."===r.charAt(0)?n.toLowerCase().endsWith(r.toLowerCase()):r.endsWith("/*")?u===r.replace(/\/.*$/,""):o===r})}return !0};}]);
    });

    var accepts = unwrapExports(dist);

    // that MIME type will always be accepted

    function fileAccepted(file, accept) {
      return file.type === 'application/x-moz-file' || accepts(file, accept);
    }
    function fileMatchSize(file, minSize, maxSize) {
      if (isDefined(file.size)) {
        if (isDefined(minSize) && isDefined(maxSize)) return file.size >= minSize && file.size <= maxSize;else if (isDefined(minSize)) return file.size >= minSize;else if (isDefined(maxSize)) return file.size <= maxSize;
      }

      return true;
    }

    function isDefined(value) {
      return value !== undefined && value !== null;
    }

    function allFilesAccepted(_ref) {
      var files = _ref.files,
          accept = _ref.accept,
          minSize = _ref.minSize,
          maxSize = _ref.maxSize,
          multiple = _ref.multiple;

      if (!multiple && files.length > 1) {
        return false;
      }

      return files.every(function (file) {
        return fileAccepted(file, accept) && fileMatchSize(file, minSize, maxSize);
      });
    } // React's synthetic events has event.isPropagationStopped,
    // but to remain compatibility with other libs (Preact) fall back
    // to check event.cancelBubble

    function isPropagationStopped(event) {
      if (typeof event.isPropagationStopped === 'function') {
        return event.isPropagationStopped();
      } else if (typeof event.cancelBubble !== 'undefined') {
        return event.cancelBubble;
      }

      return false;
    }
    function isEvtWithFiles(event) {
      if (!event.dataTransfer) {
        return !!event.target && !!event.target.files;
      } // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/types
      // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#file


      return Array.prototype.some.call(event.dataTransfer.types, function (type) {
        return type === 'Files' || type === 'application/x-moz-file';
      });
    }

    function onDocumentDragOver(event) {
      event.preventDefault();
    }

    function isIe(userAgent) {
      return userAgent.indexOf('MSIE') !== -1 || userAgent.indexOf('Trident/') !== -1;
    }

    function isEdge(userAgent) {
      return userAgent.indexOf('Edge/') !== -1;
    }

    function isIeOrEdge() {
      var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.navigator.userAgent;
      return isIe(userAgent) || isEdge(userAgent);
    }
    /**
     * This is intended to be used to compose event handlers
     * They are executed in order until one of them calls `event.isPropagationStopped()`.
     * Note that the check is done on the first invoke too,
     * meaning that if propagation was stopped before invoking the fns,
     * no handlers will be executed.
     *
     * @param {Function} fns the event hanlder functions
     * @return {Function} the event handler to add to an element
     */

    function composeEventHandlers() {
      for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
        fns[_key] = arguments[_key];
      }

      return function (event) {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        return fns.some(function (fn) {
          if (!isPropagationStopped(event) && fn) {
            fn.apply(void 0, [event].concat(args));
          }

          return isPropagationStopped(event);
        });
      };
    }

    function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

    function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

    function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

    function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

    function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

    function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

    function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

    function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

    function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

    function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

    function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

    function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
    /**
     * Convenience wrapper component for the `useDropzone` hook
     *
     * ```jsx
     * <Dropzone>
     *   {({getRootProps, getInputProps}) => (
     *     <div {...getRootProps()}>
     *       <input {...getInputProps()} />
     *       <p>Drag 'n' drop some files here, or click to select files</p>
     *     </div>
     *   )}
     * </Dropzone>
     * ```
     */

    var Dropzone = React.forwardRef(function (_ref, ref) {
      var children = _ref.children,
          params = _objectWithoutProperties(_ref, ["children"]);

      var _useDropzone = useDropzone(params),
          open = _useDropzone.open,
          props = _objectWithoutProperties(_useDropzone, ["open"]);

      React.useImperativeHandle(ref, function () {
        return {
          open: open
        };
      }, [open]); // TODO: Figure out why react-styleguidist cannot create docs if we don't return a jsx element

      return React__default.createElement(React.Fragment, null, children(_objectSpread({}, props, {
        open: open
      })));
    });
    Dropzone.displayName = 'Dropzone';
    Dropzone.propTypes = {
      /**
       * Render function that exposes the dropzone state and prop getter fns
       *
       * @param {object} params
       * @param {Function} params.getRootProps Returns the props you should apply to the root drop container you render
       * @param {Function} params.getInputProps Returns the props you should apply to hidden file input you render
       * @param {Function} params.open Open the native file selection dialog
       * @param {boolean} params.isFocused Dropzone area is in focus
       * @param {boolean} params.isFileDialogActive File dialog is opened
       * @param {boolean} params.isDragActive Active drag is in progress
       * @param {boolean} params.isDragAccept Dragged files are accepted
       * @param {boolean} params.isDragReject Some dragged files are rejected
       * @param {File[]} params.draggedFiles Files in active drag
       * @param {File[]} params.acceptedFiles Accepted files
       * @param {File[]} params.rejectedFiles Rejected files
       */
      children: PropTypes.func,

      /**
       * Set accepted file types.
       * See https://github.com/okonet/attr-accept for more information.
       * Keep in mind that mime type determination is not reliable across platforms. CSV files,
       * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
       * Windows. In some cases there might not be a mime type set at all.
       * See: https://github.com/react-dropzone/react-dropzone/issues/276
       */
      accept: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

      /**
       * Allow drag 'n' drop (or selection from the file dialog) of multiple files
       */
      multiple: PropTypes.bool,

      /**
       * If false, allow dropped items to take over the current browser window
       */
      preventDropOnDocument: PropTypes.bool,

      /**
       * If true, disables click to open the native file selection dialog
       */
      noClick: PropTypes.bool,

      /**
       * If true, disables SPACE/ENTER to open the native file selection dialog.
       * Note that it also stops tracking the focus state.
       */
      noKeyboard: PropTypes.bool,

      /**
       * If true, disables drag 'n' drop
       */
      noDrag: PropTypes.bool,

      /**
       * If true, stops drag event propagation to parents
       */
      noDragEventsBubbling: PropTypes.bool,

      /**
       * Minimum file size (in bytes)
       */
      minSize: PropTypes.number,

      /**
       * Maximum file size (in bytes)
       */
      maxSize: PropTypes.number,

      /**
       * Enable/disable the dropzone
       */
      disabled: PropTypes.bool,

      /**
       * Use this to provide a custom file aggregator
       *
       * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
       */
      getFilesFromEvent: PropTypes.func,

      /**
       * Cb for when closing the file dialog with no selection
       */
      onFileDialogCancel: PropTypes.func,

      /**
       * Cb for when the `dragenter` event occurs.
       *
       * @param {DragEvent} event
       */
      onDragEnter: PropTypes.func,

      /**
       * Cb for when the `dragleave` event occurs
       *
       * @param {DragEvent} event
       */
      onDragLeave: PropTypes.func,

      /**
       * Cb for when the `dragover` event occurs
       *
       * @param {DragEvent} event
       */
      onDragOver: PropTypes.func,

      /**
       * Cb for when the `drop` event occurs.
       * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
       *
       * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
       * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
       * If `multiple` is set to false and additional files are droppped,
       * all files besides the first will be rejected.
       * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
       *
       * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
       * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
       *
       * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
       * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
       *
       * ```js
       * function onDrop(acceptedFiles) {
       *   const req = request.post('/upload')
       *   acceptedFiles.forEach(file => {
       *     req.attach(file.name, file)
       *   })
       *   req.end(callback)
       * }
       * ```
       *
       * @param {File[]} acceptedFiles
       * @param {File[]} rejectedFiles
       * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
       */
      onDrop: PropTypes.func,

      /**
       * Cb for when the `drop` event occurs.
       * Note that if no files are accepted, this callback is not invoked.
       *
       * @param {File[]} files
       * @param {(DragEvent|Event)} event
       */
      onDropAccepted: PropTypes.func,

      /**
       * Cb for when the `drop` event occurs.
       * Note that if no files are rejected, this callback is not invoked.
       *
       * @param {object[]} files
       * @param {(DragEvent|Event)} event
       */
      onDropRejected: PropTypes.func
    };
    /**
     * A function that is invoked for the `dragenter`,
     * `dragover` and `dragleave` events.
     * It is not invoked if the items are not files (such as link, text, etc.).
     *
     * @callback dragCb
     * @param {DragEvent} event
     */

    /**
     * A function that is invoked for the `drop` or input change event.
     * It is not invoked if the items are not files (such as link, text, etc.).
     *
     * @callback dropCb
     * @param {File[]} acceptedFiles List of accepted files
     * @param {File[]} rejectedFiles List of rejected files
     * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
     */

    /**
     * A function that is invoked for the `drop` or input change event.
     * It is not invoked if the items are files (such as link, text, etc.).
     *
     * @callback dropAcceptedCb
     * @param {File[]} files List of accepted files that meet the given criteria
     * (`accept`, `multiple`, `minSize`, `maxSize`)
     * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
     */

    /**
     * A function that is invoked for the `drop` or input change event.
     *
     * @callback dropRejectedCb
     * @param {File[]} files List of rejected files that do not meet the given criteria
     * (`accept`, `multiple`, `minSize`, `maxSize`)
     * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
     */

    /**
     * A function that is used aggregate files,
     * in a asynchronous fashion, from drag or input change events.
     *
     * @callback getFilesFromEvent
     * @param {(DragEvent|Event)} event A drag event or input change event (if files were selected via the file dialog)
     * @returns {(File[]|Promise<File[]>)}
     */

    /**
     * An object with the current dropzone state and some helper functions.
     *
     * @typedef {object} DropzoneState
     * @property {Function} getRootProps Returns the props you should apply to the root drop container you render
     * @property {Function} getInputProps Returns the props you should apply to hidden file input you render
     * @property {Function} open Open the native file selection dialog
     * @property {boolean} isFocused Dropzone area is in focus
     * @property {boolean} isFileDialogActive File dialog is opened
     * @property {boolean} isDragActive Active drag is in progress
     * @property {boolean} isDragAccept Dragged files are accepted
     * @property {boolean} isDragReject Some dragged files are rejected
     * @property {File[]} draggedFiles Files in active drag
     * @property {File[]} acceptedFiles Accepted files
     * @property {File[]} rejectedFiles Rejected files
     */

    var initialState = {
      isFocused: false,
      isFileDialogActive: false,
      isDragActive: false,
      isDragAccept: false,
      isDragReject: false,
      draggedFiles: [],
      acceptedFiles: [],
      rejectedFiles: []
    };
    /**
     * A React hook that creates a drag 'n' drop area.
     *
     * ```jsx
     * function MyDropzone(props) {
     *   const {getRootProps, getInputProps} = useDropzone({
     *     onDrop: acceptedFiles => {
     *       // do something with the File objects, e.g. upload to some server
     *     }
     *   });
     *   return (
     *     <div {...getRootProps()}>
     *       <input {...getInputProps()} />
     *       <p>Drag and drop some files here, or click to select files</p>
     *     </div>
     *   )
     * }
     * ```
     *
     * @function useDropzone
     *
     * @param {object} props
     * @param {string|string[]} [props.accept] Set accepted file types.
     * See https://github.com/okonet/attr-accept for more information.
     * Keep in mind that mime type determination is not reliable across platforms. CSV files,
     * for example, are reported as text/plain under macOS but as application/vnd.ms-excel under
     * Windows. In some cases there might not be a mime type set at all.
     * See: https://github.com/react-dropzone/react-dropzone/issues/276
     * @param {boolean} [props.multiple=true] Allow drag 'n' drop (or selection from the file dialog) of multiple files
     * @param {boolean} [props.preventDropOnDocument=true] If false, allow dropped items to take over the current browser window
     * @param {boolean} [props.noClick=false] If true, disables click to open the native file selection dialog
     * @param {boolean} [props.noKeyboard=false] If true, disables SPACE/ENTER to open the native file selection dialog.
     * Note that it also stops tracking the focus state.
     * @param {boolean} [props.noDrag=false] If true, disables drag 'n' drop
     * @param {boolean} [props.noDragEventsBubbling=false] If true, stops drag event propagation to parents
     * @param {number} [props.minSize=0] Minimum file size (in bytes)
     * @param {number} [props.maxSize=Infinity] Maximum file size (in bytes)
     * @param {boolean} [props.disabled=false] Enable/disable the dropzone
     * @param {getFilesFromEvent} [props.getFilesFromEvent] Use this to provide a custom file aggregator
     * @param {Function} [props.onFileDialogCancel] Cb for when closing the file dialog with no selection
     * @param {dragCb} [props.onDragEnter] Cb for when the `dragenter` event occurs.
     * @param {dragCb} [props.onDragLeave] Cb for when the `dragleave` event occurs
     * @param {dragCb} [props.onDragOver] Cb for when the `dragover` event occurs
     * @param {dropCb} [props.onDrop] Cb for when the `drop` event occurs.
     * Note that this callback is invoked after the `getFilesFromEvent` callback is done.
     *
     * Files are accepted or rejected based on the `accept`, `multiple`, `minSize` and `maxSize` props.
     * `accept` must be a valid [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml) according to [input element specification](https://www.w3.org/wiki/HTML/Elements/input/file) or a valid file extension.
     * If `multiple` is set to false and additional files are droppped,
     * all files besides the first will be rejected.
     * Any file which does not have a size in the [`minSize`, `maxSize`] range, will be rejected as well.
     *
     * Note that the `onDrop` callback will always be invoked regardless if the dropped files were accepted or rejected.
     * If you'd like to react to a specific scenario, use the `onDropAccepted`/`onDropRejected` props.
     *
     * `onDrop` will provide you with an array of [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects which you can then process and send to a server.
     * For example, with [SuperAgent](https://github.com/visionmedia/superagent) as a http/ajax library:
     *
     * ```js
     * function onDrop(acceptedFiles) {
     *   const req = request.post('/upload')
     *   acceptedFiles.forEach(file => {
     *     req.attach(file.name, file)
     *   })
     *   req.end(callback)
     * }
     * ```
     * @param {dropAcceptedCb} [props.onDropAccepted]
     * @param {dropRejectedCb} [props.onDropRejected]
     *
     * @returns {DropzoneState}
     */

    function useDropzone() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          accept = _ref2.accept,
          _ref2$disabled = _ref2.disabled,
          disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
          _ref2$getFilesFromEve = _ref2.getFilesFromEvent,
          getFilesFromEvent = _ref2$getFilesFromEve === void 0 ? fromEvent : _ref2$getFilesFromEve,
          _ref2$maxSize = _ref2.maxSize,
          maxSize = _ref2$maxSize === void 0 ? Infinity : _ref2$maxSize,
          _ref2$minSize = _ref2.minSize,
          minSize = _ref2$minSize === void 0 ? 0 : _ref2$minSize,
          _ref2$multiple = _ref2.multiple,
          multiple = _ref2$multiple === void 0 ? true : _ref2$multiple,
          onDragEnter = _ref2.onDragEnter,
          onDragLeave = _ref2.onDragLeave,
          onDragOver = _ref2.onDragOver,
          onDrop = _ref2.onDrop,
          onDropAccepted = _ref2.onDropAccepted,
          onDropRejected = _ref2.onDropRejected,
          onFileDialogCancel = _ref2.onFileDialogCancel,
          _ref2$preventDropOnDo = _ref2.preventDropOnDocument,
          preventDropOnDocument = _ref2$preventDropOnDo === void 0 ? true : _ref2$preventDropOnDo,
          _ref2$noClick = _ref2.noClick,
          noClick = _ref2$noClick === void 0 ? false : _ref2$noClick,
          _ref2$noKeyboard = _ref2.noKeyboard,
          noKeyboard = _ref2$noKeyboard === void 0 ? false : _ref2$noKeyboard,
          _ref2$noDrag = _ref2.noDrag,
          noDrag = _ref2$noDrag === void 0 ? false : _ref2$noDrag,
          _ref2$noDragEventsBub = _ref2.noDragEventsBubbling,
          noDragEventsBubbling = _ref2$noDragEventsBub === void 0 ? false : _ref2$noDragEventsBub;

      var rootRef = React.useRef(null);
      var inputRef = React.useRef(null);

      var _useReducer = React.useReducer(reducer, initialState),
          _useReducer2 = _slicedToArray(_useReducer, 2),
          state = _useReducer2[0],
          dispatch = _useReducer2[1];

      var isFocused = state.isFocused,
          isFileDialogActive = state.isFileDialogActive,
          draggedFiles = state.draggedFiles; // Fn for opening the file dialog programmatically

      var openFileDialog = React.useCallback(function () {
        if (inputRef.current) {
          dispatch({
            type: 'openDialog'
          });
          inputRef.current.value = null;
          inputRef.current.click();
        }
      }, [dispatch]); // Update file dialog active state when the window is focused on

      var onWindowFocus = function onWindowFocus() {
        // Execute the timeout only if the file dialog is opened in the browser
        if (isFileDialogActive) {
          setTimeout(function () {
            if (inputRef.current) {
              var files = inputRef.current.files;

              if (!files.length) {
                dispatch({
                  type: 'closeDialog'
                });

                if (typeof onFileDialogCancel === 'function') {
                  onFileDialogCancel();
                }
              }
            }
          }, 300);
        }
      };

      React.useEffect(function () {
        window.addEventListener('focus', onWindowFocus, false);
        return function () {
          window.removeEventListener('focus', onWindowFocus, false);
        };
      }, [inputRef, isFileDialogActive, onFileDialogCancel]); // Cb to open the file dialog when SPACE/ENTER occurs on the dropzone

      var onKeyDownCb = React.useCallback(function (event) {
        // Ignore keyboard events bubbling up the DOM tree
        if (!rootRef.current || !rootRef.current.isEqualNode(event.target)) {
          return;
        }

        if (event.keyCode === 32 || event.keyCode === 13) {
          event.preventDefault();
          openFileDialog();
        }
      }, [rootRef, inputRef]); // Update focus state for the dropzone

      var onFocusCb = React.useCallback(function () {
        dispatch({
          type: 'focus'
        });
      }, []);
      var onBlurCb = React.useCallback(function () {
        dispatch({
          type: 'blur'
        });
      }, []); // Cb to open the file dialog when click occurs on the dropzone

      var onClickCb = React.useCallback(function () {
        if (noClick) {
          return;
        } // In IE11/Edge the file-browser dialog is blocking, therefore, use setTimeout()
        // to ensure React can handle state changes
        // See: https://github.com/react-dropzone/react-dropzone/issues/450


        if (isIeOrEdge()) {
          setTimeout(openFileDialog, 0);
        } else {
          openFileDialog();
        }
      }, [inputRef, noClick]);
      var dragTargetsRef = React.useRef([]);

      var onDocumentDrop = function onDocumentDrop(event) {
        if (rootRef.current && rootRef.current.contains(event.target)) {
          // If we intercepted an event for our instance, let it propagate down to the instance's onDrop handler
          return;
        }

        event.preventDefault();
        dragTargetsRef.current = [];
      };

      React.useEffect(function () {
        if (preventDropOnDocument) {
          document.addEventListener('dragover', onDocumentDragOver, false);
          document.addEventListener('drop', onDocumentDrop, false);
        }

        return function () {
          if (preventDropOnDocument) {
            document.removeEventListener('dragover', onDocumentDragOver);
            document.removeEventListener('drop', onDocumentDrop);
          }
        };
      }, [rootRef, preventDropOnDocument]);
      var onDragEnterCb = React.useCallback(function (event) {
        event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

        event.persist();
        stopPropagation(event); // Count the dropzone and any children that are entered.

        if (dragTargetsRef.current.indexOf(event.target) === -1) {
          dragTargetsRef.current = [].concat(_toConsumableArray(dragTargetsRef.current), [event.target]);
        }

        if (isEvtWithFiles(event)) {
          Promise.resolve(getFilesFromEvent(event)).then(function (draggedFiles) {
            if (isPropagationStopped(event) && !noDragEventsBubbling) {
              return;
            }

            dispatch({
              draggedFiles: draggedFiles,
              isDragActive: true,
              type: 'setDraggedFiles'
            });

            if (onDragEnter) {
              onDragEnter(event);
            }
          });
        }
      }, [getFilesFromEvent, onDragEnter, noDragEventsBubbling]);
      var onDragOverCb = React.useCallback(function (event) {
        event.preventDefault();
        event.persist();
        stopPropagation(event);

        if (event.dataTransfer) {
          try {
            event.dataTransfer.dropEffect = 'copy';
          } catch (_unused) {}
          /* eslint-disable-line no-empty */

        }

        if (isEvtWithFiles(event) && onDragOver) {
          onDragOver(event);
        }

        return false;
      }, [onDragOver, noDragEventsBubbling]);
      var onDragLeaveCb = React.useCallback(function (event) {
        event.preventDefault();
        event.persist();
        stopPropagation(event); // Only deactivate once the dropzone and all children have been left

        var targets = dragTargetsRef.current.filter(function (target) {
          return target !== event.target && rootRef.current && rootRef.current.contains(target);
        });
        dragTargetsRef.current = targets;

        if (targets.length > 0) {
          return;
        }

        dispatch({
          isDragActive: false,
          type: 'setDraggedFiles',
          draggedFiles: []
        });

        if (isEvtWithFiles(event) && onDragLeave) {
          onDragLeave(event);
        }
      }, [rootRef, onDragLeave, noDragEventsBubbling]);
      var onDropCb = React.useCallback(function (event) {
        event.preventDefault(); // Persist here because we need the event later after getFilesFromEvent() is done

        event.persist();
        stopPropagation(event);
        dragTargetsRef.current = [];

        if (isEvtWithFiles(event)) {
          Promise.resolve(getFilesFromEvent(event)).then(function (files) {
            if (isPropagationStopped(event) && !noDragEventsBubbling) {
              return;
            }

            var acceptedFiles = [];
            var rejectedFiles = [];
            files.forEach(function (file) {
              if (fileAccepted(file, accept) && fileMatchSize(file, minSize, maxSize)) {
                acceptedFiles.push(file);
              } else {
                rejectedFiles.push(file);
              }
            });

            if (!multiple && acceptedFiles.length > 1) {
              rejectedFiles.push.apply(rejectedFiles, _toConsumableArray(acceptedFiles.splice(0))); // Reject everything and empty accepted files
            }

            dispatch({
              acceptedFiles: acceptedFiles,
              rejectedFiles: rejectedFiles,
              type: 'setFiles'
            });

            if (onDrop) {
              onDrop(acceptedFiles, rejectedFiles, event);
            }

            if (rejectedFiles.length > 0 && onDropRejected) {
              onDropRejected(rejectedFiles, event);
            }

            if (acceptedFiles.length > 0 && onDropAccepted) {
              onDropAccepted(acceptedFiles, event);
            }
          });
        }

        dispatch({
          type: 'reset'
        });
      }, [multiple, accept, minSize, maxSize, getFilesFromEvent, onDrop, onDropAccepted, onDropRejected, noDragEventsBubbling]);

      var composeHandler = function composeHandler(fn) {
        return disabled ? null : fn;
      };

      var composeKeyboardHandler = function composeKeyboardHandler(fn) {
        return noKeyboard ? null : composeHandler(fn);
      };

      var composeDragHandler = function composeDragHandler(fn) {
        return noDrag ? null : composeHandler(fn);
      };

      var stopPropagation = function stopPropagation(event) {
        if (noDragEventsBubbling) {
          event.stopPropagation();
        }
      };

      var getRootProps = React.useMemo(function () {
        return function () {
          var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              _ref3$refKey = _ref3.refKey,
              refKey = _ref3$refKey === void 0 ? 'ref' : _ref3$refKey,
              onKeyDown = _ref3.onKeyDown,
              onFocus = _ref3.onFocus,
              onBlur = _ref3.onBlur,
              onClick = _ref3.onClick,
              onDragEnter = _ref3.onDragEnter,
              onDragOver = _ref3.onDragOver,
              onDragLeave = _ref3.onDragLeave,
              onDrop = _ref3.onDrop,
              rest = _objectWithoutProperties(_ref3, ["refKey", "onKeyDown", "onFocus", "onBlur", "onClick", "onDragEnter", "onDragOver", "onDragLeave", "onDrop"]);

          return _objectSpread(_defineProperty({
            onKeyDown: composeKeyboardHandler(composeEventHandlers(onKeyDown, onKeyDownCb)),
            onFocus: composeKeyboardHandler(composeEventHandlers(onFocus, onFocusCb)),
            onBlur: composeKeyboardHandler(composeEventHandlers(onBlur, onBlurCb)),
            onClick: composeHandler(composeEventHandlers(onClick, onClickCb)),
            onDragEnter: composeDragHandler(composeEventHandlers(onDragEnter, onDragEnterCb)),
            onDragOver: composeDragHandler(composeEventHandlers(onDragOver, onDragOverCb)),
            onDragLeave: composeDragHandler(composeEventHandlers(onDragLeave, onDragLeaveCb)),
            onDrop: composeDragHandler(composeEventHandlers(onDrop, onDropCb))
          }, refKey, rootRef), !disabled && !noKeyboard ? {
            tabIndex: 0
          } : {}, {}, rest);
        };
      }, [rootRef, onKeyDownCb, onFocusCb, onBlurCb, onClickCb, onDragEnterCb, onDragOverCb, onDragLeaveCb, onDropCb, noKeyboard, noDrag, disabled]);
      var onInputElementClick = React.useCallback(function (event) {
        event.stopPropagation();
      }, []);
      var getInputProps = React.useMemo(function () {
        return function () {
          var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              _ref4$refKey = _ref4.refKey,
              refKey = _ref4$refKey === void 0 ? 'ref' : _ref4$refKey,
              onChange = _ref4.onChange,
              onClick = _ref4.onClick,
              rest = _objectWithoutProperties(_ref4, ["refKey", "onChange", "onClick"]);

          var inputProps = _defineProperty({
            accept: accept,
            multiple: multiple,
            type: 'file',
            style: {
              display: 'none'
            },
            onChange: composeHandler(composeEventHandlers(onChange, onDropCb)),
            onClick: composeHandler(composeEventHandlers(onClick, onInputElementClick)),
            autoComplete: 'off',
            tabIndex: -1
          }, refKey, inputRef);

          return _objectSpread({}, inputProps, {}, rest);
        };
      }, [inputRef, accept, multiple, onDropCb, disabled]);
      var fileCount = draggedFiles.length;
      var isDragAccept = fileCount > 0 && allFilesAccepted({
        files: draggedFiles,
        accept: accept,
        minSize: minSize,
        maxSize: maxSize,
        multiple: multiple
      });
      var isDragReject = fileCount > 0 && !isDragAccept;
      return _objectSpread({}, state, {
        isDragAccept: isDragAccept,
        isDragReject: isDragReject,
        isFocused: isFocused && !disabled,
        getRootProps: getRootProps,
        getInputProps: getInputProps,
        rootRef: rootRef,
        inputRef: inputRef,
        open: composeHandler(openFileDialog)
      });
    }

    function reducer(state, action) {
      /* istanbul ignore next */
      switch (action.type) {
        case 'focus':
          return _objectSpread({}, state, {
            isFocused: true
          });

        case 'blur':
          return _objectSpread({}, state, {
            isFocused: false
          });

        case 'openDialog':
          return _objectSpread({}, state, {
            isFileDialogActive: true
          });

        case 'closeDialog':
          return _objectSpread({}, state, {
            isFileDialogActive: false
          });

        case 'setDraggedFiles':
          /* eslint no-case-declarations: 0 */
          var isDragActive = action.isDragActive,
              draggedFiles = action.draggedFiles;
          return _objectSpread({}, state, {
            draggedFiles: draggedFiles,
            isDragActive: isDragActive
          });

        case 'setFiles':
          return _objectSpread({}, state, {
            acceptedFiles: action.acceptedFiles,
            rejectedFiles: action.rejectedFiles
          });

        case 'reset':
          return _objectSpread({}, state, {
            isFileDialogActive: false,
            isDragActive: false,
            draggedFiles: [],
            acceptedFiles: [],
            rejectedFiles: []
          });

        default:
          return state;
      }
    }

    /*!
     * bytes
     * Copyright(c) 2012-2014 TJ Holowaychuk
     * Copyright(c) 2015 Jed Watson
     * MIT Licensed
     */

    /**
     * Module exports.
     * @public
     */

    var bytes_1 = bytes;
    var format_1 = format;
    var parse_1 = parse;

    /**
     * Module variables.
     * @private
     */

    var formatThousandsRegExp = /\B(?=(\d{3})+(?!\d))/g;

    var formatDecimalsRegExp = /(?:\.0*|(\.[^0]+)0+)$/;

    var map = {
      b:  1,
      kb: 1 << 10,
      mb: 1 << 20,
      gb: 1 << 30,
      tb: Math.pow(1024, 4),
      pb: Math.pow(1024, 5),
    };

    var parseRegExp = /^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb|pb)$/i;

    /**
     * Convert the given value in bytes into a string or parse to string to an integer in bytes.
     *
     * @param {string|number} value
     * @param {{
     *  case: [string],
     *  decimalPlaces: [number]
     *  fixedDecimals: [boolean]
     *  thousandsSeparator: [string]
     *  unitSeparator: [string]
     *  }} [options] bytes options.
     *
     * @returns {string|number|null}
     */

    function bytes(value, options) {
      if (typeof value === 'string') {
        return parse(value);
      }

      if (typeof value === 'number') {
        return format(value, options);
      }

      return null;
    }

    /**
     * Format the given value in bytes into a string.
     *
     * If the value is negative, it is kept as such. If it is a float,
     * it is rounded.
     *
     * @param {number} value
     * @param {object} [options]
     * @param {number} [options.decimalPlaces=2]
     * @param {number} [options.fixedDecimals=false]
     * @param {string} [options.thousandsSeparator=]
     * @param {string} [options.unit=]
     * @param {string} [options.unitSeparator=]
     *
     * @returns {string|null}
     * @public
     */

    function format(value, options) {
      if (!Number.isFinite(value)) {
        return null;
      }

      var mag = Math.abs(value);
      var thousandsSeparator = (options && options.thousandsSeparator) || '';
      var unitSeparator = (options && options.unitSeparator) || '';
      var decimalPlaces = (options && options.decimalPlaces !== undefined) ? options.decimalPlaces : 2;
      var fixedDecimals = Boolean(options && options.fixedDecimals);
      var unit = (options && options.unit) || '';

      if (!unit || !map[unit.toLowerCase()]) {
        if (mag >= map.pb) {
          unit = 'PB';
        } else if (mag >= map.tb) {
          unit = 'TB';
        } else if (mag >= map.gb) {
          unit = 'GB';
        } else if (mag >= map.mb) {
          unit = 'MB';
        } else if (mag >= map.kb) {
          unit = 'KB';
        } else {
          unit = 'B';
        }
      }

      var val = value / map[unit.toLowerCase()];
      var str = val.toFixed(decimalPlaces);

      if (!fixedDecimals) {
        str = str.replace(formatDecimalsRegExp, '$1');
      }

      if (thousandsSeparator) {
        str = str.replace(formatThousandsRegExp, thousandsSeparator);
      }

      return str + unitSeparator + unit;
    }

    /**
     * Parse the string value into an integer in bytes.
     *
     * If no unit is given, it is assumed the value is in bytes.
     *
     * @param {number|string} val
     *
     * @returns {number|null}
     * @public
     */

    function parse(val) {
      if (typeof val === 'number' && !isNaN(val)) {
        return val;
      }

      if (typeof val !== 'string') {
        return null;
      }

      // Test if the string passed is valid
      var results = parseRegExp.exec(val);
      var floatValue;
      var unit = 'b';

      if (!results) {
        // Nothing could be extracted from the given string
        floatValue = parseInt(val, 10);
        unit = 'b';
      } else {
        // Retrieve the value and the unit
        floatValue = parseFloat(results[1]);
        unit = results[4].toLowerCase();
      }

      return Math.floor(map[unit] * floatValue);
    }
    bytes_1.format = format_1;
    bytes_1.parse = parse_1;

    var FileCard = function (_a) {
        var file = _a.file, i = _a.i, removeFile = _a.removeFile, inline = _a.inline;
        return (React__default.createElement("div", { className: "file-drop__card col-lg-4 col-md-6 col-sm-6", key: i + "-" + file.name },
            React__default.createElement("div", { className: "panel panel--bordered hover-emboss--small", onClick: function (e) { return e.stopPropagation(); } }, inline ? (React__default.createElement("div", { className: "panel__body flex flex-row" },
                React__default.createElement("div", { className: "text-left flex-fill", style: { maxWidth: "calc(100% - 20px)" } },
                    React__default.createElement("div", { className: "text-ellipsis" }, file.name),
                    React__default.createElement("small", { style: { whiteSpace: "nowrap" } }, bytes_1.format(file.size, { unitSeparator: " " }))),
                React__default.createElement("a", { className: "link pull-right", onClick: function () { return removeFile(i); } },
                    React__default.createElement("span", { className: "icon-close", title: "Remove the file." })))) : (React__default.createElement("div", { className: "panel__body" },
                React__default.createElement("a", { className: "link pull-right", style: { marginRight: "5px" }, onClick: function () { return removeFile(i); } },
                    React__default.createElement("span", { className: "icon-close", title: "Remove the file." })),
                React__default.createElement("div", { className: "text-ellipsis half-margin-bottom" }, file.name),
                React__default.createElement("span", { className: "file-icon text-muted icon-file-o qtr-margin-right" }),
                React__default.createElement("small", null, bytes_1.format(file.size, { unitSeparator: " " })))))));
    };
    var Dropzone$1 = /** @class */ (function (_super) {
        __extends(Dropzone$1, _super);
        function Dropzone$1(props) {
            var _this = _super.call(this, props) || this;
            _this.removeFile = function (toRemove) {
                _this.props.formik.setFieldValue(_this.props.name, _this.props.input.value.filter(function (_, idx) { return toRemove !== idx; }));
            };
            _this.handleDrop = function (filesToUpload) {
                if (_this.maxFileSize) {
                    filesToUpload = filesToUpload.filter(function (file) { return file.size <= _this.maxFileSize; });
                }
                if (_this.props.maxFiles && filesToUpload.length > _this.props.maxFiles) {
                    filesToUpload = filesToUpload.slice(0, _this.props.maxFiles);
                }
                _this.props.formik.setFieldValue(_this.props.name, filesToUpload);
            };
            _this.renderFiles = function () {
                var files = _this.props.input.value;
                if (!files || !files.length || !Array.isArray(files)) {
                    return null;
                }
                return (React__default.createElement("div", { className: "dropzone-previews" },
                    React__default.createElement("div", { className: "file-drop__container container--fluid" },
                        React__default.createElement("div", { className: "row" }, files.map(function (file, i) { return (React__default.createElement(FileCard, { key: i, file: file, i: i, inline: _this.props.inline, removeFile: _this.removeFile })); }))),
                    _this.props.showTotalSelected && (React__default.createElement("div", { className: "file-drop__filecnt" },
                        files.length,
                        " selected"))));
            };
            _this.renderMessage = function () {
                var files = _this.props.input.value;
                if (files && files.length) {
                    return null;
                }
                if (_this.props.inline) {
                    return (React__default.createElement("div", { className: "dropzone-message flex flex-row flex-center-vertical" },
                        React__default.createElement("h5", { className: "text-muted text-left flex-fill no-margin" }, "Click Here or Drop Files to Upload"),
                        _this.props.accept && (React__default.createElement("span", { className: "text-muted text-small half-margin-right" },
                            "Allowed files: ",
                            _this.props.accept.split(",").join(", "))),
                        React__default.createElement("span", { className: "file-drop__icon icon-upload" })));
                }
                return (React__default.createElement("div", { className: "dropzone-message" },
                    React__default.createElement("span", { className: "file-drop__icon icon-upload" }),
                    React__default.createElement("h4", { className: "text-muted" }, "Click Here or Drop Files to Upload"),
                    _this.props.accept && (React__default.createElement("div", { className: "text-muted" },
                        "Allowed files: ",
                        _this.props.accept.split(",").join(", "))),
                    _this.maxFileSize && (React__default.createElement("div", { className: "text-muted" },
                        "Max file size:",
                        " ",
                        bytes_1.format(_this.maxFileSize, { unitSeparator: " " })))));
            };
            if (props.maxFileSize) {
                _this.maxFileSize = bytes_1.parse(props.maxFileSize);
            }
            else {
                _this.maxFileSize = null;
            }
            return _this;
        }
        Dropzone$1.prototype.render = function () {
            var _this = this;
            var _a = this.props, meta = _a.meta, loose = _a.loose, compressed = _a.compressed;
            var padding = "";
            if (loose) {
                padding = "dropzone--loose";
            }
            if (compressed) {
                padding = "dropzone--compressed";
            }
            if (this.props.inline &&
                this.props.input.value &&
                this.props.input.value.length) {
                switch (padding) {
                    case "dropzone--loose":
                        padding = padding + " half-padding-bottom";
                        break;
                    case "dropzone--compressed":
                        padding = padding + " no-padding-bottom";
                        break;
                    default:
                        padding = padding + " qtr-padding-bottom";
                        break;
                }
            }
            return (React__default.createElement("div", { className: "form-group" +
                    (meta.touched && meta.error ? " form-group--error" : "") },
                React__default.createElement("div", { className: "form-group__text" },
                    this.props.label ? (React__default.createElement("label", { htmlFor: this.props.name }, this.props.label)) : null,
                    React__default.createElement(Dropzone
                    // name={this.props.name}
                    , { 
                        // name={this.props.name}
                        onDrop: this.handleDrop, maxSize: this.maxFileSize, multiple: this.props.multiple }, function (_a) {
                        var getRootProps = _a.getRootProps, getInputProps = _a.getInputProps;
                        return (React__default.createElement("div", __assign({ className: "dropzone " + padding }, getRootProps()),
                            React__default.createElement("input", __assign({}, getInputProps())),
                            _this.renderFiles(),
                            _this.renderMessage()));
                    })),
                meta.touched && meta.error && (React__default.createElement("div", { className: "help-block text-danger", role: "alert" },
                    React__default.createElement("span", null, meta.error)))));
        };
        Dropzone$1.propTypes = {
            label: PropTypes.string,
            accept: PropTypes.string,
            showTotalSelected: PropTypes.bool,
            maxFileSize: PropTypes.string,
            maxFiles: PropTypes.number,
            inline: PropTypes.bool,
            loose: PropTypes.bool,
            compressed: PropTypes.bool,
        };
        return Dropzone$1;
    }(React__default.Component));
    var connected = formik.connect(Dropzone$1);

    var Spinner = function (_a) {
        var _b = _a.size, size = _b === void 0 ? "default" : _b, _c = _a.text, text = _c === void 0 ? null : _c;
        return (React__default.createElement("div", { className: "flex-center flex-middle", style: { flex: 1 } },
            React__default.createElement("div", null,
                React__default.createElement("div", { className: "loader" + (size !== "default" ? " loader--" + size : "") + " flex-center" },
                    React__default.createElement("div", { className: "wrapper flex flex-center" },
                        React__default.createElement("div", { className: "wheel" }))),
                !text ? null : (React__default.createElement("div", { className: "base-margin-top text-center" }, text || "Loading...")))));
    };
    Spinner.propTypes = {
        size: PropTypes.oneOf(["small", "default", "large"]),
        text: PropTypes.node,
    };
    var Dots = function (_a) {
        var _b = _a.color, color = _b === void 0 ? "primary" : _b;
        return (React__default.createElement("div", { className: "loading-dots" + (color !== "primary" ? " loading-dots--" + color : "") },
            React__default.createElement("span", null),
            React__default.createElement("span", null),
            React__default.createElement("span", null)));
    };
    Dots.propTypes = {
        color: PropTypes.oneOf([
            "primary",
            "secondary",
            "tertiary",
            "success",
            "info",
            "warning",
            "warning-alt",
            "danger",
            "dark",
            "light",
        ]),
    };

    var Progressbar = function (_a) {
        var _b = _a.size, size = _b === void 0 ? "default" : _b, _c = _a.withLabel, withLabel = _c === void 0 ? false : _c, _d = _a.label, label = _d === void 0 ? null : _d, _e = _a.color, color = _e === void 0 ? null : _e, _f = _a.className, className = _f === void 0 ? null : _f, percentage = _a.percentage, props = __rest(_a, ["size", "withLabel", "label", "color", "className", "percentage"]);
        return (React__default.createElement("div", __assign({ className: "progressbar" + appendClass(size !== "default", "progressbar--" + size) + appendClass(color, "progressbar--" + color) + appendClass(className), "data-percentage": percentage }, props),
            React__default.createElement("div", { className: "progressbar__fill" }),
            React__default.createElement(DisplayIf, { condition: withLabel }, label ? (React__default.createElement("div", { className: "progressbar__label" }, label)) : (React__default.createElement("div", { className: "progressbar__label" }, percentage + "%")))));
    };
    Progressbar.propTypes = {
        percentage: PropTypes.number.isRequired,
        withLabel: PropTypes.bool,
        label: PropTypes.node,
        size: PropTypes.oneOf(["small", "default", "large"]),
        color: PropTypes.oneOf([
            "primary",
            "secondary",
            "tertiary",
            "success",
            "info",
            "warning-alt",
            "warning",
            "danger",
            "dark",
        ]),
        className: PropTypes.string,
    };

    function styleInject(css, ref) {
      if ( ref === void 0 ) ref = {};
      var insertAt = ref.insertAt;

      if (!css || typeof document === 'undefined') { return; }

      var head = document.head || document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';

      if (insertAt === 'top') {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }

    var css_248z = "body.cui .btn.btn--light{border:1px solid transparent;background:var(--cui-background-alt);color:var(--cui-inactive-color);transition:all .15s ease-in}body.cui .btn.btn--light.hover,body.cui .btn.btn--light:hover{color:var(--cui-active-color);text-decoration:none;box-shadow:inset 0 0 0 1px var(--cui-accent-color);transition:all .15s ease-in}body.cui .btn.btn--light.focus,body.cui .btn.btn--light:focus{box-shadow:0 0 0 var(--cui-focus-thickness) rgba(var(--cui-focus-color),var(--cui-focus-opacity)),inset 0 0 0 1px var(--cui-accent-color);opacity:1;outline:var(--cui-focus-thickness) transparent;outline-offset:1px;outline-width:thin;outline-style:none}body.cui .btn.btn--light.disabled,body.cui .btn.btn--light[disabled]{background-color:transparent;border:1px dotted var(--cui-inactive-color);color:var(--cui-inactive-color);opacity:1}body.cui .btn.btn--light.active,body.cui .btn.btn--light.selected,body.cui .btn.btn--light:active{background-color:var(--cui-accent-color);box-shadow:inset 0 0 0 1px var(--cui-accent-color);color:var(--cui-color-dark);-webkit-transition:all .25s ease;transition:all .25s ease}.cui .btn-group>.btn.btn--light:active,.cui .btn-group>.btn.btn--light:focus,.cui .btn-group>.btn.btn--light:hover,.cui .btn-group>.dropdown>.btn.btn--light:active,.cui .btn-group>.dropdown>.btn.btn--light:focus,.cui .btn-group>.dropdown>.btn.btn--light:hover{outline:0;box-shadow:inset 0 0 0 1px var(--cui-accent-color)}";
    styleInject(css_248z);

    var Button = function (_a) {
        var _b = _a.size, size = _b === void 0 ? "default" : _b, _c = _a.color, color = _c === void 0 ? "primary" : _c, _d = _a.wide, wide = _d === void 0 ? false : _d, _e = _a.justified, justified = _e === void 0 ? false : _e, _f = _a.circle, circle = _f === void 0 ? false : _f, _g = _a.className, className = _g === void 0 ? null : _g, _h = _a.asLink, asLink = _h === void 0 ? false : _h, _j = _a.style, style = _j === void 0 ? null : _j, _k = _a.selected, selected = _k === void 0 ? false : _k, _l = _a.type, type = _l === void 0 ? null : _l, _m = _a.icon, icon = _m === void 0 ? false : _m, props = __rest(_a, ["size", "color", "wide", "justified", "circle", "className", "asLink", "style", "selected", "type", "icon"]);
        return React__default.createElement(asLink ? "a" : "button", __assign(__assign({ className: "btn" + appendClass(size !== "default", "btn--" + size) + " btn--" + color + appendClass(wide, "btn--wide") + appendClass(justified, "btn--justified") + appendClass(icon, "btn--icon") + appendClass(circle, "btn--circle") + appendClass(selected, "selected") + appendClass(className) + appendClass(asLink, "flex-middle flex-center"), style: __assign(__assign({}, (style || {})), (asLink ? { display: "flex" } : {})) }, (asLink ? {} : { type: type || "button" })), props));
    };
    Button.Primary = function (props) { return React__default.createElement(Button, __assign({}, props, { color: "primary" })); };
    Button.Secondary = function (props) { return React__default.createElement(Button, __assign({}, props, { color: "secondary" })); };
    Button.Success = function (props) { return React__default.createElement(Button, __assign({}, props, { color: "success" })); };
    Button.Dark = function (props) { return React__default.createElement(Button, __assign({}, props, { color: "dark" })); };
    Button.Ghost = function (props) { return React__default.createElement(Button, __assign({}, props, { color: "ghost" })); };
    Button.Link = function (props) { return React__default.createElement(Button, __assign({}, props, { color: "link" })); };
    Button.Light = function (props) { return React__default.createElement(Button, __assign({}, props, { color: "light" })); };
    Button.Danger = function (props) { return React__default.createElement(Button, __assign({}, props, { color: "danger" })); };
    Button.propTypes = {
        size: PropTypes.oneOf(["small", "default", "large"]),
        color: PropTypes.oneOf([
            "primary",
            "secondary",
            "success",
            "dark",
            "ghost",
            "link",
            "light",
            "danger",
        ]),
        wide: PropTypes.bool,
        justified: PropTypes.bool,
        circle: PropTypes.bool,
        asLink: PropTypes.bool,
        selected: PropTypes.bool,
        style: PropTypes.shape({}),
        className: PropTypes.string,
        icon: PropTypes.bool,
        type: PropTypes.oneOf(["submit", "reset", "button"]),
    };
    var ButtonGroup = function (_a) {
        var _b = _a.square, square = _b === void 0 ? false : _b, _c = _a.withDivider, withDivider = _c === void 0 ? false : _c, _d = _a.className, className = _d === void 0 ? null : _d, props = __rest(_a, ["square", "withDivider", "className"]);
        return (React__default.createElement("div", __assign({ className: "btn-group" + appendClass(square, "btn-group--square") + appendClass(withDivider, " btn-group--divider") + appendClass(className) }, props)));
    };
    ButtonGroup.propTypes = {
        square: PropTypes.bool,
        withDivider: PropTypes.bool,
        className: PropTypes.string,
    };

    var Label = function (_a) {
        var _b = _a.size, size = _b === void 0 ? "default" : _b, _c = _a.color, color = _c === void 0 ? "primary" : _c, _d = _a.bordered, bordered = _d === void 0 ? false : _d, _e = _a.removable, removable = _e === void 0 ? false : _e, _f = _a.onRemove, onRemove = _f === void 0 ? null : _f, _g = _a.raised, raised = _g === void 0 ? false : _g, _h = _a.className, className = _h === void 0 ? null : _h, children = _a.children, props = __rest(_a, ["size", "color", "bordered", "removable", "onRemove", "raised", "className", "children"]);
        return (React__default.createElement("span", __assign({ className: "" + ("label" + (" label--" + color)) + (size !== "default" ? " label--" + size : "") + (bordered ? " label--bordered" : "") + (raised ? " label--raised" : "") + (className ? " " + className : "") }, props),
            children,
            removable ? React__default.createElement("span", { className: "icon-close", onClick: onRemove }) : null));
    };
    Label.propTypes = {
        size: PropTypes.oneOf(["tiny", "small", "default", "large"]),
        color: PropTypes.oneOf([
            "primary",
            "secondary",
            "tertiary",
            "success",
            "info",
            "warning-alt",
            "warning",
            "danger",
            "dark",
            "light",
        ]),
        bordered: PropTypes.bool,
        removable: PropTypes.bool,
        onRemove: PropTypes.func,
        raised: PropTypes.bool,
        className: PropTypes.string,
        children: PropTypes.node.isRequired,
    };
    Label.Primary = function (_a) {
        var color = _a.color, props = __rest(_a, ["color"]);
        return React__default.createElement(Label, __assign({ color: "primary" }, props));
    };
    Label.Secondary = function (_a) {
        var color = _a.color, props = __rest(_a, ["color"]);
        return (React__default.createElement(Label, __assign({ color: "secondary" }, props)));
    };
    Label.Tertiary = function (_a) {
        var color = _a.color, props = __rest(_a, ["color"]);
        return React__default.createElement(Label, __assign({ color: "tertiary" }, props));
    };
    Label.Success = function (_a) {
        var color = _a.color, props = __rest(_a, ["color"]);
        return React__default.createElement(Label, __assign({ color: "success" }, props));
    };
    Label.Info = function (_a) {
        var color = _a.color, props = __rest(_a, ["color"]);
        return React__default.createElement(Label, __assign({ color: "info" }, props));
    };
    Label.WarningAlt = function (_a) {
        var color = _a.color, props = __rest(_a, ["color"]);
        return (React__default.createElement(Label, __assign({ color: "warning-alt" }, props)));
    };
    Label.Warning = function (_a) {
        var color = _a.color, props = __rest(_a, ["color"]);
        return React__default.createElement(Label, __assign({ color: "warning" }, props));
    };
    Label.Danger = function (_a) {
        var color = _a.color, props = __rest(_a, ["color"]);
        return React__default.createElement(Label, __assign({ color: "danger" }, props));
    };
    Label.Dark = function (_a) {
        var color = _a.color, props = __rest(_a, ["color"]);
        return React__default.createElement(Label, __assign({ color: "dark" }, props));
    };
    Label.Light = function (_a) {
        var color = _a.color, props = __rest(_a, ["color"]);
        return React__default.createElement(Label, __assign({ color: "light" }, props));
    };

    const randomBytes = (typeof self !== "undefined" &&
      (self.crypto || self.msCrypto)
      ? function () {
          // Browsers
          const crypto = self.crypto || self.msCrypto;
          const QUOTA = 65536;
          return function (n) {
            const a = new Uint8Array(n);
            for (let i = 0; i < n; i += QUOTA) {
              crypto.getRandomValues(a.subarray(i, i + Math.min(n - i, QUOTA)));
            }
            return a;
          };
        }
      : function () {
          // Node
          return crypto.randomBytes;
        })();

    const crypto = {
      randomBytes,
    };

    function rng() {
      return crypto.randomBytes(16);
    }

    /**
     * Convert array of 16 byte values to UUID string format of the form:
     * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
     */
    var byteToHex = [];

    for (var i = 0; i < 256; ++i) {
      byteToHex[i] = (i + 0x100).toString(16).substr(1);
    }

    function bytesToUuid(buf, offset) {
      var i = offset || 0;
      var bth = byteToHex; // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4

      return [bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]]].join('');
    }

    function v4(options, buf, offset) {
      var i = buf && offset || 0;

      if (typeof options == 'string') {
        buf = options === 'binary' ? new Array(16) : null;
        options = null;
      }

      options = options || {};
      var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

      rnds[6] = rnds[6] & 0x0f | 0x40;
      rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

      if (buf) {
        for (var ii = 0; ii < 16; ++ii) {
          buf[i + ii] = rnds[ii];
        }
      }

      return buf || bytesToUuid(rnds);
    }

    var css_248z$1 = ".cui .form-group.dropdown .select+.dropdown__menu{max-width:unset!important;width:100%!important}";
    styleInject(css_248z$1);

    var InputHelpBlock = function (_a) {
        var _b = _a.text, text = _b === void 0 ? null : _b;
        return text && (React__default.createElement("div", { className: "form-group__help", role: "alert" },
            React__default.createElement("span", null, text)));
    };

    var Select = /** @class */ (function (_super) {
        __extends(Select, _super);
        function Select(props) {
            var _this = _super.call(this, props) || this;
            _this.handleClick = function () {
                if (!_this.state.isOpen) {
                    // attach/remove event handler
                    document.addEventListener("click", _this.handleOutsideClick, false);
                }
                else {
                    document.removeEventListener("click", _this.handleOutsideClick, false);
                }
                _this.setState(function (prevState) { return ({
                    isOpen: !prevState.isOpen,
                }); });
            };
            _this.handleOutsideClick = function (e) {
                // ignore clicks on the component itself
                var n = _this.props.innerRef ? _this.props.innerRef : _this.node;
                if (n && n.contains(e.target)) {
                    return;
                }
                _this.handleClick();
            };
            _this.handleOptionClick = function (e, newValue, title) {
                var _a = _this.props, field = _a.field, multiple = _a.multiple, form = _a.form;
                if (!multiple) {
                    form.setFieldValue(field.name, newValue);
                    form.setFieldTouched(field.name, true);
                    _this.setState({ title: title });
                    _this.handleClick();
                }
                else if (e.target.checked) {
                    form.setFieldValue(field.name, __spreadArrays(field.value, [newValue]));
                    form.setFieldTouched(field.name, true);
                    _this.setState({ title: __spreadArrays(_this.state.title, [title]) });
                }
                else {
                    form.setFieldValue(field.name, field.value.filter(function (v) { return v !== newValue; }));
                    form.setFieldTouched(field.name, true);
                    _this.setState({
                        title: _this.state.title.filter(function (t) { return t !== title; }),
                    });
                }
            };
            _this.isSelected = function (checkValue) {
                var value = _this.props.field.value;
                if (_this.props.multiple) {
                    return (Array.isArray(value) && value.findIndex(function (v) { return v === checkValue; }) >= 0);
                }
                return value === checkValue;
            };
            _this.renderOption = function (child) {
                var _a = child.props, value = _a.value, children = _a.children, disabled = _a.disabled;
                if (_this.props.multiple) {
                    return (React__default.createElement("a", { className: disabled ? "disabled" : "" },
                        React__default.createElement("label", { className: "checkbox" },
                            React__default.createElement("input", { type: "checkbox", onClick: function (e) {
                                    return _this.handleOptionClick(e, value, Array.isArray(children) ? children.join("") : children);
                                }, checked: _this.isSelected(value) ? true : false }),
                            React__default.createElement("span", { className: "checkbox__input" })),
                        React__default.createElement("span", null, children)));
                }
                return (React__default.createElement("a", { onClick: function (e) {
                        return _this.handleOptionClick(e, value, Array.isArray(children) ? children.join("") : children);
                    }, className: "" + (_this.isSelected(value) ? "selected" : "") + (disabled ? " disabled" : "") }, children));
            };
            _this.renderOptgroup = function (child) {
                var _a = child.props, label = _a.label, children = _a.children;
                return (React__default.createElement("div", { className: "dropdown__group" },
                    React__default.createElement("div", { className: "dropdown__group-header" }, label),
                    _this.renderChildren(children)));
            };
            _this.renderChildren = function (children) {
                return React__default.Children.map(children, function (child) {
                    switch (child.type) {
                        case "option":
                            return _this.renderOption(child);
                        case "optgroup":
                            return _this.renderOptgroup(child);
                        default:
                            return child;
                    }
                });
            };
            _this.findTitle = function (where) {
                if (where === void 0) { where = undefined; }
                var r = [];
                React__default.Children.forEach(where || _this.props.children, function (ch) {
                    if (ch.type === "optgroup") {
                        var temp = _this.findTitle(ch.props.children);
                        if (temp)
                            r.push(temp);
                    }
                    if (_this.isSelected(ch.props.value)) {
                        r.push(Array.isArray(ch.props.children)
                            ? ch.props.children.join("")
                            : ch.props.children);
                    }
                });
                return r.join(", ");
            };
            _this.getShowValue = function () {
                var _a = _this.props, multiple = _a.multiple, prompt = _a.prompt, field = _a.field;
                if (typeof field.value === "undefined" ||
                    field.value === null ||
                    !field.value.toString().length) {
                    return prompt;
                }
                if (multiple) {
                    return Array.isArray(_this.state.title) && _this.state.title.length
                        ? _this.state.title.join(", ")
                        : _this.findTitle();
                }
                return _this.state.title ? _this.state.title : _this.findTitle();
            };
            _this.state = {
                isOpen: false,
                title: props.multiple ? [] : "",
            };
            return _this;
        }
        Select.prototype.render = function () {
            var _this = this;
            var _a = this.props, compressed = _a.compressed, field = _a.field, id = _a.id, form = _a.form, title = _a.title, children = _a.children, inline = _a.inline, up = _a.up, innerRef = _a.innerRef, className = _a.className, disabled = _a.disabled, width = _a.width;
            var touched = form.touched, errors = form.errors;
            return (React__default.createElement("div", __assign({ className: "form-group dropdown" + appendClass(compressed, "input--compressed") + appendClass(this.state.isOpen, "active") + appendClass(inline, "label--inline") + appendClass(up, "dropdown--up") + appendClass(disabled, "disabled") + appendClass(className) + appendClass(formik.getIn(touched, field.name) && formik.getIn(errors, field.name), "form-group--error"), ref: innerRef ||
                    (function (node) {
                        _this.node = node;
                    }) }, (inline === "both" ? { style: { display: "inline-block" } } : {})),
                React__default.createElement("div", { className: "form-group__text select", onClick: this.handleClick },
                    React__default.createElement("input", __assign({ id: id }, field, { value: this.getShowValue(), disabled: disabled }, (width
                        ? { style: { width: width + "px", minWidth: width + "px" } }
                        : {}))),
                    title ? React__default.createElement("label", { htmlFor: id }, title) : null),
                React__default.createElement("div", __assign({ className: "dropdown__menu" }, (width
                    ? { style: { width: width + "px", minWidth: width + "px" } }
                    : {})), this.renderChildren(children)),
                formik.getIn(touched, field.name) && formik.getIn(errors, field.name) ? (React__default.createElement(InputHelpBlock, { text: formik.getIn(errors, field.name) })) : null));
        };
        Select.propTypes = {
            id: PropTypes.string,
            label: PropTypes.string,
            title: PropTypes.string,
            prompt: PropTypes.string,
            multiple: PropTypes.bool,
            inline: PropTypes.oneOf([false, true, "both"]),
            up: PropTypes.bool,
            disabled: PropTypes.bool,
            width: PropTypes.number,
            compressed: PropTypes.bool,
        };
        Select.defaultProps = {
            prompt: "Select an option",
            multiple: false,
            inline: false,
            id: v4(),
            label: null,
            title: null,
            width: null,
            up: false,
            disabled: false,
            compressed: false,
        };
        return Select;
    }(React__default.Component));

    var Panel = React__default.forwardRef(function (_a, ref) {
        var _b = _a.color, color = _b === void 0 ? "plain" : _b, _c = _a.padding, padding = _c === void 0 ? "default" : _c, _d = _a.bordered, bordered = _d === void 0 ? false : _d, _e = _a.raised, raised = _e === void 0 ? false : _e, _f = _a.well, well = _f === void 0 ? false : _f, _g = _a.className, className = _g === void 0 ? null : _g, props = __rest(_a, ["color", "padding", "bordered", "raised", "well", "className"]);
        return (React__default.createElement("div", __assign({ className: "panel" + appendClass(color !== "plain", "panel--" + color) + appendClass(padding !== "default", "panel--" + padding) + appendClass(bordered, function () {
                if (typeof bordered === "string")
                    return "panel--bordered-" + bordered;
                if (Array.isArray(bordered))
                    return bordered.map(function (b) { return "panel--bordered-" + b; }).join(" ");
                return "panel--bordered";
            }) + appendClass(raised, "panel--raised") + appendClass(well, "panel--well") + appendClass(className), ref: ref }, props)));
    });
    Panel.propTypes = {
        color: PropTypes.oneOf([
            "plain",
            "primary",
            "secondary",
            "tertiary",
            "success",
            "info",
            "warning-alt",
            "warning",
            "danger",
            "dark",
            "light",
        ]),
        padding: PropTypes.oneOf(["none", "compressed", "default", "loose"]),
        bordered: PropTypes.any,
        raised: PropTypes.bool,
        well: PropTypes.bool,
        className: PropTypes.string,
    };

    function _objectWithoutPropertiesLoose$1(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;

      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }

      return target;
    }

    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }

    var config = {
      disabled: false
    };

    var TransitionGroupContext = React__default.createContext(null);

    var UNMOUNTED = 'unmounted';
    var EXITED = 'exited';
    var ENTERING = 'entering';
    var ENTERED = 'entered';
    var EXITING = 'exiting';
    /**
     * The Transition component lets you describe a transition from one component
     * state to another _over time_ with a simple declarative API. Most commonly
     * it's used to animate the mounting and unmounting of a component, but can also
     * be used to describe in-place transition states as well.
     *
     * ---
     *
     * **Note**: `Transition` is a platform-agnostic base component. If you're using
     * transitions in CSS, you'll probably want to use
     * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
     * instead. It inherits all the features of `Transition`, but contains
     * additional features necessary to play nice with CSS transitions (hence the
     * name of the component).
     *
     * ---
     *
     * By default the `Transition` component does not alter the behavior of the
     * component it renders, it only tracks "enter" and "exit" states for the
     * components. It's up to you to give meaning and effect to those states. For
     * example we can add styles to a component when it enters or exits:
     *
     * ```jsx
     * import { Transition } from 'react-transition-group';
     *
     * const duration = 300;
     *
     * const defaultStyle = {
     *   transition: `opacity ${duration}ms ease-in-out`,
     *   opacity: 0,
     * }
     *
     * const transitionStyles = {
     *   entering: { opacity: 1 },
     *   entered:  { opacity: 1 },
     *   exiting:  { opacity: 0 },
     *   exited:  { opacity: 0 },
     * };
     *
     * const Fade = ({ in: inProp }) => (
     *   <Transition in={inProp} timeout={duration}>
     *     {state => (
     *       <div style={{
     *         ...defaultStyle,
     *         ...transitionStyles[state]
     *       }}>
     *         I'm a fade Transition!
     *       </div>
     *     )}
     *   </Transition>
     * );
     * ```
     *
     * There are 4 main states a Transition can be in:
     *  - `'entering'`
     *  - `'entered'`
     *  - `'exiting'`
     *  - `'exited'`
     *
     * Transition state is toggled via the `in` prop. When `true` the component
     * begins the "Enter" stage. During this stage, the component will shift from
     * its current transition state, to `'entering'` for the duration of the
     * transition and then to the `'entered'` stage once it's complete. Let's take
     * the following example (we'll use the
     * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
     *
     * ```jsx
     * function App() {
     *   const [inProp, setInProp] = useState(false);
     *   return (
     *     <div>
     *       <Transition in={inProp} timeout={500}>
     *         {state => (
     *           // ...
     *         )}
     *       </Transition>
     *       <button onClick={() => setInProp(true)}>
     *         Click to Enter
     *       </button>
     *     </div>
     *   );
     * }
     * ```
     *
     * When the button is clicked the component will shift to the `'entering'` state
     * and stay there for 500ms (the value of `timeout`) before it finally switches
     * to `'entered'`.
     *
     * When `in` is `false` the same thing happens except the state moves from
     * `'exiting'` to `'exited'`.
     */

    var Transition = /*#__PURE__*/function (_React$Component) {
      _inheritsLoose(Transition, _React$Component);

      function Transition(props, context) {
        var _this;

        _this = _React$Component.call(this, props, context) || this;
        var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

        var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
        var initialStatus;
        _this.appearStatus = null;

        if (props.in) {
          if (appear) {
            initialStatus = EXITED;
            _this.appearStatus = ENTERING;
          } else {
            initialStatus = ENTERED;
          }
        } else {
          if (props.unmountOnExit || props.mountOnEnter) {
            initialStatus = UNMOUNTED;
          } else {
            initialStatus = EXITED;
          }
        }

        _this.state = {
          status: initialStatus
        };
        _this.nextCallback = null;
        return _this;
      }

      Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
        var nextIn = _ref.in;

        if (nextIn && prevState.status === UNMOUNTED) {
          return {
            status: EXITED
          };
        }

        return null;
      } // getSnapshotBeforeUpdate(prevProps) {
      //   let nextStatus = null
      //   if (prevProps !== this.props) {
      //     const { status } = this.state
      //     if (this.props.in) {
      //       if (status !== ENTERING && status !== ENTERED) {
      //         nextStatus = ENTERING
      //       }
      //     } else {
      //       if (status === ENTERING || status === ENTERED) {
      //         nextStatus = EXITING
      //       }
      //     }
      //   }
      //   return { nextStatus }
      // }
      ;

      var _proto = Transition.prototype;

      _proto.componentDidMount = function componentDidMount() {
        this.updateStatus(true, this.appearStatus);
      };

      _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        var nextStatus = null;

        if (prevProps !== this.props) {
          var status = this.state.status;

          if (this.props.in) {
            if (status !== ENTERING && status !== ENTERED) {
              nextStatus = ENTERING;
            }
          } else {
            if (status === ENTERING || status === ENTERED) {
              nextStatus = EXITING;
            }
          }
        }

        this.updateStatus(false, nextStatus);
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        this.cancelNextCallback();
      };

      _proto.getTimeouts = function getTimeouts() {
        var timeout = this.props.timeout;
        var exit, enter, appear;
        exit = enter = appear = timeout;

        if (timeout != null && typeof timeout !== 'number') {
          exit = timeout.exit;
          enter = timeout.enter; // TODO: remove fallback for next major

          appear = timeout.appear !== undefined ? timeout.appear : enter;
        }

        return {
          exit: exit,
          enter: enter,
          appear: appear
        };
      };

      _proto.updateStatus = function updateStatus(mounting, nextStatus) {
        if (mounting === void 0) {
          mounting = false;
        }

        if (nextStatus !== null) {
          // nextStatus will always be ENTERING or EXITING.
          this.cancelNextCallback();

          if (nextStatus === ENTERING) {
            this.performEnter(mounting);
          } else {
            this.performExit();
          }
        } else if (this.props.unmountOnExit && this.state.status === EXITED) {
          this.setState({
            status: UNMOUNTED
          });
        }
      };

      _proto.performEnter = function performEnter(mounting) {
        var _this2 = this;

        var enter = this.props.enter;
        var appearing = this.context ? this.context.isMounting : mounting;

        var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM__default.findDOMNode(this), appearing],
            maybeNode = _ref2[0],
            maybeAppearing = _ref2[1];

        var timeouts = this.getTimeouts();
        var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
        // if we are mounting and running this it means appear _must_ be set

        if (!mounting && !enter || config.disabled) {
          this.safeSetState({
            status: ENTERED
          }, function () {
            _this2.props.onEntered(maybeNode);
          });
          return;
        }

        this.props.onEnter(maybeNode, maybeAppearing);
        this.safeSetState({
          status: ENTERING
        }, function () {
          _this2.props.onEntering(maybeNode, maybeAppearing);

          _this2.onTransitionEnd(enterTimeout, function () {
            _this2.safeSetState({
              status: ENTERED
            }, function () {
              _this2.props.onEntered(maybeNode, maybeAppearing);
            });
          });
        });
      };

      _proto.performExit = function performExit() {
        var _this3 = this;

        var exit = this.props.exit;
        var timeouts = this.getTimeouts();
        var maybeNode = this.props.nodeRef ? undefined : ReactDOM__default.findDOMNode(this); // no exit animation skip right to EXITED

        if (!exit || config.disabled) {
          this.safeSetState({
            status: EXITED
          }, function () {
            _this3.props.onExited(maybeNode);
          });
          return;
        }

        this.props.onExit(maybeNode);
        this.safeSetState({
          status: EXITING
        }, function () {
          _this3.props.onExiting(maybeNode);

          _this3.onTransitionEnd(timeouts.exit, function () {
            _this3.safeSetState({
              status: EXITED
            }, function () {
              _this3.props.onExited(maybeNode);
            });
          });
        });
      };

      _proto.cancelNextCallback = function cancelNextCallback() {
        if (this.nextCallback !== null) {
          this.nextCallback.cancel();
          this.nextCallback = null;
        }
      };

      _proto.safeSetState = function safeSetState(nextState, callback) {
        // This shouldn't be necessary, but there are weird race conditions with
        // setState callbacks and unmounting in testing, so always make sure that
        // we can cancel any pending setState callbacks after we unmount.
        callback = this.setNextCallback(callback);
        this.setState(nextState, callback);
      };

      _proto.setNextCallback = function setNextCallback(callback) {
        var _this4 = this;

        var active = true;

        this.nextCallback = function (event) {
          if (active) {
            active = false;
            _this4.nextCallback = null;
            callback(event);
          }
        };

        this.nextCallback.cancel = function () {
          active = false;
        };

        return this.nextCallback;
      };

      _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
        this.setNextCallback(handler);
        var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM__default.findDOMNode(this);
        var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

        if (!node || doesNotHaveTimeoutOrListener) {
          setTimeout(this.nextCallback, 0);
          return;
        }

        if (this.props.addEndListener) {
          var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
              maybeNode = _ref3[0],
              maybeNextCallback = _ref3[1];

          this.props.addEndListener(maybeNode, maybeNextCallback);
        }

        if (timeout != null) {
          setTimeout(this.nextCallback, timeout);
        }
      };

      _proto.render = function render() {
        var status = this.state.status;

        if (status === UNMOUNTED) {
          return null;
        }

        var _this$props = this.props,
            children = _this$props.children,
            _in = _this$props.in,
            _mountOnEnter = _this$props.mountOnEnter,
            _unmountOnExit = _this$props.unmountOnExit,
            _appear = _this$props.appear,
            _enter = _this$props.enter,
            _exit = _this$props.exit,
            _timeout = _this$props.timeout,
            _addEndListener = _this$props.addEndListener,
            _onEnter = _this$props.onEnter,
            _onEntering = _this$props.onEntering,
            _onEntered = _this$props.onEntered,
            _onExit = _this$props.onExit,
            _onExiting = _this$props.onExiting,
            _onExited = _this$props.onExited,
            _nodeRef = _this$props.nodeRef,
            childProps = _objectWithoutPropertiesLoose$1(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

        return (
          /*#__PURE__*/
          // allows for nested Transitions
          React__default.createElement(TransitionGroupContext.Provider, {
            value: null
          }, typeof children === 'function' ? children(status, childProps) : React__default.cloneElement(React__default.Children.only(children), childProps))
        );
      };

      return Transition;
    }(React__default.Component);

    Transition.contextType = TransitionGroupContext;
    Transition.propTypes =  {}; // Name the function so it is clearer in the documentation

    function noop() {}

    Transition.defaultProps = {
      in: false,
      mountOnEnter: false,
      unmountOnExit: false,
      appear: false,
      enter: true,
      exit: true,
      onEnter: noop,
      onEntering: noop,
      onEntered: noop,
      onExit: noop,
      onExiting: noop,
      onExited: noop
    };
    Transition.UNMOUNTED = UNMOUNTED;
    Transition.EXITED = EXITED;
    Transition.ENTERING = ENTERING;
    Transition.ENTERED = ENTERED;
    Transition.EXITING = EXITING;

    var classnames = createCommonjsModule(function (module) {
    /*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
    /* global define */

    (function () {

    	var hasOwn = {}.hasOwnProperty;

    	function classNames () {
    		var classes = [];

    		for (var i = 0; i < arguments.length; i++) {
    			var arg = arguments[i];
    			if (!arg) continue;

    			var argType = typeof arg;

    			if (argType === 'string' || argType === 'number') {
    				classes.push(arg);
    			} else if (Array.isArray(arg) && arg.length) {
    				var inner = classNames.apply(null, arg);
    				if (inner) {
    					classes.push(inner);
    				}
    			} else if (argType === 'object') {
    				for (var key in arg) {
    					if (hasOwn.call(arg, key) && arg[key]) {
    						classes.push(key);
    					}
    				}
    			}
    		}

    		return classes.join(' ');
    	}

    	if ( module.exports) {
    		classNames.default = classNames;
    		module.exports = classNames;
    	} else {
    		window.classNames = classNames;
    	}
    }());
    });

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    function _objectWithoutPropertiesLoose$2(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;

      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }

      return target;
    }

    var eventManager$1 = {
      list: /*#__PURE__*/new Map(),
      emitQueue: /*#__PURE__*/new Map(),
      on: function on(event, callback) {
        this.list.has(event) || this.list.set(event, []);
        this.list.get(event).push(callback);
        return this;
      },
      off: function off(event, callback) {
        if (callback) {
          var cb = this.list.get(event).filter(function (cb) {
            return cb !== callback;
          });
          this.list.set(event, cb);
          return this;
        }

        this.list["delete"](event);
        return this;
      },
      cancelEmit: function cancelEmit(event) {
        var timers = this.emitQueue.get(event);

        if (timers) {
          timers.forEach(function (timer) {
            return clearTimeout(timer);
          });
          this.emitQueue["delete"](event);
        }

        return this;
      },

      /**
       * Enqueue the event at the end of the call stack
       * Doing so let the user call toast as follow:
       * toast('1')
       * toast('2')
       * toast('3')
       * Without setTimemout the code above will not work
       */
      emit: function emit(event) {
        var _this = this;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        this.list.has(event) && this.list.get(event).forEach(function (callback) {
          var timer = setTimeout(function () {
            // @ts-ignore
            callback.apply(void 0, args);
          }, 0);
          _this.emitQueue.has(event) || _this.emitQueue.set(event, []);

          _this.emitQueue.get(event).push(timer);
        });
      }
    };

    function isNum(v) {
      return typeof v === 'number' && !isNaN(v);
    }
    function isBool(v) {
      return typeof v === 'boolean';
    }
    function isStr(v) {
      return typeof v === 'string';
    }
    function isFn(v) {
      return typeof v === 'function';
    }
    function parseClassName(v) {
      return typeof v === 'string' ? v : null;
    }
    function hasToastId(toastId) {
      return toastId === 0 || toastId;
    }
    function getAutoCloseDelay(toastAutoClose, containerAutoClose) {
      return toastAutoClose === false || isNum(toastAutoClose) && toastAutoClose > 0 ? toastAutoClose : containerAutoClose;
    }
    var canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
    function canBeRendered(content) {
      return React.isValidElement(content) || isStr(content) || isFn(content) || isNum(content);
    }

    var POSITION = {
      TOP_LEFT: 'top-left',
      TOP_RIGHT: 'top-right',
      TOP_CENTER: 'top-center',
      BOTTOM_LEFT: 'bottom-left',
      BOTTOM_RIGHT: 'bottom-right',
      BOTTOM_CENTER: 'bottom-center'
    };
    var TYPE = {
      INFO: 'info',
      SUCCESS: 'success',
      WARNING: 'warning',
      ERROR: 'error',
      DEFAULT: 'default',
      DARK: 'dark'
    };

    /**
     * Used to collapse toast after exit animation
     */
    function collapseToast(node, done, duration
    /* COLLAPSE_DURATION */
    ) {
      if (duration === void 0) {
        duration = 300;
      }

      var height = node.scrollHeight;
      var style = node.style;
      requestAnimationFrame(function () {
        style.minHeight = 'initial';
        style.height = height + 'px';
        style.transition = "all " + duration + "ms";
        requestAnimationFrame(function () {
          style.height = '0';
          style.padding = '0';
          style.margin = '0';
          setTimeout(function () {
            return done();
          }, duration);
        });
      });
    }

    function cssTransition(_ref) {
      var enter = _ref.enter,
          exit = _ref.exit,
          _ref$duration = _ref.duration,
          duration = _ref$duration === void 0 ? 750 : _ref$duration,
          _ref$appendPosition = _ref.appendPosition,
          appendPosition = _ref$appendPosition === void 0 ? false : _ref$appendPosition,
          _ref$collapse = _ref.collapse,
          collapse = _ref$collapse === void 0 ? true : _ref$collapse,
          _ref$collapseDuration = _ref.collapseDuration,
          collapseDuration = _ref$collapseDuration === void 0 ? 300 : _ref$collapseDuration;
      var enterDuration, exitDuration;

      if (Array.isArray(duration) && duration.length === 2) {
        enterDuration = duration[0];
        exitDuration = duration[1];
      } else {
        enterDuration = exitDuration = duration;
      }

      return function ToastTransition(_ref2) {
        var children = _ref2.children,
            position = _ref2.position,
            preventExitTransition = _ref2.preventExitTransition,
            done = _ref2.done,
            props = _objectWithoutPropertiesLoose$2(_ref2, ["children", "position", "preventExitTransition", "done"]);

        var enterClassName = appendPosition ? enter + "--" + position : enter;
        var exitClassName = appendPosition ? exit + "--" + position : exit;

        var onEnter = function onEnter() {
          var node = props.nodeRef.current;

          if (node) {
            node.classList.add(enterClassName);
            node.style.animationFillMode = 'forwards';
            node.style.animationDuration = enterDuration + "ms";
          }
        };

        var onEntered = function onEntered() {
          var node = props.nodeRef.current;

          if (node) {
            node.classList.remove(enterClassName);
            node.style.cssText = '';
          }
        };

        var onExited = function onExited() {
          var node = props.nodeRef.current;

          if (node) {
            node.removeEventListener('animationend', onExited);
            collapse ? collapseToast(node, done, collapseDuration) : done();
          }
        };

        var onExit = function onExit() {
          var node = props.nodeRef.current;

          if (node) {
            node.classList.add(exitClassName);
            node.style.animationFillMode = 'forwards';
            node.style.animationDuration = exitDuration + "ms";
            node.addEventListener('animationend', onExited);
          }
        };

        return React.createElement(Transition, Object.assign({}, props, {
          timeout: preventExitTransition ? collapse ? collapseDuration : 50
          /* DEBOUNCE_DURATION */
          : {
            enter: enterDuration,
            exit: collapse ? exitDuration + collapseDuration : exitDuration + 50
            /* DEBOUNCE_DURATION */

          },
          onEnter: onEnter,
          onEntered: onEntered,
          onExit: preventExitTransition ? onExited : onExit,
          unmountOnExit: true
        }), children);
      };
    }

    function CloseButton(_ref) {
      var closeToast = _ref.closeToast,
          type = _ref.type,
          _ref$ariaLabel = _ref.ariaLabel,
          ariaLabel = _ref$ariaLabel === void 0 ? 'close' : _ref$ariaLabel;
      return React.createElement("button", {
        className: "Toastify"
        /* CSS_NAMESPACE */
        + "__close-button " + "Toastify"
        /* CSS_NAMESPACE */
        + "__close-button--" + type,
        type: "button",
        onClick: function onClick(e) {
          e.stopPropagation();
          closeToast(e);
        },
        "aria-label": ariaLabel
      }, React.createElement("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 14 16"
      }, React.createElement("path", {
        fillRule: "evenodd",
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
      })));
    }

    function ProgressBar(_ref) {
      var _cx, _animationEvent;

      var delay = _ref.delay,
          isRunning = _ref.isRunning,
          closeToast = _ref.closeToast,
          type = _ref.type,
          hide = _ref.hide,
          className = _ref.className,
          userStyle = _ref.style,
          controlledProgress = _ref.controlledProgress,
          progress = _ref.progress,
          rtl = _ref.rtl,
          isIn = _ref.isIn;

      var style = _extends(_extends({}, userStyle), {}, {
        animationDuration: delay + "ms",
        animationPlayState: isRunning ? 'running' : 'paused',
        opacity: hide ? 0 : 1
      });

      if (controlledProgress) style.transform = "scaleX(" + progress + ")";
      var classNames = classnames("Toastify"
      /* CSS_NAMESPACE */
      + "__progress-bar", controlledProgress ? "Toastify"
      /* CSS_NAMESPACE */
      + "__progress-bar--controlled" : "Toastify"
      /* CSS_NAMESPACE */
      + "__progress-bar--animated", "Toastify"
      /* CSS_NAMESPACE */
      + "__progress-bar--" + type, (_cx = {}, _cx["Toastify"
      /* CSS_NAMESPACE */
      + "__progress-bar--rtl"] = rtl, _cx), className); // 🧐 controlledProgress is derived from progress
      // so if controlledProgress is set
      // it means that this is also the case for progress

      var animationEvent = (_animationEvent = {}, _animationEvent[controlledProgress && progress >= 1 ? 'onTransitionEnd' : 'onAnimationEnd'] = controlledProgress && progress < 1 ? null : function () {
        isIn && closeToast();
      }, _animationEvent);
      return React.createElement("div", Object.assign({
        className: classNames,
        style: style
      }, animationEvent));
    }
    ProgressBar.defaultProps = {
      type: TYPE.DEFAULT,
      hide: false
    };

    var Toast = function Toast(props) {
      var _cx;

      var _useToast = useToast(props),
          isRunning = _useToast.isRunning,
          preventExitTransition = _useToast.preventExitTransition,
          toastRef = _useToast.toastRef,
          eventHandlers = _useToast.eventHandlers;

      var closeButton = props.closeButton,
          children = props.children,
          autoClose = props.autoClose,
          onClick = props.onClick,
          type = props.type,
          hideProgressBar = props.hideProgressBar,
          closeToast = props.closeToast,
          Transition = props.transition,
          position = props.position,
          className = props.className,
          style = props.style,
          bodyClassName = props.bodyClassName,
          bodyStyle = props.bodyStyle,
          progressClassName = props.progressClassName,
          progressStyle = props.progressStyle,
          updateId = props.updateId,
          role = props.role,
          progress = props.progress,
          rtl = props.rtl,
          toastId = props.toastId,
          deleteToast = props.deleteToast;
      var cssClasses = classnames("Toastify"
      /* CSS_NAMESPACE */
      + "__toast", "Toastify"
      /* CSS_NAMESPACE */
      + "__toast--" + type, (_cx = {}, _cx["Toastify"
      /* CSS_NAMESPACE */
      + "__toast--rtl"] = rtl, _cx), className);
      var controlledProgress = !!progress;

      function renderCloseButton(closeButton) {
        if (!closeButton) return null;
        var props = {
          closeToast: closeToast,
          type: type
        };
        if (isFn(closeButton)) return closeButton(props);
        if (React.isValidElement(closeButton)) return React.cloneElement(closeButton, props);
      }

      return React.createElement(Transition, {
        "in": props["in"],
        appear: true,
        done: deleteToast,
        position: position,
        preventExitTransition: preventExitTransition,
        nodeRef: toastRef
      }, React.createElement("div", Object.assign({
        id: toastId,
        onClick: onClick,
        className: cssClasses
      }, eventHandlers, {
        style: style,
        ref: toastRef
      }), React.createElement("div", Object.assign({}, props["in"] && {
        role: role
      }, {
        className: classnames("Toastify"
        /* CSS_NAMESPACE */
        + "__toast-body", bodyClassName),
        style: bodyStyle
      }), children), renderCloseButton(closeButton), (autoClose || controlledProgress) && React.createElement(ProgressBar, Object.assign({}, updateId && !controlledProgress ? {
        key: "pb-" + updateId
      } : {}, {
        rtl: rtl,
        delay: autoClose,
        isRunning: isRunning,
        isIn: props["in"],
        closeToast: closeToast,
        hide: hideProgressBar,
        type: type,
        style: progressStyle,
        className: progressClassName,
        controlledProgress: controlledProgress,
        progress: progress
      }))));
    };

    var Bounce = /*#__PURE__*/cssTransition({
      enter: "Toastify"
      /* CSS_NAMESPACE */
      + "__bounce-enter",
      exit: "Toastify"
      /* CSS_NAMESPACE */
      + "__bounce-exit",
      appendPosition: true
    });

    var ToastPositioner = function ToastPositioner(_ref) {
      var children = _ref.children,
          className = _ref.className,
          style = _ref.style,
          rest = _objectWithoutPropertiesLoose$2(_ref, ["children", "className", "style"]);

      // Monkey patch react-transition-group
      // As exit transition is broken with strict mode
      delete rest["in"];
      return React.createElement("div", {
        className: className,
        style: style
      }, React.Children.map(children, function (child) {
        return React.cloneElement(child, rest);
      }));
    };

    var ToastContainer = function ToastContainer(props) {
      var _useToastContainer = useToastContainer(props),
          getToastToRender = _useToastContainer.getToastToRender,
          containerRef = _useToastContainer.containerRef,
          isToastActive = _useToastContainer.isToastActive;

      var className = props.className,
          style = props.style,
          rtl = props.rtl,
          containerId = props.containerId;
      return React.createElement("div", {
        ref: containerRef,
        className: "Toastify"
        /* CSS_NAMESPACE */
        ,
        id: containerId
      }, getToastToRender(function (position, toastList) {
        var _cx;

        var swag = {
          className: classnames("Toastify"
          /* CSS_NAMESPACE */
          + "__toast-container", "Toastify"
          /* CSS_NAMESPACE */
          + "__toast-container--" + position, (_cx = {}, _cx["Toastify"
          /* CSS_NAMESPACE */
          + "__toast-container--rtl"] = rtl, _cx), parseClassName(className)),
          style: toastList.length === 0 ? _extends(_extends({}, style), {}, {
            pointerEvents: 'none'
          }) : _extends({}, style)
        };
        return React.createElement(ToastPositioner, Object.assign({}, swag, {
          key: "container-" + position
        }), toastList.map(function (_ref) {
          var content = _ref.content,
              toastProps = _ref.props;
          return React.createElement(Toast, Object.assign({}, toastProps, {
            "in": isToastActive(toastProps.toastId),
            key: "toast-" + toastProps.key,
            closeButton: toastProps.closeButton === true ? CloseButton : toastProps.closeButton
          }), content);
        }));
      }));
    };

    ToastContainer.defaultProps = {
      position: POSITION.TOP_RIGHT,
      transition: Bounce,
      rtl: false,
      autoClose: 5000,
      hideProgressBar: false,
      closeButton: CloseButton,
      pauseOnHover: true,
      pauseOnFocusLoss: true,
      closeOnClick: true,
      newestOnTop: false,
      draggable: true,
      draggablePercent: 80,
      role: 'alert'
    };

    var containers = /*#__PURE__*/new Map();
    var latestInstance;
    var containerDomNode;
    var containerConfig;
    var queue = [];
    var lazy = false;
    /**
     * Check whether any container is currently mounted in the DOM
     */

    function isAnyContainerMounted() {
      return containers.size > 0;
    }
    /**
     * Get the container by id. Returns the last container declared when no id is given.
     */


    function getContainer(containerId) {
      if (!isAnyContainerMounted()) return null;
      return containers.get(!containerId ? latestInstance : containerId);
    }
    /**
     * Get the toast by id, given it's in the DOM, otherwise returns null
     */


    function getToast(toastId, _ref) {
      var containerId = _ref.containerId;
      var container = getContainer(containerId);
      if (!container) return null;
      return container.getToast(toastId);
    }
    /**
     * Generate a random toastId
     */


    function generateToastId() {
      return (Math.random().toString(36) + Date.now().toString(36)).substr(2, 10);
    }
    /**
     * Generate a toastId or use the one provided
     */


    function getToastId(options) {
      if (options && (isStr(options.toastId) || isNum(options.toastId))) {
        return options.toastId;
      }

      return generateToastId();
    }
    /**
     * If the container is not mounted, the toast is enqueued and
     * the container lazy mounted
     */


    function dispatchToast(content, options) {
      if (isAnyContainerMounted()) {
        eventManager$1.emit(0
        /* Show */
        , content, options);
      } else {
        queue.push({
          content: content,
          options: options
        });

        if (lazy && canUseDom) {
          lazy = false;
          containerDomNode = document.createElement('div');
          document.body.appendChild(containerDomNode);
          ReactDOM.render(React.createElement(ToastContainer, Object.assign({}, containerConfig)), containerDomNode);
        }
      }

      return options.toastId;
    }
    /**
     * Merge provided options with the defaults settings and generate the toastId
     */


    function mergeOptions(type, options) {
      return _extends(_extends({}, options), {}, {
        type: options && options.type || type,
        toastId: getToastId(options)
      });
    }

    var toast = function toast(content, options) {
      return dispatchToast(content, mergeOptions(TYPE.DEFAULT, options));
    };

    toast.success = function (content, options) {
      return dispatchToast(content, mergeOptions(TYPE.SUCCESS, options));
    };

    toast.info = function (content, options) {
      return dispatchToast(content, mergeOptions(TYPE.INFO, options));
    };

    toast.error = function (content, options) {
      return dispatchToast(content, mergeOptions(TYPE.ERROR, options));
    };

    toast.warning = function (content, options) {
      return dispatchToast(content, mergeOptions(TYPE.WARNING, options));
    };

    toast.dark = function (content, options) {
      return dispatchToast(content, mergeOptions(TYPE.DARK, options));
    };
    /**
     * Maybe I should remove warning in favor of warn, I don't know
     */


    toast.warn = toast.warning;
    /**
     * Remove toast programmaticaly
     */

    toast.dismiss = function (id) {
      return isAnyContainerMounted() && eventManager$1.emit(1
      /* Clear */
      , id);
    };
    /**
     * Clear waiting queue when limit is used
     */


    toast.clearWaitingQueue = function (params) {
      if (params === void 0) {
        params = {};
      }

      return isAnyContainerMounted() && eventManager$1.emit(5
      /* ClearWaitingQueue */
      , params);
    };
    /**
     * return true if one container is displaying the toast
     */


    toast.isActive = function (id) {
      var isToastActive = false;
      containers.forEach(function (container) {
        if (container.isToastActive && container.isToastActive(id)) {
          isToastActive = true;
        }
      });
      return isToastActive;
    };

    toast.update = function (toastId, options) {
      if (options === void 0) {
        options = {};
      }

      // if you call toast and toast.update directly nothing will be displayed
      // this is why I defered the update
      setTimeout(function () {
        var toast = getToast(toastId, options);

        if (toast) {
          var oldOptions = toast.props,
              oldContent = toast.content;

          var nextOptions = _extends(_extends(_extends({}, oldOptions), options), {}, {
            toastId: options.toastId || toastId,
            updateId: generateToastId()
          });

          if (nextOptions.toastId !== toastId) nextOptions.staleId = toastId;
          var content = typeof nextOptions.render !== 'undefined' ? nextOptions.render : oldContent;
          delete nextOptions.render;
          dispatchToast(content, nextOptions);
        }
      }, 0);
    };
    /**
     * Used for controlled progress bar.
     */


    toast.done = function (id) {
      toast.update(id, {
        progress: 1
      });
    };
    /**
     * Track changes. The callback get the number of toast displayed
     *
     */


    toast.onChange = function (callback) {
      if (isFn(callback)) {
        eventManager$1.on(4
        /* Change */
        , callback);
      }

      return function () {
        isFn(callback) && eventManager$1.off(4
        /* Change */
        , callback);
      };
    };
    /**
     * Configure the ToastContainer when lazy mounted
     */


    toast.configure = function (config) {
      if (config === void 0) {
        config = {};
      }

      lazy = true;
      containerConfig = config;
    };

    toast.POSITION = POSITION;
    toast.TYPE = TYPE;
    /**
     * Wait until the ToastContainer is mounted to dispatch the toast
     * and attach isActive method
     */

    eventManager$1.on(2
    /* DidMount */
    , function (containerInstance) {
      latestInstance = containerInstance.containerId || containerInstance;
      containers.set(latestInstance, containerInstance);
      queue.forEach(function (item) {
        eventManager$1.emit(0
        /* Show */
        , item.content, item.options);
      });
      queue = [];
    }).on(3
    /* WillUnmount */
    , function (containerInstance) {
      containers["delete"](containerInstance.containerId || containerInstance);

      if (containers.size === 0) {
        eventManager$1.off(0
        /* Show */
        ).off(1
        /* Clear */
        ).off(5
        /* ClearWaitingQueue */
        );
      }

      if (canUseDom && containerDomNode) {
        document.body.removeChild(containerDomNode);
      }
    });

    /**
     * `useKeeper` is a helper around `useRef`.
     *
     * You don't need to access the `.current`property to get the value
     * If refresh is set to true. The ref will be updated every render
     */

    function useKeeper(arg, refresh) {
      if (refresh === void 0) {
        refresh = false;
      }

      var ref = React.useRef(arg);
      React.useEffect(function () {
        if (refresh) ref.current = arg;
      });
      return ref.current;
    }

    function reducer$1(state, action) {
      switch (action.type) {
        case 'ADD':
          return [].concat(state, [action.toastId]).filter(function (id) {
            return id !== action.staleId;
          });

        case 'REMOVE':
          return hasToastId(action.toastId) ? state.filter(function (id) {
            return id !== action.toastId;
          }) : [];
      }
    }

    function useToastContainer(props) {
      var _useReducer = React.useReducer(function (x) {
        return x + 1;
      }, 0),
          forceUpdate = _useReducer[1];

      var _useReducer2 = React.useReducer(reducer$1, []),
          toast = _useReducer2[0],
          dispatch = _useReducer2[1];

      var containerRef = React.useRef(null);
      var toastCount = useKeeper(0);
      var queue = useKeeper([]);
      var collection = useKeeper({});
      var instance = useKeeper({
        toastKey: 1,
        displayedToast: 0,
        props: props,
        containerId: null,
        isToastActive: isToastActive,
        getToast: function getToast(id) {
          return collection[id] || null;
        }
      });
      React.useEffect(function () {
        instance.containerId = props.containerId;
        eventManager$1.cancelEmit(3
        /* WillUnmount */
        ).on(0
        /* Show */
        , buildToast).on(1
        /* Clear */
        , function (toastId) {
          return containerRef.current && removeToast(toastId);
        }).on(5
        /* ClearWaitingQueue */
        , clearWaitingQueue).emit(2
        /* DidMount */
        , instance);
        return function () {
          return eventManager$1.emit(3
          /* WillUnmount */
          , instance);
        };
      }, []);
      React.useEffect(function () {
        instance.isToastActive = isToastActive;
        instance.displayedToast = toast.length;
        eventManager$1.emit(4
        /* Change */
        , toast.length, props.containerId);
      }, [toast]);
      React.useEffect(function () {
        instance.props = props;
      });

      function isToastActive(id) {
        return toast.indexOf(id) !== -1;
      }

      function clearWaitingQueue(_ref) {
        var containerId = _ref.containerId;
        var _instance$props = instance.props,
            limit = _instance$props.limit,
            enableMultiContainer = _instance$props.enableMultiContainer;

        if (limit && (!containerId || instance.containerId === containerId && enableMultiContainer)) {
          toastCount -= queue.length;
          queue = [];
        }
      }

      function removeToast(toastId) {
        var queueLen = queue.length;
        toastCount = hasToastId(toastId) ? toastCount - 1 : toastCount - instance.displayedToast;
        if (toastCount < 0) toastCount = 0;

        if (queueLen > 0) {
          var freeSlot = hasToastId(toastId) ? 1 : instance.props.limit;

          if (queueLen === 1 || freeSlot === 1) {
            instance.displayedToast++;
            dequeueToast();
          } else {
            var toDequeue = freeSlot > queueLen ? queueLen : freeSlot;
            instance.displayedToast = toDequeue;

            for (var i = 0; i < toDequeue; i++) {
              dequeueToast();
            }
          }
        }

        dispatch({
          type: 'REMOVE',
          toastId: toastId
        });
      }

      function dequeueToast() {
        var _queue$shift = queue.shift(),
            toastContent = _queue$shift.toastContent,
            toastProps = _queue$shift.toastProps,
            staleId = _queue$shift.staleId; // ensure that exit transition has been completed, hence the timeout


        setTimeout(function () {
          appendToast(toastContent, toastProps, staleId);
        }, 500);
      }
      /**
       * check if a container is attached to the dom
       * check for multi-container, build only if associated
       * check for duplicate toastId if no update
       */


      function isNotValid(_ref2) {
        var containerId = _ref2.containerId,
            toastId = _ref2.toastId,
            updateId = _ref2.updateId;
        return !containerRef.current || instance.props.enableMultiContainer && containerId !== instance.props.containerId || instance.isToastActive(toastId) && updateId == null ? true : false;
      } // this function and all the function called inside needs to rely on ref(`useKeeper`)


      function buildToast(content, _ref3) {
        var delay = _ref3.delay,
            staleId = _ref3.staleId,
            options = _objectWithoutPropertiesLoose$2(_ref3, ["delay", "staleId"]);

        if (!canBeRendered(content) || isNotValid(options)) return;
        var toastId = options.toastId,
            updateId = options.updateId;
        var props = instance.props,
            isToastActive = instance.isToastActive;

        var closeToast = function closeToast() {
          return removeToast(toastId);
        };

        var isNotAnUpdate = !isToastActive(toastId);
        if (isNotAnUpdate) toastCount++;
        var toastProps = {
          toastId: toastId,
          updateId: updateId,
          key: options.key || instance.toastKey++,
          type: options.type,
          closeToast: closeToast,
          closeButton: options.closeButton,
          rtl: props.rtl,
          position: options.position || props.position,
          transition: options.transition || props.transition,
          className: parseClassName(options.className || props.toastClassName),
          bodyClassName: parseClassName(options.bodyClassName || props.bodyClassName),
          style: options.style || props.toastStyle,
          bodyStyle: options.bodyStyle || props.bodyStyle,
          onClick: options.onClick || props.onClick,
          pauseOnHover: isBool(options.pauseOnHover) ? options.pauseOnHover : props.pauseOnHover,
          pauseOnFocusLoss: isBool(options.pauseOnFocusLoss) ? options.pauseOnFocusLoss : props.pauseOnFocusLoss,
          draggable: isBool(options.draggable) ? options.draggable : props.draggable,
          draggablePercent: isNum(options.draggablePercent) ? options.draggablePercent : props.draggablePercent,
          closeOnClick: isBool(options.closeOnClick) ? options.closeOnClick : props.closeOnClick,
          progressClassName: parseClassName(options.progressClassName || props.progressClassName),
          progressStyle: options.progressStyle || props.progressStyle,
          autoClose: getAutoCloseDelay(options.autoClose, props.autoClose),
          hideProgressBar: isBool(options.hideProgressBar) ? options.hideProgressBar : props.hideProgressBar,
          progress: options.progress,
          role: isStr(options.role) ? options.role : props.role,
          deleteToast: function deleteToast() {
            removeFromCollection(toastId);
          }
        };
        if (isFn(options.onOpen)) toastProps.onOpen = options.onOpen;
        if (isFn(options.onClose)) toastProps.onClose = options.onClose;
        var closeButton = props.closeButton;

        if (options.closeButton === false || canBeRendered(options.closeButton)) {
          closeButton = options.closeButton;
        } else if (options.closeButton === true) {
          closeButton = canBeRendered(props.closeButton) ? props.closeButton : true;
        }

        toastProps.closeButton = closeButton;
        var toastContent = content;

        if (React.isValidElement(content) && !isStr(content.type)) {
          toastContent = React.cloneElement(content, {
            closeToast: closeToast
          });
        } else if (isFn(content)) {
          toastContent = content({
            closeToast: closeToast
          });
        } // not handling limit + delay by design. Waiting for user feedback first


        if (props.limit && props.limit > 0 && toastCount > props.limit && isNotAnUpdate) {
          queue.push({
            toastContent: toastContent,
            toastProps: toastProps,
            staleId: staleId
          });
        } else if (isNum(delay) && delay > 0) {
          setTimeout(function () {
            appendToast(toastContent, toastProps, staleId);
          }, delay);
        } else {
          appendToast(toastContent, toastProps, staleId);
        }
      }

      function appendToast(content, toastProps, staleId) {
        var toastId = toastProps.toastId;
        collection[toastId] = {
          content: content,
          props: toastProps
        };
        dispatch({
          type: 'ADD',
          toastId: toastId,
          staleId: staleId
        });
      }

      function removeFromCollection(toastId) {
        delete collection[toastId];
        forceUpdate();
      }

      function getToastToRender(cb) {
        var toastToRender = {};
        var toastList = props.newestOnTop ? Object.keys(collection).reverse() : Object.keys(collection);

        for (var i = 0; i < toastList.length; i++) {
          var _toast = collection[toastList[i]];
          var position = _toast.props.position;
          toastToRender[position] || (toastToRender[position] = []);
          toastToRender[position].push(_toast);
        }

        return Object.keys(toastToRender).map(function (p) {
          return cb(p, toastToRender[p]);
        });
      }

      return {
        getToastToRender: getToastToRender,
        collection: collection,
        containerRef: containerRef,
        isToastActive: isToastActive
      };
    }

    function getX(e) {
      return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
    }

    function getY(e) {
      return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
    }

    function useToast(props) {
      var _useState = React.useState(true),
          isRunning = _useState[0],
          setIsRunning = _useState[1];

      var _useState2 = React.useState(false),
          preventExitTransition = _useState2[0],
          setPreventExitTransition = _useState2[1];

      var toastRef = React.useRef(null);
      var drag = useKeeper({
        start: 0,
        x: 0,
        y: 0,
        deltaX: 0,
        removalDistance: 0,
        canCloseOnClick: true,
        canDrag: false,
        boundingRect: null
      });
      var syncProps = useKeeper(props, true);
      var autoClose = props.autoClose,
          pauseOnHover = props.pauseOnHover,
          closeToast = props.closeToast,
          onClick = props.onClick,
          closeOnClick = props.closeOnClick;
      React.useEffect(function () {
        if (isFn(props.onOpen)) props.onOpen(React.isValidElement(props.children) && props.children.props);
        return function () {
          if (isFn(syncProps.onClose)) syncProps.onClose(React.isValidElement(syncProps.children) && syncProps.children.props);
        };
      }, []);
      React.useEffect(function () {
        props.draggable && bindDragEvents();
        return function () {
          props.draggable && unbindDragEvents();
        };
      }, [props.draggable]);
      React.useEffect(function () {
        props.pauseOnFocusLoss && bindFocusEvents();
        return function () {
          props.pauseOnFocusLoss && unbindFocusEvents();
        };
      }, [props.pauseOnFocusLoss]);

      function onDragStart(e) {
        var toast = toastRef.current;
        drag.canCloseOnClick = true;
        drag.canDrag = true;
        drag.boundingRect = toast.getBoundingClientRect();
        toast.style.transition = '';
        drag.start = drag.x = getX(e.nativeEvent);
        drag.removalDistance = toast.offsetWidth * (props.draggablePercent / 100);
      }

      function onDragTransitionEnd() {
        if (drag.boundingRect) {
          var _drag$boundingRect = drag.boundingRect,
              top = _drag$boundingRect.top,
              bottom = _drag$boundingRect.bottom,
              left = _drag$boundingRect.left,
              right = _drag$boundingRect.right;

          if (props.pauseOnHover && drag.x >= left && drag.x <= right && drag.y >= top && drag.y <= bottom) {
            pauseToast();
          } else {
            playToast();
          }
        }
      }

      function playToast() {
        setIsRunning(true);
      }

      function pauseToast() {
        setIsRunning(false);
      }

      function bindFocusEvents() {
        window.addEventListener('focus', playToast);
        window.addEventListener('blur', pauseToast);
      }

      function unbindFocusEvents() {
        window.removeEventListener('focus', playToast);
        window.removeEventListener('blur', pauseToast);
      }

      function bindDragEvents() {
        document.addEventListener('mousemove', onDragMove);
        document.addEventListener('mouseup', onDragEnd);
        document.addEventListener('touchmove', onDragMove);
        document.addEventListener('touchend', onDragEnd);
      }

      function unbindDragEvents() {
        document.removeEventListener('mousemove', onDragMove);
        document.removeEventListener('mouseup', onDragEnd);
        document.removeEventListener('touchmove', onDragMove);
        document.removeEventListener('touchend', onDragEnd);
      }

      function onDragMove(e) {
        var toast = toastRef.current;

        if (drag.canDrag) {
          if (isRunning) pauseToast();
          drag.x = getX(e);
          drag.deltaX = drag.x - drag.start;
          drag.y = getY(e); // prevent false positif during a toast click

          if (drag.start !== drag.x) drag.canCloseOnClick = false;
          toast.style.transform = "translateX(" + drag.deltaX + "px)";
          toast.style.opacity = "" + (1 - Math.abs(drag.deltaX / drag.removalDistance));
        }
      }

      function onDragEnd() {
        var toast = toastRef.current;

        if (drag.canDrag) {
          drag.canDrag = false;

          if (Math.abs(drag.deltaX) > drag.removalDistance) {
            setPreventExitTransition(true);
            props.closeToast();
            return;
          }

          toast.style.transition = 'transform 0.2s, opacity 0.2s';
          toast.style.transform = 'translateX(0)';
          toast.style.opacity = '1';
        }
      }

      var eventHandlers = {
        onMouseDown: onDragStart,
        onTouchStart: onDragStart,
        onMouseUp: onDragTransitionEnd,
        onTouchEnd: onDragTransitionEnd
      };

      if (autoClose && pauseOnHover) {
        eventHandlers.onMouseEnter = pauseToast;
        eventHandlers.onMouseLeave = playToast;
      } // prevent toast from closing when user drags the toast


      if (closeOnClick) {
        eventHandlers.onClick = function (e) {
          onClick && onClick(e);
          drag.canCloseOnClick && closeToast();
        };
      }

      return {
        playToast: playToast,
        pauseToast: pauseToast,
        isRunning: isRunning,
        preventExitTransition: preventExitTransition,
        toastRef: toastRef,
        eventHandlers: eventHandlers
      };
    }

    var css_248z$2 = ".Toastify__toast-container{z-index:9999;-webkit-transform:translateZ(9999px);position:fixed;padding:4px;width:320px;box-sizing:border-box;color:#fff}.Toastify__toast-container--top-left{top:1em;left:1em}.Toastify__toast-container--top-center{top:1em;left:50%;transform:translateX(-50%)}.Toastify__toast-container--top-right{top:1em;right:1em}.Toastify__toast-container--bottom-left{bottom:1em;left:1em}.Toastify__toast-container--bottom-center{bottom:1em;left:50%;transform:translateX(-50%)}.Toastify__toast-container--bottom-right{bottom:1em;right:1em}@media only screen and (max-width:480px){.Toastify__toast-container{width:100vw;padding:0;left:0;margin:0}.Toastify__toast-container--top-center,.Toastify__toast-container--top-left,.Toastify__toast-container--top-right{top:0;transform:translateX(0)}.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-right{bottom:0;transform:translateX(0)}.Toastify__toast-container--rtl{right:0;left:auto}}.Toastify__toast{position:relative;min-height:64px;box-sizing:border-box;margin-bottom:1rem;padding:8px;border-radius:1px;box-shadow:0 1px 10px 0 rgba(0,0,0,.1),0 2px 15px 0 rgba(0,0,0,.05);display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;max-height:800px;overflow:hidden;font-family:sans-serif;cursor:pointer;direction:ltr}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--dark{background:#121212;color:#fff}.Toastify__toast--default{background:#fff;color:#aaa}.Toastify__toast--info{background:#3498db}.Toastify__toast--success{background:#07bc0c}.Toastify__toast--warning{background:#f1c40f}.Toastify__toast--error{background:#e74c3c}.Toastify__toast-body{margin:auto 0;-ms-flex:1 1 auto;flex:1 1 auto}@media only screen and (max-width:480px){.Toastify__toast{margin-bottom:0}}.Toastify__close-button{color:#fff;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;-ms-flex-item-align:start;align-self:flex-start}.Toastify__close-button--default{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:focus,.Toastify__close-button:hover{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:5px;z-index:9999;opacity:.7;background-color:hsla(0,0%,100%,.7);transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:auto;transform-origin:right}.Toastify__progress-bar--default{background:linear-gradient(90deg,#4cd964,#5ac8fa,#007aff,#34aadc,#5856d6,#ff2d55)}.Toastify__progress-bar--dark{background:#bb86fc}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,0,0)}to{opacity:0;transform:translate3d(2000px,0,0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,0,0)}to{opacity:0;transform:translate3d(-2000px,0,0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,-10px,0)}40%,45%{opacity:1;transform:translate3d(0,20px,0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,10px,0)}40%,45%{opacity:1;transform:translate3d(0,-20px,0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--bottom-left,.Toastify__bounce-enter--top-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--bottom-right,.Toastify__bounce-enter--top-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--bottom-left,.Toastify__bounce-exit--top-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--bottom-right,.Toastify__bounce-exit--top-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:perspective(400px)}30%{transform:perspective(400px) rotateX(-20deg);opacity:1}to{transform:perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translateZ(0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translateZ(0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes Toastify__slideOutRight{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(110%,0,0)}}@keyframes Toastify__slideOutLeft{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(-110%,0,0)}}@keyframes Toastify__slideOutDown{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--bottom-left,.Toastify__slide-enter--top-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--bottom-right,.Toastify__slide-enter--top-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--bottom-left,.Toastify__slide-exit--top-left{animation-name:Toastify__slideOutLeft}.Toastify__slide-exit--bottom-right,.Toastify__slide-exit--top-right{animation-name:Toastify__slideOutRight}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown}.cui .Toastify__toast{min-height:unset!important;padding:unset;overflow:unset;font-family:unset;box-shadow:unset}.cui .Toastify__toast--default,.cui .Toastify__toast-container{color:unset}";
    styleInject(css_248z$2);

    var copyStringToClipboard = function (str) {
        // Create new element
        var el = document.createElement("textarea");
        // Set value (string to be copied)
        el.value = typeof str === "string" ? str : str.toString();
        // Set non-editable to avoid focus and move outside of view
        el.setAttribute("readonly", "");
        el.style["position"] = "absolute";
        el.style["left"] = "-9999px";
        document.body.appendChild(el);
        // Select text inside element
        el.select();
        // Copy text to clipboard
        document.execCommand("copy");
        // Remove temporary element
        document.body.removeChild(el);
    };
    var iconType = function (type) {
        switch (type) {
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
    var ToastIcon = function (_a) {
        var type = _a.type;
        return React__default.createElement("div", { className: "toast__icon " + (iconType(type) || "") });
    };
    var Toast$1 = function (_a) {
        var title = _a.title, message = _a.message, type = _a.type, copyError = _a.copyError;
        return (React__default.createElement("div", { className: "toast" },
            React__default.createElement(ToastIcon, { type: type }),
            React__default.createElement("div", { className: "toast__body" },
                title ? React__default.createElement("div", { className: "toast__title" }, title) : null,
                message ? (React__default.createElement("div", { className: "toast__message" },
                    message,
                    type === "error" && copyError ? (React__default.createElement(React__default.Fragment, null,
                        React__default.createElement("br", null),
                        React__default.createElement("br", null),
                        React__default.createElement("a", { onClick: function () { return copyStringToClipboard(message); } }, "Copy to clipboard"))) : null)) : null)));
    };
    var Fade = cssTransition({
        enter: "fadeIn",
        exit: "fadeOut",
        duration: 300,
    });
    var toast$1 = function (type, title, message, copyError, containerId, args) {
        if (copyError === void 0) { copyError = true; }
        if (containerId === void 0) { containerId = "_GLOBAL_"; }
        if (args === void 0) { args = {}; }
        return toast(React__default.createElement(Toast$1, __assign({}, { type: type, title: title, message: message, copyError: copyError })), __assign({ containerId: containerId }, args));
    };
    toast$1.success = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return toast$1.apply(void 0, __spreadArrays(["success"], args));
    };
    toast$1.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return toast$1.apply(void 0, __spreadArrays(["error"], args));
    };
    toast$1.warning = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return toast$1.apply(void 0, __spreadArrays(["warning"], args));
    };
    toast$1.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return toast$1.apply(void 0, __spreadArrays(["info"], args));
    };
    toast$1.none = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return toast$1.apply(void 0, __spreadArrays(["none"], args));
    };
    toast$1.update = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return toast.update.apply(toast, args);
    };
    toast$1.dismiss = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return toast.dismiss.apply(toast, args);
    };
    var ToastContainer$1 = function (_a) {
        var _b = _a.position, position = _b === void 0 ? "bottom-right" : _b, _c = _a.autoClose, autoClose = _c === void 0 ? 5000 : _c, _d = _a.draggable, draggable = _d === void 0 ? false : _d, _e = _a.hideProgressBar, hideProgressBar = _e === void 0 ? true : _e, _f = _a.containerId, containerId = _f === void 0 ? "_GLOBAL_" : _f, props = __rest(_a, ["position", "autoClose", "draggable", "hideProgressBar", "containerId"]);
        return (React__default.createElement(ToastContainer, __assign({ transition: Fade, position: position, autoClose: autoClose, draggable: draggable, hideProgressBar: hideProgressBar, containerId: containerId }, props, { closeButton: false, style: {
                width: "unset",
            } })));
    };
    ToastContainer$1.propTypes = {
        position: PropTypes.oneOf([
            "top-right",
            "top-center",
            "top-left",
            "bottom-right",
            "bottom-center",
            "bottom-left",
        ]),
        autoClose: PropTypes.number,
        draggable: PropTypes.bool,
        hideProgressBar: PropTypes.bool,
        containerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    var Header = function (_a) {
        var children = _a.children, _b = _a.fluid, fluid = _b === void 0 ? false : _b, props = __rest(_a, ["children", "fluid"]);
        return (React__default.createElement("header", __assign({ className: "header" }, props),
            React__default.createElement("div", { className: "container" + (fluid ? "-fluid" : "") },
                React__default.createElement("div", { className: "header-panels" }, children))));
    };
    Header.propTypes = {
        children: PropTypes.node.isRequired,
        fluid: PropTypes.bool,
    };
    var HeaderPanel = function (_a) {
        var children = _a.children, _b = _a.center, center = _b === void 0 ? false : _b, _c = _a.right, right = _c === void 0 ? false : _c, _d = _a.className, className = _d === void 0 ? null : _d, props = __rest(_a, ["children", "center", "right", "className"]);
        return (React__default.createElement("div", __assign({ className: "header-panel" + appendClass(center, "header-panel--center") + appendClass(right, " header-panel--right") + appendClass(className) }, props), children));
    };
    HeaderPanel.propTypes = {
        children: PropTypes.node.isRequired,
        center: PropTypes.bool,
        right: PropTypes.bool,
        className: PropTypes.string,
    };
    var HeaderTitle = function (_a) {
        var _b = _a.icon, icon = _b === void 0 ? true : _b, _c = _a.link, link = _c === void 0 ? null : _c, title = _a.title, props = __rest(_a, ["icon", "link", "title"]);
        return (React__default.createElement(HeaderPanel, __assign({}, props),
            icon ? (React__default.createElement("a", { className: "header__logo", href: link || "http://www.cisco.com", target: "_blank", rel: "noopener noreferrer" },
                React__default.createElement("span", { className: typeof icon === "string" ? "icon-" + icon : "icon-cisco" }))) : null,
            React__default.createElement("div", { className: "header__title" }, title)));
    };
    HeaderTitle.propTypes = {
        icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
        link: PropTypes.string,
        title: PropTypes.string.isRequired,
        className: PropTypes.string,
    };

    var Footer = function () { return (React__default.createElement("footer", { className: "footer" },
        React__default.createElement("div", { className: "footer__links" },
            React__default.createElement("ul", { className: "list list--inline" },
                React__default.createElement("li", null,
                    React__default.createElement("a", { href: "http://www.cisco.com/cisco/web/siteassets/contacts/index.html", target: "_blank", rel: "noopener noreferrer" }, "Contacts")),
                React__default.createElement("li", null,
                    React__default.createElement("a", { href: "https://secure.opinionlab.com/ccc01/o.asp?id=jBjOhqOJ", target: "_blank", rel: "noopener noreferrer" }, "Feedback")),
                React__default.createElement("li", null,
                    React__default.createElement("a", { href: "https://www.cisco.com/c/en/us/about/help.html", target: "_blank", rel: "noopener noreferrer" }, "Help")),
                React__default.createElement("li", null,
                    React__default.createElement("a", { href: "http://www.cisco.com/c/en/us/about/sitemap.html", target: "_blank", rel: "noopener noreferrer" }, "Site Map")),
                React__default.createElement("li", null,
                    React__default.createElement("a", { href: "https://www.cisco.com/c/en/us/about/legal/terms-conditions.html", target: "_blank", rel: "noopener noreferrer" }, "Terms & Conditions")),
                React__default.createElement("li", null,
                    React__default.createElement("a", { href: "https://www.cisco.com/c/en/us/about/legal/privacy-full.html", target: "_blank", rel: "noopener noreferrer" }, "Privacy Statement")),
                React__default.createElement("li", null,
                    React__default.createElement("a", { href: "https://www.cisco.com/c/en/us/about/legal/privacy-full.html#cookies", target: "_blank", rel: "noopener noreferrer" }, "Cookie Policy")),
                React__default.createElement("li", null,
                    React__default.createElement("a", { href: "https://www.cisco.com/c/en/us/about/legal/trademarks.html", target: "_blank", rel: "noopener noreferrer" }, "Trademarks")))))); };

    var Wrapper = React__default.createElement("div", { className: "responsive-table" });
    var GenericTable = function (_a) {
        var _b = _a.outerWrap, outerWrap = _b === void 0 ? true : _b, _c = _a.lined, lined = _c === void 0 ? false : _c, _d = _a.bordered, bordered = _d === void 0 ? false : _d, _e = _a.striped, striped = _e === void 0 ? false : _e, _f = _a.selectable, selectable = _f === void 0 ? false : _f, _g = _a.fixed, fixed = _g === void 0 ? false : _g, _h = _a.wrapped, wrapped = _h === void 0 ? false : _h, _j = _a.compressed, compressed = _j === void 0 ? false : _j, _k = _a.loose, loose = _k === void 0 ? false : _k, _l = _a.className, className = _l === void 0 ? null : _l, props = __rest(_a, ["outerWrap", "lined", "bordered", "striped", "selectable", "fixed", "wrapped", "compressed", "loose", "className"]);
        return (React__default.createElement(ConditionalWrapper, { condition: outerWrap, wrapper: Wrapper },
            React__default.createElement("table", __assign({ className: "table" + appendClass(lined, "table--lined") + appendClass(bordered, "table--bordered") + appendClass(striped, "table--striped") + appendClass(selectable, "table--selectable") + appendClass(fixed, "table--fixed") + appendClass(wrapped, "table--wrapped") + appendClass(compressed, "table--compressed") + appendClass(loose, "table--loose") + appendClass(className) }, props))));
    };
    GenericTable.propTypes = {
        outerWrap: PropTypes.bool,
        lined: PropTypes.bool,
        bordered: PropTypes.bool,
        striped: PropTypes.bool,
        selectable: PropTypes.bool,
        fixed: PropTypes.bool,
        wrapped: PropTypes.bool,
        compressed: PropTypes.bool,
        loose: PropTypes.bool,
        className: PropTypes.string,
    };

    var PaginationContext = React__default.createContext(null);
    var Button$1 = function (_a) {
        var content = _a.content, position = _a.position, _b = _a.active, active = _b === void 0 ? false : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c;
        return (React__default.createElement(PaginationContext.Consumer, null, function (_a) {
            var changePage = _a.changePage;
            return (React__default.createElement("li", { className: active ? "active" : "" },
                React__default.createElement("a", { className: disabled ? "disabled" : "", onClick: function (e) { return changePage(e, position); } }, content)));
        }));
    };
    Button$1.propTypes = {
        active: PropTypes.bool,
        content: PropTypes.node.isRequired,
        disabled: PropTypes.bool,
        position: PropTypes.number.isRequired,
    };
    var FirstPrev = function () {
        var _a = React__default.useContext(PaginationContext), perPage = _a.perPage, firstAndLast = _a.firstAndLast, position = _a.position, icons = _a.icons, prev = _a.prev, beginAt = _a.beginAt;
        var disabled = position < perPage + beginAt;
        var r = [];
        if (icons && firstAndLast)
            r.push(React__default.createElement(Button$1, { content: React__default.createElement("span", { className: "icon-chevron-left-double" }), disabled: disabled, key: "first-page", position: beginAt }));
        r.push(React__default.createElement(Button$1, { content: icons ? React__default.createElement("span", { className: "icon-chevron-left" }) : prev, disabled: disabled, key: "previous-page", position: position - perPage }));
        return React__default.createElement(React__default.Fragment, null, r);
    };
    var NextLast = function () {
        var _a = React__default.useContext(PaginationContext), beginAt = _a.beginAt, perPage = _a.perPage, total = _a.total, firstAndLast = _a.firstAndLast, position = _a.position, icons = _a.icons, next = _a.next;
        var pages = Math.floor(total / perPage) + 1;
        var disabled = position > total - perPage + beginAt;
        var r = [];
        r.push(React__default.createElement(Button$1, { content: icons ? React__default.createElement("span", { className: "icon-chevron-right" }) : next, disabled: disabled, key: "next-page", position: position + perPage }));
        if (icons && firstAndLast)
            r.push(React__default.createElement(Button$1, { content: React__default.createElement("span", { className: "icon-chevron-right-double" }), disabled: disabled, key: "last-page", position: (pages - 1) * perPage + beginAt }));
        return React__default.createElement(React__default.Fragment, null, r);
    };
    var Pages = function (_a) {
        var start = _a.start, finish = _a.finish;
        return (React__default.createElement(PaginationContext.Consumer, null, function (_a) {
            var perPage = _a.perPage, active = _a.active, beginAt = _a.beginAt;
            return __spreadArrays(Array(finish - start + 1)).map(function (v, i) {
                var current = start + i;
                return (React__default.createElement(Button$1, { active: active === current, content: "" + current, key: current + "-page", position: (current - 1) * perPage + beginAt }));
            });
        }));
    };
    Pages.propTypes = {
        start: PropTypes.number.isRequired,
        finish: PropTypes.number.isRequired,
    };
    var Pagination = function (_a) {
        var _b = _a.beginAt, beginAt = _b === void 0 ? 1 : _b, _c = _a.rounded, rounded = _c === void 0 ? false : _c, _d = _a.firstAndLast, firstAndLast = _d === void 0 ? true : _d, _e = _a.icons, icons = _e === void 0 ? false : _e, _f = _a.next, next = _f === void 0 ? "Next" : _f, _g = _a.perPage, perPage = _g === void 0 ? 1 : _g, _h = _a.prev, prev = _h === void 0 ? "Previous" : _h, _j = _a.size, size = _j === void 0 ? "default" : _j, _k = _a.className, className = _k === void 0 ? null : _k, position = _a.position, total = _a.total, onPageChange = _a.onPageChange, rest = __rest(_a, ["beginAt", "rounded", "firstAndLast", "icons", "next", "perPage", "prev", "size", "className", "position", "total", "onPageChange"]);
        var pages = Math.ceil(total / perPage);
        var active = Math.floor(position / perPage) + 1;
        var changePage = function (e, newPosition) {
            if (typeof onPageChange === "function")
                onPageChange(e, newPosition);
        };
        return (React__default.createElement(PaginationContext.Provider, { value: {
                active: active,
                beginAt: beginAt,
                changePage: changePage,
                firstAndLast: firstAndLast,
                icons: icons,
                next: next,
                perPage: perPage,
                position: position,
                prev: prev,
                total: total,
            } },
            React__default.createElement("ul", __assign({ className: "pagination" + (size !== "default" ? " pagination--" + size : "") + (rounded ? " pagination--rounded" : "") + (className ? " " + className : "") }, rest),
                React__default.createElement(FirstPrev, null),
                active < 4 || pages === 4 ? (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement(Pages, { start: 1, finish: Math.min(pages, 4) }),
                    pages > 4 ? (React__default.createElement(React__default.Fragment, null,
                        React__default.createElement("li", null,
                            React__default.createElement("span", { className: "icon-more" })),
                        React__default.createElement(Button$1, { content: pages, key: pages + "-page", position: (pages - 1) * perPage + beginAt }))) : null)) : (React__default.createElement(React__default.Fragment, null,
                    React__default.createElement(Button$1, { active: active === beginAt, content: "1", key: "1-page", position: beginAt }),
                    React__default.createElement("li", null,
                        React__default.createElement("span", { className: "icon-more" })),
                    active < pages - 2 ? (React__default.createElement(React__default.Fragment, null,
                        React__default.createElement(Pages, { start: active - 1, finish: active + 1 }),
                        React__default.createElement("li", null,
                            React__default.createElement("span", { className: "icon-more" })),
                        React__default.createElement(Button$1, { active: active === pages, content: pages, key: pages + "-page", position: (pages - 1) * perPage + beginAt }))) : (React__default.createElement(Pages, { start: pages - 3, finish: pages })))),
                React__default.createElement(NextLast, null))));
    };
    Pagination.propTypes = {
        size: PropTypes.oneOf(["small", "default", "large"]),
        rounded: PropTypes.bool,
        icons: PropTypes.bool,
        next: PropTypes.node,
        prev: PropTypes.node,
        position: PropTypes.number.isRequired,
        perPage: PropTypes.number,
        total: PropTypes.number.isRequired,
        onPageChange: PropTypes.func.isRequired,
        firstAndLast: PropTypes.bool,
        beginAt: PropTypes.number,
        className: PropTypes.string,
    };

    var DefaultTablePagination = function (_a) {
        var _b = _a.perPageUp, perPageUp = _b === void 0 ? false : _b, _c = _a.paginationProps, paginationProps = _c === void 0 ? {} : _c, total = _a.total, position = _a.position, onPageChange = _a.onPageChange, onPerPageChange = _a.onPerPageChange;
        var _d = React__default.useState(50), perPage = _d[0], setPerPage = _d[1];
        React__default.useEffect(function () {
            if (typeof onPerPageChange === "function")
                onPerPageChange(perPage);
        }, [perPage, onPerPageChange]);
        return (React__default.createElement("div", { className: "flex-middle" },
            React__default.createElement("span", { className: "qtr-margin-right" }, "Page:"),
            React__default.createElement(Pagination, __assign({ firstAndLast: true, icons: true, perPage: perPage, total: total, position: position, onPageChange: onPageChange, beginAt: 0, className: "no-margin-top" }, paginationProps)),
            React__default.createElement("span", { className: "text-muted qtr-margin-left qtr-margin-right" }, "|"),
            React__default.createElement("span", { className: "qtr-margin-right" }, "Per page:"),
            React__default.createElement(Dropdown, { type: "link", header: perPage, openTo: "left", alwaysClose: true, up: perPageUp }, [10, 25, 50, 100, 250, 500].map(function (v) { return (React__default.createElement(Dropdown.Element, { onClick: function () { return setPerPage(v); }, key: v, selected: v === perPage }, v)); }))));
    };

    var asArray = function (v) { return (Array.isArray(v) ? v : [v]); };
    var Table = function (_a) {
        var _b = _a.pagination, pagination = _b === void 0 ? DefaultTablePagination : _b, _c = _a.paginationLocation, paginationLocation = _c === void 0 ? "bottom-right" : _c, _d = _a.paginationProps, paginationProps = _d === void 0 ? {
            icons: true,
            firstAndLast: true,
        } : _d, _e = _a.data, data = _e === void 0 ? null : _e, _f = _a.children, children = _f === void 0 ? null : _f, _g = _a.start, start = _g === void 0 ? 1 : _g, props = __rest(_a, ["pagination", "paginationLocation", "paginationProps", "data", "children", "start"]);
        var _h = React__default.useState(typeof start === "number" ? start : 0), position = _h[0], setPosition = _h[1];
        var _j = React__default.useState(50), perPage = _j[0], setPerPage = _j[1];
        var tbody = React__default.useMemo(function () {
            return children
                ? asArray(children).find(function (child) { return child.type === "tbody"; })
                : null;
        }, [children]);
        var thead = React__default.useMemo(function () {
            return children
                ? asArray(children).find(function (child) { return child.type === "thead"; })
                : null;
        }, [children]);
        var total = React__default.useMemo(function () { return (data ? data.length : asArray(tbody.props.children).length) || 0; }, [data, tbody]);
        React__default.useEffect(function () { return setPosition(0); }, [data, tbody]);
        return (React__default.createElement(React__default.Fragment, null,
            React__default.createElement(DisplayIf, { condition: paginationLocation.includes("top-") },
                React__default.createElement("div", { className: "flex base-margin-bottom" + appendClass(paginationLocation === "top-right", "flex-right") }, React__default.createElement(pagination, {
                    total: total,
                    position: position,
                    onPageChange: function (_, p) { return setPosition(p); },
                    onPerPageChange: function (p) { return setPerPage(p); },
                    paginationProps: paginationProps,
                }))),
            React__default.createElement(GenericTable, __assign({}, props),
                thead,
                React__default.createElement("tbody", null, data
                    ? data.slice(position, position + perPage).map(function (row, rid) { return (React__default.createElement("tr", { key: rid }, row.map(function (col, cid) { return (React__default.createElement("td", { key: cid }, col)); }))); })
                    : asArray(tbody.props.children).slice(position, position + perPage))),
            React__default.createElement(DisplayIf, { condition: paginationLocation.includes("bottom-") },
                React__default.createElement("div", { className: "flex base-margin-top" + appendClass(paginationLocation === "bottom-right", "flex-right") }, React__default.createElement(pagination, {
                    total: total,
                    position: position,
                    onPageChange: function (_, p) { return setPosition(p); },
                    onPerPageChange: function (p) { return setPerPage(p); },
                    perPageUp: true,
                    paginationProps: paginationProps,
                })))));
    };
    var ALLOWED_TABLE_CHILD = ["thead", "tbody"];
    var allowedChild = function (type) { return ALLOWED_TABLE_CHILD.includes(type); };
    Table.propTypes = {
        pagination: PropTypes.elementType,
        paginationLocation: PropTypes.oneOf([
            "top-left",
            "bottom-left",
            "bottom-right",
            "top-right",
        ]),
        data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)),
        children: function (props, propName, componentName) {
            var _a = props, _b = propName, t = _a[_b];
            var err = new Error("Invalid prop `" + propName + "` supplied to" +
                (" `" + componentName + "`. Validation failed, should be one of:") +
                (" " + ALLOWED_TABLE_CHILD.join(", ") + "."));
            if (Array.isArray(t)) {
                if (!t.every(function (ch) { return allowedChild(ch.type); }))
                    return err;
            }
            else if (t && !allowedChild(t.type))
                return err;
            return null;
        },
        start: PropTypes.number,
    };

    var Checkbox = function (_a) {
        var _b = _a.inline, inline = _b === void 0 ? false : _b, _c = _a.asFormGroup, asFormGroup = _c === void 0 ? true : _c, _d = _a.children, children = _d === void 0 ? null : _d, field = _a.field, form = _a.form;
        return (React__default.createElement(ConditionalWrapper, { condition: asFormGroup, wrapper: React__default.createElement("div", { className: "form-group " + (inline ? "form-group--inline" : "") }) },
            React__default.createElement("label", { className: "checkbox" },
                React__default.createElement("input", __assign({ type: "checkbox" }, field, { checked: formik.getIn(form.values, field.name, false) })),
                React__default.createElement("span", { className: "checkbox__input" }),
                children ? React__default.createElement("span", { className: "checkbox__label" }, children) : null)));
    };
    Checkbox.propTypes = {
        inline: PropTypes.bool,
        asFormGroup: PropTypes.bool,
        children: PropTypes.node,
    };

    var Switch = function (_a) {
        var _b = _a.left, left = _b === void 0 ? null : _b, _c = _a.right, right = _c === void 0 ? null : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.inline, inline = _e === void 0 ? false : _e, _f = _a.spacing, spacing = _f === void 0 ? null : _f, _g = _a.asFormGroup, asFormGroup = _g === void 0 ? true : _g, _h = _a.className, className = _h === void 0 ? null : _h, _j = _a.id, id = _j === void 0 ? null : _j, _k = _a.style, style = _k === void 0 ? null : _k, field = _a.field, form = _a.form;
        return (React__default.createElement(ConditionalWrapper, { condition: asFormGroup, wrapper: React__default.createElement("div", { className: "form-group" + appendClass(inline, "form-group--inline") + appendClass(className) + appendClass(spacing, " form-group--" + spacing), style: style }) },
            React__default.createElement("label", { className: "switch" + (disabled ? " disabled" : ""), htmlFor: id || field.name },
                React__default.createElement("input", __assign({ type: "checkbox" }, field, { id: id || field.name, checked: formik.getIn(form.values, field.name, false) })),
                left ? React__default.createElement("span", { className: "switch__label" }, left) : null,
                React__default.createElement("span", { className: "switch__input" }),
                right ? React__default.createElement("span", { className: "switch__label" }, right) : null)));
    };
    Switch.propTypes = {
        left: PropTypes.node,
        right: PropTypes.node,
        disabled: PropTypes.bool,
        inline: PropTypes.bool,
        spacing: PropTypes.oneOf(["compressed", "loose"]),
        asFormGroup: PropTypes.bool,
        className: PropTypes.string,
        id: PropTypes.string,
        style: PropTypes.shape({}),
    };

    var Input = function (_a) {
        var _b = _a.type, type = _b === void 0 ? "text" : _b, _c = _a.inline, inline = _c === void 0 ? null : _c, _d = _a.helpBlock, helpBlock = _d === void 0 ? true : _d, _e = _a.label, label = _e === void 0 ? null : _e, _f = _a.icon, icon = _f === void 0 ? null : _f, _g = _a.iconClick, iconClick = _g === void 0 ? null : _g, _h = _a.id, id = _h === void 0 ? null : _h, _j = _a.className, className = _j === void 0 ? null : _j, _k = _a.plain, plain = _k === void 0 ? false : _k, _l = _a.inputRef, inputRef = _l === void 0 ? null : _l, field = _a.field, _m = _a.form, touched = _m.touched, errors = _m.errors, rest = __rest(_a, ["type", "inline", "helpBlock", "label", "icon", "iconClick", "id", "className", "plain", "inputRef", "field", "form"]);
        return (React__default.createElement("div", { className: "form-group" + appendClass(className) + appendClass(formik.getIn(touched, field.name) && formik.getIn(errors, field.name), "form-group--error") + appendClass(inline === "form" || inline === "both", "form-group--inline") + appendClass(inline === "label" || inline === "both", "label--inline") + appendClass(icon, "input--icon") },
            React__default.createElement("div", { className: "form-group__text" },
                React__default.createElement("input", __assign({}, field, { id: id || field.name, type: type, ref: inputRef }, rest, { className: appendClass(plain, "form-group--plaintext") })),
                label ? React__default.createElement("label", { htmlFor: id || field.name }, label) : null,
                icon ? (React__default.createElement("button", { type: "button", className: "link", tabIndex: -1, onClick: iconClick },
                    React__default.createElement("span", { className: "icon-" + icon }))) : null),
            React__default.createElement(DisplayIf, { condition: !inline &&
                    helpBlock &&
                    !!formik.getIn(touched, field.name) &&
                    !!formik.getIn(errors, field.name) },
                React__default.createElement(InputHelpBlock, { text: formik.getIn(errors, field.name) }))));
    };
    Input.propTypes = {
        label: PropTypes.node,
        type: PropTypes.string,
        inline: PropTypes.oneOf(["group", "label", "both", "form"]),
        helpBlock: PropTypes.bool,
        iconClick: PropTypes.func,
        icon: PropTypes.string,
        id: PropTypes.string,
        className: PropTypes.string,
        plain: PropTypes.bool,
    };

    var css_248z$3 = "@-webkit-keyframes fade-out{0%{opacity:1}to{opacity:0}}@keyframes fade-out{0%{opacity:1}to{opacity:0}}.cui .modal-backdrop{background:rgba(196,199,204,.65);pointer-events:all;opacity:1;transition:opacity .15s linear;outline:none}.cui .ReactModal__Overlay--before-close .modal__dialog{-webkit-animation:blowdown .3s cubic-bezier(.165,.84,.44,1) forwards,fade-out .25s linear 1!important;animation:blowdown .3s cubic-bezier(.165,.84,.44,1) forwards,fade-out .25s linear 1!important}.cui .ReactModal__Overlay--before-close{opacity:0!important}body.cui .modal .modal__content div.modal__close>a{color:var(--cui-inactive-color)}body.cui .modal .modal__content div.modal__close>a:hover{color:var(--cui-active-color);text-decoration:none}";
    styleInject(css_248z$3);

    var ModalHeader = function (_a) {
        var _b = _a.className, className = _b === void 0 ? null : _b, children = _a.children, props = __rest(_a, ["className", "children"]);
        return (React__default.createElement("div", __assign({ className: "modal__header" + appendClass(className) }, props), children));
    };
    ModalHeader.propTypes = {
        className: PropTypes.string,
        children: PropTypes.node.isRequired,
    };
    var ModalBody = function (_a) {
        var _b = _a.className, className = _b === void 0 ? null : _b, children = _a.children, props = __rest(_a, ["className", "children"]);
        return (React__default.createElement("div", __assign({ className: "modal__body" + appendClass(className) }, props), children));
    };
    ModalBody.propTypes = {
        className: PropTypes.string,
        children: PropTypes.node.isRequired,
    };
    var ModalFooter = function (_a) {
        var _b = _a.className, className = _b === void 0 ? null : _b, children = _a.children, props = __rest(_a, ["className", "children"]);
        return (React__default.createElement("div", __assign({ className: "modal__footer" + appendClass(className) }, props), children));
    };
    ModalFooter.propTypes = {
        className: PropTypes.string,
        children: PropTypes.node.isRequired,
    };
    var Modal = function (_a) {
        var _b = _a.size, size = _b === void 0 ? null : _b, _c = _a.autoClose, autoClose = _c === void 0 ? true : _c, _d = _a.animationDuration, animationDuration = _d === void 0 ? 250 : _d, _e = _a.closeIcon, closeIcon = _e === void 0 ? false : _e, _f = _a.title, title = _f === void 0 ? null : _f, _g = _a.closeHandle, closeHandle = _g === void 0 ? null : _g, _h = _a.left, left = _h === void 0 ? false : _h, _j = _a.transitionEvents, transitionEvents = _j === void 0 ? null : _j, _k = _a.dialogProps, dialogProps = _k === void 0 ? null : _k, _l = _a.contentProps, contentProps = _l === void 0 ? null : _l, _m = _a.maximize, maximize = _m === void 0 ? false : _m, children = _a.children, isOpen = _a.isOpen, props = __rest(_a, ["size", "autoClose", "animationDuration", "closeIcon", "title", "closeHandle", "left", "transitionEvents", "dialogProps", "contentProps", "maximize", "children", "isOpen"]);
        var _o = React__default.useState(false), maximized = _o[0], setMaximized = _o[1];
        React__default.useEffect(function () { return setMaximized(false); }, [isOpen]);
        var realSize = React__default.useMemo(function () { return (maximized ? "full" : size); }, [
            maximized,
            size,
        ]);
        var maximizeCb = React__default.useCallback(function () {
            setMaximized(function (curr) { return !curr; });
        }, []);
        return (React__default.createElement(Transition, __assign({ in: isOpen, mountOnEnter: true, unmountOnExit: true, timeout: animationDuration }, transitionEvents), function (state) { return (React__default.createElement(ReactModal, __assign({}, props, { onRequestClose: autoClose && closeHandle ? closeHandle : undefined, overlayClassName: "modal-backdrop", isOpen: ["entering", "entered"].includes(state), className: "modal" + appendClass(realSize, "modal--" + realSize) + appendClass(left, "modal--left"), closeTimeoutMS: typeof animationDuration === "object"
                ? animationDuration.exit
                : animationDuration }),
            React__default.createElement("div", __assign({ className: "modal__dialog" }, dialogProps, { onClick: function (e) { return e.stopPropagation(); } }),
                React__default.createElement("div", __assign({ className: "modal__content" }, contentProps),
                    React__default.createElement(DisplayIf, { condition: !!(closeIcon && closeHandle) || maximize },
                        React__default.createElement(ConditionalWrapper, { condition: !!(closeIcon && closeHandle) && maximize, wrapper: React__default.createElement("div", { className: "modal__close" }) },
                            React__default.createElement(DisplayIf, { condition: maximize },
                                React__default.createElement("a", { className: "" + appendClass(!(closeIcon && closeHandle), "modal__close") + appendClass(closeIcon && closeHandle, "qtr-margin-right"), onClick: maximizeCb },
                                    React__default.createElement("span", { className: maximized ? "icon-minimize" : "icon-maximize" }))),
                            React__default.createElement(DisplayIf, { condition: !!(closeIcon && closeHandle) },
                                React__default.createElement("a", { className: !maximize ? "modal__close" : "", onClick: closeHandle },
                                    React__default.createElement("span", { className: "icon-close" }))))),
                    React__default.createElement(DisplayIf, { condition: !!title },
                        React__default.createElement(ModalHeader, null,
                            React__default.createElement("h1", { className: "modal__title" }, title))),
                    children)))); }));
    };
    Modal.propTypes = {
        size: PropTypes.oneOf(["small", "default", "large", "full", "fluid"]),
        closeIcon: PropTypes.bool,
        closeHandle: PropTypes.func,
        title: PropTypes.string,
        isOpen: PropTypes.bool.isRequired,
        autoClose: PropTypes.bool,
        left: PropTypes.bool,
        children: PropTypes.node.isRequired,
        transitionEvents: PropTypes.objectOf(PropTypes.func),
        dialogProps: PropTypes.shape({}),
        contentProps: PropTypes.shape({}),
        maximize: PropTypes.bool,
    };
    Modal.Small = function (props) { return React__default.createElement(Modal, __assign({}, props, { size: "small" })); };
    Modal.Large = function (props) { return React__default.createElement(Modal, __assign({}, props, { size: "large" })); };
    Modal.Full = function (props) { return React__default.createElement(Modal, __assign({}, props, { size: "full" })); };
    Modal.Fluid = function (props) { return React__default.createElement(Modal, __assign({}, props, { size: "fluid" })); };
    Modal.Header = ModalHeader;
    Modal.Body = ModalBody;
    Modal.Footer = ModalFooter;
    var ConfirmationModal = function (_a) {
        var _b = _a.isOpen, isOpen = _b === void 0 ? false : _b, _c = _a.confirmType, confirmType = _c === void 0 ? "primary" : _c, _d = _a.autoClose, autoClose = _d === void 0 ? true : _d, _e = _a.confirmText, confirmText = _e === void 0 ? "Confirm" : _e, confirmHandle = _a.confirmHandle, closeHandle = _a.closeHandle, prompt = _a.prompt;
        var _f = React__default.useState(false), doing = _f[0], setDoing = _f[1];
        return (React__default.createElement(Modal, { isOpen: isOpen, closeIcon: true, closeHandle: closeHandle, autoClose: autoClose, title: "Confirmation" },
            React__default.createElement(ModalBody, null, prompt),
            React__default.createElement(ModalFooter, null,
                React__default.createElement(Button.Light, { onClick: closeHandle }, "Close"),
                React__default.createElement(Button, { color: confirmType, disabled: doing, onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    setDoing(true);
                                    return [4 /*yield*/, confirmHandle()];
                                case 1:
                                    if (_a.sent())
                                        setDoing(false);
                                    return [2 /*return*/];
                            }
                        });
                    }); } },
                    confirmText,
                    doing ? (React__default.createElement("span", { className: "icon-animation spin qtr-margin-left" })) : null))));
    };
    ConfirmationModal.propTypes = {
        isOpen: PropTypes.bool,
        confirmHandle: PropTypes.func.isRequired,
        closeHandle: PropTypes.func.isRequired,
        prompt: PropTypes.node.isRequired,
        confirmText: PropTypes.string,
        autoClose: PropTypes.bool,
    };
    function PromptModal(_a) {
        var _this = this;
        var title = _a.title, question = _a.question, cb = _a.onSave, onClose = _a.onClose, initial = _a.initial, type = _a.type, isOpen = _a.isOpen, hint = _a.hint, validate = _a.validate;
        var _b = React__default.useState(initial), val = _b[0], setVal = _b[1];
        var onSave = React__default.useCallback(function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = typeof validate === "function";
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, validate(val)];
                    case 1:
                        _a = !(_b.sent());
                        _b.label = 2;
                    case 2:
                        if (_a)
                            return [2 /*return*/];
                        onClose();
                        cb(val);
                        return [2 /*return*/];
                }
            });
        }); }, [onClose, cb, val, validate]);
        React__default.useLayoutEffect(function () { return setVal(initial); }, [initial]);
        return (React__default.createElement(Modal, { isOpen: isOpen, closeIcon: true, closeHandle: onClose, title: title },
            React__default.createElement(ModalBody, null,
                React__default.createElement(Input, { type: type, form: { errors: {}, touched: {}, values: { promptInput: val } }, field: {
                        onChange: function (e) { return setVal(e.target.value); },
                        name: "promptInput",
                        value: val,
                    }, label: React__default.createElement(React__default.Fragment, null,
                        question,
                        React__default.createElement(DisplayIf, { condition: !!hint && typeof hint === "string" },
                            React__default.createElement("span", { "data-balloon": hint, "data-balloon-length": "large", "data-balloon-pos": "up" },
                                React__default.createElement("span", { className: "icon-question-circle qtr-margin-left", style: { cursor: "help" } })))) })),
            React__default.createElement(ModalFooter, null,
                React__default.createElement(Button, { color: "light", onClick: onClose }, "Close"),
                React__default.createElement(Button, { color: "primary", onClick: onSave }, "OK"))));
    }
    PromptModal.propTypes = {
        title: PropTypes.node.isRequired,
        question: PropTypes.node.isRequired,
        onSave: PropTypes.func.isRequired,
        onClose: PropTypes.func,
        initial: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        type: PropTypes.string,
        isOpen: PropTypes.bool.isRequired,
        hint: PropTypes.node,
        validate: PropTypes.func,
    };
    PromptModal.defaultProps = {
        onClose: null,
        initial: null,
        type: "text",
        hint: null,
        validate: null,
    };
    var ConfirmationListener = function () {
        var _a = React__default.useState([]), modals = _a[0], setModals = _a[1];
        var addModal = React__default.useCallback(function (modal) {
            return setModals(function (curr) { return __spreadArrays(curr, [__assign({ id: Date.now(), shown: true }, modal)]); });
        }, []);
        var hideModal = React__default.useCallback(function (id) {
            setModals(function (curr) {
                return curr.map(function (m) { return (m.id === id ? __assign(__assign({}, m), { shown: false }) : m); });
            });
        }, []);
        var deleteModal = React__default.useCallback(function (id) {
            setModals(function (curr) { return curr.filter(function (m) { return m.id !== id; }); });
        }, []);
        var closeModal = React__default.useCallback(function (id) {
            hideModal(id);
            setTimeout(function () { return deleteModal(id); }, 500);
        }, [hideModal, deleteModal]);
        React__default.useEffect(function () {
            eventManager.on(EVENTS.SHOW_MODAL, function (m) { return addModal(m); });
        }, [addModal]);
        if (!modals.length)
            return null;
        return (React__default.createElement(React__default.Fragment, null, modals.map(function (modal) {
            if (modal.modalType === "notification")
                return (React__default.createElement(Modal, { key: modal.id, isOpen: modal.shown, closeIcon: true, closeHandle: function () { return closeModal(modal.id); }, title: modal.title },
                    React__default.createElement(ModalBody, null, modal.body),
                    React__default.createElement(ModalFooter, null,
                        React__default.createElement(Button, { color: modal.buttonColor || "light", onClick: function () { return closeModal(modal.id); } }, modal.button))));
            if (modal.modalType === "prompt") {
                if (typeof modal.options !== "undefined") {
                    var _a = modal.options, _b = _a.initial, initial = _b === void 0 ? "" : _b, _c = _a.type, type = _c === void 0 ? "text" : _c, _d = _a.hint, hint = _d === void 0 ? undefined : _d, _e = _a.validate, validate = _e === void 0 ? undefined : _e;
                    return (React__default.createElement(PromptModal, { key: modal.id, isOpen: modal.shown, onClose: function () { return closeModal(modal.id); }, onSave: modal.cb, title: modal.title, question: modal.question, initial: initial, type: type, hint: hint, validate: validate }));
                }
                return (React__default.createElement(PromptModal, { key: modal.id, isOpen: modal.shown, onClose: function () { return closeModal(modal.id); }, onSave: modal.cb, title: modal.title, question: modal.question, initial: modal.initial, type: modal.type, hint: modal.hint }));
            }
            if (modal.modalType === "confirmation")
                return (React__default.createElement(ConfirmationModal, { key: modal.id, isOpen: modal.shown, prompt: modal.prompt, confirmHandle: function () { return __awaiter(void 0, void 0, void 0, function () {
                        var r;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, modal.onConfirm()];
                                case 1:
                                    r = _a.sent();
                                    if (r)
                                        closeModal(modal.id);
                                    return [2 /*return*/, true];
                            }
                        });
                    }); }, closeHandle: function () { return closeModal(modal.id); }, confirmText: modal.confirmText, confirmType: modal.confirmType }));
            return null;
        })));
    };
    var confirmation = function (prompt, onConfirm, confirmType, confirmText) {
        if (confirmType === void 0) { confirmType = "primary"; }
        if (confirmText === void 0) { confirmText = "Confirm"; }
        if (!prompt)
            throw new Error("Prompt must be specified");
        if (!onConfirm || typeof onConfirm !== "function")
            throw new Error("onConfirm must be specified and must be a function");
        eventManager.emit(EVENTS.SHOW_MODAL, {
            modalType: "confirmation",
            prompt: React__default.createElement("p", null, prompt),
            onConfirm: onConfirm,
            confirmText: confirmText,
            confirmType: confirmType,
        });
    };
    var notificationModal = function (title, body, buttonColor, button) {
        if (buttonColor === void 0) { buttonColor = "light"; }
        if (button === void 0) { button = "OK"; }
        if (!title || !body)
            throw new Error("Title and body must be specified");
        eventManager.emit(EVENTS.SHOW_MODAL, {
            modalType: "notification",
            title: title,
            body: body,
            buttonColor: buttonColor,
            button: button,
        });
    };
    var prompt = function (title, question, cb, initial, type, hint) {
        if (initial === void 0) { initial = ""; }
        if (type === void 0) { type = "text"; }
        if (hint === void 0) { hint = undefined; }
        if (!title || !question)
            throw new Error("Title and question must be specified");
        if (typeof initial === "object") {
            eventManager.emit(EVENTS.SHOW_MODAL, {
                modalType: "prompt",
                title: title,
                question: question,
                cb: cb,
                options: initial,
            });
            return;
        }
        eventManager.emit(EVENTS.SHOW_MODAL, {
            modalType: "prompt",
            title: title,
            initial: initial,
            type: type,
            question: question,
            cb: cb,
            hint: hint,
        });
    };

    var Icon = function (_a) {
        var icon = _a.icon, _b = _a.size, size = _b === void 0 ? null : _b, _c = _a.className, className = _c === void 0 ? null : _c, props = __rest(_a, ["icon", "size", "className"]);
        return (React__default.createElement("span", __assign({ className: "icon-" + icon + (className ? " " + className : "") + (size ? " icon-size-" + size : "") }, props)));
    };
    Icon.propTypes = {
        icon: PropTypes.string.isRequired,
        size: PropTypes.oneOf([
            10,
            12,
            14,
            16,
            18,
            20,
            24,
            28,
            32,
            36,
            48,
            64,
            96,
            128,
        ]),
        className: PropTypes.string,
    };

    /**
     * Creates DOM element to be used as React root.
     * @returns {HTMLElement}
     */
    function createRootElement(id) {
        var rootContainer = document.createElement("div");
        rootContainer.setAttribute("id", id);
        return rootContainer;
    }
    /**
     * Appends element as last child of body.
     * @param {HTMLElement} rootElem
     */
    function addRootElement(rootElem) {
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
     */
    function usePortal(id) {
        var rootElemRef = React.useRef(null);
        React.useEffect(function setupElement() {
            // Look for existing target dom element to append to
            var existingParent = document.querySelector("#" + id);
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
        /**
         * It's important we evaluate this lazily:
         * - We need first render to contain the DOM element, so it shouldn't happen
         *   in useEffect. We would normally put this in the constructor().
         * - We can't do 'const rootElemRef = useRef(document.createElement('div))',
         *   since this will run every single render (that's a lot).
         * - We want the ref to consistently point to the same DOM element and only
         *   ever run once.
         * @link https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
         */
        function getRootElem() {
            if (!rootElemRef.current) {
                rootElemRef.current = document.createElement("div");
            }
            return rootElemRef.current;
        }
        return getRootElem();
    }

    /**
     * @example
     * <Portal>
     *   <p>Thinking with portals</p>
     * </Portal>
     */
    var Portal = function (_a) {
        var id = _a.id, children = _a.children;
        var target = usePortal(id);
        return ReactDOM.createPortal(children, target);
    };

    var AccordionElement = function (_a) {
        var children = _a.children, _b = _a.defaultOpen, defaultOpen = _b === void 0 ? false : _b, _c = _a.toggles, toggles = _c === void 0 ? false : _c, title = _a.title;
        var _d = React__default.useState(defaultOpen), isOpen = _d[0], setIsOpen = _d[1];
        return (React__default.createElement("li", { className: isOpen ? "active" : "" },
            React__default.createElement("a", { className: "accordion__title", onClick: function () { return setIsOpen(function (prev) { return !prev; }); } },
                React__default.createElement("span", null, title),
                toggles ? (React__default.createElement("span", { className: "accordion__toggle icon-chevron-down" })) : null),
            React__default.createElement("div", { className: "accordion__content" }, children)));
    };
    AccordionElement.propTypes = {
        children: PropTypes.node.isRequired,
        defaultOpen: PropTypes.bool,
        toggles: PropTypes.bool,
        title: PropTypes.node.isRequired,
    };
    var Accordion = function (_a) {
        var children = _a.children, _b = _a.toggles, toggles = _b === void 0 ? false : _b, _c = _a.bordered, bordered = _c === void 0 ? false : _c;
        return (React__default.createElement("ul", { className: "accordion" + (bordered ? " accordion--bordered" : "") }, React__default.Children.map(children, function (child, idx) {
            return React__default.isValidElement(child)
                ? React__default.cloneElement(child, {
                    toggles: toggles,
                    key: child.props.key || idx,
                })
                : null;
        })));
    };
    Accordion.Element = AccordionElement;
    Accordion.propTypes = {
        children: PropTypes.node.isRequired,
        toggles: PropTypes.bool,
        bordered: PropTypes.bool,
    };

    var Wrapper$1 = function (_a) {
        var children = _a.children, _b = _a.className, className = _b === void 0 ? null : _b;
        return (React__default.createElement("span", { className: "badge-wrapper" + appendClass(className) }, children));
    };
    Wrapper$1.propTypes = {
        children: PropTypes.node.isRequired,
        className: PropTypes.string,
    };
    var Badge = function (_a) {
        var _b = _a.color, color = _b === void 0 ? "primary" : _b, _c = _a.size, size = _c === void 0 ? "default" : _c, children = _a.children, _d = _a.className, className = _d === void 0 ? null : _d, props = __rest(_a, ["color", "size", "children", "className"]);
        return (React__default.createElement("span", __assign({ className: "" + ("badge badge--" + color) + appendClass(size !== "default", "badge--" + size) + appendClass(className) }, props), children));
    };
    Badge.Dot = function (props) { return React__default.createElement(Badge, __assign({}, props, { size: "dot" })); };
    Badge.Tiny = function (props) { return React__default.createElement(Badge, __assign({}, props, { size: "tiny" })); };
    Badge.Small = function (props) { return React__default.createElement(Badge, __assign({}, props, { size: "small" })); };
    Badge.Default = function (props) { return React__default.createElement(Badge, __assign({}, props, { size: "default" })); };
    Badge.Large = function (props) { return React__default.createElement(Badge, __assign({}, props, { size: "large" })); };
    Badge.Wrapper = Wrapper$1;
    var WithBadge = function (_a) {
        var children = _a.children, badge = _a.badge, _b = _a.wrapperClass, wrapperClass = _b === void 0 ? null : _b, props = __rest(_a, ["children", "badge", "wrapperClass"]);
        return (React__default.createElement(Badge.Wrapper, { className: wrapperClass },
            children,
            React__default.createElement(Badge, __assign({}, props), badge)));
    };

    var tabIdProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
    var firstDefined = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args.find(function (el) { return typeof el !== "undefined" && el !== null; });
    };
    var Tab = function (_a) {
        var _b = _a.active, active = _b === void 0 ? false : _b, _c = _a.className, className = _c === void 0 ? null : _c, children = _a.children;
        return (React__default.createElement("div", { className: "tab-pane" + appendClass(active, "active") + appendClass(className) }, children));
    };
    Tab.propTypes = {
        id: tabIdProp.isRequired,
        active: PropTypes.bool,
        title: PropTypes.node.isRequired,
        children: PropTypes.node.isRequired,
        className: PropTypes.string,
    };
    var tabsChildrenProp = PropTypes.node;
    var isActive = function (openTab, id, idx) {
        return openTab === null ? idx === 0 : openTab === firstDefined(id, idx);
    };
    var TabsHeader = function (_a) {
        var _b = _a.tabsClassName, tabsClassName = _b === void 0 ? null : _b, _c = _a.center, center = _c === void 0 ? false : _c, _d = _a.right, right = _d === void 0 ? false : _d, _e = _a.justified, justified = _e === void 0 ? false : _e, _f = _a.embossed, embossed = _f === void 0 ? false : _f, _g = _a.bordered, bordered = _g === void 0 ? false : _g, _h = _a.vertical, vertical = _h === void 0 ? false : _h, _j = _a.inline, inline = _j === void 0 ? false : _j, _k = _a.openTab, openTab = _k === void 0 ? null : _k, _l = _a.sticky, sticky = _l === void 0 ? false : _l, onTabChange = _a.onTabChange, children = _a.children;
        return (React__default.createElement("ul", { className: "tabs" + appendClass(tabsClassName) + appendClass(center, "tabs--centered") + appendClass(right, "tabs--right") + appendClass(justified, "tabs--justified") + appendClass(embossed, "tabs--embossed") + appendClass(bordered, "tabs--bordered") + appendClass(vertical, "tabs--vertical") + appendClass(inline, "tabs--inline"), style: sticky ? { position: "sticky", top: "0" } : {} }, React__default.Children.map(children, function (child, idx) {
            if (!React__default.isValidElement(child))
                return child;
            var _a = child.props, id = _a.id, title = _a.title;
            return (React__default.createElement("li", { className: "tab" + appendClass(isActive(openTab, id, idx), "active"), key: firstDefined(id, idx) },
                React__default.createElement("a", { onClick: function () { return onTabChange(firstDefined(id, idx)); } }, title)));
        })));
    };
    TabsHeader.propTypes = {
        tabsClassName: PropTypes.string,
        center: PropTypes.bool,
        right: PropTypes.bool,
        justified: PropTypes.bool,
        embossed: PropTypes.bool,
        bordered: PropTypes.bool,
        vertical: PropTypes.bool,
        sticky: PropTypes.bool,
        inline: PropTypes.bool,
        openTab: tabIdProp,
        onTabChange: PropTypes.func.isRequired,
        children: tabsChildrenProp.isRequired,
    };
    var Tabs = function (_a) {
        var _b = _a.defaultTab, defaultTab = _b === void 0 ? null : _b, _c = _a.tabsClassName, tabsClassName = _c === void 0 ? null : _c, _d = _a.contentClassName, contentClassName = _d === void 0 ? null : _d, _e = _a.center, center = _e === void 0 ? false : _e, _f = _a.right, right = _f === void 0 ? false : _f, _g = _a.justified, justified = _g === void 0 ? false : _g, _h = _a.embossed, embossed = _h === void 0 ? false : _h, _j = _a.bordered, bordered = _j === void 0 ? false : _j, _k = _a.vertical, vertical = _k === void 0 ? false : _k, _l = _a.sticky, sticky = _l === void 0 ? false : _l, _m = _a.inline, inline = _m === void 0 ? false : _m, _o = _a.renderHeader, renderHeader = _o === void 0 ? function (header) { return header; } : _o, _p = _a.renderBody, renderBody = _p === void 0 ? function (body) { return body; } : _p, _q = _a.onTabChange, onTabChange = _q === void 0 ? null : _q, children = _a.children;
        var _r = React__default.useState(defaultTab || null), openTab = _r[0], setOpenTab = _r[1];
        var changeTab = React__default.useCallback(function (id) {
            if (typeof onTabChange === "function")
                onTabChange(id);
            setOpenTab(id);
        }, [onTabChange]);
        React__default.useEffect(function () { return changeTab(defaultTab); }, [defaultTab, changeTab]);
        var header = (React__default.createElement(ConditionalWrapper, { condition: vertical, wrapper: React__default.createElement("div", { className: "col-md-3" }) }, renderHeader(React__default.createElement(TabsHeader, { tabsClassName: tabsClassName, center: center, right: right, justified: justified, embossed: embossed, bordered: bordered, vertical: vertical, sticky: sticky, inline: inline, openTab: openTab, onTabChange: changeTab }, children))));
        var body = (React__default.createElement(ConditionalWrapper, { condition: vertical, wrapper: React__default.createElement("div", { className: "col-md-9" }) }, renderBody(React__default.createElement("div", { className: "tab-content" + (contentClassName ? " " + contentClassName : "") }, React__default.Children.map(children, function (child, idx) {
            return React__default.isValidElement(child)
                ? React__default.cloneElement(child, {
                    active: isActive(openTab, child.props.id, idx),
                })
                : child;
        })))));
        return (React__default.createElement(ConditionalWrapper, { condition: vertical, wrapper: React__default.createElement("div", { className: "row", style: sticky ? { position: "relative" } : {} }) },
            React__default.createElement(DisplayIf, { condition: (vertical && !right) || !vertical }, header),
            body,
            React__default.createElement(DisplayIf, { condition: vertical && right }, header)));
    };
    Tabs.propTypes = {
        children: tabsChildrenProp.isRequired,
        defaultTab: tabIdProp,
        tabsClassName: PropTypes.string,
        contentClassName: PropTypes.string,
        center: PropTypes.bool,
        right: PropTypes.bool,
        justified: PropTypes.bool,
        embossed: PropTypes.bool,
        bordered: PropTypes.bool,
        vertical: PropTypes.bool,
        sticky: PropTypes.bool,
        inline: PropTypes.bool,
        renderHeader: PropTypes.func,
        renderBody: PropTypes.func,
        onTabChange: PropTypes.func,
    };

    var Section = function (_a) {
        var children = _a.children, _b = _a.className, className = _b === void 0 ? null : _b;
        return (React__default.createElement("div", { className: "section" + appendClass(className) }, children));
    };
    Section.propTypes = {
        children: PropTypes.node.isRequired,
        className: PropTypes.string,
    };

    var Display = function (_a) {
        var _b = _a.as, as = _b === void 0 ? "h1" : _b, _c = _a.className, className = _c === void 0 ? null : _c, size = _a.size, props = __rest(_a, ["as", "className", "size"]);
        return React__default.createElement(as, __assign(__assign({}, props), { className: "display-" + size + appendClass(className) }));
    };
    var Display0 = function (props) { return (React__default.createElement(Display, __assign({}, props, { size: 0 }))); };
    var Display1 = function (props) { return (React__default.createElement(Display, __assign({}, props, { size: 1 }))); };
    var Display2 = function (props) { return (React__default.createElement(Display, __assign({}, props, { size: 2 }))); };
    var Display3 = function (props) { return (React__default.createElement(Display, __assign({}, props, { size: 3 }))); };
    var Display4 = function (props) { return (React__default.createElement(Display, __assign({}, props, { size: 4 }))); };

    var TimelineItem = function (_a) {
        var _b = _a.icon, icon = _b === void 0 ? React__default.createElement(Icon, { icon: "circle" }) : _b, _c = _a.time, time = _c === void 0 ? null : _c, _d = _a.className, className = _d === void 0 ? null : _d, _e = _a.contentClassName, contentClassName = _e === void 0 ? null : _e, children = _a.children;
        return (React__default.createElement("div", { className: "timeline__item" + appendClass(className) },
            React__default.createElement("div", { className: "timeline__icon" }, icon),
            time ? React__default.createElement("div", { className: "timeline__time" }, time) : null,
            React__default.createElement("div", { className: "timeline__content" + appendClass(contentClassName) }, children)));
    };
    TimelineItem.propTypes = {
        icon: PropTypes.node,
        time: PropTypes.string,
        children: PropTypes.node.isRequired,
        className: PropTypes.string,
        contentClassName: PropTypes.string,
    };
    var Timeline = function (_a) {
        var _b = _a.center, center = _b === void 0 ? false : _b, _c = _a.right, right = _c === void 0 ? false : _c, _d = _a.className, className = _d === void 0 ? null : _d, children = _a.children;
        return (React__default.createElement("div", { className: "timeline" + appendClass(center, "timeline--centered") + appendClass(right, "timeline--right") + appendClass(className) }, children));
    };
    Timeline.propTypes = {
        center: PropTypes.bool,
        right: PropTypes.bool,
        className: PropTypes.string,
        children: PropTypes.node.isRequired,
    };

    var Step = function (_a) {
        var _b = _a.visited, visited = _b === void 0 ? false : _b, _c = _a.active, active = _c === void 0 ? false : _c, _d = _a.className, className = _d === void 0 ? null : _d, icon = _a.icon, children = _a.children;
        return (React__default.createElement("div", { className: "step" + appendClass(visited, "visited") + appendClass(active, "active") + appendClass(className) },
            React__default.createElement("div", { className: "step__icon" }, icon),
            React__default.createElement("div", { className: "step__label" }, children)));
    };
    Step.propTypes = {
        icon: PropTypes.node.isRequired,
        children: PropTypes.node.isRequired,
        visited: PropTypes.bool,
        active: PropTypes.bool,
        className: PropTypes.string,
    };

    var Steps = function (_a) {
        var _b = _a.size, size = _b === void 0 ? "default" : _b, _c = _a.color, color = _c === void 0 ? "primary" : _c, _d = _a.vertical, vertical = _d === void 0 ? false : _d, _e = _a.className, className = _e === void 0 ? null : _e, children = _a.children;
        return (React__default.createElement("div", { className: "steps" + appendClass(size !== "default", "steps--" + size) + " steps--" + color + appendClass(vertical, "steps--vertical") + appendClass(className) }, children));
    };
    Steps.propTypes = {
        size: PropTypes.oneOf(["dot", "small", "default", "large"]),
        color: PropTypes.oneOf(["primary", "secondary", "success", "dark"]),
        vertical: PropTypes.bool,
        className: PropTypes.string,
        children: PropTypes.node.isRequired,
    };
    Steps.Dot = function (props) { return React__default.createElement(Steps, __assign({}, props, { size: "dot" })); };
    Steps.Small = function (props) { return React__default.createElement(Steps, __assign({}, props, { size: "small" })); };
    Steps.Large = function (props) { return React__default.createElement(Steps, __assign({}, props, { size: "large" })); };

    var VerticalCenter = function (_a) {
        var children = _a.children;
        return (React__default.createElement("div", { className: "content-fluid", style: { display: "flex", minHeight: "100vh", flexDirection: "column" } },
            React__default.createElement("main", { style: { display: "flex", flexDirection: "column", flex: 1 } }, children)));
    };
    VerticalCenter.propTypes = { children: PropTypes.node.isRequired };

    var Textarea = function (_a) {
        var _b = _a.label, label = _b === void 0 ? null : _b, _c = _a.textareaClass, textareaClass = _c === void 0 ? null : _c, _d = _a.innerDivClass, innerDivClass = _d === void 0 ? null : _d, _e = _a.className, className = _e === void 0 ? null : _e, _f = _a.id, id = _f === void 0 ? null : _f, _g = _a.inputRef, inputRef = _g === void 0 ? null : _g, _h = _a.inline, inline = _h === void 0 ? false : _h, field = _a.field, _j = _a.form, touched = _j.touched, errors = _j.errors, rest = __rest(_a, ["label", "textareaClass", "innerDivClass", "className", "id", "inputRef", "inline", "field", "form"]);
        return (React__default.createElement("div", { className: "form-group" + appendClass(inline, "form-group--inline") + appendClass(className) + (formik.getIn(touched, field.name) && formik.getIn(errors, field.name)
                ? " form-group--error"
                : "") },
            React__default.createElement("div", { className: "form-group__text" + appendClass(innerDivClass) },
                React__default.createElement("textarea", __assign({}, field, { className: textareaClass, id: id, ref: inputRef }, rest), field.value),
                label ? React__default.createElement("label", { htmlFor: id }, label) : null),
            formik.getIn(touched, field.name) && formik.getIn(errors, field.name) ? (React__default.createElement(InputHelpBlock, { text: formik.getIn(errors, field.name) })) : null));
    };
    Textarea.propTypes = {
        label: PropTypes.node,
        textareaClass: PropTypes.string,
        innerDivClass: PropTypes.string,
        className: PropTypes.string,
        id: PropTypes.string,
        inline: PropTypes.bool,
    };

    var DropdownHeader$1 = function (_a) {
        var variants = _a.variants, selectedIdx = _a.selectedIdx, setIdx = _a.setIdx;
        return (React__default.createElement(Dropdown, { type: "link", header: variants[selectedIdx].display, alwaysClose: true, className: "flex-center-vertical", stopPropagation: true }, variants.map(function (v, idx) { return (React__default.createElement("a", { key: v.variant, onClick: function () { return setIdx(idx); }, className: variants[selectedIdx].variant === v.variant ? "selected" : "" }, v.display)); })));
    };
    DropdownHeader$1.propTypes = {
        variants: PropTypes.arrayOf(PropTypes.any).isRequired,
        selectedIdx: PropTypes.number.isRequired,
        setIdx: PropTypes.func.isRequired,
    };
    var ListHeader = function (_a) {
        var variants = _a.variants, selectedIdx = _a.selectedIdx, setIdx = _a.setIdx;
        return (React__default.createElement("ul", { className: "list list--inline divider--vertical" }, variants.map(function (v, idx) { return (React__default.createElement("li", { key: v.variant },
            React__default.createElement(ConditionalWrapper, { condition: variants[selectedIdx].variant !== v.variant, wrapper: React__default.createElement("a", { key: v.variant, onClick: function () { return setIdx(idx); } }) }, v.display))); })));
    };
    ListHeader.propTypes = {
        variants: PropTypes.arrayOf(PropTypes.any).isRequired,
        selectedIdx: PropTypes.number.isRequired,
        setIdx: PropTypes.func.isRequired,
    };
    var VariantSelector = function (_a) {
        var _b = _a.disableable, disableable = _b === void 0 ? false : _b, _c = _a.title, title = _c === void 0 ? null : _c, _d = _a.inline, inline = _d === void 0 ? false : _d, _e = _a.onChange, onChange = _e === void 0 ? null : _e, _f = _a.enableTitleAppend, enableTitleAppend = _f === void 0 ? null : _f, _g = _a.className, className = _g === void 0 ? null : _g, _h = _a.list, list = _h === void 0 ? false : _h, variants = _a.variants, varPrefix = _a.varPrefix;
        var _j = formik.useFormikContext(), values = _j.values, setFieldValue = _j.setFieldValue, unregisterField = _j.unregisterField;
        var variant = React__default.useMemo(function () { return formik.getIn(values, varPrefix + ".variant", undefined); }, [values, varPrefix]);
        var _k = React__default.useState(function () {
            var idx = variants.findIndex(function (v) { return v.selected || v.variant === variant; });
            return !disableable && idx < 0 ? 0 : idx;
        }), variantIdx = _k[0], setIdx = _k[1];
        React__default.useEffect(function () {
            var idx = variants.findIndex(function (v) { return v.variant === variant; });
            setIdx(function (curr) { return (idx < 0 || idx === curr ? curr : idx); });
        }, [variant, variants]);
        React__default.useEffect(function () {
            if (variantIdx >= 0) {
                setFieldValue(varPrefix + ".variant", variants[variantIdx].variant);
                if (onChange)
                    onChange(variants[variantIdx]);
            }
            else {
                setFieldValue(varPrefix, undefined);
                unregisterField(varPrefix);
            }
        }, [variantIdx]);
        var dd = function (el, t) {
            return React__default.createElement(el, { className: "secondary-tabs" }, t ? React__default.createElement("span", { className: "half-margin-right" }, t) : null, list ? (React__default.createElement(ListHeader, { variants: variants, selectedIdx: variantIdx, setIdx: setIdx })) : (React__default.createElement(DropdownHeader$1, { variants: variants, selectedIdx: variantIdx, setIdx: setIdx })));
        };
        return (React__default.createElement("div", { className: "form-group" + appendClass(inline, " inline-variants") + appendClass(className) },
            disableable ? (React__default.createElement("span", { className: "flex-center-vertical" },
                React__default.createElement("label", { className: "switch", htmlFor: varPrefix + ".disableable" },
                    React__default.createElement("input", { type: "checkbox", onChange: function () { return setIdx(function (p) { return (p >= 0 ? -1 : 0); }); }, checked: variantIdx >= 0, id: varPrefix + ".disableable" }),
                    React__default.createElement("span", { className: "switch__input" }),
                    React__default.createElement("span", { className: "switch__label" }, title)),
                variantIdx >= 0 ? dd("span", enableTitleAppend) : null)) : (dd("div", title)),
            disableable && variantIdx < 0 ? null : (React__default.createElement("div", { className: "tabs-wrap panel base-padding-top" }, variants[variantIdx].component))));
    };
    VariantSelector.propTypes = {
        variants: PropTypes.arrayOf(PropTypes.exact({
            variant: PropTypes.string,
            display: PropTypes.string,
            component: PropTypes.node,
            selected: PropTypes.bool,
        })).isRequired,
        varPrefix: PropTypes.string.isRequired,
        title: PropTypes.node,
        inline: PropTypes.bool,
        onChange: PropTypes.func,
        disableable: PropTypes.bool,
        enableTitleAppend: PropTypes.string,
        className: PropTypes.string,
        list: PropTypes.bool,
    };

    var Radio = function (_a) {
        var _b = _a.spacing, spacing = _b === void 0 ? null : _b, _c = _a.inline, inline = _c === void 0 ? false : _c, _d = _a.label, label = _d === void 0 ? null : _d, _e = _a.className, className = _e === void 0 ? null : _e, _f = _a.field, name = _f.name, value = _f.value, onChange = _f.onChange, onBlur = _f.onBlur, id = _a.id, props = __rest(_a, ["spacing", "inline", "label", "className", "field", "id"]);
        return (React__default.createElement("div", __assign({ className: "form-group" + appendClass(inline, "form-group--inline") + appendClass(spacing, "form-group--" + spacing) + appendClass(className) }, props),
            React__default.createElement("label", { className: "radio", htmlFor: name + "." + id },
                React__default.createElement("input", { type: "radio", name: name, value: id, checked: id === value, onChange: onChange, onBlur: onBlur, id: name + "." + id }),
                React__default.createElement("span", { className: "radio__input" }),
                label ? React__default.createElement("span", { className: "radio__label" }, label) : null)));
    };
    Radio.propTypes = {
        spacing: PropTypes.oneOf(["compressed", "regular", "loose", "nospacing"]),
        inline: PropTypes.bool,
        label: PropTypes.node,
        className: PropTypes.string,
        id: PropTypes.string.isRequired,
    };
    var Radios = function (_a) {
        var values = _a.values, props = __rest(_a, ["values"]);
        return (React__default.createElement(React__default.Fragment, null, values.map(function (v) { return (React__default.createElement(formik.Field, __assign({ component: Radio }, props, { id: v.value, label: v.label, key: v.value }))); })));
    };
    Radios.propTypes = {
        values: PropTypes.arrayOf(PropTypes.exact({
            value: PropTypes.string,
            label: PropTypes.node,
        })),
    };

    var InputHelpBaloon = function (_a) {
        var baloon = _a.baloon;
        return (React__default.createElement("span", { "data-balloon": baloon, "data-balloon-length": "large", "data-balloon-pos": "up", className: "qtr-margin-left" },
            React__default.createElement("span", { className: "icon-question-circle", style: { cursor: "help" } })));
    };
    InputHelpBaloon.propTypes = {
        baloon: PropTypes.string.isRequired,
    };

    var css_248z$4 = ".cui .form-group .chips .input{-moz-appearance:none;-webkit-appearance:none;background:var(--cui-form-background);border-radius:var(--cui-border-radius);border:var(--cui-border);box-shadow:none;color:var(--cui-form-value-color);flex-shrink:0;flex:1;font-family:var(--cui-font-stack);font-size:var(--cui-font-size);font-weight:var(--cui-form-value-font-weight);height:var(--cui-form-size);line-height:2.4rem;max-height:var(--cui-form-size);min-height:var(--cui-form-size);order:3;padding:var(--cui-form-padding);padding-left:0;transition:all var(--cui-animate-speed) var(--cui-animate-timing-function);align-items:center;box-sizing:border-box;display:flex;position:relative}.cui .form-group .chips .input.focus,.cui .form-group .chips .input.hover,.cui .form-group .chips .input:focus,.cui .form-group .chips .input:hover{border-color:var(--cui-accent-color)}.cui .form-group .chips .input.focus,.cui .form-group .chips .input:focus{box-shadow:0 0 0 var(--cui-focus-thickness) rgba(var(--cui-focus-color),var(--cui-focus-opacity));opacity:1;outline:transparent var(--cui-focus-thickness);outline-offset:1px;outline-width:thin;outline-style:none}.cui .form-group .chips .input.disabled~label,.cui .form-group .chips .input[disabled]~label{opacity:.5;cursor:not-allowed!important;pointer-events:none!important;z-index:0!important}.cui .form-group .chips .chips-outer{overflow:hidden;white-space:nowrap;padding-left:var(--cui-form-padding)}.cui .form-group .chips .chips-outer>.chips-inner{white-space:normal}.cui .form-group .chips .input input{border:none;height:calc(var(--cui-form-size) - 2px);max-height:calc(var(--cui-form-size) - 2px);min-height:calc(var(--cui-form-size) - 2px);padding-top:calc(var(--cui-form-padding) - 1px);padding-bottom:calc(var(--cui-form-padding) - 1px);background:transparent}.cui .form-group .chips .input input:focus{box-shadow:unset}.cui .form-group.form-group--error .chips .input{border-color:var(--cui-theme-danger)}";
    styleInject(css_248z$4);

    var InputChips = React__default.forwardRef(function (_a, ref) {
        var _b = _a.chipsColor, chipsColor = _b === void 0 ? "primary" : _b, _c = _a.addOnBlur, addOnBlur = _c === void 0 ? true : _c, _d = _a.delimiters, delimiters = _d === void 0 ? [13] : _d, _e = _a.label, label = _e === void 0 ? null : _e, _f = _a.allowRepeat, allowRepeat = _f === void 0 ? false : _f, _g = _a.allowRegex, allowRegex = _g === void 0 ? null : _g, _h = _a.valueValidator, valueValidator = _h === void 0 ? null : _h, _j = _a.maxChips, maxChips = _j === void 0 ? null : _j, _k = _a.baloon, baloon = _k === void 0 ? null : _k, _l = _a.className, className = _l === void 0 ? null : _l, _m = _a.id, id = _m === void 0 ? null : _m, field = _a.field, _o = _a.form, touched = _o.touched, errors = _o.errors, setFieldValue = _o.setFieldValue, setFieldTouched = _o.setFieldTouched;
        var _p = React__default.useState(false), focused = _p[0], setFocus = _p[1];
        var addValue = React__default.useCallback(function (v) {
            if (typeof valueValidator === "function") {
                v = valueValidator(v);
                if (v === false)
                    return;
            }
            if (allowRepeat) {
                setFieldValue(field.name, __spreadArrays(field.value, [v]));
            }
            else if (!field.value.includes(v))
                setFieldValue(field.name, __spreadArrays(field.value, [v]));
        }, [allowRepeat, valueValidator, field.name, field.value]);
        var handleKeyDown = React__default.useCallback(function (event) {
            var d = delimiters;
            if (typeof d === "string") {
                var map = Array.prototype.map;
                d = map.call(d, function (ch) { return ch.charCodeAt(0); });
            }
            if (Array.isArray(d) && d.includes(event.keyCode)) {
                addValue(event.target.value);
                event.target.value = "";
                event.stopPropagation();
                event.preventDefault();
            }
        }, [delimiters, addValue]);
        var handleBlur = React__default.useCallback(function (event) {
            if (addOnBlur && event.target && event.target.value) {
                var value = event.target.value;
                if (allowRegex && RegExp(allowRegex).test(value)) {
                    addValue(value);
                }
                else if (!allowRegex) {
                    addValue(value);
                }
            }
            event.target.value = "";
            setFocus(false);
            field.onBlur(event);
        }, [addOnBlur, allowRegex, addValue, field]);
        var handleDelete = React__default.useCallback(function (idx) {
            var na = __spreadArrays(field.value);
            na.splice(idx, 1);
            setFieldTouched(field.name, true);
            setFieldValue(field.name, na);
        }, [field.name, field.value]);
        React__default.useEffect(function () {
            if (!Number.isNaN(maxChips) &&
                Array.isArray(field.value) &&
                field.value.length >= maxChips)
                setFocus(false);
        }, [field.value, maxChips]);
        return (React__default.createElement("div", { className: "form-group" + appendClass(className) + appendClass(formik.getIn(touched, field.name) && formik.getIn(errors, field.name), "form-group--error"), ref: ref },
            React__default.createElement("div", { className: "form-group__text chips" },
                label ? (React__default.createElement("label", { htmlFor: id || field.name },
                    label,
                    baloon ? React__default.createElement(InputHelpBaloon, { baloon: baloon }) : null)) : null,
                React__default.createElement("div", { className: "input" + appendClass(focused, "focus") },
                    Array.isArray(field.value) && field.value.length ? (React__default.createElement("span", { className: "chips-outer" },
                        React__default.createElement("span", { className: "chips-inner" }, field.value.map(function (v, i) { return (React__default.createElement(Label, { removable: true, onRemove: function () { return handleDelete(i); }, color: chipsColor, size: "tiny", key: v + "-" + i, className: "qtr-margin-bottom" }, v)); })))) : null,
                    !maxChips ||
                        (maxChips &&
                            Array.isArray(field.value) &&
                            field.value.length < maxChips) ? (React__default.createElement("input", { type: "text", onKeyDown: handleKeyDown, onBlur: handleBlur, onFocus: function () { return setFocus(true); }, id: id || field.name })) : null)),
            formik.getIn(touched, field.name) && formik.getIn(errors, field.name) ? (React__default.createElement(InputHelpBlock, { text: formik.getIn(errors, field.name) })) : null));
    });
    InputChips.propTypes = {
        label: PropTypes.node,
        chipsColor: PropTypes.oneOf([
            "primary",
            "secondary",
            "tertiary",
            "success",
            "info",
            "warning-alt",
            "warning",
            "danger",
            "dark",
            "light",
        ]),
        addOnBlur: PropTypes.bool,
        allowRepeat: PropTypes.bool,
        allowRegex: PropTypes.string,
        delimiters: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.number),
        ]),
        valueValidator: PropTypes.func,
        maxChips: PropTypes.number,
        baloon: PropTypes.string,
        className: PropTypes.string,
        id: PropTypes.string,
    };

    var SelectChildren = function (_a) {
        var children = _a.children, handleOptionClick = _a.handleOptionClick, isSelected = _a.isSelected;
        return React__default.Children.map(children, function (child, idx) {
            switch (child.type) {
                case "option":
                    return (React__default.createElement("a", { key: idx, onClick: function (e) { return handleOptionClick(e, child.props.value); }, className: "" + appendClass(isSelected(child.props.value), "selected") + appendClass(child.props.disabled, "disabled") }, child.props.children));
                case "optgroup":
                    return (React__default.createElement("div", { key: idx, className: "dropdown__group" },
                        React__default.createElement("div", { className: "dropdown__group-header" }, child.props.label),
                        React__default.createElement(SelectChildren, { handleOptionClick: handleOptionClick, isSelected: isSelected }, child.props.children)));
                default:
                    return child;
            }
        });
    };
    var EditableSelect = React__default.forwardRef(function (_a, innerRef) {
        var _b = _a.compressed, compressed = _b === void 0 ? false : _b, _c = _a.prompt, prompt = _c === void 0 ? "Select an option" : _c, _d = _a.inline, inline = _d === void 0 ? false : _d, _f = _a.type, type = _f === void 0 ? "text" : _f, _g = _a.id, id = _g === void 0 ? null : _g, children = _a.children, field = _a.field, form = _a.form, title = _a.title, rest = __rest(_a, ["compressed", "prompt", "inline", "type", "id", "children", "field", "form", "title"]);
        var _h = React__default.useState(false), isOpen = _h[0], setOpen = _h[1];
        var _j = React__default.useState(undefined), node = _j[0], setNode = _j[1];
        // eslint-disable-next-line prefer-const
        var handleOutsideClick;
        var handleClick = function (newState) {
            if (newState === void 0) { newState = true; }
            if (newState && !isOpen)
                document.addEventListener("click", handleOutsideClick, false);
            else
                document.removeEventListener("click", handleOutsideClick, false);
            setOpen(newState);
        };
        handleOutsideClick = function (e) {
            var n = innerRef || node;
            if (n && n.contains(e.target))
                return;
            handleClick(false);
        };
        var handleOptionClick = function (_e, newValue) {
            form.setFieldValue(field.name, newValue);
            form.setFieldTouched(field.name, true);
            handleClick(false);
        };
        var isSelected = function (checkValue) { return field.value === checkValue; };
        return (React__default.createElement("div", { className: "form-group dropdown" + appendClass(compressed, "input--compressed") + appendClass(isOpen, "active") + appendClass(inline, "label--inline") + appendClass(formik.getIn(form.touched, field.name) && formik.getIn(form.errors, field.name), " form-group--error"), ref: innerRef || (function (n) { return setNode(n); }) },
            React__default.createElement("div", { className: "form-group__text select editable", onClick: function () { return handleClick(true); } },
                React__default.createElement("input", __assign({ id: id || field.name }, field, { type: type, placeholder: prompt, autoComplete: "off" }, rest)),
                React__default.createElement("label", { htmlFor: id || field.name }, title)),
            React__default.createElement("div", { className: "dropdown__menu" },
                React__default.createElement(SelectChildren, { handleOptionClick: handleOptionClick, isSelected: isSelected }, children)),
            formik.getIn(form.touched, field.name) && formik.getIn(form.errors, field.name) ? (React__default.createElement(InputHelpBlock, { text: formik.getIn(form.errors, field.name) })) : null));
    });
    EditableSelect.propTypes = {
        compressed: PropTypes.bool,
        id: PropTypes.string,
        title: PropTypes.node.isRequired,
        prompt: PropTypes.string,
        inline: PropTypes.bool,
        type: PropTypes.oneOf(["number", "text"]),
        children: PropTypes.node.isRequired,
    };

    var Checkboxes = function (_a) {
        var field = _a.field, form = _a.form, variants = _a.variants, _b = _a.inline, inline = _b === void 0 ? false : _b;
        return (React__default.createElement(formik.FieldArray, { name: field.name, render: function (arrayHelpers) {
                return variants.map(function (variant) { return (React__default.createElement("div", { className: "form-group" + appendClass(inline, "form-group--inline"), key: variant.id },
                    React__default.createElement("label", { className: "checkbox", htmlFor: field.name },
                        React__default.createElement("input", { name: field.name, id: field.name, type: "checkbox", value: variant.id, checked: formik.getIn(form.values, field.name, []).includes(variant.id), onChange: function (e) {
                                if (e.target.checked)
                                    arrayHelpers.push(variant.id);
                                else {
                                    var idx = formik.getIn(form.values, field.name, []).indexOf(variant.id);
                                    arrayHelpers.remove(idx);
                                }
                            } }),
                        React__default.createElement("span", { className: "checkbox__input" }),
                        React__default.createElement("span", { className: "checkbox__label" }, variant.name)))); });
            } }));
    };

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
        base0F: "#626469",
    };

    exports.Accordion = Accordion;
    exports.AccordionElement = AccordionElement;
    exports.Alert = Alert;
    exports.Badge = Badge;
    exports.Button = Button;
    exports.ButtonGroup = ButtonGroup;
    exports.Checkbox = Checkbox;
    exports.Checkboxes = Checkboxes;
    exports.ConditionalWrapper = ConditionalWrapper;
    exports.ConfirmationListener = ConfirmationListener;
    exports.ConfirmationModal = ConfirmationModal;
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
    exports.Dropzone = connected;
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
    exports.Section = Section;
    exports.Select = Select;
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
    exports.Toast = Toast$1;
    exports.ToastContainer = ToastContainer$1;
    exports.VariantSelector = VariantSelector;
    exports.VerticalCenter = VerticalCenter;
    exports.WithBadge = WithBadge;
    exports.base16Theme = base16Theme;
    exports.confirmation = confirmation;
    exports.notification = notificationModal;
    exports.notificationModal = notificationModal;
    exports.prompt = prompt;
    exports.toast = toast$1;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
