import { Close, AlertCircle } from '@stage-ui/icons'
import { useSystem } from '@stage-ui/system'
import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import Types from './types'
import createClasses from './styles'

const Field: ForwardRefRenderFunction<HTMLDivElement, Types.PrivateProps> = (props, ref) => {
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
    events: { onClear, onEsc, onEnter, ...events },
  } = useSystem(name || 'Field', props, createClasses)

  const htmlId = React.useMemo(() => `${'Field'}-${Math.random().toString(16).slice(2)}`, [])

  const handleClean = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
    if (onClear && !disabled) {
      e.stopPropagation()
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
      <Close
        onMouseDown={handleClean}
        onTouchStart={handleClean}
        css={classes.clearButton}
        size={size}
      />
    </div>
  )

  return (
    <div css={classes.container}>
      {label !== undefined && labelType === 'outside' && labelJSX}

      <div
        css={classes.field}
        {...attributes}
        {...events}
        tabIndex={attributes.tabIndex || 0}
        ref={ref}
      >
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

      {!!props.hint && !props.error && hintJSX}
      {!!props.error && errorJSX}
    </div>
  )
}

export default forwardRef(Field)
