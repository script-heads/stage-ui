/* eslint-disable no-param-reassign */
import { useSystem } from '@stage-ui/system'
import React, { forwardRef, ForwardRefRenderFunction, Fragment, useEffect, useMemo } from 'react'
import Separator from './Separator'
import styles from './styles'
import Types from './types'

const Split: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { positions, direction } = props
  const {
    classes,
    attributes,
    events: { onChange, onMove, ...events },
    styleProps,
  } = useSystem('Split', props, styles)

  const vertical = props.direction === 'column'

  const refs = useMemo<Record<string, Types.Ref>>(() => ({}), [])

  const defaultSize = useMemo(() => 100 / props.children.length, [])

  const getPositions = () =>
    Object.keys(refs)
      .filter((key) => parseInt(key, 10) >= 0)
      .map((key) => parseFloat(refs[key].current?.style[vertical ? 'height' : 'width'] || ''))

  useEffect(() => {
    if (refs['-1'].current) {
      refs['-1'].current.onMove = () => {
        onMove?.(getPositions())
      }
      refs['-1'].current.onChange = () => {
        onChange?.(getPositions())
      }
    }
  }, [onChange, onMove])

  useEffect(() => {
    Object.keys(refs)
      .filter((key) => parseInt(key, 10) >= 0)
      .forEach((key) => {
        if (refs[key].current) {
          refs[key].current!.style[vertical ? 'height' : 'width'] = `${
            positions ? positions[parseInt(key, 10)] : defaultSize
          }%`
        }
      })
    if (refs['-1'].current) {
      refs['-1'].current.vertical = direction === 'column'
    }
  }, [positions, direction])

  return (
    <div
      {...attributes}
      {...events}
      ref={(containerRef) => {
        refs['-1'] = { current: containerRef }
      }}
      css={[
        classes.container({
          vertical,
        }),
        styleProps.all,
      ]}
    >
      {props.children.map((child, index) => {
        const separator =
          props.children.length !== index + 1 ? (
            <Separator
              areaSize={props.areaSize || 4}
              defaultVertical={vertical}
              container={() => refs[-1]}
              prev={() => refs[index]}
              next={() => refs[index + 1]}
            />
          ) : null

        return (
          <Fragment key={child.key}>
            <div
              css={{
                display: 'flex',
              }}
              style={{
                [vertical ? 'height' : 'width']: `${defaultSize}%`,
              }}
              ref={(nestedRef) => {
                refs[index] = { current: nestedRef }
              }}
            >
              {child}
            </div>
            {separator}
          </Fragment>
        )
      })}
    </div>
  )
}

export default forwardRef(Split)
