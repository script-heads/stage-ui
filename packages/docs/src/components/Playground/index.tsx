import React, { useEffect, useRef, useState } from 'react'

import { Block, Button, Flexbox, Grid, notify, Paragraph, useTheme } from '@stage-ui/core'
import { Copy, Grid as GridIcon } from '@stage-ui/icons'
import { createID } from '@stage-ui/system'
import color from 'color'

import ErrorBoundary from './ErrorBoundary'
import Viewport, { TranspileProps } from './Viewport'

import { PageType } from '@/utils/core'

interface EditorProps extends TranspileProps {
  cases: Exclude<PageType['cases'], undefined>
  title: string
  glyph?: React.FC<React.SVGProps<SVGElement>>
  model: monaco.editor.ITextModel
}

let editor: monaco.editor.IStandaloneCodeEditor | null = null

function Playground({
  cases,
  title,
  glyph: Glyph,
  jsxEmit,
  moduleKind,
  transpile,
  model,
}: EditorProps) {
  const [currentCase, setCurrentCase] = useState<number>(0)
  const [code, setEditorCode] = useState<string>(cases[0].code)
  const [grid, setGrid] = useState(!(localStorage.getItem('case_grid') === 'false'))
  const monacoRootRef = useRef<HTMLDivElement>(null)
  const theme = useTheme()

  useEffect(() => {
    if (monacoRootRef.current) {
      editor = monaco.editor.create(monacoRootRef.current, {
        model,
        minimap: {
          enabled: false,
        },
        automaticLayout: true,
        fontSize: 14,
        padding: {
          top: 16,
        },
        folding: false,
        lineNumbers: 'off',
        overviewRulerBorder: false,
        fontWeight: '600',
        scrollBeyondLastLine: false,
        scrollbar: {
          alwaysConsumeMouseWheel: false,
        },
        codeLens: false,
        cursorWidth: 4,
      })
    }
    editor?.onDidChangeModelContent(() => setEditorCode(editor?.getValue() || ''))
    return () => {
      editor?.dispose()
    }
  }, [])

  useEffect(() => {
    monaco.editor?.setTheme(
      theme.color.background.contrast(color('#fff')) > 3 ? 'vs-dark-custom' : 'vs',
    )
  }, [theme])

  useEffect(() => {
    setCurrentCase(0)
    editor?.setValue(cases[0].code)
  }, [cases])

  useEffect(() => {
    editor?.setValue(cases[currentCase].code)
  }, [currentCase])

  function copyToClipboard() {
    const content = editor?.getValue() || ''
    navigator?.clipboard.writeText(content).then(
      () => {
        notify({
          title: 'Playground',
          message: 'Code copied to clipboard',
          timeout: 3000,
        })
      },
      () => {
        notify({
          title: 'Playground',
          message: 'Failed to copy',
          timeout: 3000,
        })
      },
    )
  }

  return (
    <Block w="100%">
      <Grid
        mb="m"
        rowGap="1rem"
        columnGap="1rem"
        templateColumns={[
          '1fr max-content repeat(2, max-content)',
          '1fr max-content repeat(2, max-content)',
          '1fr repeat(2, max-content)',
        ]}
        templateAreas={[
          `"menu header background copy"`,
          `"menu header background copy"`,
          `"header background copy" "menu menu menu"`,
        ]}
        alignItems="center"
      >
        <Flexbox gridArea="menu" alignItems="center">
          <Flexbox wrap="wrap">
            {cases.map((c, caseIndex) => (
              <Button
                mr="s"
                px="m"
                size="s"
                color="gray600"
                key={createID()}
                decoration={caseIndex === currentCase ? 'filled' : 'text'}
                onClick={() => setCurrentCase(caseIndex)}
                css={{ fontWeight: 600 }}
              >
                {c.label}
              </Button>
            ))}
          </Flexbox>
        </Flexbox>
        <Paragraph
          size="s"
          weight={600}
          color={(c) => c.onSurface.alpha(0.2)}
          gridArea="header"
        >
          {title}
        </Paragraph>

        <GridIcon
          gridArea="background"
          size="1.5rem"
          color={(c) => (grid ? c.primary : c.onSurface)}
          onClick={() => {
            localStorage.setItem('case_grid', !grid ? 'true' : 'false')
            setGrid(!grid)
          }}
          ml="0.5rem"
        />
        <Copy
          gridArea="copy"
          size="1.5rem"
          color={(c) => c.onSurface}
          onClick={copyToClipboard}
        />
      </Grid>
      <Block h="28rem" shadow="xs" borderRadius="m" backgroundColor="surface">
        <Flexbox h="100%" direction={['row', 'row', 'row', 'column']}>
          <Block ref={monacoRootRef} flex={1} h="100%" pl="0.5rem" />
          <ErrorBoundary code={code}>
            <Viewport
              theme={theme}
              code={code}
              grid={grid}
              jsxEmit={jsxEmit}
              moduleKind={moduleKind}
              transpile={transpile}
            />
          </ErrorBoundary>
        </Flexbox>
      </Block>
    </Block>
  )
}

export default Playground
