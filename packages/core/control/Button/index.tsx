import useContainer from '@flow-ui/core/misc/hooks/useContainer'
import useStyles from '@flow-ui/core/misc/hooks/useStyles'
import React, { FC, forwardRef } from 'react'
import buttonStyles from './styles'
import Types from './types'

const Button: FC<Types.Props> = (props, ref) => {

        const {
        disabled,
        decoration = 'filled',
        shape = 'rounded',
        size = 'medium'
    } = props
    const { attributes } = useContainer(props)
    const styles = useStyles<Types.Styles>(props, buttonStyles, 'Button')

    const onClick = (event: React.MouseEvent<HTMLElement>) => {
        if (!disabled) {
            attributes?.onClick(event)
        }
    }

    return (
        <button
            {...attributes}
            ref={ref}
            css={styles.container({shape,decoration,size})}
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

export default forwardRef(Button)