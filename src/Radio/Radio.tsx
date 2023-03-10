import React, {
  forwardRef,
  useCallback,
  type ChangeEvent,
  type FC,
  type HTMLProps,
  type ReactNode,
} from "react";
import useEvent from "react-use-event-hook";

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
  value: string;
  onChange: (value: string) => void;
  name: string;
}

export const Radios: FC<RadiosProps> = ({ values, value, onChange, name }) => {
  const onRadioChange = useEvent((e: ChangeEvent<HTMLInputElement>) => {
    e.persist();

    if (e.target.checked) {
      onChange(e.target.value);
    }
  });

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
          value={v.value}
        />
      ))}
    </>
  );
};
