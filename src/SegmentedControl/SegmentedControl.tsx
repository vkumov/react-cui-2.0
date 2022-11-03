import React, {
  type FC,
  type HTMLProps,
  type PropsWithChildren,
  type ReactNode,
  type RefObject,
  type Ref,
  useEffect,
  useRef,
  useState,
  forwardRef,
} from "react";
import { appendClass as ac } from "src/utils";

import styles from "./Segmented.module.scss";

export type SegmentedOption<V> = {
  label: ReactNode;
  value: V;
  disabled?: boolean;
};

type ActiveProps = {
  activeRef: RefObject<HTMLDivElement>;
  value: any;
  fullWidth?: boolean;
};

const Active: FC<ActiveProps> = ({ activeRef, value, fullWidth }) => {
  const [coord, setCoord] = useState({ x: 0, y: 0, w: 0, h: 0 });

  useEffect(() => {
    if (!activeRef.current) return;

    setCoord({
      x: activeRef.current.offsetLeft - 4,
      y: activeRef.current.offsetTop - 4,
      w: activeRef.current.offsetWidth,
      h: activeRef.current.offsetHeight,
    });
  }, [activeRef.current, value, fullWidth]);

  if (!activeRef.current) return null;

  return (
    <span
      className={styles.segmented_active}
      style={{
        width: `${coord.w}px`,
        height: `${coord.h}px`,
        transform:
          coord.x > 0 || coord.y > 0
            ? `translateX(${coord.x}px) translateY(${coord.y}px) translateZ(0px)`
            : "none",
      }}
    />
  );
};

type OptionDisplayProps = {
  value: any;
  active: boolean;
  disabled?: boolean;
} & Pick<ActiveProps, "activeRef"> &
  HTMLProps<HTMLInputElement>;

const OptionDisplay: FC<PropsWithChildren<OptionDisplayProps>> = ({
  children,
  value,
  activeRef,
  active,
  className,
  disabled,
  ...props
}) => {
  return (
    <div
      className={`${styles.segmented_option_control}${ac(
        active,
        styles.segmented_option_control_active
      )}${ac(disabled, "disabled")}`}
      ref={active ? activeRef : null}
    >
      <input
        type="radio"
        className={styles.segmented_option_control_input}
        value={value}
        id={`${props.name}-${value}`}
        {...props}
      />
      <label
        className={styles.segmented_option_control_label}
        htmlFor={`${props.name}-${value}`}
      >
        {children}
      </label>
    </div>
  );
};

type Props<V> = {
  options: SegmentedOption<V>[] | readonly SegmentedOption<V>[];
  value: V;
  label?: ReactNode;
  inline?: boolean;
  fullWidth?: boolean;
} & HTMLProps<HTMLInputElement>;

function UrefedSegmented<V extends string | number = string>(
  { options, value, label, inline, className, fullWidth, ...props }: Props<V>,
  ref: Ref<HTMLDivElement>
): JSX.Element {
  const activeRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`form-group${ac(inline, "form-group--inline")}${ac(
        className
      )}`}
    >
      <div
        className={`${styles.form_group}${ac(
          fullWidth,
          styles["form_group--full"]
        )}`}
      >
        {label ? <label>{label}</label> : null}
        <div
          className={`${styles.segmented_root}${ac(
            fullWidth,
            styles["segmented_root--full"]
          )}`}
          ref={ref}
        >
          <Active activeRef={activeRef} value={value} fullWidth={fullWidth} />
          {options.map((o) => (
            <OptionDisplay
              activeRef={activeRef}
              active={value === o.value}
              value={o.value}
              key={o.value}
              disabled={o.disabled}
              {...props}
            >
              {o.label}
            </OptionDisplay>
          ))}
        </div>
      </div>
    </div>
  );
}

export type SegmentedControlProps<V> = Props<V> & {
  ref?: React.ForwardedRef<HTMLDivElement>;
};

export const SegmentedControl = forwardRef(UrefedSegmented) as <
  V extends string | number = string
>({
  options,
  value,
  ...props
}: SegmentedControlProps<V>) => ReturnType<typeof UrefedSegmented>;
