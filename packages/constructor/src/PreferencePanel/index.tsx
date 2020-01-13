import { ConstructorContext } from '@flow-ui/constructor/types'
import { Block, Flexbox, Paragraph, Text, useFlow } from '@flow-ui/core'
import { ScrollView } from '@flow-ui/lab'
import { Fragment } from 'react'
import BooleanControls from './controls/boolean'
import ChildrenControls from './controls/children'
import LiteralControls from './controls/literal'
import MarginControls from './controls/margin'
import PaddingControls from './controls/padding'
import SizeConrols from './controls/size'
import StringControls from './controls/string'
import createStyles from './styles'

const data = require('@flow-ui/documaker/definitions/types')

const PreferencePanel = (props: { context: ConstructorContext }) => {
    const { theme } = useFlow()
    const styles = createStyles(theme)
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

    let ComponentTypeName = props.context.focused?.$
    if (['Header', 'Display', 'Paragraph', 'Anchor', 'Text'].includes(props.context.focused?.$)) {
        ComponentTypeName = 'Typography'
    }
    findProps(data[ComponentTypeName + 'Types'])

    return (
        <Flexbox css={styles.container} flex={1}>
            <Block css={styles.panel} flex={1}>
                <ScrollView size="xsmall">
                    <Paragraph
                        pl="0.5rem"
                        size={0}
                        weight="bold"
                        color={c => c.light.hex()}
                        children="Preferences"
                    />
                    <Text
                        size={3}
                        weight="bold"
                        css={styles.componentName(!!props.context.focused)}
                        children={props.context.focused?.$ || ''}
                    />
                    <Block p="0.25rem 0.5rem" pb="0">
                        {
                            !!props.context.focused && (
                                <Fragment>
                                    <StringControls
                                        {...props}
                                        name="$name"
                                        placeholder={props.context.focused?.$}
                                    />
                                    <ChildrenControls {...props} />
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
        </Flexbox>
    )
}
export default PreferencePanel