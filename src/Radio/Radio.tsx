import React, {
  ChangeEvent,
  FC,
  forwardRef,
  HTMLProps,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

import { appendClass as ac } from "src/utils";

interface RadioProps extends Omit<HTMLProps<HTMLInputElement>, "label"> {
  spacing?: "compressed" | "regular" | "loose" | "nospacing";
  inline?: boolean;
  label?: ReactNode;
  className?: string;
  id?: string;
  divProps?: HTMLProps<HTMLDivElement>;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      spacing = null,
      inline = false,
      label = null,
      className = null,
      id,
      divProps = {},
      ...input
    },
    forwardedRef
  ) => (
    <div
      className={`form-group${ac(inline, "form-group--inline")}${ac(
        spacing,
        `form-group--${spacing}`
      )}${ac(className)}`}
      {...divProps}
    >
      <label className="radio" htmlFor={id || input.name}>
        <input type="radio" id={id} {...input} ref={forwardedRef} />
        <span className="radio__input" />
        {label ? <span className="radio__label">{label}</span> : null}
      </label>
    </div>
  )
);

interface RadioValue {
  value: string;
  label: ReactNode;
}

interface RadiosProps {
  values: RadioValue[];
  value?: string;
  onChange?: (value: string) => void;
  name: string;
}

export const Radios: FC<RadiosProps> = ({
  values,
  value: initialValue,
  onChange,
  name,
}) => {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const onRadioChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      e.persist();
      setValue((curr) => {
        let v: string;
        if (e.target.checked) v = e.target.value;
        else v = curr;
        if (typeof onChange === "function") onChange(v);
        return v;
      });
    },
    [onChange]
  );

  return (
    <>
      {values.map((v, idx) => (
        <Radio
          id={v.value}
          label={v.label}
          key={v.value}
          name={`${name}.${idx}`}
          onChange={onRadioChange}
          checked={value === v.value}
        />
      ))}
    </>
  );
};
