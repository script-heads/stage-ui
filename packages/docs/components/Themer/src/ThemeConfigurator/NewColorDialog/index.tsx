import { Block, Button, Flexbox, Paragraph, TextField } from '@stage-ui/core'
import React, { Fragment, useState, useLayoutEffect } from 'react'
import Color from 'color'
import { Trash, Save } from '@stage-ui/icons'
import ColorPick from '../ColorPick'

interface NewColorDialogProps {
  edit?: {
    name: string
    color: Color
  }
  palettKeys: string[]
  onColorChosen: (name: string, color: number[], deleteKey?: string) => void
  close: () => void
}

const NewColorDialog = (props: NewColorDialogProps) => {
  const [color, setColor] = useState<[string, number[]]>([
    props.edit?.color.rgb().string() || '#bbbbbb',
    props.edit?.color.rgb().array() || [],
  ])
  const [name, setName] = useState(props.edit?.name || '')
  const alreadyExist = !!props.palettKeys.find((palettKey) => name.toUpperCase() === palettKey.toUpperCase())

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
          mx="1rem"
          defaultValue={props.edit?.name}
          placeholder="Enter color name"
          onChange={(e) => {
            setName(e.target.value)
          }}
          hint={
            alreadyExist &&
            !props.edit && <Paragraph color="error">Color with name {name} already exist in palette!</Paragraph>
          }
        />
        {props.edit ? (
          <>
            <Button
              children="Delete"
              color="error"
              rightChild={<Trash />}
              onClick={() => {
                props.onColorChosen(name, [], props.edit?.name)
                props.close()
              }}
            />
            <Button
              disabled={name === '' || color[1].length === 0}
              children="Save"
              rightChild={<Save />}
              onClick={() => {
                props.onColorChosen(name, color[1], props.edit?.name)
                props.close()
              }}
            />
          </>
        ) : (
          <Button
            disabled={name === '' || color[1].length === 0 || alreadyExist}
            children="Add to palette"
            onClick={() => {
              props.onColorChosen(name, color[1])
              props.close()
            }}
          />
        )}
      </Flexbox>
    </Block>
  )
}

export default NewColorDialog
