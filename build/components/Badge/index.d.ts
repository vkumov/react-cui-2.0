import { FC, PropsWithChildren, ReactNode } from "react";
declare type WrapperProps = {
    children: ReactNode;
    className?: string;
};
export declare type BadgeColor = "primary" | "secondary" | "tertiary" | "success" | "info" | "warning" | "warning-alt" | "danger" | "dark" | "light";
declare type BadgeProps = PropsWithChildren<{
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
export declare const Badge: BadgeSizes & FC<BadgeProps>;
export default Badge;
declare type WithBadgeProps = {
    children: ReactNode;
    badge: ReactNode;
    wrapperClass?: string;
};
export declare const WithBadge: FC<BadgeProps & WithBadgeProps>;
