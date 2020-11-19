import React from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import { getIn } from "formik";

import "../css/select.css";

import { InputHelpBlock } from "./InputHelpBlock";
import { appendClass as ac } from "../utils";

type SelectProps = {
  id?: string;
  label?: string;
  title?: string;
  prompt?: string;
  multiple?: boolean;
  inline?: boolean | "both";
  up?: boolean;
  disabled?: boolean;
  width?: number;
  compressed?: boolean;
  [x: string]: any;
};

type SelectState = {
  isOpen: boolean;
  title: string | string[];
};

export class Select extends React.Component<SelectProps, SelectState> {
  static propTypes = {
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

  static defaultProps = {
    prompt: "Select an option",
    multiple: false,
    inline: false,
    id: uuid(),
    label: null,
    title: null,
    width: null,
    up: false,
    disabled: false,
    compressed: false,
  };
  node: HTMLElement;

  constructor(props: SelectProps) {
    super(props);

    this.state = {
      isOpen: false,
      title: props.multiple ? [] : "",
    };
  }

  handleClick = (): void => {
    if (!this.state.isOpen) {
      // attach/remove event handler
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  handleOutsideClick = (e): void => {
    // ignore clicks on the component itself
    const n = this.props.innerRef ? this.props.innerRef : this.node;
    if (n && n.contains(e.target)) {
      return;
    }

    this.handleClick();
  };

  handleOptionClick = (e, newValue, title): void => {
    const { field, multiple, form } = this.props;

    if (!multiple) {
      form.setFieldValue(field.name, newValue);
      form.setFieldTouched(field.name, true);
      this.setState({ title });

      this.handleClick();
    } else if (e.target.checked) {
      form.setFieldValue(field.name, [...field.value, newValue]);
      form.setFieldTouched(field.name, true);
      this.setState({ title: [...(this.state.title as string[]), title] });
    } else {
      form.setFieldValue(
        field.name,
        field.value.filter((v) => v !== newValue)
      );
      form.setFieldTouched(field.name, true);
      this.setState({
        title: (this.state.title as string[]).filter((t) => t !== title),
      });
    }
  };

  isSelected = (checkValue): boolean => {
    const { value } = this.props.field;

    if (this.props.multiple) {
      return (
        Array.isArray(value) && value.findIndex((v) => v === checkValue) >= 0
      );
    }
    return value === checkValue;
  };

  renderOption = (child): JSX.Element => {
    const { value, children, disabled } = child.props;

    if (this.props.multiple) {
      return (
        <a className={disabled ? "disabled" : ""}>
          <label className="checkbox">
            <input
              type="checkbox"
              onClick={(e) =>
                this.handleOptionClick(
                  e,
                  value,
                  Array.isArray(children) ? children.join("") : children
                )
              }
              checked={this.isSelected(value) ? true : false}
            />
            <span className="checkbox__input" />
          </label>
          <span>{children}</span>
        </a>
      );
    }

    return (
      <a
        onClick={(e) =>
          this.handleOptionClick(
            e,
            value,
            Array.isArray(children) ? children.join("") : children
          )
        }
        className={`${this.isSelected(value) ? "selected" : ""}${
          disabled ? " disabled" : ""
        }`}
      >
        {children}
      </a>
    );
  };

  renderOptgroup = (child): JSX.Element => {
    const { label, children } = child.props;
    return (
      <div className="dropdown__group">
        <div className="dropdown__group-header">{label}</div>
        {this.renderChildren(children)}
      </div>
    );
  };

  renderChildren = (children): JSX.Element => {
    return React.Children.map(children, (child) => {
      switch (child.type) {
        case "option":
          return this.renderOption(child);
        case "optgroup":
          return this.renderOptgroup(child);
        default:
          return child;
      }
    });
  };

  findTitle = (where = undefined): string => {
    const r = [];
    React.Children.forEach(where || this.props.children, (ch) => {
      if (ch.type === "optgroup") {
        const temp = this.findTitle(ch.props.children);
        if (temp) r.push(temp);
      }
      if (this.isSelected(ch.props.value)) {
        r.push(
          Array.isArray(ch.props.children)
            ? ch.props.children.join("")
            : ch.props.children
        );
      }
    });
    return r.join(", ");
  };

  getShowValue = (): string | string[] => {
    const { multiple, prompt, field } = this.props;
    if (
      typeof field.value === "undefined" ||
      field.value === null ||
      !field.value.toString().length
    ) {
      return prompt;
    }

    if (multiple) {
      return Array.isArray(this.state.title) && this.state.title.length
        ? this.state.title.join(", ")
        : this.findTitle();
    }
    return this.state.title ? this.state.title : this.findTitle();
  };

  render(): JSX.Element {
    const {
      compressed,
      field,
      id,
      form,
      title,
      children,
      inline,
      up,
      innerRef,
      className,
      disabled,
      width,
    } = this.props;
    const { touched, errors } = form;

    return (
      <div
        className={
          `form-group dropdown${ac(compressed, "input--compressed")}${ac(
            this.state.isOpen,
            "active"
          )}${ac(inline, "label--inline")}${ac(up, "dropdown--up")}${ac(
            disabled,
            "disabled"
          )}${ac(className)}${ac(
            getIn(touched, field.name) && getIn(errors, field.name),
            "form-group--error"
          )}`
          // (asyncValidating ? " form-group--loading" : "")
        }
        ref={
          innerRef ||
          ((node) => {
            this.node = node;
          })
        }
        {...(inline === "both" ? { style: { display: "inline-block" } } : {})}
      >
        <div className="form-group__text select" onClick={this.handleClick}>
          <input
            id={id}
            {...field}
            value={this.getShowValue()}
            disabled={disabled}
            {...(width
              ? { style: { width: `${width}px`, minWidth: `${width}px` } }
              : {})}
          />
          {title ? <label htmlFor={id}>{title}</label> : null}
        </div>
        <div
          className="dropdown__menu"
          {...(width
            ? { style: { width: `${width}px`, minWidth: `${width}px` } }
            : {})}
        >
          {this.renderChildren(children)}
        </div>
        {getIn(touched, field.name) && getIn(errors, field.name) ? (
          <InputHelpBlock text={getIn(errors, field.name)} />
        ) : null}
      </div>
    );
  }
}
