import React, {
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type FC,
  type MutableRefObject,
  type PropsWithChildren,
  type ReactElement,
  type ReactHTMLElement,
  type ReactNode,
} from "react";
import useEvent from "react-use-event-hook";
import { useMergeRefs } from "use-callback-ref";

import { InputChips } from "src/InputChips";
import { InputHelpBlock } from "src/InputHelp";
import { appendClass as ac } from "src/utils";

import type { FullInputChipsProps } from "../InputChips";

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

type Option = {
  label: string;
  value: string;
};

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
  divRef?: MutableRefObject<HTMLDivElement>;
  options?: Option[];
  onSelect?: (value: string) => void | (() => void);
  onDeselect?: (value: string) => void | (() => void);
};

type WantedChipsProps = Omit<
  FullInputChipsProps,
  "type" | "label" | "onSelect" | "onDeselect" | "value"
>;

type FullEditableSelectProps = PropsWithChildren<
  EditableSelectProps & Partial<WantedChipsProps>
>;

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

export const EditableSelect: FC<FullEditableSelectProps> = forwardRef<
  HTMLInputElement,
  FullEditableSelectProps
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
      displayValues = false,
      disabled,
      className,
      divRef,
      options,
      onSelect = null,
      onDeselect = null,
      ...input
    },
    inputRef
  ) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState(initialValue);
    const ref = useRef<HTMLDivElement>(undefined);

    const display = useMemo(() => collectDisplays(children), [children]);

    const handleClick = useEvent((newState = true) => {
      if (disabled) return;
      setOpen(newState);
    });

    useEffect(() => {
      if (isOpen) {
        const onOutsideClick = (e: MouseEvent) => {
          // ignore clicks on the component itself
          if (!(e.target instanceof Node) || !ref?.current) return;
          if (ref.current && ref.current.contains(e.target)) return;

          if (ref.current && !ref.current.contains(e.target)) {
            handleClick(false);
          }
        };

        document.addEventListener("click", onOutsideClick, true);
        return () =>
          document.removeEventListener("click", onOutsideClick, true);
      }
    }, [isOpen, handleClick]);

    const handleOptionClick = useEvent((_e, newValue) => {
      if (multi) {
        let added = true;
        setValue((curr) => {
          if (curr?.includes(newValue)) {
            added = false;
            return curr.filter((v) => v !== newValue);
          } else return (curr || []).concat(newValue);
        });
        const r = (added ? onSelect : onDeselect)?.call(undefined, newValue);
        if (typeof r === "function") r();
      } else {
        setValue(newValue);
      }
      if (!multi) handleClick(false);
    });

    const isSelected = (checkValue) =>
      multi ? value?.includes(checkValue) : value === checkValue;

    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    useEffect(() => {
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
        ref={useMergeRefs([ref, divRef])}
      >
        {multi ? (
          <InputChips
            className="select editable"
            label={label}
            {...input}
            placeholder={
              !Array.isArray(value) || !value.length
                ? input.placeholder || prompt
                : ""
            }
            readOnly={!editable}
            onClick={() => handleClick(true)}
            onChange={() => void 0}
            onChipRemove={(idx) => {
              let val: any;
              setValue((curr: any[]) => {
                val = curr[idx];
                return curr.filter((_v, i) => i !== idx);
              });
              if (typeof onDeselect === "function") onDeselect(val);
            }}
            value={
              displayValues
                ? value
                : display
                    .filter((d) => value?.includes(d.value))
                    .map((d) => d.display)
            }
            noInput={
              inline && !editable && Array.isArray(value) && value.length > 0
            }
            outerWrap={false}
            ref={inputRef}
          />
        ) : (
          <div
            className="form-group__text select editable"
            onClick={() => handleClick(true)}
          >
            <input
              type={type}
              placeholder={input.placeholder || prompt}
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
              ref={inputRef}
            />
            {label ? <label htmlFor={input.id}>{label}</label> : null}
          </div>
        )}
        <div className="dropdown__menu">
          <SelectChildren
            handleOptionClick={handleOptionClick}
            isSelected={isSelected}
          >
            {options
              ? options.map((opt, idx) => (
                  <option key={idx} value={opt.value}>
                    {opt.value}
                  </option>
                ))
              : children}
          </SelectChildren>
        </div>
        {error ? <InputHelpBlock text={error} /> : null}
      </div>
    );
  }
);
