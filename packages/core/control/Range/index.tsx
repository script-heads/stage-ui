import React, { useRef, FC, forwardRef, useImperativeHandle, useEffect, useMemo } from 'react';
import createStyles from './styles';
import Types from './types';
import useContainer from '../../misc/hooks/useContainer';

const Range: FC<Types.Props> = (props, ref) => {
    const { min = 0, max = 100, value, defaultValue } = props;
    const styles = createStyles(props);
    const { attributes } = useContainer(props);
    const thumbRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const thumbPosition = value2Percent(value || defaultValue || 0, min, max)

    
    useImperativeHandle(ref, () => {
        return containerRef.current
    });

    let isActive = false

    function onUp(e: MouseEvent) {
        isActive = false;
    }
 

    function onMove(e: MouseEvent, force?: boolean) {
        if (force) {
            isActive = true;
        }

        if (!isActive) return;
        if (containerRef.current) {

            const { left, right } = containerRef.current.getBoundingClientRect();
            const percent = value2Percent(e.pageX, left, right);

            props.onChange && props.onChange(percent2Value(percent, min, max));

            if (!value && thumbRef.current && trackRef.current) {
                thumbRef.current.style.left = percent + '%';
                trackRef.current.style.width = percent + '%';
            }
        }
    }

    /**
     * we should reAdd listener when getting
     * new props otherways scope will be broken
     */
    useEffect(() => {
        // document.addEventListener('touchmove', onMove);
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
        return () => {
            // document.removeEventListener('touchmove', onMove);
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
        }
    }, [props])

    return (
        <div {...attributes} 
            css={styles.conatiner} 
            ref={containerRef} 
            onMouseDown={(e: MouseEvent) => onMove(e, true)}
            // onTouchStart={onMove}
        >
            <div css={styles.rail} />
            <div
                css={styles.track}
                ref={trackRef}
                style={{ width: thumbPosition + '%' }}
            />
            <div
                ref={thumbRef}
                css={styles.thumb}
                style={{ left: thumbPosition + '%' }}
            />
        </div>
    );
}

function value2Percent(value: number, min: number, max: number) {

    const percent = (value - min) / (max - min) * 100;

    if (percent <= 0) return 0
    if (percent >= 100) return 100
    return percent
}

function percent2Value(percent: number, min: number, max: number) {
    return Math.floor(min + (max - min) / 100 * percent)
}

export default forwardRef(Range);