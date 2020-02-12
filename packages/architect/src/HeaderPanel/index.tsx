import { ArchitectTools } from '@flow-ui/architect/types'
import { Block, Header, Paragraph, Flexbox, Link } from '@flow-ui/core'
import styles from './styles'
import WhaleTypes from '@flow-ui/whale/types'
import ThemeSwitcher from '@flow-ui/documaker/components/ThemeSwitcher'
import { Github } from '@flow-ui/core/icons'

interface HeaderPanelProps {
    title?: string
    git?: string
    themes: Record<string, WhaleTypes.Theme>
    currentTheme: WhaleTypes.Theme
    setTheme: (theme: WhaleTypes.Theme) => void
    setIndex: () => void
}

const HeaderPanel = (props: HeaderPanelProps) => {
    const cs = styles(props.currentTheme)

    return (
        <Flexbox css={cs.container}>
            <div>
                <Header
                    size="xs"
                    weight="bold"
                    css={{ cursor: 'pointer' }}
                    onClick={props.setIndex}
                    children={props.title}
                />
                <Paragraph
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