declare module "@storybook/addon-actions" {
    export function action(name: string, ...params: any[]): any;
}

declare module "@storybook/addon-links" {
    export function linkTo(name: string, ...params: any[]): any;
}