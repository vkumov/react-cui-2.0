import { FC, PropsWithChildren, ReactNode } from 'react';

type WrapperProps = {
    children: ReactNode;
    className?: string;
};
type BadgeColor = "primary" | "secondary" | "tertiary" | "success" | "info" | "warning" | "warning-alt" | "danger" | "dark" | "light";
type BadgeProps = PropsWithChildren<{
    color?: BadgeColor;
    size?: "dot" | "tiny" | "small" | "default" | "large";
    className?: string;
}>;
interface BadgeSizes {
    Dot: FC<Omit<BadgeProps, "size">>;
    Tiny: FC<Omit<BadgeProps, "size">>;
    Small: FC<Omit<BadgeProps, "size">>;
    Default: FC<Omit<BadgeProps, "size">>;
    Large: FC<Omit<BadgeProps, "size">>;
    Wrapper: FC<WrapperProps>;
}
declare const Badge: BadgeSizes & FC<BadgeProps>;
type WithBadgeProps = {
    children: ReactNode;
    badge: ReactNode;
    wrapperClass?: string;
};
declare const WithBadge: FC<BadgeProps & WithBadgeProps>;

export { Badge, BadgeColor, WithBadge };
