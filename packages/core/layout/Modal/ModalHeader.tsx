import React from 'react'
import ModalTypes from './types'

import { H1 } from '../../content/Typography/H'
import { T1 } from '../../content/Typography/T'
import Flexbox from '../Flexbox'
import Icon from '../../content/Icon'

const ModalHeader = (props: ModalTypes.ModalHeaderProps) => {

    if (props.hideHeader) {
        return null
    }

    return (
        <div css={props.styles.header}>
            <Flexbox>
                <Flexbox flex={1} column>
                    <H1 css={props.styles.header}>{props.title}</H1>
                    <T1 color={c => c.hard.css()} mt={'0.5rem'}>{props.subtitle}</T1>
                </Flexbox>
                <Icon
                    css={props.styles.cross}
                    onClick={props.onClosePressed}
                    type={i => i.outline.close}
                    color={c => c.light.css()}
                    size="2.5rem"
                />
            </Flexbox>
        </div>
    )
}

export default ModalHeader