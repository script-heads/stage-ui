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
            }
        ]
    }
]
export default items