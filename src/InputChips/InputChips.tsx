import React, {
  HTMLProps,
  ReactNode,
  useState,
  useCallback,
  useEffect,
} from "react";

import { ConditionalWrapper } from "src/Conditional";
import { Label, LabelColor } from "src/Label";
import { InputHelpBlock, InputHelpBaloon } from "src/InputHelp";

import { appendClass as ac } from "src/utils";

import "../../css/chips.css";

export type InputChipsProps = {
  label?: ReactNode;
  chipsColor?: LabelColor;
  addOnBlur?: boolean;
  allowRepeat?: boolean;
  allowRegex?: string;
  delimiters?: string | number[];
  valueValidator?: (value: any) => boolean;
  maxChips?: number;
  baloon?: string;
  className?: string;
  id?: string;
  error?: ReactNode;
  value?: string[];
  outerWrap?: boolean;
  onChange?: (newValue: string[]) => void;
  onChipRemove?: (idx: number) => void;
  chipsOutside?: boolean;
  noInput?: boolean;
  renderChip?: (params: {
    onDelete: () => unknown;
    value: string;
    idx: number;
  }) => JSX.Element;
};

export type FullInputChipsProps = InputChipsProps &
  Omit<HTMLProps<HTMLInputElement>, "id" | "value" | "onChange" | "label">;

const emptyList: string[] = [];

export const InputChips = React.forwardRef<HTMLDivElement, FullInputChipsProps>(
  (
    {
      chipsColor = "light",
      addOnBlur = true,
      delimiters = [13],
      label = null,
      allowRepeat = false,
      allowRegex = null,
      valueValidator = null,
      maxChips = null,
      baloon = null,
      className = null,
      id = null,
      error = null,
      value: initialValue = null,
      onChange,
      outerWrap = true,
      chipsOutside = false,
      renderChip = null,
      onBlur = null,
      onChipRemove = null,
      onClick,
      noInput,
      ...input
    },
    ref
  ) => {
    const [value, setValue] = useState<string[]>(emptyList);

    useEffect(() => {
      setValue((curr) => initialValue || curr || emptyList);
    }, [initialValue]);

    const addValue = useCallback(
      (v) => {
        if (typeof valueValidator === "function") {
          if (!valueValidator(v)) return;
        }
        setValue((curr) => {
          if (allowRepeat || !(curr || []).includes(v)) {
            const n = (curr || []).concat(v);
            if (typeof onChange === "function") onChange(n);
            return n;
          } else return curr;
        });
      },
      [allowRepeat, valueValidator, onChange]
    );

    const handleKeyDown = useCallback(
      (event) => {
        let d = delimiters;
        if (typeof d === "string") {
          const { map } = Array.prototype;
          d = map.call(d, (ch) => ch.charCodeAt(0));
        }

        if (Array.isArray(d) && d.includes(event.keyCode)) {
          addValue(event.target.value);
          event.target.value = "";
          event.stopPropagation();
          event.preventDefault();
        }
      },
      [delimiters, addValue]
    );

    const handleBlur = useCallback(
      (event) => {
        if (addOnBlur && event.target?.value) {
          const { value } = event.target;
          if (allowRegex && RegExp(allowRegex).test(value)) {
            addValue(value);
          } else if (!allowRegex) {
            addValue(value);
          }
        }
        event.target.value = "";
        if (typeof onBlur === "function") onBlur(event);
      },
      [addOnBlur, allowRegex, addValue, onBlur]
    );

    const handleDelete = useCallback(
      (idx) => {
        setValue((curr) => {
          curr.splice(idx, 1);
          if (typeof onChange === "function") onChange(curr.slice());
          return curr.slice();
        });
        if (typeof onChipRemove === "function") onChipRemove(idx);
      },
      [onChange, onChipRemove]
    );

    const showInput =
      (!maxChips ||
        (maxChips && Array.isArray(value) && value.length < maxChips)) &&
      !noInput;

    return (
      <ConditionalWrapper
        wrapper={
          <div
            className={`form-group${ac(className)}${ac(
              error,
              "form-group--error"
            )}`}
            ref={ref}
          ></div>
        }
        condition={outerWrap}
      >
        <div
          className={`form-group__text chips${ac(
            !outerWrap && className,
            className
          )}`}
        >
          {label ? (
            <label htmlFor={id || input.name}>
              {label}
              {baloon ? <InputHelpBaloon baloon={baloon} /> : null}
            </label>
          ) : null}
          {chipsOutside && Array.isArray(value) && value.length ? (
            <span className="chips-outer qtr-margin-bottom">
              <span className="chips-inner">
                {value.map((v, i) =>
                  renderChip ? (
                    renderChip({
                      value: v,
                      idx: i,
                      onDelete: () => handleDelete(i),
                    })
                  ) : (
                    <Label
                      removable
                      onRemove={() => handleDelete(i)}
                      color={chipsColor}
                      size="small"
                      key={`${v}-${i}`}
                      className="no-margin-bottom"
                    >
                      {v}
                    </Label>
                  )
                )}
              </span>
            </span>
          ) : null}
          <div
            className={`input ${ac(!showInput, "dbl-padding-right")}`}
            onClick={onClick}
          >
            {!chipsOutside && Array.isArray(value) && value.length ? (
              <span className="chips-outer">
                <span className="chips-inner">
                  {value.map((v, i) =>
                    renderChip ? (
                      renderChip({
                        value: v,
                        idx: i,
                        onDelete: () => handleDelete(i),
                      })
                    ) : (
                      <Label
                        removable
                        onRemove={(e: MouseEvent) => {
                          e.stopPropagation();
                          e.preventDefault();
                          handleDelete(i);
                        }}
                        color={chipsColor}
                        size="small"
                        key={`${v}-${i}`}
                        className="no-margin-bottom"
                      >
                        {v}
                      </Label>
                    )
                  )}
                </span>
              </span>
            ) : null}
            {showInput ? (
              <input
                type="text"
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
                id={id || input.name}
                {...input}
              />
            ) : null}
          </div>
        </div>
        {error ? <InputHelpBlock text={error} /> : null}
      </ConditionalWrapper>
    );
  }
);
