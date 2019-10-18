import Icon from '@flow-ui/core/content/Icon';
import Select from '@flow-ui/core/control/Select';
import Flexbox from '@flow-ui/core/layout/Flexbox';
import React from 'react';
import { themes } from '../';

const ThemeSwitch = () => {
    const currentTheme = localStorage.getItem('theme');
    
    return (
        <Flexbox p="1rem" alignItems="center">
            <Select
                flex={1}
                size="small"
                defaultValues={currentTheme && themes[currentTheme] ? [{
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
                leftChild={(
                    <Icon
                        size={"1.25rem"}
                        type={t => t.outline.colorPalette}
                        color={c => c.light.css()}
                    />
                )}
            />

        </Flexbox>
    )
}

export default ThemeSwitch;