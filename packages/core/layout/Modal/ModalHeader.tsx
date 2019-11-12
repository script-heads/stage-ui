import React from 'react'
import ModalTypes from './types'

import Header from '../../content/Header'
import Paragraph from '../../content/Paragraph'
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
                    <Header css={props.styles.header}>{props.title}</Header>
                    <Paragraph color={c => c.hard.css()} mt={'0.5rem'}>{props.subtitle}</Paragraph>
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