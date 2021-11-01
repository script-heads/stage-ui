import { Flexbox, Text } from '@stage-ui/core'
import { ArrowIosLeft, ArrowIosRight } from '@stage-ui/icons'
import { useSystem } from '@stage-ui/system'
import React, { forwardRef, ForwardRefRenderFunction, useEffect, useState } from 'react'
import createClasses from './styles'
import Types from './types'

const PAGE_BUTTON_MAX = 1

type PageButtonProps = {
  onClick?: (page: number) => void
  page: number
}

const PageButton: React.FC<PageButtonProps> = (props) => (
  <Flexbox
    backgroundColor={!props.onClick ? 'primary' : 'transparent'}
    alignContent="center"
    justifyContent="center"
    borderRadius="10rem"
    mx="xs"
    shadow={!props.onClick ? 'm' : undefined}
    p="s"
    onClick={props.onClick ? () => props.onClick?.(props.page) : undefined}
    style={(t) => [
      {
        transition: 'background-color 0.25s',
        ':hover': {
          backgroundColor: props.onClick ? t.color.primary.alpha(0.1).rgb().string() : 'primary',
        },
      },
    ]}
  >
    <Text
      color={!props.onClick ? 'onPrimary' : 'hardest'}
      size="s"
      weight={500}
      align="center"
      style={{ minWidth: '1rem' }}
    >
      {props.page}
    </Text>
  </Flexbox>
)

const Pageswitch: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {
  const { length: total, pageSize = 20, value } = props
  const lastPage = Math.ceil(total / pageSize)
  const { classes, attributes, events, styleProps } = useSystem('Pageswitch', props, createClasses)

  let defaultValue = value || props.defaultValue || 1
  if (defaultValue <= 0) defaultValue = 1
  if (defaultValue > lastPage) defaultValue = lastPage

  const [currentPage, setCurrentPage] = useState(defaultValue)

  useEffect(() => {
    if (value !== undefined) {
      if (value > 0) {
        if (value < lastPage) {
          setCurrentPage(value)
        } else {
          setCurrentPage(lastPage)
        }
      } else {
        setCurrentPage(1)
      }
    }
  }, [value])

  const setPage = (pageNumber: number) => {
    props.onChange?.(pageNumber, (pageNumber - 1) * pageSize)
    if (value === undefined) {
      setCurrentPage(pageNumber)
    }
  }

  const nextPage = () => {
    if (currentPage < lastPage) {
      setPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setPage(currentPage - 1)
    }
  }

  let prevPagesCount = currentPage - 1
  let nextPagesCount = lastPage - currentPage || 0
  let allowToFirst = false
  let allowToLast = false

  if (prevPagesCount > PAGE_BUTTON_MAX) {
    prevPagesCount = PAGE_BUTTON_MAX
    allowToFirst = true
  }
  if (nextPagesCount > PAGE_BUTTON_MAX) {
    nextPagesCount = PAGE_BUTTON_MAX
    allowToLast = true
  }

  return (
    <Flexbox
      attributes={attributes}
      ref={ref}
      css={[classes.container, styleProps.all]}
      alignItems="center"
      {...events}
    >
      <ArrowIosLeft
        mr="0.5rem"
        size="1.25rem"
        color="hard"
        css={classes.arrowButton({ disabled: currentPage <= 1 })}
        onClick={() => prevPage()}
      />
      {allowToFirst && <PageButton page={1} onClick={setPage} />}
      {allowToFirst && <Text color="lightest">...</Text>}
      {Array(prevPagesCount)
        .fill('')
        .map((_, index) => (
          <PageButton key={index} page={currentPage - prevPagesCount + index} onClick={setPage} />
        ))}
      <PageButton page={currentPage} />
      {Array(nextPagesCount)
        .fill('')
        .map((_, index) => (
          <PageButton key={index} page={currentPage + 1 + index} onClick={setPage} />
        ))}
      {allowToLast && <Text color="lightest">...</Text>}
      {allowToLast && <PageButton page={lastPage} onClick={setPage} />}
      <ArrowIosRight
        ml="0.5rem"
        size="1.25rem"
        color="hard"
        css={classes.arrowButton({ disabled: currentPage >= lastPage })}
        onClick={() => nextPage()}
      />
    </Flexbox>
  )
}

export default forwardRef(Pageswitch)
