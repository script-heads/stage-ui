/* eslint-disable no-console */

import React, { useState } from 'react'

import ReactDOM from 'react-dom'

import {
  Block,
  Button,
  DatePicker,
  ReactFocusTrap,
  useDropMenu,
  Viewport,
} from '@stage-ui/core'

import FlexboxTypes from '@stage-ui/core/layout/Flexbox/types'

import { dropDelegate } from '@stage-ui/core/hooks/misc/dropDelegate'

import { light } from './theme'

const INPUT_SELECT = 'input-select'
import { NuqsAdapter } from 'nuqs/adapters/react'
import { useQueryStates, parseAsString } from 'nuqs'

type Props = {
  index: number
  value?: string
  rightAnswer?: string
  items?: string[]
  isInteractive?: boolean
  isShowResult?: boolean
  parameters?: unknown[]
  onChange?: (...args: unknown[]) => unknown
  tag?: string
  status?: 'success' | 'error' | 'default'

  isPreview?: boolean
}

const ElementInputSelect = (props: Props) => {
  const {
    index = 0,
    items = [],
    value = '',
    isInteractive = false,
    isShowResult,
    rightAnswer,
    parameters,
    onChange,
    status,
    tag,
    isPreview,
  } = props

  const colors = React.useMemo(() => {
    const statusColorMap: Record<
      Required<Props>['status'],
      FlexboxTypes.Props['borderColor'][]
    > = {
      error: ['red500', 'red600'],
      success: ['green500', 'green600'],
      default: ['gray200', 'gray800'],
    }
    if (isPreview) {
      return statusColorMap.success
    }

    if (!isShowResult || status) {
      return statusColorMap[status || 'default'] || statusColorMap.default
    }

    if (rightAnswer === value) {
      return statusColorMap.success
    }

    if (((parameters as string[])?.[1] || '').split(',').some((x) => x === value)) {
      return statusColorMap.success
    }

    return statusColorMap.error
  }, [status, rightAnswer, value])

  const [containerElements, setContainerElements] = useState<HTMLElement[]>([])
  const [trapActive, setTrapActive] = useState(false)

  const select = useDropMenu(
    items.map((x) => {
      x = x.trim()
      return {
        value: x,
        text: x,
        color: x === value ? 'blue800' : 'gray600',
        onClick: () => {
          onChange?.({ index, value: x === value ? '' : x, type: INPUT_SELECT })
          setContainerElements((prev) => prev.filter((el) => el.id !== 'drop-renderer'))
        },
      }
    }),
    {
      dividerSign: '!divider',
      buttonProps: {
        size: 'l',
      },
      textProps: {
        size: 'l',
      },
      screenPadding: 8,
      onOpen() {
        setTrapActive(true)
      },
      onClose() {
        setTrapActive(false)
      },
    },
  )

  return (
    <Block
      ref={(el) =>
        setContainerElements((prev) => (!el || prev.includes(el) ? prev : [...prev, el]))
      }
    >
      {trapActive && (
        <ReactFocusTrap.FocusTrap
          containerElements={containerElements}
          focusTrapOptions={{
            escapeDeactivates: true,
            clickOutsideDeactivates: true,
            onDeactivate() {
              setTrapActive(false)
              dropDelegate.close()
            },
          }}
        />
      )}
      <Button
        decoration="plain"
        p="0.75rem"
        borderColor={colors[0]}
        textColor={colors[1]}
        borderWidth="0.1875rem"
        borderRadius="0.875rem"
        onClick={
          isInteractive && !isShowResult && !!onChange
            ? (e) => {
                select(e)
                setContainerElements((prev) => {
                  const wrapper = document.getElementById('drop-renderer')
                  if (!wrapper) return prev
                  if (prev.includes(wrapper)) {
                    return prev
                  }
                  return [...prev, wrapper]
                })
              }
            : undefined
        }
        style={{
          display: 'inline-flex',
          minWidth: '3.75rem',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '3.75rem',
          position: 'relative',
        }}
        attributes={{
          'data-tag': tag,
          'data-type': INPUT_SELECT,
          'data-index': index,
          'data-value': value,
        }}
      >
        {value || '\u00A0'}
      </Button>
    </Block>
  )
}

export default ElementInputSelect

const props = {
  tag: 'template-3d-editor-preview',
  index: 0,
  value: 'Табуретвфцвфцвфцвфцвфцвфцвфцвфцвфцвфцв',
  items: ['Стул', 'Диван', 'Табуретвфцвфцвфцвфцвфцвфцвфцвфцвфцвфцв'],
  parameters: ['Стул,Диван,Табурет'],
  isInteractive: true,
  isShowResult: false,
  isPreview: false,
  onChange: (...vals: any[]) => {
    console.log(vals)
  },
}

const App: React.FC = () => {
  return (
<<<<<<< Updated upstream
    <div style={{ padding: '70px', height: '300px' }}>
      <ScrollView>
        <input />
        <Block style={{ height: '20px' }} />
        <input />
        <Block style={{ height: '20px' }} />
        <input />
        <Block style={{ height: '20px' }} />

        <Block style={{ height: '400px', background: 'lightblue' }} />

        <input />
        <Block style={{ height: '20px' }} />
        <input />
        <Block style={{ height: '20px' }} />
        <input />
        <Block style={{ height: '20px' }} />
      </ScrollView>
    </div>
=======
    <NuqsAdapter>
      <BackButton />
    </NuqsAdapter>
>>>>>>> Stashed changes
  )
}

ReactDOM.render(
  <Viewport theme={light}>
    <App />
  </Viewport>,
  document.getElementById('app'),
)
<<<<<<< Updated upstream
=======

interface Propse {
  onClick?: () => void
}

function BackButton({ onClick }: Propse) {
  const hint = useDropOver('Назад')
  const [dates, setDates] = useQueryStates({
    dateFrom: parseAsString.withDefault(''),
    dateTo: parseAsString.withDefault(''),
  })
  return (
    <>
      <DatePicker
        range
        hideToday
        clearable
        onClear={() => {
          setDates({
            dateFrom: null,
            dateTo: null,
          })
        }}
        onChangeRange={([dateFrom, dateTo]) => {
          setDates({
            dateFrom: dateFrom ? dateFrom.toISOString() : null,
            dateTo: dateTo ? dateTo.toISOString() : null,
          })
        }}
        value={
          dates.dateFrom && dates.dateTo ? [dates.dateFrom, dates.dateTo] : undefined
        }
        style={{ minWidth: '18rem' }}
        flex={0}
        placeholder="Дата от"
      />
    </>
  )
}
>>>>>>> Stashed changes
