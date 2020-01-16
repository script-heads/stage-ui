import { ArchitectItem } from '@flow-ui/architect/types'
import { uuid } from '.'

const items: ArchitectItem[] = [
    {
        $:{},
        id: uuid(),
        component: 'Block',
        props: {
            surface: 'major',
            pt: '0.5rem',
            pl: '1rem',
            pr: '1rem',
            pb: '1rem',
        },
        children: [
            {
                $:{},
                id: uuid(),
                component: 'Header',
                text: 'New ticket',
                props: {
                    pb: '1rem',
                },
            },
            {
                $:{},
                id: uuid(),
                name: 'Form fields',
                component: 'Block',
                text: '',
                props: {
                    pb: '1rem',
                },
                children: [
                    {
                        $:{},
                        id: uuid(),
                        component: 'TextField',
                        text: '',
                        props: {
                            label: 'First name',
                            mb: '1rem',
                        }
                    },
                    {
                        $:{},
                        id: uuid(),
                        component: 'TextField',
                        text: '',
                        props: {
                            label: 'Last name',
                            mb: '1rem',
                        }
                    },
                    {
                        $:{},
                        id: uuid(),
                        component: 'TextField',
                        text: '',
                        props: {
                            label: 'Comment',
                            mb: '1rem',
                            multiline: true
                        }
                    },
                ]
            },
            {
                $:{},
                id: uuid(),
                component: 'Divider',
                text: '',
                props: {
                    mt: '1rem',
                    mb: '1rem',
                }
            },
            {
                $:{},
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
                        $:{},
                        id: uuid(),
                        component: 'Checkbox',
                        text: '',
                        props: {
                            label: 'I agree',
                        }
                    },
                    {
                        $:{},
                        id: uuid(),
                        component: 'Block',
                        text: '',
                        props: {
                            flex: 1,
                        },
                        children: []
                    },
                    {
                        $:{},
                        id: uuid(),
                        component: 'Button',
                        text: 'Cancel',
                        props: {
                            decoration: 'outline'
                        }
                    },
                    {
                        $:{},
                        id: uuid(),
                        component: 'Button',
                        text: 'Submit',
                        props: {
                            ml: '0.5rem',
                            type: 'submit'
                        }
                    }
                ]
            }
        ]
    }
]
export default items