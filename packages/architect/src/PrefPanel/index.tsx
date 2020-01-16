import { ArchitectTools } from '@flow-ui/architect/types'
import { Block, Flexbox, Paragraph, Text, useTheme, Menu, Divider, Icon } from '@flow-ui/core'
import { ScrollView } from '@flow-ui/lab'
import { Fragment } from 'react'
import BooleanControls from './controls/boolean'
import NameControls from './controls/name'
import TextControls from './controls/text'
import LiteralControls from './controls/literal'
import MarginControls from './controls/margin'
import PaddingControls from './controls/padding'
import SizeConrols from './controls/size'
import StringControls from './controls/string'
import createStyles from './styles'
import { componentsTypography } from '../RenderPanel'

const data = require('@flow-ui/documaker/definitions/types')

const PrefPanel = (props: { tools: ArchitectTools }) => {
    const theme = useTheme()
    const styles = createStyles(theme)
    const { tools } = props

    const literalProps: { name: string, values: string[] }[] = []
    const stringProps: string[] = []
    const booleanProps: string[] = []

    const findliteralProps = (children) => {
        for (const prop of children) {
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

    let ComponentTypeName = tools.focused?.component
    if (componentsTypography.includes(tools.focused?.component || '-')) {
        ComponentTypeName = 'Typography'
    }
    findProps(data[ComponentTypeName + 'Types'])
    return (
        <Block
            css={styles.container}
            backgroundColor={c => c.surface.css()}
            borderColor={c => c.lightest.css()}>
            <Flexbox justifyContent="space-between" alignItems="center" my=".5rem">
                <Menu
                    px="1rem"
                    size="small"
                    decoration="color"
                    defaultValue="props"
                    items={[
                        { content: 'Props', value: 'props' },
                        { content: 'Actions', value: 'actions' }
                    ]}
                />
                <Icon
                    mr="1rem"
                    onClick={() => {
                        tools.remove()
                    }}
                    type={t => t.outline.trash}
                    color={c => tools.focused ? c.accent.red.hex() : c.lightest.hex()}
                />
            </Flexbox>
            <Divider w="unset" />
            <ScrollView size="xsmall" css={styles.scrollView}>
                <Block css={styles.scrollContainer}>
                    {
                        !tools.focused && (
                            <Paragraph
                                align="center"
                                pt="2rem"
                                size={2}
                                color={c => c.light.hex()}
                                children="Preferences panel"
                            />
                        )
                    }
                    {
                        !!tools.focused && (
                            <Fragment>
                                <NameControls {...props} />
                                <TextControls {...props} />
                                <PaddingControls {...props} />
                                <MarginControls {...props} />
                                <SizeConrols {...props} />
                                {literalProps.map((item, index) => (
                                    <LiteralControls
                                        {...props}
                                        key={index}
                                        name={item.name}
                                        values={item.values}
                                    />
                                ))}

                                {booleanProps.length > 0 && (
                                    <Block>
                                        <Paragraph
                                            size={4}
                                            pb=".25rem"
                                            pl=".25rem"
                                            lineHeight="0.75rem"
                                            color={c => c.light.hex()}
                                            children="Flags"
                                        />
                                        <Block p="0.25rem">
                                            {booleanProps.map((name, index) => (
                                                <BooleanControls
                                                    {...props}
                                                    key={index}
                                                    name={name}
                                                />
                                            ))}
                                        </Block>
                                    </Block>

                                )}
                                {stringProps.map((name, index) => (
                                    <StringControls
                                        {...props}
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