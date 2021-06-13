import { ArchitectPage, ArchitectItem } from './types'
import { uuid } from '.'

const HelloWorldForm: ArchitectItem[] = [
  {
    $: {},
    id: uuid(),
    component: 'Block',
    props: {
      decoration: 'surface',
      pt: 's',
      pl: 'm',
      pr: 'm',
      pb: 'm',
    },
    children: [
      {
        $: {},
        id: uuid(),
        component: 'Header',
        text: 'Hello world',
        props: {
          mt: 'xs',
          mb: 's',
        },
      },
      {
        $: {},
        id: uuid(),
        name: 'Form fields',
        component: 'Block',
        text: '',
        props: {
          pb: 'm',
        },
        children: [
          {
            $: {},
            id: uuid(),
            component: 'TextField',
            text: '',
            props: {
              label: 'First name',
              mb: 'm',
            },
          },
          {
            $: {},
            id: uuid(),
            component: 'TextField',
            text: '',
            props: {
              label: 'Last name',
              mb: 'm',
            },
          },
          {
            $: {},
            id: uuid(),
            component: 'TextField',
            text: '',
            props: {
              label: 'Comment',
              mb: 'm',
              multiline: true,
            },
          },
        ],
      },
      {
        $: {},
        id: uuid(),
        component: 'Divider',
        text: '',
        props: {
          mb: 'm',
        },
      },
      {
        $: {},
        id: uuid(),
        component: 'Flexbox',
        name: 'Controls',
        text: '',
        props: {
          justifyContent: 'flex-end',
          alignItems: 'center',
        },
        children: [
          {
            $: {},
            id: uuid(),
            component: 'Button',
            text: '',
            props: {
              decoration: 'plain',
            },
            children: [
              {
                $: {},
                id: uuid(),
                component: 'Block',
                text: 'Help',
                props: {},
              },
            ],
          },
          {
            $: {},
            id: uuid(),
            component: 'Block',
            name: 'Spacer',
            text: '',
            props: {
              flex: 1,
            },
            children: [],
          },
          {
            $: {},
            id: uuid(),
            component: 'Button',
            text: 'Cancel',
            props: {
              decoration: 'outline',
            },
            children: [],
          },
          {
            $: {},
            id: uuid(),
            component: 'Button',
            text: 'Submit',
            props: {
              ml: 'xs',
              type: 'submit',
            },
            children: [],
          },
        ],
      },
    ],
  },
]

const pages: ArchitectPage[] = [
  {
    id: uuid(),
    name: 'Hello world form',
    items: HelloWorldForm,
  },
]

export default pages[0].items
