import { ArchitectTools } from '@flow-ui/architect/types'
import * as Core from '@flow-ui/core'
import { uuid } from '.'

const Init = (component: string, text = '', hasChilds = false) => ({
    component: Core[component],
    create: () => ({
        id: uuid(),
        $: {},
        props: {},
        component,
        text,
        children: hasChilds ? [] : undefined
    })
})

const components: ArchitectTools['components'] = {
    Divider: Init('Divider'),
    Icon: Init('Icon'),
    Spinner: Init('Spinner'),
    Header: Init('Header', 'Header'),
    Display: Init('Display', 'Display'),
    Paragraph: Init('Paragraph', 'Paragraph'),
    Text: Init('Text', 'Text'),
    Anchor: Init('Anchor', 'Anchor'),
    /**
     * Control
     */
    Button: Init('Button', 'Button'),
    Checkbox: Init('Checkbox'),
    DatePicker: Init('DatePicker'),
    Menu: Init('Menu'),
    Radio: Init('Radio'),
    Range: Init('Range'),
    Select: Init('Select'),
    Switch: Init('Switch'),
    TextField: Init('TextField'),
    /**
     * Data
     */
    Meter: Init('Meter'),
    Table: Init('Table'),
    /**
     * Layout
     */
    Badge: Init('Badge', '', true),
    Block: Init('Block', '', true),
    Drop: Init('Drop', '', true),
    Flexbox: Init('Flexbox', '', true),
    Grid: Init('Grid', '', true),
    Tree: Init('Tree', '', true),
}

export default components