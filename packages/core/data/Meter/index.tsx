import useContainer from '@flow-ui/core/misc/hooks/useContainer';
import React, { FC, forwardRef } from 'react';
import getStyles from './styles';
import MeterTypes from './types';

const Meter: FC<MeterTypes.Props> = (props, ref) => {

    const {
        percent = 0,
    } = props;

    const { attributes } = useContainer(props);
    const styles = getStyles(props, percent);

    return (
        <div ref={ref} {...attributes} css={styles.container}>
            <div
                css={styles.thumb}
                style={{
                    width: percent + "%"
                }}
            />
        </div>
    )
}

export default forwardRef(Meter);