import React from 'react';
import PropTypes from 'prop-types';
import { c as _defineProperty, a as _extends } from '../_rollupPluginBabelHelpers-b60338eb.js';
import { a as appendClass } from '../index-be24eb93.js';
import { s as styleInject } from '../style-inject.es-1f59c1d0.js';
import { getIn } from 'formik';
import { InputHelpBlock } from './InputHelpBlock.js';
import { v4 } from 'uuid';

var css = ".cui .form-group.dropdown .select+.dropdown__menu{max-width:unset!important;width:100%!important}";
styleInject(css);

class Select extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", () => {
      if (!this.state.isOpen) {
        // attach/remove event handler
        document.addEventListener("click", this.handleOutsideClick, false);
      } else {
        document.removeEventListener("click", this.handleOutsideClick, false);
      }

      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }));
    });

    _defineProperty(this, "handleOutsideClick", e => {
      // ignore clicks on the component itself
      const n = this.props.innerRef ? this.props.innerRef : this.node;

      if (n && n.contains(e.target)) {
        return;
      }

      this.handleClick();
    });

    _defineProperty(this, "handleOptionClick", (e, newValue, title) => {
      const {
        field,
        multiple,
        form
      } = this.props;

      if (!multiple) {
        form.setFieldValue(field.name, newValue);
        form.setFieldTouched(field.name, true);
        this.setState({
          title
        });
        this.handleClick();
      } else if (e.target.checked) {
        form.setFieldValue(field.name, [...field.value, newValue]);
        form.setFieldTouched(field.name, true);
        this.setState({
          title: [...this.state.title, title]
        });
      } else {
        form.setFieldValue(field.name, field.value.filter(v => v !== newValue));
        form.setFieldTouched(field.name, true);
        this.setState({
          title: this.state.title.filter(t => t !== title)
        });
      }
    });

    _defineProperty(this, "isSelected", checkValue => {
      const {
        value
      } = this.props.field;

      if (this.props.multiple) {
        return Array.isArray(value) && value.findIndex(v => v === checkValue) >= 0;
      }

      return value === checkValue;
    });

    _defineProperty(this, "renderOption", child => {
      const {
        value,
        children,
        disabled
      } = child.props;

      if (this.props.multiple) {
        return React.createElement("a", {
          disabled: disabled
        }, React.createElement("label", {
          className: "checkbox"
        }, React.createElement("input", {
          type: "checkbox",
          onClick: e => this.handleOptionClick(e, value, Array.isArray(children) ? children.join("") : children),
          checked: this.isSelected(value) ? true : false
        }), React.createElement("span", {
          className: "checkbox__input"
        })), React.createElement("span", null, children));
      }

      return React.createElement("a", {
        disabled: disabled,
        onClick: e => this.handleOptionClick(e, value, Array.isArray(children) ? children.join("") : children),
        className: this.isSelected(value) ? "selected" : ""
      }, children);
    });

    _defineProperty(this, "renderOptgroup", child => {
      const {
        label,
        children
      } = child.props;
      return React.createElement("div", {
        className: "dropdown__group"
      }, React.createElement("div", {
        className: "dropdown__group-header"
      }, label), this.renderChildren(children));
    });

    _defineProperty(this, "renderChildren", children => {
      return React.Children.map(children, child => {
        switch (child.type) {
          case "option":
            return this.renderOption(child);

          case "optgroup":
            return this.renderOptgroup(child);

          default:
            return child;
        }
      });
    });

    _defineProperty(this, "findTitle", where => {
      let r = [];
      React.Children.forEach(where || this.props.children, ch => {
        if (ch.type === "optgroup") {
          const temp = this.findTitle(ch.props.children);
          if (temp) r.push(temp);
        }

        if (this.isSelected(ch.props.value)) {
          r.push(Array.isArray(ch.props.children) ? ch.props.children.join("") : ch.props.children);
        }
      });
      return r.join(", ");
    });

    _defineProperty(this, "getShowValue", () => {
      const {
        multiple,
        prompt,
        field
      } = this.props;

      if (typeof field.value === "undefined" || field.value === null || !field.value.toString().length) {
        return prompt;
      }

      if (multiple) {
        return this.state.title.length ? this.state.title.join(", ") : this.findTitle();
      }

      return this.state.title ? this.state.title : this.findTitle();
    });

    this.state = {
      isOpen: false,
      title: props.multiple ? [] : ""
    };
  }

  render() {
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
      width
    } = this.props;
    const {
      touched,
      errors
    } = form;
    return React.createElement("div", _extends({
      className: `form-group dropdown${appendClass(compressed, "input--compressed")}${appendClass(this.state.isOpen, "active")}${appendClass(inline, "label--inline")}${appendClass(up, "dropdown--up")}${appendClass(disabled, "disabled")}${appendClass(className)}${appendClass(getIn(touched, field.name) && getIn(errors, field.name), "form-group--error")}` // (asyncValidating ? " form-group--loading" : "")
      ,
      ref: innerRef || (node => {
        this.node = node;
      })
    }, inline === "both" ? {
      style: {
        display: "inline-block"
      }
    } : {}), React.createElement("div", {
      className: "form-group__text select",
      onClick: this.handleClick
    }, React.createElement("input", _extends({
      id: id
    }, field, {
      value: this.getShowValue(),
      disabled: disabled
    }, width ? {
      style: {
        width: `${width}px`,
        minWidth: `${width}px`
      }
    } : {})), title ? React.createElement("label", {
      htmlFor: id
    }, title) : null), React.createElement("div", _extends({
      className: "dropdown__menu"
    }, width ? {
      style: {
        width: `${width}px`,
        minWidth: `${width}px`
      }
    } : {}), this.renderChildren(children)), getIn(touched, field.name) && getIn(errors, field.name) ? React.createElement(InputHelpBlock, {
      text: getIn(errors, field.name)
    }) : null);
  }

}
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
  compressed: PropTypes.bool
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
  compressed: false
};

export { Select };
