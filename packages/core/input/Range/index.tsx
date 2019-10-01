import React, { useRef, FC, forwardRef, useImperativeHandle } from 'react';
import createStyles from './styles';
import Types from './types';
import useContainer from '../../misc/hooks/useContainer';

const Range: FC<Types.Props> = (props, ref) => {

    const { min = 0, max = 100, value, onChange, defaultValue } = props;
    const styles = createStyles(props);
    const { attributes } = useContainer(props);
    const handleRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const handlePosition = value || defaultValue
        ? getPercentByValue(min, max, value || defaultValue)
        : 0;

    useImperativeHandle(ref, () => {
        return containerRef.current
    });

    function handleChange(percent) {
        if (onChange) {
            onChange(getValueFromRange(min, max, percent));
        }
        if (!value && handleRef.current && trackRef.current) {
            handleRef.current.style.left = percent.toString() + '%';
            trackRef.current.style.width = percent.toString() + '%';
        }
    }

    function handleMouseMove(e: MouseEvent | React.MouseEvent) {
        e.stopPropagation();

        if (containerRef.current) {
            const startX = containerRef.current.getBoundingClientRect().left;
            const endX = containerRef.current.getBoundingClientRect().right;
            const percent = getPercentByValue(startX, endX, e.pageX);

            handleChange(percent);
        }
    }

    function handleMouseDown(e: React.MouseEvent) {
        e.stopPropagation();
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }

    function handleMouseUp(e: MouseEvent) {
        e.stopPropagation();
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    }

    return (
        <div {...attributes} css={styles.conatiner} ref={containerRef} onClick={handleMouseMove}>
            <div css={styles.rail} />
            <div
                css={styles.track}
                ref={trackRef}
                style={{ width: handlePosition.toString() + '%' }}
            />
            <div
                onMouseDown={handleMouseDown}
                ref={handleRef}
                css={styles.handle}
                style={{ left: handlePosition.toString() + '%' }}
            />
        </div>
    );
}

function getPercentByValue(min, max, value) {

    const percent = (value - min) / (max - min) * 100;

    if (percent <= 0) return 0
    if (percent >= 100) return 100
    return percent
}

function getValueFromRange(min, max, percent) {
    return Math.floor(min + (max - min) / 100 * percent)
}

export default forwardRef(Range);