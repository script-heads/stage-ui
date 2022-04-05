import React, { forwardRef } from 'react'

import { Close, AlertCircle } from '@stage-ui/icons'
import { useSystem } from '@stage-ui/system'

import Types from './types'
import createClasses from './styles'

function Field(props: Types.PrivateProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const {
    name,
    disabled,
    hint,
    size,
    children,
    leftChild,
    rightChild,
    error,
    labelType = 'outside',
    label,
    clearable = false,
  } = props

  const {
    classes,
    attributes,
    // not remove not used props
    events: { onClear, onEsc, onEnter, ...events },
  } = useSystem(name || 'Field', props, createClasses)

  attributes.tabIndex = attributes.tabIndex || 0

  const htmlId = React.useMemo(
    () => `${'Field'}-${Math.random().toString(16).slice(2)}`,
    [],
  )

  const handleClean = (
    e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>,
  ) => {
    e.stopPropagation()
    e.preventDefault()
    if (onClear && !disabled) {
      onClear()
    }
  }

  const labelJSX = (
    <label css={classes.label} htmlFor={htmlId}>
      {label}
    </label>
  )

  const hintJSX = <div css={classes.hint}>{hint}</div>

  const errorJSX = (
    <div css={classes.error}>
      {typeof error === 'string' && <AlertCircle display="inline-block" />}
      {error}
    </div>
  )

  const clearJSX = (
    <div css={classes.rightChild}>
      <Close onClick={handleClean} css={classes.clearButton} size={size} />
    </div>
  )

  return (
    <div css={classes.container}>
      {label !== undefined && labelType === 'outside' && labelJSX}

      <div css={classes.field} {...attributes} {...events} ref={ref}>
        {leftChild && <div css={classes.leftChild}>{leftChild}</div>}

        <div css={classes.content}>
          {label !== undefined && labelType === 'inside' && (
            <label css={classes.label} htmlFor={htmlId}>
              {label}
            </label>
          )}
          {children}
        </div>

        {clearable && clearJSX}
        {rightChild && <div css={classes.rightChild}>{rightChild}</div>}
      </div>

      {!!hint && !error && hintJSX}
      {!!error && errorJSX}
    </div>
  )
}

export default forwardRef(Field)
