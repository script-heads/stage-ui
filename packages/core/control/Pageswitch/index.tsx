import { Flexbox, Text } from '@stage-ui/core'
import { ArrowIosLeft, ArrowIosRight } from '@stage-ui/icons'
import { useSystem } from '@stage-ui/system'
import { Classes } from '@stage-ui/system/hooks/useSystem'
import React, { forwardRef, ForwardRefRenderFunction, useEffect, useState } from 'react'
import createClasses from './styles'
import Types from './types'

const PAGE_BUTTON_MAX = 1

type PageButtonProps = {
  onClick?: (page: number) => void
  page: number
  classes: Classes<Types.Classes>
}

const PageButton: React.FC<PageButtonProps> = (props) => {
  const { page, classes, onClick } = props
  const current = !onClick

  return (
    <Flexbox
      css={classes.pageButton({ current })}
      onClick={current ? undefined : () => onClick?.(page)}
    >
      <Text css={classes.pageButtonText({ current })}>{page}</Text>
    </Flexbox>
  )
}

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
      ref={ref}
      attributes={attributes}
      css={[classes.container, styleProps.all]}
      {...events}
    >
      <ArrowIosLeft
        mr="0.5rem"
        size="1.25rem"
        css={classes.arrowButton({ disabled: currentPage <= 1 })}
        onClick={() => prevPage()}
      />
      {allowToFirst && <PageButton page={1} classes={classes} onClick={setPage} />}
      {allowToFirst && <Text css={classes.separator}>...</Text>}
      {prevPagesCount >= 0 &&
        Array(prevPagesCount)
          .fill('')
          .map((_, index) => (
            <PageButton
              key={index}
              page={currentPage - prevPagesCount + index}
              classes={classes}
              onClick={setPage}
            />
          ))}
      <PageButton page={currentPage} classes={classes} />
      {Array(nextPagesCount)
        .fill('')
        .map((_, index) => (
          <PageButton
            key={index}
            page={currentPage + 1 + index}
            classes={classes}
            onClick={setPage}
          />
        ))}
      {allowToLast && <Text css={classes.separator}>...</Text>}
      {allowToLast && <PageButton page={lastPage} classes={classes} onClick={setPage} />}
      <ArrowIosRight
        ml="0.5rem"
        size="1.25rem"
        css={classes.arrowButton({ disabled: currentPage >= lastPage })}
        onClick={() => nextPage()}
      />
    </Flexbox>
  )
}

export default forwardRef(Pageswitch)
