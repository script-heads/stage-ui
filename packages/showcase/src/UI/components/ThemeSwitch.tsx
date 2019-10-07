import Icon from '@flow-ui/core/content/Icon';
import Flexbox from '@flow-ui/core/layout/Flexbox';
import React from 'react';
import { themes } from '@flow-ui/docs/plugins/CaseWrapper/';
import Select from '@flow-ui/core/control/Select';

const ThemeSwitch = () => {
    const currentTheme = localStorage.getItem('theme');
    console.log('render');
    return (
        <Flexbox p="1rem" alignItems="center">
            <Select
                flex={1}
                size="small"
                defaultValues={currentTheme ? [{
                    text: themes[currentTheme].name!,
                    value: currentTheme!
                }] : [{
                    text: themes[Object.keys(themes)[0]].name,
                    value: Object.keys(themes)[0]
                }]}
                options={
                    Object.keys(themes).map(
                        theme => ({
                            text: themes[theme].name,
                            value: theme
                        })
                    )
                }
                onChange={(value) => {
                    window.setTheme(value[0].value)
                }}
            />
            <Icon
                pl="0.5rem"
                size={"1.25rem"}
                type={t => t.outline.colorPalette}
                color={c => c.light.css()}
            />
        </Flexbox>
    )
}

export default ThemeSwitch;