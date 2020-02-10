import { ArchitectTools } from '@flow-ui/architect/types'
import * as Core from '@flow-ui/core'
import * as Icon from '@flow-ui/core/icons'
import { uuid } from '.'

export const Init = (component: string, params: any = {}, hidden = false) => ({
    component: Core[component] || Icon[component],
    hidden,
    create: () => ({
        id: uuid(),
        $: {},
        props: params.props || {},
        component,
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
        props: {
            label: 'Checkbox'
        }
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
        props: {
            label: 'Radio'
        }
    }),
    Range: Init('Range'),
    Select: Init('Select', {
        props: {
            label: 'Title',
            placeholder: 'Select an option',
            options: []
        }
    }),
    Switch: Init('Switch', {
        props: {
            label: 'Switch'
        }
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
        props: {
            content: '10'
        },
        children: [],
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
    /**
     * Generate iconst
     */
    ...(() => {
        let iconsCompoenetsTemp = {}
        for (const IconCompoenent in Icon) {
            iconsCompoenetsTemp[IconCompoenent] = Init(IconCompoenent, {
                label: IconCompoenent
            }, true)
        }
        return iconsCompoenetsTemp
    })()
}

export default components