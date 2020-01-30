import { Anchor, Block, Flexbox, Header } from '@flow-ui/core'
import { Github } from '@flow-ui/core/icons'
import WhaleTypes from '@flow-ui/whale/types'
import ThemeSwitcher, { ThemeSwitcherProps } from './ThemeSwitcher'

interface MenuProps extends ThemeSwitcherProps {
    name: string, 
    git?: string,
    setIndex: () => void
}

const PageHeader = (props: MenuProps) => {

    const {name, git, themes, setTheme, currentTheme, setIndex} = props

    return (
        <Flexbox 
            alignItems="center" 
            p="1.5rem"
            css={(theme: WhaleTypes.Theme) => ({
                zIndex: 10,
                [`@media (max-width: ${window.breakpoints[0]}px)`]: {
                    padding: '1rem',
                }
            })}>
            <Header
                css={{ cursor: 'pointer' }}
                children={name}
                onClick={()=>setIndex()}
            />
            <Block flex={1} />
            <ThemeSwitcher 
                themes={themes}
                currentTheme={currentTheme}
                setTheme={setTheme} 
            />
            {git && (
                <Anchor target="_blank" href={git} ml="1rem">
                    <Github size="1.5rem" />
                </Anchor>
            )}
        </Flexbox>
    )
}

export default PageHeader