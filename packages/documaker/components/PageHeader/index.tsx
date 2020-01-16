import { Flexbox, Header, Anchor, Icon, Block } from '@flow-ui/core'
import ThemeSwitcher, { ThemeSwitcherProps } from './ThemeSwitcher'
import ThemeTypes from '@flow-ui/core/misc/themes/types'

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
            css={(theme: ThemeTypes.Index) => ({
                zIndex: 10,
                [`@media (max-width: ${window.breakpoints[0]}px)`]: {
                    padding: '1rem',
                }
            })}>
            <Header
                css={{ cursor: 'pointer' }}
                size={3} 
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
                <Anchor size={2} target="_blank" href={git} ml="1rem">
                    <Icon size="1.5rem" type={t => t.outline.github}/>
                </Anchor>
            )}
        </Flexbox>
    )
}

export default PageHeader