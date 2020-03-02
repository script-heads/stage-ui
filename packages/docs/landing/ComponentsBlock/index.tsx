import { Block, Flexbox, Header, Text, Divider } from '@flow-ui/core'

export default (props: {title: string; subtitle: string; components: string[]}) => {

    const {title, subtitle, components} = props;

    return (
        <Block mb='6rem'>
            <Divider mb='6rem'/>
            <Block flex={1} css={{overflow: 'hidden'}}>
                <Header size="xl" children={title} color={c=>c.light} mb={0} css={{maxWidth: '40rem'}}/>
                <Header
                    mt={0}
                    size="xl"
                    children={subtitle} 
                    css={{maxWidth: '50rem'}}
                />
                <Flexbox 
                    css={t=>({
                        flexWrap: 'wrap',
                        color: t.color.primary.hex(),
                        // backgroundImage: `linear-gradient(0deg, ${t.color.primary.darken(.8).hex()} 0%, ${t.color.primary.hex()} 100%)`,
                        // backgroundSize: '100vw 100vh',
                        // backgroundRepeat: 'no-repeat',
                        // backgroundAttachment: 'scroll',
                        // backgroundPosition: 'top right',
                        // WebkitBackgroundClip: 'text',
                        // WebkitTextFillColor: 'transparent',
                        'span': {
                            cursor: 'pointer',
                        }
                    })} 
                    mt="2rem">
                    {components.map((name, index) => (
                        <Text
                            key={name+index} 
                            size='l' 
                            mr="2rem" 
                            mt="2rem" 
                            weight="bold" 
                            transform="uppercase" 
                            children={name}
                            onClick={()=>location.href='/'+name.toLocaleLowerCase()}
                        />
                    ))}
                </Flexbox>
            </Block>
        </Block>
    )
}