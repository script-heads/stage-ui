import React from 'react'
import { HomePageProps } from '@flow-ui/documaker/core'
import { Flexbox, Block } from '@flow-ui/core'
import Header from './Header'
import Features from './Features'
import ComponentsBlock from './ComponentsBlock'
import Footer from './Footer'

export default (props: HomePageProps) => {
    return (
        <Flexbox backgroundColor={c => c.surface} justifyContent="center">
            <Block
                w="62rem"
                flexShrink={1}
                px={["2rem","2rem","1rem"]}
                css={{overflow: 'hidden'}}>
                <Header {...props} />
                <Features />
                <ComponentsBlock 
                    title="Layout"
                    subtitle="Simplifies markup with special containers and their shorthands."
                    components={['Badge', 'Block', 'Drop', 'Flexbox', 'Grid', 'Modal', 'Popover', 'ScrollView', 'Tree', 'Viewport']}
                />
                <ComponentsBlock 
                    title="Content"
                    subtitle="Everything to fill the page with."
                    components={['Divider', 'Spinner', 'Typography']}
                />
                <ComponentsBlock 
                    title="Control"
                    subtitle="Components for user interactions."
                    components={['Button', 'Calendar', 'Checkbox', 'DatePicker', 'Menu', 'Pageswitch', 'Radio', 'Range', 'Select', 'Switch', 'TextField']}
                />
                <ComponentsBlock 
                    title="Data"
                    subtitle="Visual presentation of information."
                    components={['Table', 'Meter']}
                />
                <ComponentsBlock 
                    title="Utils"
                    subtitle="Features to make development easier."
                    components={['Dialog', 'Notify']}
                />
                <ComponentsBlock 
                    title="Lab"
                    subtitle="Special place to TestFlight components."
                    components={['Chart', 'ButtonGroup', 'Split', 'Toolbar']}
                />
                <Footer />
            </Block> 
        </Flexbox>
    )
}