import useContainer from '@flow-ui/core/misc/hooks/useContainer';
import React, { forwardRef, useState } from 'react';
import Icon from '../../content/Icon';
import { C1 } from '../../content/Typography';
import Block from '../Block';
import Flexbox from '../Flexbox';
import getStyles from './styles';
import TreeTypes from './types';

const Tree = (props: TreeTypes.Props, ref) => {
    //@ts-ignore
    let { children, lvl = 0 } = props;
    let treeChilds: React.ReactNode[] = [];
    let otherChilds: any[] = [];

    if (!Array.isArray(children)) {
        children = [children]
    }

    for (const child of children as any) {
        try {
            if (child.type.render.name === "Tree") {
                treeChilds.push(child)
                continue;
            }
            throw new Error();
        } catch (error) {
            if (child) {
                otherChilds.push(child)
            }
        }
    }

    const hasTreeChilds = treeChilds.length > 0 || otherChilds.length > 0;
    const { attributes } = useContainer(props);
    const [isOpen, setOpen] = useState((props.alwaysOpen || props.defaultOpen) ? true : false);
    const styles = getStyles(props, lvl, isOpen, hasTreeChilds);

    const openHandle = (event) => {
        if (!props.alwaysOpen && hasTreeChilds) {
            setOpen(!isOpen);
        }
        attributes.onClick && attributes.onClick(event)
    }

    const keyPresHande = (event) => {
        if (event.key === 'Enter') {
            openHandle(event);
        }
    }

    return (
        <Block ref={ref} css={styles.container}>
            <Flexbox {...attributes} onKeyPress={keyPresHande} onClick={openHandle} alignItems="center">
                <Icon
                    type={t => isOpen ? t.outline.arrowIosDownward : t.outline.arrowIosForward}
                    css={styles.icon}
                />
                {typeof props.label === "string" ? (
                    <C1 css={styles.label}>{props.label}</C1>
                ) : (
                        props.label
                    )}
            </Flexbox>
            <Block>
                {
                    treeChilds.map((child: any, index) => {
                        return (
                            <Block css={styles.child} key={index}>
                                {
                                    React.cloneElement(child, {
                                        decoration: child.props.decoration || props.decoration,
                                        alwaysOpen: child.props.alwaysOpen || props.alwaysOpen,
                                        lvl: lvl + 1
                                    })
                                }
                            </Block>
                        )
                    })
                }
                {
                    otherChilds.map((child: any, index) => (
                        <Block css={styles.child} key={index} children={child} />
                    ))
                }
            </Block>
        </Block>
    )
}

export default forwardRef(Tree);