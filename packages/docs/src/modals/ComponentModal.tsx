import React, { useEffect, useState } from 'react'

import { Block, Flexbox, Modal, ScrollView, Spinner, Table, Text } from '@stage-ui/core'
import breakpointProp from '@stage-ui/system/props/breakpoint'
import { useNavigate, useLocation } from 'react-router-dom'

import core from '@/utils/core'
import Playground from '@/components/Playground'
import getDeclarations from '@/utils/declarations'
import { TranspileProps } from '@/components/Playground/Viewport'
import { Property } from '@/utils/typedoc'
import { monacoInit } from '@/utils/monacoInit'

let model: window.monaco.editor.ITextModel

function ComponentModal() {
  const navigate = useNavigate()
  const location = useLocation()
  const data = core.getPageByUrl(location.pathname)
  const [typedoc, setTypedoc] = useState<Record<string, Property[]> | null>(null)
  const [typescript, setTypescript] = useState<TranspileProps | null>(null)
  document.title = `StageUI${data ? ` — ${data.title}` : ''}`

  useEffect(() => {
    monacoInit().then(() => {
      if (!model) {
        window.monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
          target: window.monaco.languages.typescript.ScriptTarget.ES2016,
          allowNonTsExtensions: true,
          moduleResolution:
            window.monaco.languages.typescript.ModuleResolutionKind.NodeJs,
          module: window.monaco.languages.typescript.ModuleKind.CommonJS,
          noEmit: true,
          jsx: window.monaco.languages.typescript.JsxEmit.React,
          jsxFactory: 'React.createElement',
          esModuleInterop: true,
        })

        model = window.monaco.editor.createModel(
          '',
          'typescript',
          window.monaco.Uri.parse(`file:///main.tsx`),
        )

        window.monaco.editor.defineTheme('vs-dark-custom', {
          base: 'vs-dark',
          inherit: true,
          rules: [{ token: 'e3e4r5', background: '1f2937' }],
          colors: {
            'editor.background': '#1f2937',
          },
        })
      }

      getDeclarations().then((result) => {
        setTypedoc(result)
        import('typescript').then(({ transpile, JsxEmit, ModuleKind }) =>
          setTypescript({
            transpile,
            jsxEmit: JsxEmit.React,
            moduleKind: ModuleKind.ES2015,
          }),
        )
      })
    })
  }, [])

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
            minHeight: '25vh',
          },
          breakpointProp(['80vw', '90vw', '100vw'], t, (maxWidth) => ({ maxWidth })),
        ],
      })}
      didClose={() => navigate('/components')}
    >
      {(!typedoc || !typescript) && (
        <Flexbox h="100%" alignItems="center" justifyContent="center" column my="16rem">
          <Spinner count={6} size="2rem" mb="xl" color={(c) => c.onSurface.alpha(0.5)} />
          <Text color={(c) => c.onSurface.alpha(0.75)}>Loading playground</Text>
        </Flexbox>
      )}
      {typedoc && typescript && (
        <Block>
          {data.cases && (
            <Playground
              cases={data.cases}
              title={data.title}
              model={model}
              transpile={typescript.transpile}
              jsxEmit={typescript.jsxEmit}
              moduleKind={typescript.moduleKind}
            />
          )}
          {data.default && <data.default />}
          {typedoc[data.title] && (
            <ScrollView mt="l" xBarPosition="none">
              <Table
                data={typedoc[data.title]}
                columns={[
                  { key: 'name', title: 'Property' },
                  { key: 'value', title: 'Value' },
                  { key: 'description', title: 'Description' },
                ]}
              />
            </ScrollView>
          )}
        </Block>
      )}
    </Modal>
  )
}

export default ComponentModal
