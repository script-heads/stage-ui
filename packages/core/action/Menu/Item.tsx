import React, { FC } from 'react';
import MenuTypes from './types';
import useContainer from '../../misc/hooks/useContainer';

const Item: FC<MenuTypes.ItemProps> = (props) => {

    const { content, disabled, active } = props;
    const { attributes } = useContainer(props);

    return (
        <div
            {...attributes}
            css={props.styles.item(active, disabled)}
            disabled={disabled}
            tabIndex={disabled ? -1 : 0}
        >
            <div id='item-content'>{content}</div>
        </div>
    )
}

export default Item;