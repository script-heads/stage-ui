import { ArchitectTools, ArchitectItem } from '@flow-ui/architect/types'
import { Button, Flexbox, TextField, Grid, useTheme, Block, Paragraph, Menu } from '@flow-ui/core'
import createStyle from './styles'
import { Fragment } from 'react'
import { context } from '../../../..'

const FlexConrols = () => {
    if (!context.tools.focused) {
        return null
    }
    const focused = context.tools.focused as ArchitectItem
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
                context.tools.update()
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
                context.tools.update()
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
                context.tools.update()
            }}
        />
    )

    return (
        <Fragment>
            <Block pb="0.5rem">
                <Paragraph
                    pb=".25rem"
                    pl=".25rem"
                    lineHeight="0.75rem"
                    color={c => c.light}
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
                    color={c => c.light}
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
                    color={c => c.light}
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