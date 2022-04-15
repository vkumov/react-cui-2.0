import React, { FC, ReactNode, useCallback, useMemo } from "react";
import ReactDropzone, {
  DropzoneProps as ReactDropzoneProps,
} from "react-dropzone";
import bytes from "bytes";

import { appendClass as ac } from "src/utils";
import "../../css/dropzone.css";

type FileCardProps = {
  file: any;
  i: number;
  removeFile: (i: number) => void;
  inline: boolean;
};

const FileCard: FC<FileCardProps> = ({ file, i, removeFile, inline }) => (
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

export type DropzoneProps = {
  name: string;
  value?: any[];
  maxFiles?: number;
  inline?: boolean;
  showTotalSelected?: boolean;
  accept?: string;
  loose?: boolean;
  compressed?: boolean;
  label: string;
  multiple: boolean;
  error?: ReactNode;
  maxFileSize?: string | number;
  onChange?: (value: File[]) => void;
};

const DropzoneMessage: FC<
  Pick<DropzoneProps, "inline" | "accept"> & { maxFileSize: number }
> = ({ inline, accept, maxFileSize }) => {
  if (inline) {
    return (
      <div className="dropzone-message flex flex-row flex-center-vertical">
        <h5 className="text-muted text-left flex-fill no-margin">
          Click Here or Drop Files to Upload
        </h5>
        {accept && (
          <span className="text-muted text-small half-margin-right">
            {"Allowed files: "}
            {typeof accept === "string" ? accept.split(",").join(", ") : accept}
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
      {accept && (
        <div className="text-muted">
          Allowed files: {accept.split(",").join(", ")}
        </div>
      )}
      {maxFileSize && (
        <div className="text-muted">
          Max file size: {bytes.format(maxFileSize, { unitSeparator: " " })}
        </div>
      )}
    </div>
  );
};

type DropzoneFilesProps = {
  files?: File[];
  removeFile: (toRemove: number) => void;
};

const DropzoneFiles: FC<
  DropzoneFilesProps &
    Required<Pick<DropzoneProps, "inline" | "showTotalSelected">>
> = ({ files, inline, showTotalSelected, removeFile }) => {
  if (!Array.isArray(files) || !files.length) {
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
              inline={inline}
              removeFile={removeFile}
            />
          ))}
        </div>
      </div>
      {showTotalSelected ? (
        <div className="file-drop__filecnt">{files.length} selected</div>
      ) : null}
    </div>
  );
};

export const Dropzone: FC<DropzoneProps & ReactDropzoneProps> = ({
  error,
  loose,
  compressed,
  inline,
  label,
  name,
  value,
  maxFileSize: customMaxFileSize,
  maxFiles,
  onChange,
  showTotalSelected,
  ...props
}) => {
  const maxFileSize = useMemo(() => {
    if (customMaxFileSize) {
      return bytes.parse(customMaxFileSize);
    } else {
      return null;
    }
  }, [customMaxFileSize]);

  const padding = useMemo(() => {
    let tmp = "";
    if (loose) tmp = "dropzone--loose";
    if (compressed) tmp = "dropzone--compressed";
    if (inline && Array.isArray(value) && value.length) {
      switch (tmp) {
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
  }, [loose, compressed, value, inline]);

  const handleDrop = useCallback(
    (filesToUpload: File[]) => {
      if (maxFileSize)
        filesToUpload = filesToUpload.filter(
          (file) => file.size <= maxFileSize
        );

      if (maxFiles && filesToUpload.length > maxFiles)
        filesToUpload = filesToUpload.slice(0, maxFiles);

      onChange(filesToUpload);
    },
    [maxFileSize, maxFiles, onChange]
  );

  const removeFile = (toRemove: number) => {
    onChange(
      Array.isArray(value) ? value.filter((_, idx) => toRemove !== idx) : value
    );
  };

  return (
    <div className={`form-group${ac(error, "form-group--error")}`}>
      <div className="form-group__text">
        {label ? <label htmlFor={name}>{label}</label> : null}
        <ReactDropzone {...props} onDrop={handleDrop} maxSize={maxFileSize}>
          {({ getRootProps, getInputProps }) => (
            <div className={`dropzone ${padding}`} {...getRootProps()}>
              <input {...getInputProps()} />
              <DropzoneFiles
                files={value}
                showTotalSelected={showTotalSelected}
                inline={inline}
                removeFile={removeFile}
              />
              {Array.isArray(value) && value.length ? null : (
                <DropzoneMessage
                  maxFileSize={maxFileSize}
                  inline={inline}
                  accept={props.accept}
                />
              )}
            </div>
          )}
        </ReactDropzone>
      </div>
      {error ? (
        <div className={`help-block text-danger`} role="alert">
          <span>{error}</span>
        </div>
      ) : null}
    </div>
  );
};
