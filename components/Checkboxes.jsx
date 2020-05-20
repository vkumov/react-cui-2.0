import React from "react";
import PropTypes from "prop-types";
import { getIn, FieldArray } from "formik";

import { appendClass as ac } from "../utils";

export const Checkboxes = ({ field, form, variants, inline }) => (
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

Checkboxes.propTypes = {
  inline: PropTypes.bool,
  variants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
  field: PropTypes.shape({ name: PropTypes.string }).isRequired,
  form: PropTypes.shape({ values: PropTypes.any }).isRequired,
};

Checkboxes.defaultProps = {
  inline: false,
};
