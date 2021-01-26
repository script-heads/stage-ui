import { css } from '@emotion/react'
import React, { FC, useState, Fragment } from 'react'
import ViewportTypes from './types'
import createID from '@stage-ui/system/utils/createID'

export let addElement: (children: React.ReactElement, key?: string) => string
export let removeElement: (key: string) => void

const MountArea: FC<ViewportTypes.MountArea> = (props) => {

    const styles = css({
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        top: '2rem',
        right: '2rem',
        zIndex: 1000,
        '>*': {
            marginBottom: '1rem'
        }
    })

    const [elements, setElements] = useState<ViewportTypes.MountAreaElement[]>([])

    addElement = (children: React.ReactElement, key?: string) => {
        if (!key) {
            key = createID()
        }
        setElements(
            elements.concat({ key, children })
        )
        return key
    }

    removeElement = (key: string) => {
        setElements(
            elements.filter(el => el.key !== key)
        )
    }

    return (
        <div css={styles}>
            {elements.map(element => (
                <Fragment
                    key={element.key}
                    children={element.children}
                />
            ))}
        </div>
    )
}

export default MountArea