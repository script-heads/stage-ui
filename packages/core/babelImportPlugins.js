const transforms = {
  'core/content': ['Divider', 'Spinner', 'Header', 'Display', 'Paragraph', 'Text', 'Link'],
  'core/control': [
    'Button',
    'Calendar',
    'Checkbox',
    'DatePicker',
    'Menu',
    'Radio',
    'Range',
    'Pageswitch',
    'Select',
    'Switch',
    'TextField',
  ],
  'core/layout': [
    'Badge',
    'Block',
    'Drop',
    'Flexbox',
    'Grid',
    'Modal',
    'Notification',
    'Popover',
    'Tree',
    'ScrollView',
    'Viewport',
  ],
  'core/data': ['Meter', 'Table'],
  'core/misc/utils': ['dialog', 'notify'],
  'system/hooks': ['useTheme'],
}

module.exports = [
  [
    'babel-plugin-import',
    {
      libraryName: '@stage-ui/core',
      camel2DashComponentName: false,
      customName: (name) => {
        for (const dir of Object.keys(transforms)) {
          for (const component of transforms[dir]) {
            if (component === name) {
              return `@stage-ui/${dir}/${component}`
            }
          }
        }
        return `Please setup "${name}" in importPlugin.js`
      },
    },
    'core',
  ],
  [
    'babel-plugin-import',
    {
      libraryName: '@stage-ui/core/icons',
      camel2DashComponentName: true,
      customName: (name) => `@stage-ui/core/icons/svg/${name[0].toLowerCase()}${name.slice(1)}`,
    },
    'icons',
  ],
]
