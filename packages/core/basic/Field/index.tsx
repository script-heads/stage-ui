/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Close, AlertCircle } from '@stage-ui/icons'
import { useSystem } from '@stage-ui/system'
import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import Types from './types'
import createClasses from './styles'

const Field: ForwardRefRenderFunction<HTMLDivElement, Types.PrivateProps> = (props, ref) => {
  const { name, labelType = 'outside', label, clearable = false } = props
  const htmlId = React.useMemo(() => `${'Field'}-${Math.random().toString(16).slice(2)}`, [])
  const {
    classes,
    attributes,
    events: { onClear, onEsc, onEnter, ...events },
  } = useSystem(name || 'Field', props, createClasses)

  const classesState = {
    size: props.size || 'm',
    decoration: props.decoration || 'filled',
    labelType: props.labelType || 'outside',
    shape: props.shape || 'rounded',
    disabled: props.disabled || false,
  }

  return (
    <div {...attributes} {...events} ref={ref} css={classes.container(classesState)}>
      {label !== undefined && labelType === 'outside' && (
        <label css={classes.label(classesState)} htmlFor={htmlId}>
          {label}
        </label>
      )}
      <div css={classes.field(classesState)}>
        {props.leftChild && (
          <div css={classes.child({ align: 'left', ...classesState })}>{props.leftChild}</div>
        )}
        <div css={classes.content(classesState)}>
          {label !== undefined && labelType === 'inside' && (
            <label css={classes.label(classesState)} htmlFor={htmlId}>
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
        {props.rightChild && (
          <div css={classes.child({ align: 'right', ...classesState })}>{props.rightChild}</div>
        )}
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
