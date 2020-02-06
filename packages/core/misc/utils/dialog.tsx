import { Block, Button, Flexbox, Modal } from '@flow-ui/core'
import ModalTypes from '@flow-ui/core/layout/Modal/types'
import React from 'react'
import { addElement, removeElement } from '../../layout/Viewport/MountArea'
import ViewportTypes from '../../layout/Viewport/types'
import createID from '@flow-ui/whale/utils/createID'

export default (options: ViewportTypes.DialogOptions) => {
    let key = createID()
    let modal: ModalTypes.Ref
    const close = () => {
        modal.close()
    }

    addElement(
        (
            <Modal
                ref={(ref: ModalTypes.Ref) => modal = ref}
                title={options.title}
                subtitle={options.subtitle}
                hideHeader={options.hideHeader}
                didClose={() => {
                    removeElement(key)
                }}
                children={(
                    options.customContent ? options.customContent(close) : (
                            <Flexbox column>
                                <Block>
                                    {options.message}
                                </Block>
                                <Flexbox flex={1} justifyContent="flex-end" pt={'1rem'}>
                                    <Button
                                        children={options.buttonText || 'OK'}
                                        onClick={() => {
                                            modal.close()
                                        }}
                                    />
                                </Flexbox>
                            </Flexbox>
                        )
                )}
            />
        ),
        key
    )
    setTimeout(() => modal.open())
}