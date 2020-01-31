
import * as CoreScope from '@flow-ui/core'
import { Block } from '@flow-ui/core'
import * as Icon from '@flow-ui/core/icons'
import * as LabScope from '@flow-ui/lab'
import WhaleTypes from '@flow-ui/whale/types'
import React from 'react'

//@ts-ignore
import { transpile } from '@flow-ui/documaker/scripts/typescriptServices'

Object.assign(window, {
    React,
    ...React,
    ...CoreScope,
    ...LabScope,
    Icon
})

interface PreviewProps {
    theme: WhaleTypes.Theme
    code: string
    grid: boolean
    fullscreen: boolean
    setFullscreen: (state: boolean) => void
}

const Preview = (props: PreviewProps) => {
    const {theme, code, grid, fullscreen, setFullscreen} = props
    const traspiledCode = code && transpile(code, {
        jsx: 'react',
        module: 'es6',
    }).split('export default ')[1].trim().slice(0, -1) + '()'
    
    return (
        <Block h="100%" css={{ position: 'relative' }}>
            <Block 
                p="2rem" 
                css={[
                    { 
                        position: 'absolute',  
                        top: 0, 
                        left: 0, 
                        right: 0, 
                        bottom: 0 
                    },
                    grid && {
                        '&::before': {
                            content: '\'\'',
                            position: 'absolute',
                            // zIndex: -1,
                            left: 0, right: 0, bottom: 0, top: 0,
                            backgroundColor: theme.color.background.hex(),
                            backgroundImage: `
                                linear-gradient(45deg, ${theme.color.surface.hex()} 25%, transparent 25%),
                                linear-gradient(-45deg, ${theme.color.surface.hex()} 25%, transparent 25%), 
                                linear-gradient(45deg, transparent 75%, ${theme.color.surface.hex()} 75%), 
                                linear-gradient(-45deg, transparent 75%, ${theme.color.surface.hex()} 75%)
                            `,
                            backgroundSize: '2rem 2rem',
                            backgroundPosition: '0 0, 0 1rem, 1rem -1rem, -1rem 0px',
                            borderRadius: '0 8px 8px 0',
                        }
                    }
                ]}>
                <span
                    style={{ position: 'relative' }}
                    children={Function('"use strict";return (' + traspiledCode + ')')()}
                />
            </Block>
        </Block>                        
    )
}

export default Preview