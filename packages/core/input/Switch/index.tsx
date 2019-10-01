import React, { FC, forwardRef, RefObject } from 'react';
import Icon from '../../content/Icon';
import Block from '../../layout/Block';
import Check from '../../misc/hocs/Check';
import createStyles from './styles';
import SwitchTypes from './types';

const Switch: FC<SwitchTypes.Props> = (props, ref: RefObject<HTMLDivElement>) => {
    return (
        <Check
            {...props}
            /**
             * Switch use
             */
            type="checkbox"
            children={checked => {
                const styles = createStyles(props, checked);
                return (
                    <Block css={styles.check}>
                        <div css={styles.switch} />
                    </Block>
                )
            }}
        />
    );
}

export default forwardRef(Switch);