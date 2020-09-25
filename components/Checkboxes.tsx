import React, { FC } from "react";
import { getIn, FieldArray, FieldInputProps, FormikProps } from "formik";

import { appendClass as ac } from "../utils";

type CheckboxVariant = {
  id: string;
  name: string;
  [x: string]: any;
};

type CheckboxesProps = {
  inline?: boolean;
  variants: CheckboxVariant[];
  field: FieldInputProps<any>;
  form: FormikProps<any>;
};

export const Checkboxes: FC<CheckboxesProps> = ({
  field,
  form,
  variants,
  inline = false,
}) => (
  <FieldArray
    name={field.name}
    render={(arrayHelpers) =>
      variants.map((variant) => (
        <div
          className={`form-group${ac(inline, "form-group--inline")}`}
          key={variant.id}
        >
          <label className="checkbox" htmlFor={field.name}>
            <input
              name={field.name}
              id={field.name}
              type="checkbox"
              value={variant.id}
              checked={getIn(form.values, field.name, []).includes(variant.id)}
              onChange={(e) => {
                if (e.target.checked) arrayHelpers.push(variant.id);
                else {
                  const idx = getIn(form.values, field.name, []).indexOf(
                    variant.id
                  );
                  arrayHelpers.remove(idx);
                }
              }}
            />
            <span className="checkbox__input" />
            <span className="checkbox__label">{variant.name}</span>
          </label>
        </div>
      ))
    }
  />
);
