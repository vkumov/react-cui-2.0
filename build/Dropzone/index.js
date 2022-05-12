import React, { useMemo, useCallback } from 'react';
import ReactDropzone from 'react-dropzone';
import bytes from 'bytes';
import { appendClass } from '../utils/index.js';

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
const FileCard = ({ file , i , removeFile , inline  })=>/*#__PURE__*/ React.createElement("div", {
        className: "file-drop__card col-lg-4 col-md-6 col-sm-6",
        key: `${i}-${file.name}`
    }, /*#__PURE__*/ React.createElement("div", {
        className: "panel panel--bordered hover-emboss--small",
        onClick: (e)=>e.stopPropagation()
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
        onClick: ()=>removeFile(i)
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
        onClick: ()=>removeFile(i)
    }, /*#__PURE__*/ React.createElement("span", {
        className: "icon-close",
        title: "Remove the file."
    })), /*#__PURE__*/ React.createElement("div", {
        className: "text-ellipsis half-margin-bottom"
    }, file.name), /*#__PURE__*/ React.createElement("span", {
        className: "file-icon text-muted icon-file-o qtr-margin-right"
    }), /*#__PURE__*/ React.createElement("small", null, bytes.format(file.size, {
        unitSeparator: " "
    })))))
;
const DropzoneMessage = ({ inline , accept , maxFileSize  })=>{
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
const DropzoneFiles = ({ files , inline , showTotalSelected , removeFile  })=>{
    if (!Array.isArray(files) || !files.length) {
        return null;
    }
    return /*#__PURE__*/ React.createElement("div", {
        className: "dropzone-previews"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "file-drop__container container--fluid"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "row"
    }, files.map((file, i)=>/*#__PURE__*/ React.createElement(FileCard, {
            key: i,
            file: file,
            i: i,
            inline: inline,
            removeFile: removeFile
        })
    ))), showTotalSelected ? /*#__PURE__*/ React.createElement("div", {
        className: "file-drop__filecnt"
    }, files.length, " selected") : null);
};
const Dropzone = ({ error , loose , compressed , inline , label , name , value , maxFileSize: customMaxFileSize , maxFiles , onChange , showTotalSelected , ...props })=>{
    const maxFileSize = useMemo(()=>{
        if (customMaxFileSize) {
            return bytes.parse(customMaxFileSize);
        } else {
            return null;
        }
    }, [
        customMaxFileSize
    ]);
    const padding = useMemo(()=>{
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
    const handleDrop = useCallback((filesToUpload)=>{
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
    return /*#__PURE__*/ React.createElement("div", {
        className: `form-group${appendClass(error, "form-group--error")}`
    }, /*#__PURE__*/ React.createElement("div", {
        className: "form-group__text"
    }, label ? /*#__PURE__*/ React.createElement("label", {
        htmlFor: name
    }, label) : null, /*#__PURE__*/ React.createElement(ReactDropzone, _extends({}, props, {
        onDrop: handleDrop,
        maxSize: maxFileSize
    }), ({ getRootProps , getInputProps  })=>/*#__PURE__*/ React.createElement("div", _extends({
            className: `dropzone ${padding}`
        }, getRootProps()), /*#__PURE__*/ React.createElement("input", _extends({}, getInputProps())), /*#__PURE__*/ React.createElement(DropzoneFiles, {
            files: value,
            showTotalSelected: showTotalSelected,
            inline: inline,
            removeFile: removeFile
        }), Array.isArray(value) && value.length ? null : /*#__PURE__*/ React.createElement(DropzoneMessage, {
            maxFileSize: maxFileSize,
            inline: inline,
            accept: props.accept
        }))
    )), error ? /*#__PURE__*/ React.createElement("div", {
        className: `help-block text-danger`,
        role: "alert"
    }, /*#__PURE__*/ React.createElement("span", null, error)) : null);
};

export { Dropzone };
//# sourceMappingURL=index.js.map
