import {
  Block,
  Flexbox,
  Grid,
  notify,
  Split,
  Button,
  useTheme,
  useBreakpoints,
  Header,
} from '@stage-ui/core'
import { PageType } from '@stage-ui/docs/utils/core'
import monaco from '@stage-ui/docs/utils/monaco'
import { Copy, Grid as GridIcon } from '@stage-ui/icons'
import createID from '@stage-ui/system/utils/createID'
import Color from 'color'
import React, { useEffect, useState } from 'react'
import ErrorBoundary from './ErrorBoundary'
import Preview from './Preview'

interface EditorProps {
  cases: Exclude<PageType['cases'], undefined>
  title: string
}

const MonacoEditor: React.FC<{ setCode: (code: string) => void }> = (props) => {
  useEffect(() => {
    /**
     * Creates monaco editor
     */
    monaco.create({
      id: 'docs-code-editor',
      code: '',
      setCode: props.setCode,
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

const CodeEditor = (props: EditorProps) => {
  const { cases, title } = props
  const [currentCase, setCurrentCase] = useState<number>(0)
  const [code, setEditorCode] = useState<string>(cases[0].code)
  const [grid, setGrid] = useState(!(localStorage.getItem('case_grid') === 'false'))
  const direction = useBreakpoints<'row' | 'column'>(['row', 'row', 'row', 'column'])
  const theme = useTheme()

  const setCode = (newCode: string) => {
    setEditorCode('')
    setTimeout(() => setEditorCode(newCode))
  }

  useEffect(() => {
    monaco.setTheme(theme.color.background.contrast(Color('#fff')) > 3 ? 'vs-dark' : 'vs')
  }, [theme])

  useEffect(() => {
    setCurrentCase(0)
    monaco.setCode(cases[0].code)
  }, [cases])

  useEffect(() => {
    monaco.setCode(cases[currentCase].code)
  }, [currentCase])

  return (
    <Block w="100%">
      <Grid
        mb="m"
        rowGap="1rem"
        columnGap="1rem"
        templateColumns={[
          'max-content 1fr repeat(2, max-content)',
          'max-content 1fr repeat(2, max-content)',
          '1fr repeat(2, max-content)',
        ]}
        templateAreas={[
          `"header menu background copy"`,
          `"header menu background copy"`,
          `"header background copy" "menu menu menu"`,
        ]}
        alignItems="center"
      >
        <Header gridArea="header" size="l" m={0}>
          {title}
        </Header>
        <Flexbox gridArea="menu" alignItems="center" justifyContent="center">
          <Flexbox wrap="wrap">
            {cases.map((c, caseIndex) => (
              <Button
                mr="s"
                px="m"
                size="s"
                shape="round"
                key={createID()}
                decoration={caseIndex === currentCase ? 'filled' : 'text'}
                onClick={() => setCurrentCase(caseIndex)}
                css={{ cursor: 'pointer' }}
              >
                {c.label}
              </Button>
            ))}
          </Flexbox>
        </Flexbox>
        <GridIcon
          gridArea="background"
          size="1.5rem"
          color={(c) => (grid ? c.primary : c.onSurface)}
          onClick={() => {
            localStorage.setItem('case_grid', !grid ? 'true' : 'false')
            setGrid(!grid)
          }}
          mx="0.5rem"
        />
        <Copy
          gridArea="copy"
          ml="0.5rem"
          size="1.5rem"
          color={(c) => c.onSurface}
          onClick={() => {
            monaco.copyToClipboard()
            notify({
              title: 'UI Editor',
              message: 'Code copied to clipboard!',
              timeout: 3000,
            })
          }}
        />
      </Grid>
      <Block
        h="28rem"
        shadow="xs"
        borderRadius="m"
        style={{
          overflow: 'hidden',
          transform: 'translateZ(0)',
        }}
      >
        <Split direction={direction}>
          <MonacoEditor setCode={setCode} key="editor" />
          <Block h="calc(100% - 0.25rem)" flex={1} overflow="hidden" key="preview" >
            <ErrorBoundary>
              {code && <Preview theme={theme} code={code} grid={grid} />}
            </ErrorBoundary>
          </Block>
        </Split>
      </Block>
    </Block>
  )
}
export default CodeEditor
