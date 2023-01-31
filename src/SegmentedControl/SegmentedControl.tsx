import React, {
  forwardRef,
  useCallback,
  useEffect,
  useState,
  type FC,
  type HTMLProps,
  type MutableRefObject,
  type PropsWithChildren,
  type ReactNode,
  type Ref,
  type RefCallback,
} from "react";
import cx from "classnames";

import styles from "./Segmented.module.scss";

export type SegmentedOption<V> = {
  label: ReactNode;
  value: V;
  disabled?: boolean;
};

type ActiveProps = {
  activeElement: HTMLDivElement | null;
  value: any;
  fullWidth?: boolean;
  small: boolean;
};

const Active: FC<ActiveProps> = ({
  activeElement,
  value,
  fullWidth,
  small,
}) => {
  const [coord, setCoord] = useState({ x: 0, y: 0, w: 0, h: 0 });

  useEffect(() => {
    if (!activeElement) return;

    setCoord({
      x: activeElement.offsetLeft - (small ? 2 : 4),
      y: activeElement.offsetTop - (small ? 2 : 4),
      w: activeElement.offsetWidth,
      h: activeElement.offsetHeight,
    });
  }, [activeElement, value, fullWidth, small]);

  if (!activeElement) return null;

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
  activeRef: MutableRefObject<HTMLDivElement> | RefCallback<HTMLDivElement>;
} & HTMLProps<HTMLInputElement>;

const OptionDisplay: FC<PropsWithChildren<OptionDisplayProps>> = ({
  children,
  value,
  activeRef,
  active,
  className,
  disabled,
  id,
  ...props
}) => {
  return (
    <div
      className={cx(styles.segmented_option_control, className, {
        [styles.segmented_option_control_active]: active,
        disabled,
      })}
      ref={active ? activeRef : null}
    >
      <input
        type="radio"
        className={styles.segmented_option_control_input}
        value={value}
        id={`${id || props.name}-${value}`}
        {...props}
      />
      <label
        className={styles.segmented_option_control_label}
        htmlFor={`${id || props.name}-${value}`}
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
  small?: boolean;
} & HTMLProps<HTMLInputElement>;

function UrefedSegmented<V extends string | number = string>(
  {
    options,
    value,
    label,
    inline,
    className,
    fullWidth,
    small,
    ...props
  }: Props<V>,
  ref: Ref<HTMLDivElement>
): JSX.Element {
  const [el, setEl] = useState<HTMLDivElement | null>(null);
  const activeRefCb: RefCallback<HTMLDivElement> = useCallback((node) => {
    if (node !== null) {
      setEl(node);
    } else setEl(null);
  }, []);

  return (
    <div
      className={cx("form-group", className, { "form-group--inline": inline })}
    >
      <div
        className={cx(styles.form_group, {
          [styles["form_group--full"]]: fullWidth,
          [styles.small]: small,
        })}
      >
        {label ? <label>{label}</label> : null}
        <div
          className={cx(styles.segmented_root, {
            [styles["segmented_root--full"]]: fullWidth,
          })}
          ref={ref}
        >
          <Active
            activeElement={el}
            value={value}
            fullWidth={fullWidth}
            small={small}
          />
          {options.map((o) => (
            <OptionDisplay
              activeRef={activeRefCb}
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
