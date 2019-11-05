import React from 'react'
import * as Core from '@flow-ui/core'

const sizes = ['xlarge', 'large', 'medium', 'small', 'xsmall'] as any
const textFieldDecoration = ['filled', 'none', 'outline', 'underline'] as any

export default () => (
    <Core.Block>
        <Core.Flexbox>
            {textFieldDecoration.map(decoration => (
                <div key={decoration}>
                    {sizes.map(size => (
                        <div key={size}>
                            <Core.TextField
                                label="Text"
                                placeholder="Placeholder"
                                size={size}
                                decoration={decoration}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </Core.Flexbox>
    </Core.Block>
)