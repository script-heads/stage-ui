import {
  Badge,
  Block,
  Button,
  Flexbox,
  Popover,
  Spinner,
  TextField,
  Text,
  useTheme,
  Table,
  Meter,
  notify,
  dialog,
} from '@stage-ui/core'
import { CustomPageProps } from '@stage-ui/docs/utils/core'
import React, { useEffect } from 'react'
import { Cube } from '@stage-ui/icons'
import Components from './Components'
import Features from './Feauters'
import Footer from './Footer'
import Header from './Header'

export default (props: CustomPageProps) => {
  const { primary } = useTheme().color

  useEffect(() => {
    const labels = document.querySelectorAll('#component-label')
    const scrollHandler = () =>
      labels.forEach((label) => {
        const labelTop = label.getBoundingClientRect().top
        if (labelTop < window.innerHeight && labelTop > 0) {
          label.style.color = primary
            .darken(0.8 * (labelTop / window.innerHeight))
            .rgb()
            .string()
        }
      })

    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  return (
    <Flexbox backgroundColor={(c) => c.surface} justifyContent="center">
      <Block w="62rem" flexShrink={1} px={['2rem', '2rem', '1rem']} css={{ overflow: 'hidden' }}>
        <Header {...props} />
        <Features />
        <Components
          title="Layout"
          graphic={
            <Flexbox column alignItems="center" w="11rem">
              <Badge content="Badge" backgroundColor="error">
                <Flexbox
                  justifyContent="center"
                  alignItems="center"
                  decoration="surface"
                  w="10rem"
                  h="5rem"
                >
                  Flexbox
                </Flexbox>
              </Badge>
              <Popover mt="0.5rem">Popover</Popover>
            </Flexbox>
          }
          subtitle="Simplifies markup with special containers and their shorthands."
          components={[
            'Badge',
            'Block',
            'Drop',
            'Flexbox',
            'Grid',
            'Modal',
            'Popover',
            'Split',
            'ScrollView',
            'Tree',
          ]}
        />
        <Components
          title="Content"
          graphic={
            <Flexbox alignItems="center">
              <Spinner size="2rem" />
              <Text ml="1rem" color="light">
                Spinner
              </Text>
            </Flexbox>
          }
          subtitle="Everything to fill the page with."
          components={['Divider', 'Spinner', 'Header', 'Text', 'Paragraph', 'Link']}
        />
        <Components
          title="Control"
          graphic={
            <Flexbox alignItems="flex-end" w="30rem">
              <TextField
                mr="1rem"
                labelType="outside"
                shape="rounded"
                clearable
                leftChild={<Cube />}
                label="TextField"
                placeholder="Placeholder"
              />
              <Button mr="1rem">Button</Button>
            </Flexbox>
          }
          subtitle="Components for user interactions."
          components={[
            'Button',
            'Calendar',
            'Checkbox',
            'DatePicker',
            'Menu',
            'Pageswitch',
            'Radio',
            'Range',
            'Select',
            'Switch',
            'TextField',
          ]}
        />
        <Components
          title="Data"
          graphic={
            <Block w="20rem">
              <Table
                columns={[
                  { title: 'Table', key: 'name', sort: 'ASC' },
                  { title: 'Meter', key: 'meter' },
                ]}
                data={[
                  {
                    name: <Flexbox alignItems="center">Row</Flexbox>,
                    meter: (
                      <Flexbox alignItems="center" flex={1}>
                        <Meter borderWidth={0} flex={1}>
                          <Meter.Thumb loading value={100} color={(c) => c.backgroundVariant} />
                          <Meter.Thumb m="xs" value={35} color="primary" />
                        </Meter>
                      </Flexbox>
                    ),
                  },
                ]}
              />
            </Block>
          }
          subtitle="Visual presentation of information."
          components={['Table', 'Meter']}
        />
        <Components
          title="Utils"
          graphic={
            <Flexbox>
              <Button
                mr="0.5rem"
                size="s"
                decoration="outline"
                onClick={() => dialog({ title: 'Title', message: 'Message' })}
              >
                Dialog
              </Button>
              <Button
                mr="0.5rem"
                size="s"
                decoration="outline"
                onClick={() => notify({ title: 'Title', message: 'Message', timeout: 2000 })}
              >
                Notify
              </Button>
            </Flexbox>
          }
          subtitle="Features to make development easier."
          components={['Dialog', 'Notify']}
        />
        <Components
          title="Lab"
          subtitle="Special place to TestFlight components."
          components={['Chart']}
        />
        <Footer />
      </Block>
    </Flexbox>
  )
}
