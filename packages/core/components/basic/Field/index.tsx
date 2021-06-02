/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Close, AlertCircle } from '@stage-ui/icons'
import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import Types from './types'

const Field: ForwardRefRenderFunction<HTMLDivElement, Types.PrivateProps> = (props, ref) => {
  const { labelName, labelType = 'outside', label, clearable, onClear, attributes, events, classes } = props

  const classesState = {
    size: props.size,
    decoration: props.decoration,
    labelType: props.labelType,
    shape: props.shape,
    disabled: props.disabled,
    ...props.classesState,
  }

  return (
    <div {...attributes} {...events} ref={ref} css={classes.container(classesState)}>
      {label !== undefined && labelType === 'outside' && (
        <label css={classes.label(classesState)} htmlFor={labelName}>
          {label}
        </label>
      )}
      <div css={classes.field(classesState)}>
        {props.leftChild && <div css={classes.child({ align: 'left', ...classesState })}>{props.leftChild}</div>}
        <div css={classes.content(classesState)}>
          {label !== undefined && labelType === 'inside' && (
            <label css={classes.label(classesState)} htmlFor={labelName}>
              {label}
            </label>
          )}
          {props.children}
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
        {props.rightChild && <div css={classes.child({ align: 'right', ...classesState })}>{props.rightChild}</div>}
      </div>
      {!!props.hint && !props.error && <div css={classes.hint(classesState)}>{props.hint}</div>}
      {!!props.error && (
        <div css={classes.error(classesState)}>
          {typeof props.error === 'string' ? (
            <>
              <AlertCircle display="inline-block" />
              {props.error}
            </>
          ) : (
            props.error
          )}
        </div>
      )}
    </div>
  )
}

export default forwardRef(Field)
