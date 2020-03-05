import React from 'react'
import { Grid, Block } from '@flow-ui/core'
import { Config } from '../../../core'
import generatedTypes from '../../../definitions/types.json'
import Interface from './Interface'

interface TypesProps { 
    nameSpace: string, 
    config: Config,
    shrink: boolean
}

const Types = (props: TypesProps) => {

    const { nameSpace, config } = props
    let types = generatedTypes[nameSpace]

    if (!Array.isArray(types) || types.length === 0) {
        console.warn(`Render docs: There is no props for ${nameSpace}`)
        return null
    }
    
    if (config.pages?.types) {
        types = config.pages.types.map(typeName => {
            return types.find(type => type.name === typeName)
        })
    }

    return (
        <Block css={[
            { width: '100%' },
            props.shrink && { maxWidth:'45rem' }
        ]}>
            <Grid 
                templateColumns="repeat(auto-fit, minmax(18rem, 1fr))" 
                mt="2rem" 
                gap="2rem" 
                css={{overflow: 'hidden'}}>
                {types.map((data, index) => (
                    <Interface 
                        key={'interface-'+index}
                        data={data} 
                        separatedTypes={config.pages?.separatedTypes}
                    />
                ))}
            </Grid>
        </Block>
    )
}

export default Types