import React, { useEffect } from 'react'

import { Block } from '@stage-ui/core'

import monaco from '@/utils/monaco'

function MonacoEditor({ setCode }: { setCode: (code: string) => void }) {
  useEffect(() => {
    monaco.create({
      id: 'docs-code-editor',
      code: '',
      setCode,
    })
    return () => {
      monaco.remove()
    }
  }, [])
  return (
    <Block
      id="docs-code-editor"
      h="100%"
      w="100%"
      mt="-0.75rem"
      mr="1rem"
      css={{
        boxShadow: 'none !important',
      }}
    />
  )
}

export default MonacoEditor
