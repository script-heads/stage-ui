import useContainer from '@flow-ui/core/misc/hooks/useContainer'
import { filled, outline } from '@flow-ui/core/misc/icons'
import callProp from '@flow-ui/core/misc/utils/callProp'
import React, { forwardRef } from 'react'
import iconStyles from './styles'
import useStyles from '@flow-ui/core/misc/hooks/useStyles'
import Types from './types'

const Icon = (props: Types.Props, ref) => {

    const { attributes } = useContainer(props)
    const styles = useStyles<Types.Styles>(props, iconStyles, 'Icon')
    const type = callProp(props.type, { filled, outline })

    if (!type) return null

    return (
        <span
            {...attributes}
            ref={ref}
            css={styles.container}
            children={(
                <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    children={type}
                    css={styles.icon}
                />
            )
            }
        />

    )
}

export default forwardRef(Icon)