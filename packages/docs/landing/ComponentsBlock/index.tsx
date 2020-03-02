import { Block, Flexbox, Header, Text } from '@flow-ui/core'
import WhaleTypes from '@flow-ui/whale/types';

export default (props: {title: string; subtitle: string; components: string[]}) => {

    const {title, subtitle, components} = props;

    return (
        <Flexbox justifyContent="center" backgroundColor={c => c.surface}>
            <Flexbox 
                w="62rem" 
                px="2rem"
                py="6rem" 
                justifyContent='space-between' 
                alignItems='center' 
                css={t=>({
                    borderTop: '1px solid',
                    borderColor: t.color.lightest.hex() 
                })}>
                <Block flex={1} css={{overflow: 'hidden'}}>
                    <Header size="xl" children={title} color={c=>c.light} mb={0} css={{maxWidth: '40rem'}}/>
                    <Header
                        mt={0}
                        size="xl"
                        children={subtitle} 
                        css={{maxWidth: '50rem'}}
                    />
                    <Flexbox 
                        css={{
                            flexWrap: 'wrap'
                        }} 
                        mt="2rem">
                        {components.map((name, index) => (
                            <Text
                                key={name+index} 
                                size='l' 
                                mr="2rem" 
                                mt="2rem" 
                                weight="bold" 
                                transform="uppercase" 
                                css={t=>({
                                    cursor: 'pointer',
                                    background: `linear-gradient(0deg, ${t.color.primary.darken(.8).hex()} 0%, ${t.color.primary.hex()} 100%) top right no-repeat`,
                                    backgroundAttachment:'fixed',
                                    '-webkit-background-clip': 'text',
                                    backgroundClip: 'text',
                                    color: 'transparent'
                                })} 
                                children={name}
                                onClick={()=>location.href='/'+name.toLocaleLowerCase()}
                            />
                        ))}
                    </Flexbox>
                </Block>
            </Flexbox>
        </Flexbox>
    )
}