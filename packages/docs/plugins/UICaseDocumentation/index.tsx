import Divider from '@flow-ui/core/content/Divider';
import Icon from '@flow-ui/core/content/Icon';
import { C1, C2, H2, T2, H4 } from '@flow-ui/core/content/Typography';
import Block from '@flow-ui/core/layout/Block';
import Flexbox from '@flow-ui/core/layout/Flexbox';
import React, { Fragment, useLayoutEffect, useState } from 'react';

export const typedoc = require('../../typedoc/types.json');

export const GetPropsForType = (name: string, interfaces: string[]): TypeInterfaceChild[] | null => {
    let types = typedoc[name]
    if (!types) {
        return null
    }
    let props = [];
    for (const i of interfaces) {
        const Props = types.find(type => type.name === i)
        props = props.concat(Props.children)
    }
    return props.length > 0 ? props : null
}

export interface TypeInterface {
    name: string
    comment?: string
    children: TypeInterfaceChild[]
}

export interface TypeInterfaceChild {
    id: number
    isOptional: boolean
    name: string
    comment?: string
    deprecated?: string | true
    type: "stringLiteral" | "intrinsic" | "reference" | "reflection"
    values: string[]
}

const UICaseDocumentation = (props: { ns: string, filter?: string[], openInterfaces?: string[] }) => {

    const openInterfaces = props.openInterfaces || ["Props"]
    const nameSpaceDocumentation = typedoc[props.ns] || []

    if (nameSpaceDocumentation.length === 0) {
        console.warn(`Render docs: There is no props for ${props.ns}`)
        return null;
    }

    const [blockOpenState, setBlockOpenState] = useState<{ [key: number]: boolean }>({});

    useLayoutEffect(() => {
        let blockOpenState: { [key: number]: boolean } = {}
        nameSpaceDocumentation.forEach((item, index) => {
            if (openInterfaces.findIndex(i => i === item.name) >= 0) {
                blockOpenState[index] = true;
            }
        })
        setBlockOpenState(blockOpenState);
    }, [nameSpaceDocumentation]);

    return nameSpaceDocumentation.map((data: TypeInterface, index: number) => {
        if (props.filter && props.filter.find(f => f !== data.name)) {
            return null
        }
        return (
            <Block key={index} css={{ margin: "0 4rem", marginBottom: "1rem" }} >
                <Flexbox justifyContent="space-between" onClick={() => {
                    setBlockOpenState({
                        [index]: !blockOpenState[index]
                    })
                }}>
                    <H4 weight={500}>{data.name}</H4>
                    <Icon type={t => blockOpenState[index] ? t.outline.minus : t.outline.plus} />
                </Flexbox>

                {blockOpenState[index] !== true && (
                    <Divider dash={2} />
                )}
                {blockOpenState[index] === true && (
                    <Fragment>
                        <C1 weight={400} color={c => c.light.css()}>{data.comment}</C1>
                        <Block surface="minor" mt={"0.5rem"}>
                            {data.children.map(child => {
                                let color = "#f3f3f3"
                                if (child.type === "reference") {
                                    color = "#fadeff"
                                }
                                if (child.type === "stringLiteral") {
                                    color = "#ffdede"
                                }
                                if (child.type === "intrinsic") {
                                    color = "#deffe4"
                                }
                                if (child.type === "reflection") {
                                    color = "#fdffde"
                                }
                                return (
                                    <Block key={child.id}>
                                        <Block m="1rem">
                                            <Flexbox>
                                                <Flexbox flex={1} alignItems="center" wrap="wrap">
                                                    <Icon
                                                        css={{ marginRight: "0.25rem" }}
                                                        size="1.5rem"
                                                        type={i => i.outline.cube}
                                                        color={c => c.secondary.css()}
                                                    />
                                                    <C1 weight={500}>{child.name}: </C1>
                                                    {child.values.map(value =>
                                                        <C2
                                                            key={value}
                                                            weight={500}
                                                            background={color}
                                                            p={"0.125rem"}
                                                            pl={"0.35rem"}
                                                            pr={"0.35rem"}
                                                            css={{ color: "#000", margin: "0 2px", borderRadius: "4px" }}
                                                            children={`${value}`}
                                                        />
                                                    )}
                                                </Flexbox>
                                                {child.deprecated !== void 0 && (
                                                    <C1
                                                        weight={500}
                                                        p={"0.125rem"}
                                                        pl={"0.35rem"}
                                                        pr={"0.35rem"}
                                                        mr={"0.25rem"}
                                                        children={"Deprecated"}
                                                        background={"#000"}
                                                        color={"#fff"}
                                                        css={{ borderRadius: "0.35rem" }}
                                                    />
                                                )}
                                                <C1
                                                    weight={500}
                                                    p={"0.125rem"}
                                                    pl={"0.35rem"}
                                                    pr={"0.35rem"}
                                                    children={child.isOptional ? "Optional" : "Required"}
                                                    background={c => child.isOptional ? c.lightest.css() : c.accent.red.css()}
                                                    color={c => c.onPrimary.css()}
                                                    alignSelf="flex-start"
                                                    css={{ borderRadius: "0.35rem" }}
                                                />
                                            </Flexbox>
                                        </Block>
                                        {typeof child.comment === "string" && (
                                            <Fragment>
                                                <Block m="1rem" mt="0">
                                                    {child.comment.split("\n").map((text, index) => (
                                                        <T2 color={c => c.hard.css()} key={index}>{text}</T2>
                                                    ))}
                                                </Block>
                                            </Fragment>
                                        )}
                                        {
                                            (index + 1) !== nameSpaceDocumentation.length && (
                                                <Divider />
                                            )
                                        }
                                    </Block>
                                )
                            })}
                        </Block>
                    </Fragment>
                )}
            </Block>
        )
    }) as any
}

export default UICaseDocumentation