import { ArchitectTools, ArchitectItem } from '@flow-ui/architect/types'
import { Button, Flexbox, TextField, Grid, useTheme, Block, Paragraph, Menu } from '@flow-ui/core'
import createStyle from './styles'
import { Fragment } from 'react'

type Props = {
    tools: ArchitectTools
}

const FlexConrols = (props: Props) => {
    if (!props.tools.focused) {
        return null
    }
    const { tools } = props
    const focused = tools.focused as ArchitectItem
    const { direction, justifyContent, alignItems } = focused.props
    const theme = useTheme()
    const styles = createStyle(theme)

    const DirectionButton = (props: { label: string, value: string }) => (
        <Button
            size="s"
            css={styles.legatureButton}
            style={{ fontSize: '2rem' }}
            decoration={
                (
                    (!direction && props.value === 'row')
                    || direction === props.value
                )
                    ? 'outline'
                    : 'text'
            }
            children={props.label}
            onClick={() => {
                focused.props.direction = props.value
                tools.update()
            }}
        />
    )

    const JustifyButton = (props: { label: string, value: string }) => (
        <Button
            size="s"
            css={styles.legatureButton}
            decoration={
                (
                    (!justifyContent && props.value === 'flex-start')
                    || justifyContent === props.value
                )
                    ? 'outline'
                    : 'text'
            }
            children={props.label}
            onClick={() => {
                focused.props.justifyContent = props.value
                tools.update()
            }}
        />
    )

    const AlignButton = (props: { label: string, value: string }) => (
        <Button
            size="s"
            css={styles.legatureButton}
            decoration={
                (
                    (!alignItems && props.value === 'flex-start')
                    || alignItems === props.value
                )
                    ? 'outline'
                    : 'text'
            }
            children={props.label}
            onClick={() => {
                focused.props.alignItems = props.value
                tools.update()
            }}
        />
    )

    return (
        <Fragment>
            {/* <Menu
                items={[
                    { value: 'justifyContent', content: 'Vertical' },
                    { value: 'alignItems', content: 'Horizontal' }
                ]}
            /> */}
            <Block pb="0.5rem">
                <Paragraph
                    pb=".25rem"
                    pl=".25rem"
                    lineHeight="0.75rem"
                    color={c => c.light.hex()}
                    children="Justify content"
                />
                <Grid templateColumns="1fr 1fr 1fr" gap="0.125rem" css={styles.container}>
                    <JustifyButton label="██░░░░░░" value="flex-start" />
                    <JustifyButton label="░░░██░░░" value="center" />
                    <JustifyButton label="░░░░░░██" value="flex-end" />
                    <JustifyButton label="█░░░░░░█" value="space-between" />
                    <JustifyButton label="░░█░░█░░" value="space-around" />
                    <JustifyButton label="████████" value="stretch" />
                </Grid>
            </Block>
            <Block pb="0.5rem">
                <Paragraph
                    pb=".25rem"
                    pl=".25rem"
                    lineHeight="0.75rem"
                    color={c => c.light.hex()}
                    children="Align items"
                />
                <Grid templateColumns="1fr 1fr 1fr" gap="0.125rem" css={styles.container}>
                    <AlignButton label="██░░░░░░" value="flex-start" />
                    <AlignButton label="░░░██░░░" value="center" />
                    <AlignButton label="░░░░░░██" value="flex-end" />
                </Grid>
            </Block>
            <Block pb="0.5rem">
                <Paragraph
                    pb=".25rem"
                    pl=".25rem"
                    lineHeight="0.75rem"
                    color={c => c.light.hex()}
                    children="Direction"
                />
                <Grid templateColumns="1fr 1fr" gap="0.125rem" css={styles.container}>
                    <DirectionButton label="⇢" value="row" />
                    <DirectionButton label="⇣" value="column" />
                    <DirectionButton label="⇠" value="row-reverse" />
                    <DirectionButton label="⇡" value="column-reverse" />
                </Grid>
            </Block>
        </Fragment>
    )
}
export default FlexConrols