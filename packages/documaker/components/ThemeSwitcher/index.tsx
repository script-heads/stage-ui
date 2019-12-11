import Icon from '@flow-ui/core/content/Icon'
import React, { Fragment, useRef, useState } from 'react'
import { themes } from '../../'
import { Block, Flexbox, Drop, Popover, Grid } from '@flow-ui/core'

const ThemeSwitcher = () => {
    const currentTheme = localStorage.getItem('theme')
    const iconRef = useRef(null)
    const [visible, setVisible] = useState(false)

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
                onClickOutside={(e,ot)=>ot&&setVisible(!visible)}>
                <Popover>
                    <Grid 
                        templateRows="auto auto" 
                        templateColumns="auto auto" 
                        gap=".5rem" 
                        p=".25rem">
                        {Object.keys(themes).map((theme, index) => (
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
                                borderColor={c=>currentTheme===theme
                                    ? c.primary.css()
                                    : c.lightest.css()
                                }
                                onClick={() => {
                                    window.setTheme(theme)
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