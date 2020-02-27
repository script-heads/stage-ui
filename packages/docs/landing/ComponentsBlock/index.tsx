import { Block, Flexbox, Header } from '@flow-ui/core'
import { jsx } from '@emotion/core';

const forms = {
    square: {
        width: '4rem',
        height: '4rem',
    },
    triangle: {
        width: 0, 
        height: 0, 
        borderLeft: '2rem solid transparent',
        borderRight: '2rem solid transparent',
        borderBottom: '2rem solid black',
    },
    circle: {
        width: '4rem',
        height: '4rem',
        borderRadius: '100%'
    }
}

const shapes = ['circle','rect','polygon']
const colors = ['primary','error','warning','success']

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
                <Flexbox justifyContent="space-between">
                    <Block flex={1}>
                        <Header size="xl" children={title} color={c=>c.light} mb={0} css={{maxWidth: '40rem'}}/>
                        <Header
                            mt={0}
                            size="xl"
                            children={subtitle} 
                            css={{maxWidth: '50rem'}}
                        />
                        <Flexbox wrap="wrap" mt="4rem">
                            {components.map(name => {
                                const shape = Object.values(forms)[Math.floor(Math.random() * 3)]
                                const color = colors[Math.floor(Math.random() * 4)]

                                return (
                                    <svg width="4rem" height="4rem" xmlns="http://www.w3.org/2000/svg" css={{
                                        color: 'white',
                                        marginRight: '2rem'
                                    }}>
                                        {jsx(
                                            shapes[Math.floor(Math.random() * 3)],
                                            {
                                                width: '4rem',
                                                height: '4rem',
                                                cx: '2rem',
                                                cy: '2rem',
                                                r: "2rem",
                                                fill: 'black',
                                                points: "0,0,0,64,64,32"
                                            },
                                            <text>{name}</text>
                                        )}
                                    </svg>
                                    // <Block
                                    //     key={name}
                                    //     children={name}
                                    //     m="0.25rem"
                                    //     textColor={c => c.onPrimary}
                                    //     backgroundColor={c => c[color]}
                                    //     css={[
                                    //         {
                                    //             alignItems: 'center',
                                    //             justifyContent: 'center',
                                    //             display: 'flex',
                                    //             cursor: 'pointer'
                                    //         },
                                    //         shape
                                    //     ]}
                                    // />
                                )
                            })}
                        </Flexbox>
                    </Block>
                </Flexbox>
            </Flexbox>
        </Flexbox>
    )
}