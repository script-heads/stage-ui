import { Block, Divider, Flexbox, notify, Split, Text, Button, useTheme } from '@stage-ui/core'
import { PageType } from '@stage-ui/docs/utils/core'
import monaco from '@stage-ui/docs/utils/monaco'
import { Collapse, Copy, Expand, Grid, ArrowLeft } from '@stage-ui/icons'
import Color from 'color'
import React, { useEffect, useState } from 'react'
import ErrorBoundary from './ErrorBoundary'
import Preview from './Preview'

interface EditorProps {
  cases: Exclude<PageType['cases'], undefined>
}

const MonacoEditor = React.memo(
  (props: { setCode: (code: string) => void }) => {
    useEffect(() => {
      /**
       * Creates monaco editor
       */
      monaco.create({
        id: 'docs-code-editor',
        code: '',
        setCode: props.setCode,
      })
    }, [])
    return (
      <Block
        id="docs-code-editor"
        h="100%"
        w="100%"
        mt="-1rem"
        mr="1rem"
        css={{
          boxShadow: 'none !important',
        }}
      />
    )
  },
  () => true,
)

const Editor = (props: EditorProps) => {
  const { cases } = props
  const [currentCase, setCurrentCase] = useState<number>(0)
  const [code, setEditorCode] = useState<string>(cases[0].code)
  const [grid, setGrid] = useState(!(localStorage.getItem('case_grid') === 'false'))
  const isMobile = () => document.body.offsetWidth < window.breakpoints[1]
  let directionVar: 'row' | 'column' = isMobile() ? 'column' : 'row'
  const theme = useTheme()
  const [direction, setDirection] = useState(directionVar)

  const setCode = (newCode: string) => {
    setEditorCode('')
    setTimeout(() => setEditorCode(newCode))
  }

  useEffect(() => {
    /**
     * Handle mobile
     */
    const handleDirection = () => {
      const t = isMobile()

      if (!t && directionVar !== 'row') {
        directionVar = 'row'
        setDirection('row')
      }
      if (t && directionVar !== 'column') {
        directionVar = 'column'
        setDirection('column')
      }
    }

    window.addEventListener('resize', handleDirection)

    return () => {
      window.removeEventListener('resize', handleDirection)
      monaco.remove()
    }
  }, [])

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
      <Flexbox mb="m" alignItems="center">
        {cases.map((c, caseIndex) => (
          <Button
            p="xs m"
            mr="s"
            key={caseIndex}
            decoration={caseIndex === currentCase ? 'filled' : 'text'}
            onClick={() => setCurrentCase(caseIndex)}
            css={{ cursor: 'pointer' }}
          >
            {c.label}
          </Button>
        ))}
        <Block flex={1} />
        <Grid
          size="1.5rem"
          color={(c) => (grid ? c.primary : c.onSurface)}
          onClick={() => {
            localStorage.setItem('case_grid', !grid ? 'true' : 'false')
            setGrid(!grid)
          }}
          mx="0.5rem"
        />
        <Copy
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
      </Flexbox>
      <Block
        h="28rem"
        shadow="xs"
        borderRadius="m"
        css={[
          {
            overflow: 'hidden',
          },
        ]}
      >
        <Split direction={direction}>
          <MonacoEditor setCode={setCode} />
          <Block h="calc(100% - 0.25rem)" flex={1} overflow="hidden">
            <ErrorBoundary>
              {code && <Preview theme={theme} code={code} grid={grid} />}
            </ErrorBoundary>
          </Block>
        </Split>
      </Block>
    </Block>
  )
}
export default Editor
// export default React.memo(Editor, () => {
//     return true
// })
