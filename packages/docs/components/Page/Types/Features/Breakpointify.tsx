import React from 'react'
import { Block, Drop, Popover, Link, Paragraph, Divider } from '@stage-ui/core'
import { Grid, ExternalLink } from '@stage-ui/core/icons'

const BreakpointifyFeature = () => {
    const [active, setActive] = React.useState(false)
    const ref = React.createRef<HTMLSpanElement>()
    return (
        <Block>
            <Grid 
                ref={ref} 
                fontSize={'1.25rem'}
                color="primary"
                onMouseEnter={() => {
                    setActive(true)
                }}
                onTouchStart={() => {
                    setActive(true)
                }}
            />
            <Drop
                spacing={10}
                css={{
                    transition: 'all 0.25s',
                    marginTop: active ? '0' : '1rem',
                    visibility: active ? 'visible' : 'hidden',
                    opacity: active ? 1 : 0,
                }}
                target={ref}
                onClickOutside={() => {
                    setActive(false)
                }}
                children={(
                    <Popover
                        onMouseLeave={() => {
                            setActive(false)
                        }}
                        css={{maxWidth:'15rem'}}>
                        <Paragraph
                            m={0}
                            weight="bold"
                            textColor="hardest"
                            children="Breakpoints support"    
                        />
                        <Paragraph>You could provide array of properties for responsive render.</Paragraph>
                        <Divider mb={'0.5rem'} />
                        <Link href="/props/#breakpoints">More info <ExternalLink/></Link>
                    </Popover>
                )}
            />
        </Block>
    )
}
export default BreakpointifyFeature