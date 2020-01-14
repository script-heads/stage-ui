import Icon from '@flow-ui/core/content/Icon'
import React, { Fragment, useRef, useState } from 'react'
import { Block, Flexbox, Drop, Popover, Grid } from '@flow-ui/core'
import ThemeTypes from '@flow-ui/core/misc/themes/types'

export interface ThemeSwitcherProps {
    themes: Record<string,ThemeTypes.Index>
    currentTheme: ThemeTypes.Index
    setTheme: (theme: ThemeTypes.Index) => void
}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {themes, currentTheme, setTheme} = props
    const [visible, setVisible] = useState(false)
    const iconRef = useRef(null)

    return (
        <Fragment>
            <Icon
                size="1.5rem" 
                type={c=>c.outline.colorPalette} 
                ref={iconRef} 
                onClick={()=>setVisible(!visible)}
                color={c=>c.primary.css()}
            />
            <Drop 
                target={iconRef} 
                visibility={visible ? 'visible' : 'hidden'} 
                distance={16}
                onClickOutside={(e,ot)=> ot && setVisible(!visible)}>
                <Popover>
                    <Grid 
                        templateRows="auto auto" 
                        templateColumns="auto auto" 
                        gap=".5rem" 
                        p=".25rem">
                        {Object.keys(props.themes).map((theme, index) => (
                            <Flexbox
                                key={'theme'+index} 
                                h="2rem" 
                                w="2rem" 
                                css={{
                                    cursor: 'pointer',
                                    borderRadius: '16rem',
                                    position: 'relative' 
                                }}
                                borderWidth="2px"
                                borderStyle="solid"
                                borderColor={c=> currentTheme.name === themes[theme].name
                                    ? c.primary.css()
                                    : c.lightest.css()
                                }
                                onClick={() => {
                                    setTheme(themes[theme])
                                }}>
                                <Block 
                                    flex={1}
                                    css={{
                                        borderTopLeftRadius: '16rem', 
                                        borderBottomLeftRadius: '16rem',
                                        background: themes[theme].color.primary.css()
                                    }} 
                                />
                                <Block
                                    flex={1} 
                                    css={{
                                        borderTopRightRadius: '16rem', 
                                        borderBottomRightRadius: '16rem',
                                        background: themes[theme].color.background.css()
                                    }} 
                                />
                            </Flexbox>
                        ))}
                    </Grid>
                </Popover>
            </Drop>
        </Fragment>
    )
}

export default ThemeSwitcher