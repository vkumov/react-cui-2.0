import React, {
  ChangeEvent,
  HTMLProps,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useLayoutEffect,
  MouseEvent,
  forwardRef,
  useCallback,
  useState,
  useRef,
  useMemo,
  isValidElement,
  ReactElement,
  ReactHTMLElement,
} from "react";
import { useMergeRefs } from "use-callback-ref";

import { InputChips } from "../InputChips";
import { InputHelpBlock } from "../InputHelpBlock";
import { appendClass as ac } from "../../utils";

function isOption(
  element: ReactElement<unknown>
): element is ReactHTMLElement<HTMLOptionElement> {
  return element.type === "option";
}

function isOptGroup(
  element: ReactElement<unknown>
): element is ReactHTMLElement<HTMLOptGroupElement> {
  return element.type === "optgroup";
}

const SelectChildren = ({ children, handleOptionClick, isSelected }) =>
  React.Children.map(children, (child, idx) => {
    if (!isValidElement(child)) return child;

    if (isOption(child))
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

    if (isOptGroup(child))
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

    return child;
  });

type EditableSelectProps = {
  compressed?: boolean;
  label?: ReactNode;
  prompt?: string;
  inline?: boolean;
  editable?: boolean;
  type?: "number" | "text";
  error?: ReactNode;
  multi?: boolean;
  onChange?: (value) => void;
  value?: any;
  displayValues?: boolean;
  disabled?: boolean;
};

type Display = {
  display: ReactNode;
  value: any;
};

const collectDisplays = (children: ReactNode): Display[] => {
  const t = [];
  React.Children.forEach(children, (child) => {
    if (!isValidElement(child)) return null;
    if (isOption(child)) {
      t.push({
        display: child.props.children,
        value: child.props.value,
      });
    }
    if (isOptGroup(child)) t.push(collectDisplays(child.props.children));
  });
  return t.flat();
};

export const EditableSelect = forwardRef<
  HTMLDivElement,
  PropsWithChildren<EditableSelectProps> &
    Omit<HTMLProps<HTMLInputElement>, "type" | "label">
>(
  (
    {
      compressed = false,
      prompt = "Select an option",
      inline = false,
      type = "text",
      children,
      label = null,
      error = null,
      onChange = null,
      value: initialValue = undefined,
      editable = false,
      multi = false,
      ref: _unused,
      displayValues = false,
      disabled,
      className,
      ...input
    },
    forwardRef
  ) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState(initialValue);
    const ref = useRef<HTMLDivElement>(undefined);

    const display = useMemo(() => collectDisplays(children), [children]);

    // eslint-disable-next-line prefer-const
    let handleOutsideClick;

    const handleClick = useCallback(
      (newState = true) => {
        if (disabled) return;
        setOpen((current) => {
          if (newState && !current) {
            document.addEventListener("click", handleOutsideClick, true);
          } else
            document.removeEventListener("click", handleOutsideClick, true);

          return newState;
        });
      },
      [disabled]
    );

    handleOutsideClick = (e: MouseEvent<Node>) => {
      // ignore clicks on the component itself
      if (!(e.target instanceof Node) || !ref?.current) return;
      if (ref.current && ref.current.contains(e.target)) return;

      if (ref.current && !ref.current.contains(e.target)) {
        handleClick(false);
        return;
      }
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
        )}${ac(disabled, "disabled")}${ac(className)}`}
        ref={useMergeRefs([ref, forwardRef])}
      >
        {multi ? (
          <InputChips
            className="select editable"
            label={label}
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
              value={
                editable
                  ? value || ""
                  : !displayValues
                  ? display?.find((el) => el.value === value)?.display || ""
                  : value
              }
            />
            {label ? <label htmlFor={input.id}>{label}</label> : null}
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
