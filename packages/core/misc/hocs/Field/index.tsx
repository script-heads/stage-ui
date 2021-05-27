import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import { Close, AlertCircle } from '@stage-ui/core/icons'

import Types from './types'

const Field: ForwardRefRenderFunction<HTMLDivElement, Types.PrivateProps> = (props, ref) => {
  const {
    labelName,
    labelType = 'outside',
    label,
    clearable,
    onClear,
    attributes,
    events,
    classes,
    leftChild,
    children,
    rightChild,
    hint,
    error,
  } = props

  const classesState = {
    focus: props.focus,
    size: props.size,
    decoration: props.decoration,
    labelType: props.labelType,
    shape: props.shape,
    disabled: props.disabled,
  }

  return (
    <div {...attributes} {...events} ref={ref} css={classes.container(classesState)}>
      {label !== undefined && labelType === 'outside' && (
        <label css={classes.label(classesState)} htmlFor={labelName}>
          {label}
        </label>
      )}
      <div css={classes.field(classesState)}>
        {leftChild && <div css={classes.child({ align: 'left', ...classesState })}>{leftChild}</div>}
        <div css={classes.content(classesState)}>
          {label !== undefined && labelType === 'inside' && (
            <label css={classes.label(classesState)} htmlFor={labelName}>
              {label}
            </label>
          )}
          {children}
        </div>
        {clearable && (
          <div css={classes.child({ align: 'right', ...classesState })}>
            <Close
              onMouseDown={(e) => {
                if (onClear) {
                  e.stopPropagation()
                  onClear()
                }
              }}
              onTouchStart={(e) => {
                if (onClear) {
                  e.stopPropagation()
                  onClear()
                }
              }}
              css={classes.clearButton(classesState)}
              size={classesState.size}
            />
          </div>
        )}
        {rightChild && <div css={classes.child({ align: 'right', ...classesState })}>{rightChild} </div>}
      </div>
      {!!hint && !error && <div css={classes.hint(classesState)}>{hint}</div>}
      {!!error && (
        <div css={classes.error(classesState)}>
          {typeof error === 'string' ? (
            <>
              <AlertCircle display="inline-block" />
              {error}
            </>
          ) : (
            error
          )}
        </div>
      )}
    </div>
  )
}

export default forwardRef(Field)
