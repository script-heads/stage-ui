import React from 'react'
import Icon from '../../content/Icon'
import Block from '../../layout/Block'
import Flexbox from '../../layout/Flexbox'
import Notification from '../../layout/Notification'
import NotificationType from '../../layout/Notification/types'
import { addElement, removeElement } from '../../layout/Viewport/MountArea'
import createID from './createID'
import Paragraph from '../../content/Paragraph'
import Header from '../../content/Header'

export default (options: NotificationType.NotifyOptions) => {
    let timer
    let key = createID()
    if (options.timeout) {
        timer = setTimeout(() => removeElement(key), options.timeout)
    }
    addElement(
        (
            <Notification onClick={options.onClick}>
                {options.customContent ? (
                    options.customContent
                ) : (
                        <Flexbox p="1rem" w={'20rem'}>
                            <Block flex={1} css={{ overflow: 'hidden' }}>
                                <Header size={4} ellipsis>{options.title}</Header>
                                <Paragraph size={2}>{options.message}</Paragraph>
                            </Block>
                            <Block pl="0.5rem">
                                <Icon
                                    size="1.25rem"
                                    alignSelf="flex-end"
                                    color={c => c.light.css()}
                                    type={t => t.outline.close}
                                    onClick={() => {
                                        clearInterval(timer)
                                        removeElement(key)
                                    }}
                                />
                            </Block>
                        </Flexbox>
                    )}
            </Notification>
        ),
        key
    )
}