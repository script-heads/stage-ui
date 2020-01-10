import { ConstructorStructure } from '@flow-ui/constructor/types'
import uuidv4 from '@flow-ui/constructor/src/utils/uuidv4'

let demoStructure: ConstructorStructure[] = [
    {
        $id: uuidv4(),
        $: 'Block',
        surface: 'major',
        p: '1rem',
        w: '20rem',
        $children: [
            {
                $id: uuidv4(),
                $: 'Header',
                children: 'Basic form',
                mb: '0.5rem',
            },
            {
                $id: uuidv4(),
                $: 'Flexbox',
                column: true,
                $children: [
                    {
                        $: 'TextField',
                        $id: uuidv4(),
                        w: '100%',
                        mb: '0.5rem',
                        placeholder: 'Login'
                    },
                    {
                        $: 'TextField',
                        $id: uuidv4(),
                        w: '100%',
                        mb: '0.5rem',
                        placeholder: 'Passowrd'
                    },
                ],
            },
            {
                $id: uuidv4(),
                $: 'Flexbox',
                mt: '0.75rem',
                $children: [
                    {
                        $: 'Button',
                        $id: uuidv4(),
                        flex:1,
                        mr: '0.25rem',
                        decoration: 'outline',
                        children: 'Sign Up'
                    },
                    {
                        $: 'Button',
                        $id: uuidv4(),
                        flex:1,
                        ml: '0.25rem',
                        children: 'Log In'
                    }
                ],
            }
        ]
    }
]
export default demoStructure