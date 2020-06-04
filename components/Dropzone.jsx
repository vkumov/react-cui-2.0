/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import ReactDropzone from "react-dropzone";
import PropTypes from "prop-types";
import bytes from "bytes";
import { connect } from "formik";

const FileCard = ({ file, i, removeFile, inline }) => (
  <div
    className="file-drop__card col-lg-4 col-md-6 col-sm-6"
    key={`${i}-${file.name}`}
  >
    <div
      className="panel panel--bordered hover-emboss--small"
      onClick={(e) => e.stopPropagation()}
    >
      {inline ? (
        <div className="panel__body flex flex-row">
          <div
            className="text-left flex-fill"
            style={{ maxWidth: "calc(100% - 20px)" }}
          >
            <div className="text-ellipsis">{file.name}</div>
            <small style={{ whiteSpace: "nowrap" }}>
              {bytes.format(file.size, { unitSeparator: " " })}
            </small>
          </div>
          <a className="link pull-right" onClick={() => removeFile(i)}>
            <span className="icon-close" title="Remove the file." />
          </a>
        </div>
      ) : (
        <div className="panel__body">
          <a
            className="link pull-right"
            style={{ marginRight: "5px" }}
            onClick={() => removeFile(i)}
          >
            <span className="icon-close" title="Remove the file." />
          </a>
          <div className="text-ellipsis half-margin-bottom">{file.name}</div>
          <span className="file-icon text-muted icon-file-o qtr-margin-right" />
          <small>{bytes.format(file.size, { unitSeparator: " " })}</small>
        </div>
      )}
    </div>
  </div>
);

class Dropzone extends React.Component {
  constructor(props) {
    super(props);

    if (props.maxFileSize) {
      this.maxFileSize = bytes.parse(props.maxFileSize);
    } else {
      this.maxFileSize = null;
    }
  }

  removeFile = (toRemove) => {
    this.props.formik.setFieldValue(
      this.props.name,
      this.props.input.value.filter((_, idx) => toRemove !== idx)
    );
  };

  handleDrop = (filesToUpload) => {
    if (this.maxFileSize) {
      filesToUpload = filesToUpload.filter(
        (file) => file.size <= this.maxFileSize
      );
    }

    if (this.props.maxFiles && filesToUpload.length > this.props.maxFiles) {
      filesToUpload = filesToUpload.slice(0, this.props.maxFiles);
    }

    this.props.formik.setFieldValue(this.props.name, filesToUpload);
  };

  renderFiles = () => {
    const files = this.props.input.value;
    if (!files || !files.length || !Array.isArray(files)) {
      return null;
    }

    return (
      <div className="dropzone-previews">
        <div className="file-drop__container container--fluid">
          <div className="row">
            {files.map((file, i) => (
              <FileCard
                key={i}
                file={file}
                i={i}
                inline={this.props.inline}
                removeFile={this.removeFile}
              />
            ))}
          </div>
        </div>
        {this.props.showTotalSelected && (
          <div className="file-drop__filecnt">{files.length} selected</div>
        )}
      </div>
    );
  };

  renderMessage = () => {
    const files = this.props.input.value;
    if (files && files.length) {
      return null;
    }

    if (this.props.inline) {
      return (
        <div className="dropzone-message flex flex-row flex-center-vertical">
          <h5 className="text-muted text-left flex-fill no-margin">
            Click Here or Drop Files to Upload
          </h5>
          {this.props.accept && (
            <span className="text-muted text-small half-margin-right">
              Allowed files: {this.props.accept.split(",").join(", ")}
            </span>
          )}
          <span className="file-drop__icon icon-upload"></span>
        </div>
      );
    }

    return (
      <div className="dropzone-message">
        <span className="file-drop__icon icon-upload"></span>
        <h4 className="text-muted">Click Here or Drop Files to Upload</h4>
        {this.props.accept && (
          <div className="text-muted">
            Allowed files: {this.props.accept.split(",").join(", ")}
          </div>
        )}
        {this.maxFileSize && (
          <div className="text-muted">
            Max file size:{" "}
            {bytes.format(this.maxFileSize, { unitSeparator: " " })}
          </div>
        )}
      </div>
    );
  };

  render() {
    const { meta, loose, compressed } = this.props;
    let padding = "";
    if (loose) {
      padding = "dropzone--loose";
    }
    if (compressed) {
      padding = "dropzone--compressed";
    }

    if (
      this.props.inline &&
      this.props.input.value &&
      this.props.input.value.length
    ) {
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

    return (
      <div
        className={
          "form-group" +
          (meta.touched && meta.error ? " form-group--error" : "")
        }
      >
        <div className="form-group__text">
          {this.props.label ? (
            <label htmlFor={this.props.name}>{this.props.label}</label>
          ) : null}
          <ReactDropzone
            name={this.props.name}
            onDrop={this.handleDrop}
            maxSize={this.maxFileSize}
            multiple={this.props.multiple}
          >
            {({ getRootProps, getInputProps }) => (
              <div className={`dropzone ${padding}`} {...getRootProps()}>
                <input {...getInputProps()} />
                {this.renderFiles()}
                {this.renderMessage()}
              </div>
            )}
          </ReactDropzone>
        </div>
        {meta.touched && meta.error && (
          <div className={`help-block text-danger`} role="alert">
            <span>{meta.error}</span>
          </div>
        )}
      </div>
    );
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
  compressed: PropTypes.bool,
};

const connected = connect(Dropzone);

export { connected as Dropzone };
