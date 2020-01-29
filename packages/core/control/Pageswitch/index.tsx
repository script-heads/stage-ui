import { useComponent } from '@flow-ui/whale'
import React, { forwardRef, RefForwardingComponent, useState, useEffect } from 'react'
import styles from './styles'
import Types from './types'
import { Text, Icon, Flexbox } from '../..'

let repeatValue = 1
let mouseDown = false

const Pageswitch: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {

    const { length, options, value } = props
    const { pageSize = 20 } = options || {}
    const lastPage = Math.ceil(length / pageSize)
    const { cs, attributes, events } = useComponent('Pageswitch', { props, styles })

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
            repeatValue = 1
            // mouseDown = true
            // repeatSetValue()
            setPageValue()
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            repeatValue = -1
            // mouseDown = true
            // repeatSetValue()
            setPageValue()
        }
    }

    const setPageValue = () => {
        setPage(currentPage + repeatValue)
    }

    // const repeatSetValue = () => {
    //     setTimeout(() => {
    //         if (mouseDown) {
    //             setPageValue()
    //             repeatSetValue()
    //         }
    //     }, 100)
    // }

    return (
        <Flexbox
            {...attributes}
            {...events.all}
            ref={ref}
            css={cs.container}
            alignItems="center"
        >
            <Icon
                mr="0.5rem"
                size="1rem"
                css={cs.arrowButton({
                    disabled: currentPage <= 1
                })}
                type={t => t.outline.arrowIosBack}
                onMouseDown={() => prevPage()}
                // onMouseUp={() => mouseDown = false}

            />
            <Text size="s">{currentPage}/{lastPage}</Text>
            <Icon
                ml="0.5rem"
                size="1rem"
                css={cs.arrowButton({
                    disabled: currentPage >= lastPage
                })}
                type={t => t.outline.arrowIosForward}
                onMouseDown={() => nextPage()}
                // onMouseUp={() => mouseDown = false}
            />
        </Flexbox>
    )
}

export default forwardRef(Pageswitch)