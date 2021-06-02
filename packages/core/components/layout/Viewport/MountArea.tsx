/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import createID from '@stage-ui/system/utils/createID'
import React, { FC, Fragment, useState } from 'react'
import ViewportTypes from './types'

export let addElement: (children: React.ReactElement, key?: string) => string
export let removeElement: (key: string) => void

const MountArea: FC<ViewportTypes.MountArea> = (props) => {
  const styles = css({
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    top: '2rem',
    right: '2rem',

    zIndex: 1000,
    '>*': {
      marginBottom: '1rem',
    },
  })

  const [elements, setElements] = useState<ViewportTypes.MountAreaElement[]>([])

  addElement = (children: React.ReactElement, key?: string) => {
    if (!key) {
      key = createID()
    }
    setElements(elements.concat({ key, children }))
    return key
  }

  removeElement = (key: string) => {
    setElements(elements.filter((el) => el.key !== key))
  }

  return (
    <div css={styles}>
      {elements.map((element) => (
        <Fragment key={element.key} children={element.children} />
      ))}
    </div>
  )
}

export default MountArea
