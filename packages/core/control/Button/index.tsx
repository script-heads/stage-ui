import useContainer from '@flow-ui/core/misc/hooks/useContainer';
import React, { FC, forwardRef } from 'react';
import getStyles from './styles';
import ButtonTypes from './types';

const Button: FC<ButtonTypes.Props> = (props, ref) => {

    const { disabled } = props;
    const { attributes } = useContainer(props);
    const styles = getStyles(props);

    const onClick = (event: React.MouseEvent<HTMLElement>) => {
        if (!disabled) {
            attributes.onClick && attributes.onClick(event)
        }
    }

    return (
        <button
            {...attributes}
            ref={ref}
            css={styles.container}
            onClick={onClick}
            autoFocus={props.autoFocus}
            disabled={props.disabled}
            form={props.form}
            formAction={props.formAction}
            formEncType={props.formEncType}
            formMethod={props.formMethod}
            formNoValidate={props.formNoValidate}
            formTarget={props.formTarget}
            name={props.name}
            type={props.type}
            value={props.value}
            children={props.children}
        />
    )
}

export default forwardRef(Button);