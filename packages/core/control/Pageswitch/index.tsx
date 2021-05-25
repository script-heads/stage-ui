/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Flexbox, Text } from '@stage-ui/core'
import { ArrowIosBack, ArrowIosForward, ArrowheadLeft, ArrowheadRight } from '@stage-ui/core/icons'
import { useComponent } from '@stage-ui/system'
import { forwardRef, ForwardRefRenderFunction, useEffect, useState } from 'react'
import styles from './styles'
import Types from './types'

const Pageswitch: ForwardRefRenderFunction<HTMLDivElement, Types.Props> = (props, ref) => {

    const { length, pageSize = 20, value } = props
    const lastPage = Math.ceil(length / pageSize)
    const { cs, attributes, events } = useComponent('Pageswitch', { 
        props, 
        styles
    })

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

    return (
        <Flexbox
            {...attributes}
            {...events.all}
            onChange={undefined}
            ref={ref}
            css={cs.container}
            alignItems="center"
        >
            <ArrowheadLeft
                mr="0.5rem"
                size="1rem"
                css={cs.arrowButton({
                    disabled: currentPage <= 1
                })}
                onClick={() => setPage(1)}
            />
            <ArrowIosBack
                mr="0.5rem"
                size="1rem"
                css={cs.arrowButton({
                    disabled: currentPage <= 1
                })}
                onClick={() => prevPage()}
            />
            <Text size="s">{currentPage}/{lastPage}</Text>
            <ArrowIosForward
                ml="0.5rem"
                size="1rem"
                css={cs.arrowButton({
                    disabled: currentPage >= lastPage
                })}
                onClick={() => nextPage()}
            />
            <ArrowheadRight
                mr="0.5rem"
                size="1rem"
                css={cs.arrowButton({
                    disabled: currentPage >= lastPage
                })}
                onClick={() => setPage(lastPage)}
            />
        </Flexbox>
    )
}

export default forwardRef(Pageswitch)