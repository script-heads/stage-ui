import React, { FC, forwardRef, RefObject } from 'react';
import Icon from '../../content/Icon';
import Block from '../../layout/Block';
import Check from '../../misc/hocs/Check';
import createStyles from './styles';
import CheckBoxTypes from './types';

const Checkbox: FC<CheckBoxTypes.Props> = (props, ref: RefObject<HTMLDivElement>) => {
    return (
        <Check
            {...props}
            /**
             * Checkbox use
             */
            type="checkbox"
            children={checked => {
                const styles = createStyles(props, checked);
                return (
                    <Block css={styles.check}>
                        <Icon
                            type={i => i.outline.checkmark}
                            css={styles.icon}
                        />
                    </Block>
                )
            }}
        />
    );
}

export default forwardRef(Checkbox);