import { ArchitectTools } from '@flow-ui/architect/types'
import * as Core from '@flow-ui/core'
import { uuid } from '.'

const Init = (component: string, props = {}) => ({
    component: Core[component],
    create: () => ({
        id: uuid(),
        $: {},
        props: {},
        component,
        ...props
    })
})

const components: ArchitectTools['components'] = {
    Divider: Init('Divider'),

    Spinner: Init('Spinner'),
    Header: Init('Header', {
        text: 'Header',
    }),
    Display: Init('Display', {
        text: 'Display',
    }),
    Paragraph: Init('Paragraph', {
        text: 'Paragraph',
    }),
    Text: Init('Text', {
        text: 'Text',
    }),
    Anchor: Init('Anchor', {
        text: 'Anchor',
    }),
    /**
     * Control
     */
    Button: Init('Button', {
        text: 'Button',
    }),
    Checkbox: Init('Checkbox', {
        label: 'Checkbox'
    }),
    // DatePicker: Init('DatePicker'),
    Menu: Init('Menu', {
        props: {
            items: [
                {content: 'Item 1',value:'0'},
                {content: 'Item 2',value:'2'},
                {content: 'Item 3',value:'3'},
            ]
        }
    }),
    Radio: Init('Radio', {
        label: 'Radio'
    }),
    Range: Init('Range'),
    Select: Init('Select'),
    Switch: Init('Switch', {
        label: 'Switch'
    }),
    TextField: Init('TextField'),
    /**
     * Data
     */
    // Meter: Init('Meter', {
    //     percent: 45
    // }),
    Table: Init('Table'),
    /**
     * Layout
     */
    Badge: Init('Badge', {
        children: [],
        props: {
            content: '10'
        }
    }),
    Block: Init('Block', {
        children: []
    }),
    // Drop: Init('Drop', {
    //     children: []
    // }),
    Flexbox: Init('Flexbox', {
        children: []
    }),
    Grid: Init('Grid', {
        children: []
    }),
    Tree: Init('Tree', {
        label: 'Tree',
        children: []
    }),
}

export default components