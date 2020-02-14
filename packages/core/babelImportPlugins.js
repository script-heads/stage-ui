const transforms = {
    'core/content': ['Divider', 'Spinner', 'Header', 'Display', 'Paragraph', 'Text', 'Link'],
    'core/control': ['Button', 'Calendar', 'Checkbox', 'DatePicker', 'Menu', 'Radio', 'Range', 'Pageswitch', 'Select', 'Switch', 'TextField'],
    'core/layout': ['Badge', 'Block', 'Drop', 'Flexbox', 'Grid', 'Modal', 'Notification', 'Popover', 'Tree', 'ScrollView', 'Viewport'],
    'core/data': ['Meter', 'Table'],
    'core/misc/utils': ['dialog', 'notify'],
    'whale/hooks': ['useTheme'],
}

module.exports = [
    [
        'babel-plugin-import', {
            libraryName: '@flow-ui/core',
            camel2DashComponentName: false,
            customName: (name) => {
                for (let dir of Object.keys(transforms)) {
                    for (let component of transforms[dir]) {
                        if (component === name) {
                            return `@flow-ui/${dir}/${component}`
                        }
                    }
                }
                return `Please setup "${name}" in importPlugin.js`
            }
        },
        'core'
    ],
    [
        'babel-plugin-import', {
            libraryName: '@flow-ui/core/icons',
            camel2DashComponentName: false,
            customName: (name) => (
                `@flow-ui/core/icons/svg/${name[0].toLowerCase()}${name.slice(1)}`
            )
        },
        'icons'
    ]
]