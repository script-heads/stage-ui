import React, { forwardRef } from "react";
import useContainer from "../../misc/hooks/useContainer";
import callProp from "../../misc/utils/callProp";
import IconTypes from "./types";
import { filled, outline } from '../../misc/icons';
import getStyles from './styles';

const Icon = (props: IconTypes.Props, ref) => {

    const { attributes } = useContainer(props);
    const styles = getStyles(props);
    const type = callProp(props.type, { filled, outline });

    if (!type) return null

    return (
        <span
            {...attributes}
            ref={ref}
            css={styles.container}
            children={(
                <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    children={type}
                    css={styles.icon}
                />
            )
            }
        />

    )
}

export default forwardRef(Icon);