import { Block, Divider, Flexbox, Menu, Paragraph, ScrollView, useTheme } from '@flow-ui/core'
import { Copy, Cube, Link, Trash2 } from '@flow-ui/core/icons'
import React, { Fragment } from 'react'
import { context } from '../..'
import { componentsTypography } from '../RenderPanel'
import BooleanControls from './controls/boolean'
import FlexControls from './controls/flex'
import LiteralControls from './controls/literal'
import MarginControls from './controls/margin'
import NameControls from './controls/name'
import PaddingControls from './controls/padding'
import SizeConrols from './controls/size'
import StringControls from './controls/string'
import TextControls from './controls/text'
import styles from './styles'

const data = require('../../../utils/definitions/types')
const hiddenProps = [
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formTarget',
    'name',
    'formNoValidate',
    'alignContent',
    'alignItems',
    'flow',
    'justifyContent',
    'justifyItems',
    'wrap',
    'direction',
    'overflow',
    'list',
    'autoComplete',
    'rel',
    'target',
    'ping',
    'media',
    'hrefLang',
    'href',
]
const PrefPanel = () => {
    const theme = useTheme()
    const cs = styles(theme)

    const literalProps: { name: string, values: string[] }[] = []
    const stringProps: string[] = []
    const booleanProps: string[] = []

    const findliteralProps = (children) => {
        for (const prop of children) {
            if (hiddenProps.includes(prop.name)) {
                continue
            }
            if (prop.type === 'stringLiteral') {
                if (!literalProps.find(item => item.name === prop.name)) {
                    literalProps.push(prop)
                }
                continue
            }
            if (prop.type === 'intrinsic') {
                if (prop.values.length === 1) {
                    if (prop.values[0] === 'string') {
                        if (!stringProps.find(item => item === prop.name)) {
                            stringProps.push(prop.name)
                        }
                    }
                    if (prop.values[0] === 'boolean') {
                        if (!booleanProps.find(item => item === prop.name)) {
                            booleanProps.push(prop.name)
                        }
                    }
                }
                continue
            }
            /**
             * TODO: new controls for icons 
             */
            if (prop.type === 'reference') {
                if (prop.values[0] === 'Shared.IconProp') {
                    stringProps.push('type')
                }
            }
        }
    }

    const filterProps = (item) => {
        if (Array.isArray(item.children)) {
            findliteralProps(item.children)
        }
        if (Array.isArray(item.extendedTypes)) {
            findProps(item.extendedTypes)
        }
    }

    const findProps = (types) => {
        if (!types) {
            return
        }
        if (Array.isArray(types)) {
            for (const item of types) {
                if (item.name.match('Props')) {
                    filterProps(item)
                }
            }
        }
    }

    let ComponentTypeName = context.tools.focused?.component
    if (componentsTypography.includes(context.tools.focused?.component || '-')) {
        ComponentTypeName = 'Typography'
    }
    findProps(data[ComponentTypeName + 'Types'])
    return (
        <Block
            css={cs.container}
            backgroundColor={c => c.surface}
            borderColor={c => c.lightest}>
            <Flexbox justifyContent="space-between" alignItems="center" my=".5rem">
                <Menu
                    direction="row"
                    size="s"
                    ml="0.5rem"
                    decoration="color"
                    value="design"
                >
                    <Menu.Item
                        value="design"
                        leftChild={<Cube />}
                        title="Design"
                    />
                </Menu>
                <Block>
                    <Copy
                        mr="1rem"
                        onClick={() => {
                            context.tools.duplicate()
                        }}
                        color={c => context.tools.focused ? c.onSurface : c.lightest}
                    />
                    <Trash2
                        mr="1rem"
                        onClick={() => {
                            context.tools.remove()
                        }}
                        color={c => context.tools.focused ? c.error : c.lightest}
                    />
                </Block>
            </Flexbox>
            <Divider w="unset" />
            <ScrollView size="xs" css={cs.scrollView}>
                <Block css={cs.scrollContainer}>
                    {
                        !context.tools.focused && (
                            <Paragraph
                                align="center"
                                pt="2rem"
                                color={c => c.light}
                                children="Preferences panel"
                            />
                        )
                    }
                    {
                        !!context.tools.focused && (
                            <Fragment>
                                <NameControls />
                                <TextControls />
                                {context.tools.focused.component === 'Flexbox' && (
                                    <FlexControls />
                                )}
                                <PaddingControls />
                                <MarginControls />
                                <SizeConrols />
                                {literalProps.map((item, index) => (
                                    <LiteralControls
                                        key={index}
                                        name={item.name}
                                        values={item.values}
                                    />
                                ))}

                                {booleanProps.length > 0 && (
                                    <Block>
                                        <Paragraph
                                            pb=".25rem"
                                            pl=".25rem"
                                            lineHeight="0.75rem"
                                            color={c => c.light}
                                            children="Flags"
                                        />
                                        <Block p="0.25rem">
                                            {booleanProps.map((name, index) => (
                                                <BooleanControls
                                                    key={index}
                                                    name={name}
                                                />
                                            ))}
                                        </Block>
                                    </Block>

                                )}
                                {stringProps.map((name, index) => (
                                    <StringControls

                                        key={index}
                                        name={name}
                                    />
                                ))}
                            </Fragment>
                        )
                    }
                </Block>
            </ScrollView>
        </Block>
    )
}
export default PrefPanel