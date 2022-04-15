import React, { useMemo, useCallback } from 'react';
import ReactDropzone from 'react-dropzone';
import bytes from 'bytes';
import { appendClass } from '../utils';

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
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var FileCard = function(param) {
    var file = param.file, i = param.i, removeFile = param.removeFile, inline = param.inline;
    return /*#__PURE__*/ React.createElement("div", {
        className: "file-drop__card col-lg-4 col-md-6 col-sm-6",
        key: "".concat(i, "-").concat(file.name)
    }, /*#__PURE__*/ React.createElement("div", {
        className: "panel panel--bordered hover-emboss--small",
        onClick: function(e) {
            return e.stopPropagation();
        }
    }, inline ? /*#__PURE__*/ React.createElement("div", {
        className: "panel__body flex flex-row"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "text-left flex-fill",
        style: {
            maxWidth: "calc(100% - 20px)"
        }
    }, /*#__PURE__*/ React.createElement("div", {
        className: "text-ellipsis"
    }, file.name), /*#__PURE__*/ React.createElement("small", {
        style: {
            whiteSpace: "nowrap"
        }
    }, bytes.format(file.size, {
        unitSeparator: " "
    }))), /*#__PURE__*/ React.createElement("a", {
        className: "link pull-right",
        onClick: function() {
            return removeFile(i);
        }
    }, /*#__PURE__*/ React.createElement("span", {
        className: "icon-close",
        title: "Remove the file."
    }))) : /*#__PURE__*/ React.createElement("div", {
        className: "panel__body"
    }, /*#__PURE__*/ React.createElement("a", {
        className: "link pull-right",
        style: {
            marginRight: "5px"
        },
        onClick: function() {
            return removeFile(i);
        }
    }, /*#__PURE__*/ React.createElement("span", {
        className: "icon-close",
        title: "Remove the file."
    })), /*#__PURE__*/ React.createElement("div", {
        className: "text-ellipsis half-margin-bottom"
    }, file.name), /*#__PURE__*/ React.createElement("span", {
        className: "file-icon text-muted icon-file-o qtr-margin-right"
    }), /*#__PURE__*/ React.createElement("small", null, bytes.format(file.size, {
        unitSeparator: " "
    })))));
};
var DropzoneMessage = function(param) {
    var inline = param.inline, accept = param.accept, maxFileSize = param.maxFileSize;
    if (inline) {
        return /*#__PURE__*/ React.createElement("div", {
            className: "dropzone-message flex flex-row flex-center-vertical"
        }, /*#__PURE__*/ React.createElement("h5", {
            className: "text-muted text-left flex-fill no-margin"
        }, "Click Here or Drop Files to Upload"), accept && /*#__PURE__*/ React.createElement("span", {
            className: "text-muted text-small half-margin-right"
        }, "Allowed files: ", typeof accept === "string" ? accept.split(",").join(", ") : accept), /*#__PURE__*/ React.createElement("span", {
            className: "file-drop__icon icon-upload"
        }));
    }
    return /*#__PURE__*/ React.createElement("div", {
        className: "dropzone-message"
    }, /*#__PURE__*/ React.createElement("span", {
        className: "file-drop__icon icon-upload"
    }), /*#__PURE__*/ React.createElement("h4", {
        className: "text-muted"
    }, "Click Here or Drop Files to Upload"), accept && /*#__PURE__*/ React.createElement("div", {
        className: "text-muted"
    }, "Allowed files: ", accept.split(",").join(", ")), maxFileSize && /*#__PURE__*/ React.createElement("div", {
        className: "text-muted"
    }, "Max file size: ", bytes.format(maxFileSize, {
        unitSeparator: " "
    })));
};
var DropzoneFiles = function(param) {
    var files = param.files, inline = param.inline, showTotalSelected = param.showTotalSelected, removeFile = param.removeFile;
    if (!Array.isArray(files) || !files.length) {
        return null;
    }
    return /*#__PURE__*/ React.createElement("div", {
        className: "dropzone-previews"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "file-drop__container container--fluid"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "row"
    }, files.map(function(file, i) {
        return /*#__PURE__*/ React.createElement(FileCard, {
            key: i,
            file: file,
            i: i,
            inline: inline,
            removeFile: removeFile
        });
    }))), showTotalSelected ? /*#__PURE__*/ React.createElement("div", {
        className: "file-drop__filecnt"
    }, files.length, " selected") : null);
};
var Dropzone = function(_param) {
    var error = _param.error, loose = _param.loose, compressed = _param.compressed, inline = _param.inline, label = _param.label, name = _param.name, value = _param.value, customMaxFileSize = _param.maxFileSize, maxFiles = _param.maxFiles, onChange = _param.onChange, showTotalSelected = _param.showTotalSelected, props = _objectWithoutProperties(_param, [
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
    var maxFileSize = useMemo(function() {
        if (customMaxFileSize) {
            return bytes.parse(customMaxFileSize);
        } else {
            return null;
        }
    }, [
        customMaxFileSize
    ]);
    var padding = useMemo(function() {
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
    var handleDrop = useCallback(function(filesToUpload) {
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
    var removeFile = function(toRemove) {
        onChange(Array.isArray(value) ? value.filter(function(_, idx) {
            return toRemove !== idx;
        }) : value);
    };
    return /*#__PURE__*/ React.createElement("div", {
        className: "form-group".concat(appendClass(error, "form-group--error"))
    }, /*#__PURE__*/ React.createElement("div", {
        className: "form-group__text"
    }, label ? /*#__PURE__*/ React.createElement("label", {
        htmlFor: name
    }, label) : null, /*#__PURE__*/ React.createElement(ReactDropzone, _extends({}, props, {
        onDrop: handleDrop,
        maxSize: maxFileSize
    }), function(param) {
        var getRootProps = param.getRootProps, getInputProps = param.getInputProps;
        return /*#__PURE__*/ React.createElement("div", _extends({
            className: "dropzone ".concat(padding)
        }, getRootProps()), /*#__PURE__*/ React.createElement("input", _extends({}, getInputProps())), /*#__PURE__*/ React.createElement(DropzoneFiles, {
            files: value,
            showTotalSelected: showTotalSelected,
            inline: inline,
            removeFile: removeFile
        }), Array.isArray(value) && value.length ? null : /*#__PURE__*/ React.createElement(DropzoneMessage, {
            maxFileSize: maxFileSize,
            inline: inline,
            accept: props.accept
        }));
    })), error ? /*#__PURE__*/ React.createElement("div", {
        className: "help-block text-danger",
        role: "alert"
    }, /*#__PURE__*/ React.createElement("span", null, error)) : null);
};

export { Dropzone };
//# sourceMappingURL=index.js.map
