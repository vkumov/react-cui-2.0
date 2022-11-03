import React, {
  useEffect,
  useRef,
  forwardRef,
  type ComponentProps,
} from "react";
import { useMergeRefs } from "use-callback-ref";

import { Checkbox } from "./Checkbox";

export const IndeterminateCheckbox = forwardRef<
  HTMLInputElement,
  { indeterminate?: boolean } & ComponentProps<typeof Checkbox>
>(({ indeterminate, ...rest }, fwd) => {
  const ref = useRef<HTMLInputElement>(null!);

  const refs = useMergeRefs([ref, fwd]);

  useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return <Checkbox ref={refs} {...rest} />;
});
