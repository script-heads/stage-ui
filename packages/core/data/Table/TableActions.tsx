import React from 'react';
import TableTypes from './types'
import Icon from '../../content/Icon';

const TableActions = (props: TableTypes.ActionsProps) => {
    const styles = props.styles;

    return (
        <div css={styles.actions}>
            <Icon type={i => i.outline.moreHorizontal} css={styles.more} />
            <div css={styles.actionButtons}>{
                props.actions.map((action, index) => (
                    <span
                        key={index}
                        onClick={() => {
                            action.onAction(props.data);
                        }}
                        children={action.label}
                    />
                ))
            }</div>
        </div>
    )
}

export default TableActions;