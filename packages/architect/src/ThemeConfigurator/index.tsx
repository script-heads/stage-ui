import { Block, Checkbox, dialog, Divider, Flexbox, Grid, Header, Paragraph, useTheme, Switch } from '@flow-ui/core'
import { Plus } from '@flow-ui/core/icons'
import WhaleTypes from '@flow-ui/whale/types'
import React, { useState, useEffect } from 'react'
import ColorPick from './ColorPick'
import NewColorDialog from './NewColorDialog'
import mergeObjects from '@flow-ui/whale/utils/mergeObjects'

const MAIN_COLORS = [
    ['BACKGROUND', 'background'],
    ['SURFACE', 'surface'],
    ['PRIMARY', 'primary'],
    ['SECONDARY', 'secondary'],
    ['VARIANT', 'backgroundVariant'],
    ['VARIANT','surfaceVariant'],
    ['TEXT', 'onPrimary'],
    ['TEXT', 'onSecondary'],
    ['TEXT', 'onBackground'],
    ['TEXT', 'onSurface'],
]
const GRAYSCALES = [
    ['LIGHTEST', 'lightest'],
    ['LIGHT', 'light'],
    ['HARD', 'hard'],
    ['HARDEST', 'hardest'],
]

interface ThemeConfiguratorProps {
    original: WhaleTypes.Theme,
    updateTheme: React.Dispatch<React.SetStateAction<WhaleTypes.Theme>>
}
const loadPatch = () => {
    const themeData = localStorage.getItem('theme_editor_data')
    if (themeData) {
        return JSON.parse(themeData) as WhaleTypes.ReplaceTheme
    }
    return  null
}
const savePatch = (patch: WhaleTypes.ReplaceTheme) => {
    localStorage.setItem('theme_editor_data', JSON.stringify(patch))
}

const ThemeConfigurator = (props: ThemeConfiguratorProps) => {
    let theme = useTheme()
    const { original, updateTheme } = props
    const [testflight, setTestflight] = useState(
        localStorage.getItem('theme_editor_testflight') === 'true'
    )

    const patch = loadPatch()
    if (patch) {
        theme = theme.replace(patch)
    }

    useEffect(() => {
        if (testflight) {
            if (patch) {
                updateTheme(theme)
            }
        } else {
            updateTheme(original)
        }
    }, [testflight])

    const colorChange = (key: string, color: number[], palette = false) => {
        let patch: WhaleTypes.ReplaceTheme = loadPatch() || {
            main: {}
        }
        patch = mergeObjects(patch, {
            main: {
                color: { 
                    [key]: color
                 }
            }
        }) as WhaleTypes.ReplaceTheme

        if (palette) {
            patch = mergeObjects(patch, {
                main: {
                    color: {
                        palette: { 
                            [key]: color
                         }
                    }
                }
            }) as WhaleTypes.ReplaceTheme
        }
        savePatch(patch)
        if (testflight) {
            updateTheme(theme.replace(patch))
        }
    }

    return (
        <Block m="2rem" p="2rem" decoration="surface">
            <Flexbox alignItems="center" justifyContent="space-between">
                <Block css={{ letterSpacing: '0.125rem' }}>
                    <Header m={0}>Light</Header>
                    <Paragraph size="xs" m={0} textColor="hard">theme</Paragraph>
                </Block>
                <Switch
                    label="Testflight"
                    checked={testflight}
                    onChange={() => {
                        setTestflight(!testflight)
                        localStorage.setItem('theme_editor_testflight', testflight ? 'false' : 'true')

                    }}
                    styles={{
                        label: () => [{
                            fontSize: '0.75rem',
                            letterSpacing: '0.125rem',
                            color: theme.color.light.hex()
                        }]
                    }}
                />
            </Flexbox>
            {/**
             * 
             * MAIN COLORS
             * 
             */}
            <Divider gap={4} my="1rem" />
            <Header size="s" fontSize="0.625rem" color="light">MAIN COLOR</Header>
            <Grid gridTemplateColumns="1fr 1fr 1fr 1fr" gap="1rem">
                {MAIN_COLORS.map(mc => (
                    <ColorPick
                        key={mc[1]}
                        title={mc[0]}
                        subtitle={mc[1]}
                        color={theme.color[mc[1]]}
                        onChange={color => colorChange(mc[1], color)}
                    />
                ))}
            </Grid>
            {/**
             * 
             * GRAYSCALES
             * 
             */}
            <Divider gap={4} my="1rem" />
            <Header size="s" fontSize="0.625rem" color="light">GRAYSCALES</Header>
            <Grid gridTemplateColumns="1fr 1fr 1fr 1fr" gap="1rem">
                {GRAYSCALES.map(mc => (
                    <ColorPick
                        key={mc[1]}
                        title={mc[0]}
                        subtitle={mc[1]}
                        color={theme.color[mc[1]]}
                        onChange={color => colorChange(mc[1], color)}
                    />
                ))}
            </Grid>
            {/**
             * 
             * PALETTE
             * 
             */}
            <Divider gap={4} my="1rem" />
            <Flexbox alignItems="center">
                <Header size="s" fontSize="0.625rem" color="light">PALETTE</Header>
                <Plus
                    size="s"
                    ml="0.5rem"
                    p={0}
                    shape="circle"
                    backgroundColor="primary"
                    color="surface"
                    onClick={() => {
                        dialog({
                            title: 'New color',
                            customContent: (close) => (
                                <NewColorDialog 
                                    palettKeys={Object.keys(theme.color.palette)}
                                    close={close} 
                                    onColorChosen={(name, color) => {
                                        colorChange(name, color, true)
                                    }}
                                />
                            )
                        })
                    }}
                />
            </Flexbox>
            <Grid gridTemplateColumns="1fr 1fr 1fr 1fr" gap="1rem">
                {Object.keys(theme.color.palette).map(key => (
                    <ColorPick
                        key={key}
                        title={key.toUpperCase()}
                        subtitle={key}
                        color={theme.color.palette[key]}
                        onChange={color => colorChange(key, color, true)}
                    />
                ))}
            </Grid>
        </Block>
    )
}

export default ThemeConfigurator