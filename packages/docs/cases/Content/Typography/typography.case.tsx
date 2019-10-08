import React, { useLayoutEffect, Fragment, useState } from 'react'
import { CaseProps } from "../../../plugins/CaseWrapper";
import Divider from '@flow-ui/core/content/Divider'
import { H1, H2, H3, H4, D1, D2, D3, D4, T1, T2, T3, T4, C1, C2, C3, C4, A } from '@flow-ui/core/content/Typography';

import Flexbox from '@flow-ui/core/layout/Flexbox';
import UICaseBlock from '@flow-ui/showcase/src/UI/components/UICaseBlock';
import UICaseDocumentation from '@flow-ui/showcase/src/UI/components/UICaseDocumentation';
import Block from '@flow-ui/core/layout/Block';

export default (props: CaseProps) => {

    const TextProps = useState<any>({})

    return (
        <Flexbox column >
            <UICaseBlock
                title="Typography"
                props={{ TextProps }}
                interfaces={["Props", "TextProps"]}

                children={
                    <Fragment>
                        <H1>h1. Header</H1>
                        <H2>h2. Header</H2>
                        <H3>h3. Header</H3>
                        <H4>h4. Header</H4>
                    </Fragment>
                }
                paths={[
                    `@flow-ui/core/content/Typography`,
                ]}
            />
            <UICaseDocumentation ns="TypographyTypes" />

            <H1 ml="2rem" mt="2rem" mb="1rem">Typography</H1>
            <Block surface="major" m="2rem" mt="0" p="2rem">
            <div>
                <H1>h1. Header</H1>
                <H2>h2. Header</H2>
                <H3>h3. Header</H3>
                <H4>h4. Header</H4>
            </div>
            <Divider m='2rem 0' />
            <p>
                P. Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Divider m='2rem 0' />
            <div>
                <D1>D1. Display</D1>
                <D2>D2. Display</D2>
                <D3>D3. Display</D3>
                <D4>D4. Display</D4>
            </div>
            <Divider m='2rem 0' />
            <div>
                <T1>T1. Text</T1>
                <T2>T2. Text</T2>
                <T3>T3. Text</T3>
                <T4>T4. Text</T4>
            </div>
            <Divider m='2rem 0' />
            <div>
                <C1 mr='1rem'>C1. Caption</C1>
                <C2 mr='1rem'>C2. Caption</C2>
                <C3 mr='1rem'>C3. Caption</C3>
                <C4 mr='1rem'>C4. Caption</C4>
            </div>
            <Divider m='2rem 0' />
            <div>
                <A href='#' tabIndex={1}>Anchor</A>
                <ul>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul>
                <ol>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ol>
            </div>
            </Block>
        </Flexbox>
    )
}