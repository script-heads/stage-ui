import { Header, Paragraph, Flexbox, Link } from '@flow-ui/core'
import styles from './styles'
import SystemTypes from '@flow-ui/system/types'
import ThemeSwitcher from '../../../components/Menu/ThemeSwitcher'
import { Github } from '@flow-ui/core/icons'
import React from 'react'

interface HeaderPanelProps {
    title?: string
    git?: string
    themes: Record<string, SystemTypes.Theme>
    currentTheme: SystemTypes.Theme
    setTheme: (theme: SystemTypes.Theme) => void
    setIndex: () => void
}

const HeaderPanel = (props: HeaderPanelProps) => {
    const cs = styles(props.currentTheme)

    return (
        <Flexbox css={cs.container}>
            <div>
                <Header
                    m="0"
                    size="xs"
                    weight="bold"
                    onClick={props.setIndex}
                    children={props.title}
                />
                <Paragraph
                    m="0"
                    size="xs"
                    css={{ opacity: 0.5 }}
                    onClick={props.setIndex}
                    weight={600}
                    children={'Architect'}
                />
            </div>
            <div>
                <ThemeSwitcher
                    themes={props.themes}
                    currentTheme={props.currentTheme}
                    setTheme={props.setTheme}
                />
                {props.git && (
                    <Link target="_blank" href={props.git} ml="1rem">
                        <Github size="1.5rem" />
                    </Link>
                )}
            </div>
        </Flexbox>
    )
}

export default HeaderPanel