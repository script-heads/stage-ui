import { Block, Flexbox, Header, Paragraph, Button, TextField } from '@flow-ui/core'
import WhaleTypes from '@flow-ui/whale/types'
import FlexboxTypes from '@flow-ui/core/layout/Flexbox/types'
import React, { useRef, useState, useMemo, useEffect } from 'react'
import colorUtils from 'color'
import ColorPick from '../ColorPick'

interface NewColorDialogProps {
    palettKeys: string[]
    onColorChosen: (name: string, color: number[]) => void
    close: () => void
}

const NewColorDialog = (props: NewColorDialogProps) => {
    const [color, setColor] = useState<[string, number[]]>(['#bbbbbb', []])
    const [name, setName] = useState('')
    const alreadyExist = !!props.palettKeys.find(palettKey => name.toUpperCase() === palettKey.toUpperCase())
    
    return (
        <Block>
            <Flexbox>
                <ColorPick
                    color={color[0]}
                    onChange={(color, hex) => {
                        setColor([hex, color])
                    }}
                />
                <TextField
                    ml="1rem"
                    placeholder="Enter color name"
                    onChange={e => {
                        setName(e.target.value)
                    }}
                    hint={alreadyExist && (
                        <Paragraph color="error">Color with name {name} already exist in palette!</Paragraph>
                    )}
                />
            </Flexbox>
            <Flexbox mt="2rem" justifyContent="flex-end">
                <Button
                    disabled={name === '' || color[1].length === 0 || alreadyExist}
                    children="Add to palette"
                    onClick={() => {
                        props.onColorChosen(name, color[1])
                        props.close()
                    }}
                />
                
            </Flexbox>
        </Block>
    )
}

export default NewColorDialog