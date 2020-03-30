import React from 'react'
import { Grid } from '@flow-ui/core'
import { Config } from '../../../system/core'
import generatedTypes from '../../../system/definitions/types.json'
import Interface from './Interface'

interface TypesProps {
    nameSpace: string,
    config: Config,
    shrink: boolean
}

const Types = (props: TypesProps) => {

    const { nameSpace, config } = props
    let types = generatedTypes[nameSpace]

    if (!config.pages?.types) {
        return null
    }

    if (!Array.isArray(types) || types.length === 0) {
        console.warn(`Render docs: There is no props for ${nameSpace}`)
        return null
    }

    types = config.pages.types.map(configType => ({
        interface: types.find(type => type.name === configType.interface),
        columns: configType.columns
    }))

    return (
        <Grid
            gridTemplateColumns={props.shrink ? '45rem' : '100%'}
            gap="3rem"
            mt="3rem"
        >
            {types.map((data, index) => (
                <Interface
                    key={'interface-' + index}
                    data={data.interface}
                    columns={data.columns}
                    separatedTypes={config.pages?.separatedTypes}
                />
            ))}
        </Grid>
    )
}

export default Types