import React from 'react';
import Icon from '../../content/Icon';
import { H4, T2 } from '../../content/Typography';
import Block from '../../layout/Block';
import Flexbox from '../../layout/Flexbox';
import Notification from '../../layout/Notification';
import NotificationType from '../../layout/Notification/types';
import { addElement, removeElement } from '../../layout/Viewport/MountArea';
import createID from './createID';

export default (options: NotificationType.NotifyOptions) => {
    let timer;
    let key = createID();
    if (options.timeout) {
        timer = setTimeout(() => removeElement(key), options.timeout);
    }
    addElement(
        (
            <Notification onClick={options.onClick}>
                {options.customContent ? (
                    options.customContent
                ) : (
                        <Flexbox p="1rem" w={"20rem"}>
                            <Block flex={1} css={{ overflow: "hidden" }}>
                                <H4 ellipsis>{options.title}</H4>
                                <T2>{options.message}</T2>
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