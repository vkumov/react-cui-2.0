import React from 'react';
import PropTypes from 'prop-types';
import { a as _extends } from '../_rollupPluginBabelHelpers-b60338eb.js';
import { connect } from 'formik';
import ReactDropzone from 'react-dropzone';

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

const FileCard = ({
  file,
  i,
  removeFile,
  inline
}) => React.createElement("div", {
  className: "file-drop__card col-lg-4 col-md-6 col-sm-6",
  key: `${i}-${file.name}`
}, React.createElement("div", {
  className: "panel panel--bordered hover-emboss--small",
  onClick: e => e.stopPropagation()
}, inline ? React.createElement("div", {
  className: "panel__body flex flex-row"
}, React.createElement("div", {
  className: "text-left flex-fill",
  style: {
    maxWidth: "calc(100% - 20px)"
  }
}, React.createElement("div", {
  className: "text-ellipsis"
}, file.name), React.createElement("small", {
  style: {
    whiteSpace: "nowrap"
  }
}, bytes_1.format(file.size, {
  unitSeparator: " "
}))), React.createElement("a", {
  className: "link pull-right",
  onClick: () => removeFile(i)
}, React.createElement("span", {
  className: "icon-close",
  title: "Remove the file."
}))) : React.createElement("div", {
  className: "panel__body"
}, React.createElement("a", {
  className: "link pull-right",
  style: {
    marginRight: "5px"
  },
  onClick: () => removeFile(i)
}, React.createElement("span", {
  className: "icon-close",
  title: "Remove the file."
})), React.createElement("div", {
  className: "text-ellipsis half-margin-bottom"
}, file.name), React.createElement("span", {
  className: "file-icon text-muted icon-file-o qtr-margin-right"
}), React.createElement("small", null, bytes_1.format(file.size, {
  unitSeparator: " "
})))));

class Dropzone extends React.Component {
  constructor(props) {
    super(props);

    if (props.maxFileSize) {
      this.maxFileSize = bytes_1.parse(props.maxFileSize);
    } else {
      this.maxFileSize = null;
    }
  }

  removeFile(toRemove) {
    this.props.formik.setFieldValue(this.props.name, this.props.input.value.filter((_, idx) => toRemove !== idx));
  } // renderFileCard = (file, i) => {
  //   return (
  //   );
  // };


  handleDrop(filesToUpload) {
    if (this.maxFileSize) {
      filesToUpload = filesToUpload.filter(file => file.size <= this.maxFileSize);
    }

    if (this.props.maxFiles && filesToUpload.length > this.props.maxFiles) {
      filesToUpload = filesToUpload.slice(0, this.props.maxFiles);
    }

    this.props.formik.setFieldValue(this.props.name, filesToUpload);
  }

  renderFiles() {
    const files = this.props.input.value;

    if (!files || !files.length || !Array.isArray(files)) {
      return null;
    }

    return React.createElement("div", {
      className: "dropzone-previews"
    }, React.createElement("div", {
      className: "file-drop__container container--fluid"
    }, React.createElement("div", {
      className: "row"
    }, files.map((file, i) => React.createElement(FileCard, {
      key: i,
      file: file,
      i: i,
      inline: this.props.inline,
      removeFile: this.removeFile
    })))), this.props.showTotalSelected && React.createElement("div", {
      className: "file-drop__filecnt"
    }, files.length, " selected"));
  }

  renderMessage() {
    const files = this.props.input.value;

    if (files && files.length) {
      return null;
    }

    if (this.props.inline) {
      return React.createElement("div", {
        className: "dropzone-message flex flex-row flex-center-vertical"
      }, React.createElement("h5", {
        className: "text-muted text-left flex-fill no-margin"
      }, "Click Here or Drop Files to Upload"), this.props.accept && React.createElement("span", {
        className: "text-muted text-small half-margin-right"
      }, "Allowed files: ", this.props.accept.split(",").join(", ")), React.createElement("span", {
        className: "file-drop__icon icon-upload"
      }));
    }

    return React.createElement("div", {
      className: "dropzone-message"
    }, React.createElement("span", {
      className: "file-drop__icon icon-upload"
    }), React.createElement("h4", {
      className: "text-muted"
    }, "Click Here or Drop Files to Upload"), this.props.accept && React.createElement("div", {
      className: "text-muted"
    }, "Allowed files: ", this.props.accept.split(",").join(", ")), this.maxFileSize && React.createElement("div", {
      className: "text-muted"
    }, "Max file size:", " ", bytes_1.format(this.maxFileSize, {
      unitSeparator: " "
    })));
  }

  render() {
    const {
      meta,
      loose,
      compressed
    } = this.props;
    let padding = "";

    if (loose) {
      padding = "dropzone--loose";
    }

    if (compressed) {
      padding = "dropzone--compressed";
    }

    if (this.props.inline && this.props.input.value && this.props.input.value.length) {
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

    return React.createElement("div", {
      className: "form-group" + (meta.touched && meta.error ? " form-group--error" : "")
    }, React.createElement("div", {
      className: "form-group__text"
    }, this.props.label ? React.createElement("label", {
      htmlFor: this.props.name
    }, this.props.label) : null, React.createElement(ReactDropzone, {
      name: this.props.name,
      onDrop: this.handleDrop,
      maxSize: this.maxFileSize,
      multiple: this.props.multiple
    }, ({
      getRootProps,
      getInputProps
    }) => React.createElement("div", _extends({
      className: `dropzone ${padding}`
    }, getRootProps()), React.createElement("input", getInputProps()), this.renderFiles(), this.renderMessage()))), meta.touched && meta.error && React.createElement("div", {
      className: `help-block text-danger`,
      role: "alert"
    }, React.createElement("span", null, meta.error)));
  }

}

Dropzone.propTypes = {
  label: PropTypes.string,
  accept: PropTypes.string,
  showTotalSelected: PropTypes.bool,
  maxFileSize: PropTypes.string,
  maxFiles: PropTypes.number,
  inline: PropTypes.bool,
  loose: PropTypes.bool,
  compressed: PropTypes.bool
};
const connected = connect(Dropzone);

export { connected as Dropzone };
