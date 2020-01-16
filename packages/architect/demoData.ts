import { ArchitectItem } from '@flow-ui/architect/types'
import { uuid } from '.'

const items: ArchitectItem[] = [
    {
        $:{},
        id: uuid(),
        component: 'Block',
        props: {
            surface: 'major',
            p: '1rem',
        },
        children: [
            {
                $:{},
                id: uuid(),
                component: 'Button',
                text: 'Say Hi!',
                props: []
            }
        ]
    }
]
export default items