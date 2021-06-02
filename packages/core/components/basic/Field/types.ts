import { Classes, ComponentData } from '@stage-ui/system/hooks/useSystem'
import React from 'react'

declare namespace FieldTypes {
  interface Props<S = Styles> extends Omit<Stage.AllProps<HTMLInputElement, S>, 'onChange'> {
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
    color?: Stage.ColorProp
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

  type State<AdditionalState = {}> = {
    disabled: Props['disabled']
    shape: Props['shape']
    size: Props['size']
    decoration: Props['decoration']
    labelType: Props['labelType']
  } & AdditionalState

  interface Styles<AdditionalStyles extends Record<string, any> = {}, AdditionalState = {}> {
    /**
     * Root element
     */
    container: State<AdditionalState> & AdditionalStyles['container']
    /**
     * Container of field
     */
    field: State<AdditionalState> & AdditionalStyles['field']
    /**
     * Container of field content
     */
    content: State<AdditionalState> & AdditionalStyles['content']
    /**
     * Label element
     */
    label: State<AdditionalState> & AdditionalStyles['label']
    /**
     * Container for left and right childs
     */
    child: {
      align: 'right' | 'left'
    } & State<AdditionalState> &
      AdditionalStyles['child']
    /**
     * The button that clear value
     */
    clearButton: State<AdditionalState> & AdditionalStyles['clearButton']
    /**
     * Container of hint
     */
    hint: State<AdditionalState> & AdditionalStyles['hint']
    /**
     * Container of error
     */
    error: State<AdditionalState> & AdditionalStyles['error']
  }

  interface PrivateProps extends Props {
    classes: Record<keyof Styles, (...args: any) => Stage.JSS>
    classesState?: Partial<State>

    labelName?: string
    attributes?: Omit<ComponentData<Props, Styles>['attributes'], 'onChange'>
    events?: Record<string, Function>
    children?: React.ReactNode
  }
}

export default FieldTypes
