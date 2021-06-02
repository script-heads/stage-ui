import { Classes, ComponentData } from '@stage-ui/system/hooks/useSystem'
import { ColorProp } from '@stage-ui/system/props/color'
import { AllProps } from '@stage-ui/system/props/types'

import React from 'react'

declare namespace FieldTypes {
  interface Props<S = Styles> extends AllProps<HTMLInputElement, S> {
    /**
     * Label for field
     */
    label?: React.ReactNode
    /**
     * Define where label be placed
     */
    labelType?: 'none' | 'outside' | 'inside'
    /**
     * Place for hint content
     */
    hint?: React.ReactNode
    /**
     * Place for error content
     */
    error?: React.ReactNode
    /**
     * Sizes of field
     * @default m
     * @display Sizes
     * @link /props/#size
     */
    size?: Stage.Sizes
    /**
     * Defines how field look
     * @default filled
     */
    decoration?: 'none' | 'filled' | 'underline' | 'outline'
    /**
     * Color of field
     * @default surface
     */
    color?: ColorProp
    /**
     * Shape of field
     * @default rounded
     */
    shape?: 'round' | 'rounded' | 'square'
    /**
     * Prevents the user from interacting
     */
    disabled?: boolean
    /**
     * Place for items to the left of value
     */
    rightChild?: React.ReactNode
    /**
     * Place for items to the left of value
     */
    leftChild?: React.ReactNode
    /**
     * Allow user clear value
     */
    clearable?: boolean

    /**
     * Event is fired when user press Enter
     */
    onEnter?: () => void
    /**
     * Event is fired when user clear value
     */
    onClear?: () => void
  }

  interface State {
    disabled: Props['disabled']
    focus: boolean
    shape: Props['shape']
    size: Props['size']
    decoration: Props['decoration']
    labelType: Props['labelType']
  }

  interface Styles<AdditionalStyles extends { [S in keyof Styles]?: Object } = {}> {
    /**
     * Root element
     */
    container: State & AdditionalStyles['container']
    /**
     * Container of field
     */
    field: State & AdditionalStyles['field']
    /**
     * Container of field content
     */
    content: State & AdditionalStyles['content']
    /**
     * Label element
     */
    label: State & AdditionalStyles['label']
    /**
     * Container for left and right childs
     */
    child: {
      align: 'right' | 'left'
    } & State &
      AdditionalStyles['child']
    /**
     * The button that clear value
     */
    clearButton: State & AdditionalStyles['clearButton']
    /**
     * Container of hint
     */
    hint: State & AdditionalStyles['hint']
    /**
     * Container of error
     */
    error: State & AdditionalStyles['error']
  }

  interface PrivateProps extends Props {
    focus: boolean
    classes: Classes<Styles>
    classesState?: State

    labelName?: string
    attributes?: ComponentData<Props, Styles>['attributes']
    events?: ComponentData<Props, Styles>['events']
    children?: React.ReactNode
  }
}

export default FieldTypes
