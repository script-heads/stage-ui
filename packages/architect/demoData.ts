import { ArchitectItem } from '@flow-ui/architect/types'

function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
}
const items: ArchitectItem[] = [
    {
        $:{},
        id: uuid(),
        component: 'Block',
        name: 'Wrapper',
        props: {
            surface: 'major',
            p: '1rem',
            w: '20rem',
        },
        children: [
            {
                $:{},
                id: uuid(),
                component: 'Header',
                text: 'Basic form',
                props: {
                    mb: '0.5rem',
                }
            },
            {
                $:{},
                id: uuid(),
                component: 'Flexbox',
                name: 'Credential fields',
                props: {
                    column: true,
                },
                children: [
                    {
                        $:{},
                        id: uuid(),
                        component: 'TextField',
                        props: {
                            w: '100%',
                            mb: '0.5rem',
                            placeholder: 'Login'
                        }
                    },
                    {
                        $:{},
                        id: uuid(),
                        component: 'TextField',
                        props: {
                            w: '100%',
                            mb: '0.5rem',
                            placeholder: 'Passowrd'
                        }
                    },
                ],
            },
            {
                $:{},
                id: uuid(),
                component: 'Flexbox',
                name: 'Control buttons',
                props: {
                    mt: '0.75rem',
                },
                children: [
                    {
                        $:{},
                        id: uuid(),
                        component: 'Button',
                        text: 'Sign Up',
                        props: {
                            flex:1,
                            mr: '0.25rem',
                            decoration: 'outline',
                        }
                    },
                    {
                        $:{},
                        id: uuid(),
                        component: 'Button',
                        text: 'Log In',
                        props: [{
                            flex:1,
                            ml: '0.25rem',
                        }]
                    }
                ],
            },
            {
                $:{},
                id: uuid(),
                component: 'Flexbox',
                name: 'Footer',
                props: {
                },
                children: [
                ],
            }
        ]
    }
]
export default items