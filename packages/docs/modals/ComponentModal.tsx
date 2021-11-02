import { Block, Modal, ScrollView, Table } from '@stage-ui/core'
import breakpointProp from '@stage-ui/system/props/breakpoint'
import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import core, { PageType } from '../utils/core'
import Editor from '../components/CodeEditor'
import { get } from '../utils/typedoc'

const componentTypes = get()

const ComponentModal = () => {
  const history = useHistory()
  const location = useLocation()
  const [data, setData] = useState<PageType | null>(null)

  useEffect(() => {
    const nextData = core.getPageByUrl(location.pathname)
    document.title = `StageUI${nextData ? ` — ${nextData.title}` : ''}`
    setData(nextData)
  }, [location.pathname])

  if (!data) return null

  return (
    <Modal
      hideHeader
      opened
      decoration="panel"
      overrides={(t) => ({
        window: () => [
          {
            width: '100%',
            padding: '1rem 1.75rem',
          },
          breakpointProp(['80vw', '90vw', '100vw'], t, (maxWidth) => ({ maxWidth })),
        ],
      })}
      didClose={() => history.push('/components')}
    >
      <Block>
        {data.cases && <Editor cases={data.cases} title={data.title} />}
        {data.default && <data.default />}
        {componentTypes[data.title] && (
          <ScrollView mt="l">
            <Table
              data={componentTypes[data.title]}
              columns={[
                { key: 'name', title: 'Property' },
                { key: 'value', title: 'Value' },
                { key: 'description', title: 'Description' },
              ]}
            />
          </ScrollView>
        )}
      </Block>
    </Modal>
  )
}

export default ComponentModal
