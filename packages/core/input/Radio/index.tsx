import React, { FC, forwardRef, RefObject } from 'react';
import Icon from '../../content/Icon';
import Block from '../../layout/Block';
import Check from '../../misc/hocs/Check';
import createStyles from './styles';
import RadioTypes from './types';

const Radio: FC<RadioTypes.Props> = (props, ref: RefObject<HTMLDivElement>) => {
    return (
        <Check
            {...props}
            /**
             * Radio use
             */
            type="checkbox"
            children={checked => {
                const styles = createStyles(props, checked);
                return (
                    <Block css={styles.check}>
                        <div css={styles.radio} />
                    </Block>
                )
            }}
        />
    );
}

export default forwardRef(Radio);