import * as React from 'react';
export declare type IconType = 'add' | 'more' | 'pin' | 'close' | 'search' | 'right' | 'left' | 'down' | 'up' | 'check' | 'sync' | 'filter' | 'settings' | 'chart' | 'calendar' | 'spin' | 'smorodina' | 'clock';
export declare const svgIconPath: Record<IconType, string>;
interface Props {
    style?: React.CSSProperties;
    className?: string;
    type: IconType;
    size?: number;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;
