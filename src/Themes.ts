export type Theme = "light" | "dark";
export const TokensBackground = '--color-background';
export const TokensForeground = '--color-foreground';

export const tokens = {
    background: `var(${TokensBackground})`,
    foreground: `var(${TokensForeground})`
};