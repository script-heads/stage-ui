import React from 'react'
import * as Core from '@flow-ui/core'

const sizes = ['xl', 'l', 'm', 's', 'xs'] as any
const buttonDecoration = ['filled', 'outline', 'plain', 'text'] as any

export default () => (
    <Core.Block>
        <Core.Flexbox>
            {buttonDecoration.map(decoration => (
                <div key={decoration}>
                    {sizes.map(size => (
                        <div key={size}>
                            <Core.Button
                                size={size}
                                decoration={decoration}
                                children="Button"
                            />
                        </div>
                    ))}
                </div>
            ))}
        </Core.Flexbox>
    </Core.Block>
)