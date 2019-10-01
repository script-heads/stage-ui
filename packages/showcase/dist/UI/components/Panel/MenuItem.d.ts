import * as React from "react";
interface MenuItemProps {
    active: boolean;
    onChoose: (item: string) => void;
    label: string;
    id: string;
}
declare class MenuItem extends React.Component<MenuItemProps> {
    render(): JSX.Element;
}
export default MenuItem;
