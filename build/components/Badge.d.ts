import { FC, ReactNode } from "react";
declare type WrapperProps = {
    children: ReactNode;
    className?: string;
};
declare type BadgeProps = {
    color?: "primary" | "secondary" | "tertiary" | "success" | "info" | "warning" | "warning-alt" | "danger" | "dark" | "light";
    size?: "dot" | "tiny" | "small" | "default" | "large";
    className?: string;
    children: ReactNode;
};
interface BadgeSizes {
    Dot: FC<BadgeProps>;
    Tiny: FC<BadgeProps>;
    Small: FC<BadgeProps>;
    Default: FC<BadgeProps>;
    Large: FC<BadgeProps>;
    Wrapper: FC<WrapperProps>;
}
declare const Badge: BadgeSizes & FC<BadgeProps>;
export default Badge;
declare type WithBadgeProps = {
    children: ReactNode;
    badge: ReactNode;
    wrapperClass?: string;
};
export declare const WithBadge: FC<BadgeProps & WithBadgeProps>;
