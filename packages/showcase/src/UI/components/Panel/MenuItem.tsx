import * as React from "react";

interface MenuItemProps {
    active: boolean,
    onChoose: (item: string) => void,
    label: string,
    id: string
}

class MenuItem extends React.Component<MenuItemProps> {

    render() {

        const { active, label, onChoose, id } = this.props;
        let className = 'showcase-panel-menu-items-item';
        if (active) className += '-active';

        return (
            <div
                className={className}
                onClick={() => onChoose(id)}
                children={label}
            />
        )

    }
}

export default MenuItem