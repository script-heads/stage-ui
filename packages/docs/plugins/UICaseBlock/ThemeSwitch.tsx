import Icon from '@flow-ui/core/content/Icon';
import Flexbox from '@flow-ui/core/layout/Flexbox';
import React from 'react';
import { themes } from '../CaseWrapper/';

class ThemeSwitch extends React.Component<{ onChange: (theme: string) => void }> {
    render() {
        const selectStyle: any = {
            height: "100%",
            background: "transparent",
            textAlign: "right",
            color: "#fff",
            padding: 0,
            fontSize: "0.75rem",
            margin: 0,
            border: "none",
            fontWeight: 500,
            appearance: "none",
            WebkitAppearance: "none",
            textTransform: "uppercase",
            outline: "none",
        }

        const currentTheme = localStorage.getItem('theme');

        return (
            <Flexbox p="1rem" alignItems="center">
                <Icon
                    pr="0.5rem"
                    size={"1.25rem"}
                    type={t => t.outline.colorPalette} color="#ffffff"
                />
                <select
                    style={selectStyle}
                    defaultValue={currentTheme!}
                    onChange={(event) => { this.props.onChange(event.target.value) }}>
                    {Object.keys(themes).map(theme =>
                        <option key={theme} value={theme}>{themes[theme].name}</option>
                    )}
                </select>
            </Flexbox>
        )
    }
}
export default ThemeSwitch;