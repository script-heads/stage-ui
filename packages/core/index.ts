/**
 * Content
 */
export { default as Divider } from './content/Divider'
export { default as Spinner } from './content/Spinner'
export { default as Header  } from './content/Header'
export { default as Display  } from './content/Display'
export { default as Paragraph  } from './content/Paragraph'
export { default as Text  } from './content/Text'
export { default as Anchor  } from './content/Anchor'
/**
 * Control
 */
export { default as Button } from './control/Button'
export { default as Calendar } from './control/Calendar'
export { default as Checkbox } from './control/Checkbox'
export { default as DatePicker } from './control/DatePicker'
export { default as Menu } from './control/Menu'
export { default as Radio } from './control/Radio'
export { default as Range } from './control/Range'
export { default as Pageswitch } from './control/Pageswitch'
export { default as Select } from './control/Select'
export { default as Switch } from './control/Switch'
export { default as TextField } from './control/TextField'
/**
 * Data
 */
export { default as Meter } from './data/Meter'
export { default as Table } from './data/Table'
/**
 * Layout
 */
export { default as Badge } from './layout/Badge'
export { default as Block } from './layout/Block'
export { default as Drop } from './layout/Drop'
export { default as Flexbox } from './layout/Flexbox'
export { default as Grid } from './layout/Grid'
export { default as Modal } from './layout/Modal'
export { default as Notification } from './layout/Notification'
export { default as Popover } from './layout/Popover'
export { default as Tree } from './layout/Tree'
export { default as ScrollView } from './layout/ScrollView'
export { default as Viewport } from './layout/Viewport'

/**
 * Utils
 */
export { default as dialog } from './misc/utils/dialog'
export { default as notify } from './misc/utils/notify'
/**
 * Misc
 */
export { default as useTheme } from './misc/hooks/useTheme'

export function transformImports (importName, matches) {
    switch(importName){
        case 'Divider': return '@flow-ui/core/content/Divider'
        case 'Spinner': return '@flow-ui/core/content/Spinner'
        case 'Header': return '@flow-ui/core/content/Header'
        case 'Display': return '@flow-ui/core/content/Display'
        case 'Paragraph': return '@flow-ui/core/content/Paragraph'
        case 'Text': return '@flow-ui/core/content/Text'
        case 'Anchor': return '@flow-ui/core/content/Anchor'
        /**
         * Control
         */
        case 'Button': return '@flow-ui/core/control/Button'
        case 'Checkbox': return '@flow-ui/core/control/Checkbox'
        case 'DatePicker': return '@flow-ui/core/control/DatePicker'
        case 'Menu': return '@flow-ui/core/control/Menu'
        case 'Radio': return '@flow-ui/core/control/Radio'
        case 'Range': return '@flow-ui/core/control/Range'
        case 'Select': return '@flow-ui/core/control/Select'
        case 'Switch': return '@flow-ui/core/control/Switch'
        case 'TextField': return '@flow-ui/core/control/TextField'
        /**
         * Data
         */
        case 'Meter': return '@flow-ui/core/data/Meter'
        case 'Table': return '@flow-ui/core/data/Table'
        /**
         * Layout
         */
        case 'Badge': return '@flow-ui/core/layout/Badge'
        case 'Block': return '@flow-ui/core/layout/Block'
        case 'Drop': return '@flow-ui/core/layout/Drop'
        case 'Flexbox': return '@flow-ui/core/layout/Flexbox'
        case 'Grid': return '@flow-ui/core/layout/Grid'
        case 'Modal': return '@flow-ui/core/layout/Modal'
        case 'Notification': return '@flow-ui/core/layout/Notification'
        case 'Popover': return '@flow-ui/core/layout/Popover'
        case 'Tree': return '@flow-ui/core/layout/Tree'
        case 'ScrollView': return '@flow-ui/core/layout/ScrollView'
        case 'Viewport': return '@flow-ui/core/layout/Viewport'
        /**
         * Utils
         */
        case 'dialog': return '@flow-ui/core/misc/utils/dialog'
        case 'notify': return '@flow-ui/core/misc/utils/notify'
        /**
         * Misc
         */
        case 'useBrowser': return '@flow-ui/core/misc/hooks/useBrowser'
        
        default: return '/'
    }
}