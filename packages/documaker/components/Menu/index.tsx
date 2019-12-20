import { Flexbox, Header, Anchor, Icon } from '@flow-ui/core'
import ThemeSwitcher, { ThemeSwitcherProps } from './ThemeSwitcher'

interface MenuProps extends ThemeSwitcherProps {
    name: string, 
    git?: string,
    setIndex: () => void
}

const Menu = (props: MenuProps) => {

    const {name, git, themes, setTheme, currentTheme, setIndex} = props

    return (
        <Flexbox alignItems="center" m="1.5rem" mb="1rem">
            <Header
                css={{cursor: 'pointer'}}
                size={3} 
                flex={1}
                children={name}
                onClick={()=>setIndex()}
            />
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

export default Menu