import React, { FC } from 'react';
import MenuTypes from './types';
import useContainer from '../../misc/hooks/useContainer';

const Item: FC<MenuTypes.Item> = (props) => {

    const { children } = props;
    const { attributes } = useContainer(props);

    return (
        <div
            {...attributes}
            css={props.styles.item(props.active, props.disabled)}
            disabled={props.disabled}
        >
            <div id='item-content'>{children}</div>
        </div>
    )
}

export default Item;