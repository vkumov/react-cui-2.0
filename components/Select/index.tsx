import React, {
  ChangeEvent,
  HTMLProps,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useLayoutEffect,
} from "react";

import { InputChips } from "../InputChips";
import { InputHelpBlock } from "../InputHelpBlock";
import { appendClass as ac } from "../../utils";

const SelectChildren = ({ children, handleOptionClick, isSelected }) =>
  React.Children.map(children, (child, idx) => {
    switch (child.type) {
      case "option":
        return (
          <a
            key={idx}
            onClick={(e) => handleOptionClick(e, child.props.value)}
            className={`${ac(isSelected(child.props.value), "selected")}${ac(
              child.props.disabled,
              "disabled"
            )}`}
          >
            {child.props.children}
          </a>
        );
      case "optgroup":
        return (
          <div key={idx} className="dropdown__group">
            <div className="dropdown__group-header">{child.props.label}</div>
            <SelectChildren
              handleOptionClick={handleOptionClick}
              isSelected={isSelected}
            >
              {child.props.children}
            </SelectChildren>
          </div>
        );
      default:
        return child;
    }
  });

type EditableSelectProps = {
  compressed?: boolean;
  title?: ReactNode;
  prompt?: string;
  inline?: boolean;
  editable?: boolean;
  type?: "number" | "text";
  error?: ReactNode;
  multi?: boolean;
  onChange?: (value) => void;
  value?: any;
};

export const EditableSelect = React.forwardRef<
  HTMLDivElement,
  PropsWithChildren<EditableSelectProps> &
    Omit<HTMLProps<HTMLInputElement>, "type">
>(
  (
    {
      compressed = false,
      prompt = "Select an option",
      inline = false,
      type = "text",
      children,
      title = null,
      error = null,
      onChange = null,
      value: initialValue = undefined,
      editable = false,
      multi = false,
      ref,
      ...input
    },
    innerRef
  ) => {
    const [isOpen, setOpen] = React.useState<boolean>(false);
    const [node, setNode] = React.useState(undefined);
    const [value, setValue] = React.useState(initialValue);

    // eslint-disable-next-line prefer-const
    let handleOutsideClick: (e) => void;

    const handleClick = (newState = true) => {
      if (newState && !isOpen)
        document.addEventListener("click", handleOutsideClick, false);
      else document.removeEventListener("click", handleOutsideClick, false);

      setOpen(newState);
    };

    handleOutsideClick = (e) => {
      const n = innerRef || node;
      if (n && n.contains(e.target)) return;

      handleClick(false);
    };

    const handleOptionClick = (_e, newValue) => {
      if (multi) {
        setValue((curr) => {
          if (curr?.includes(newValue))
            return curr.filter((v) => v !== newValue);
          else return (curr || []).concat(newValue);
        });
      } else {
        setValue(newValue);
      }
      if (!multi) handleClick(false);
    };

    const isSelected = (checkValue) =>
      multi ? value?.includes(checkValue) : value === checkValue;

    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    useLayoutEffect(() => {
      if (multi && initialValue && !Array.isArray(initialValue))
        throw Error("Value must be an array if multi select is allowed.");
    }, [multi, initialValue]);

    useEffect(() => {
      if (typeof onChange === "function") onChange(value);
    }, [value]);

    return (
      <div
        className={`form-group dropdown${ac(
          compressed,
          "input--compressed"
        )}${ac(isOpen, "active")}${ac(inline, "form-group--inline")}${ac(
          error,
          "form-group--error"
        )}`}
        ref={innerRef || ((n) => setNode(n))}
      >
        {multi ? (
          <InputChips
            className="select editable"
            title={title}
            {...input}
            placeholder={
              !Array.isArray(value) || !value.length
                ? prompt || input.placeholder
                : ""
            }
            readOnly={!editable}
            onClick={() => handleClick(true)}
            onChange={(v) => setValue(v)}
            value={value}
            outerWrap={false}
          />
        ) : (
          <div
            className="form-group__text select editable"
            onClick={() => handleClick(true)}
          >
            <input
              type={type}
              placeholder={prompt || input.placeholder}
              autoComplete="off"
              readOnly={!editable}
              {...input}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                if (!editable) return;
                e.persist();
                setValue(e.target.value);
              }}
              value={value}
            />
            {title ? <label htmlFor={input.id}>{title}</label> : null}
          </div>
        )}
        <div className="dropdown__menu">
          <SelectChildren
            handleOptionClick={handleOptionClick}
            isSelected={isSelected}
          >
            {children}
          </SelectChildren>
        </div>
        {error ? <InputHelpBlock text={error} /> : null}
      </div>
    );
  }
);
