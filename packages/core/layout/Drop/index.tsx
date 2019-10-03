import React, { forwardRef, useEffect, useRef, Fragment } from "react";
import ReactDOM from "react-dom";
import Types from "./types";
import createStyles from "./styles";
import useContainer from "../../misc/hooks/useContainer";

const Drop = (props: Types.Props, ref) => {

    const { attributes } = useContainer(props);
    const { children, target, onClickOutside, distance = 8 } = props;
    const styles = createStyles(props);
    const drop = useRef<HTMLDivElement>(null);
    /**
     * We're reusing ref if target is an 
     * React Element and have reference on
     */
    //@ts-ignore
    const targetRef = (target && target.ref) ? target.ref : useRef<HTMLSpanElement>(null);
    
    useEffect(() => {
        if (props.visibility != 'hidden' && props.display != 'none') {
            setPosition();
            document.addEventListener("scroll", setPosition, true);
            document.addEventListener("mouseup", handleClickOutside);
        }
        return () => {
            document.removeEventListener("scroll", setPosition, true);
            document.removeEventListener("mouseup", handleClickOutside);
        };
    });

    function handleClickOutside(event: any) {
        drop.current &&
            !drop.current.contains(event.target) &&
            onClickOutside && onClickOutside(event);
    }

    function setPosition() {
        if (target && drop.current) {
            const tr = targetRef.current!.getBoundingClientRect();
            const dr = drop.current.getBoundingClientRect();
            const style = drop.current.style;

            const { 
                align = "bottom", 
                justify = "center" 
            } = props;

            style.visibility = "visible";
            style.top = toStyle(tr.bottom + distance);
            style.left = toStyle((tr.left + tr.width / 2) - dr.width / 2);

            switch (align) {
                case "top":
                    style.top = toStyle(tr.top - dr.height - distance);
                    switch (justify) {
                        case "start":
                            style.left = toStyle(tr.left);
                            break;
                        case "center":
                            style.left = toStyle((tr.left + tr.width / 2) - dr.width / 2);
                            break;
                        case "end":
                            style.left = toStyle(tr.right - dr.width);
                            break;
                        case "start-outside":
                            style.left = toStyle(tr.left - tr.width);
                            break;
                        case "end-outside":
                            style.left = toStyle(tr.left + tr.width);
                            break;
                    }
                    break;
                case "bottom":
                    style.top = toStyle(tr.bottom + distance);
                    switch (justify) {
                        case "start":
                            style.left = toStyle(tr.left);
                            break;
                        case "center":
                            style.left = toStyle((tr.left + tr.width / 2) - dr.width / 2);
                            break;
                        case "end":
                            style.left = toStyle(tr.right - dr.width);
                            break;
                        case "start-outside":
                            style.left = toStyle(tr.left - tr.width);
                            break;
                        case "end-outside":
                            style.left = toStyle(tr.left + tr.width);
                            break;
                    }
                    break;
                case "left":
                    style.left = toStyle(tr.left - dr.width - distance);
                    switch (justify) {
                        case "end":
                            style.top = toStyle(tr.top);
                            break;
                        case "center":
                            style.top = toStyle((tr.top + tr.height / 2) - dr.height / 2);
                            break;
                        case "start":
                                style.top = toStyle(tr.bottom - dr.height);
                                break;
                        case "start-outside":
                            style.top = toStyle(tr.top - tr.height);
                            break;
                    }
                    break;
                case "right":
                    style.left = toStyle(tr.right + distance);
                    switch (justify) {
                        case "end":
                            style.top = toStyle(tr.top);
                            break;
                        case "center":
                            style.top = toStyle((tr.top + tr.height / 2) - dr.height / 2);
                            break;
                        case "start":
                            style.top = toStyle(tr.bottom - dr.height);
                            break;
                        case "start-outside":
                            style.top = toStyle(tr.top - tr.height);
                            break;
                    }
                    break;
            }
        }
    }

    return (
        <Fragment>
            {
                React.cloneElement(target as any, {
                    ref: targetRef
                })
            }

            {
               ReactDOM.createPortal(
                    <div
                        {...attributes}
                        ref={drop}
                        css={styles.container}
                        style={{ 
                            top: 0, 
                            left: 0, 
                            visibility: "hidden",
                            ...attributes.style 
                        }}
                        children={children}
                    />,
                    document.body
                )
            }
        </Fragment>
    )
};

function toStyle(value: number) {
    return value.toString() + "px";
}

export default forwardRef(Drop)
