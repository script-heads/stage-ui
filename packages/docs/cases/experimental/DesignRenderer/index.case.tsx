import React from 'react'
import DesignEditor from '@flow-ui/showcase/src/components/DesignEditor'
export const title = 'DesignRenderer - Meta'
export const subtitle = ''
export const ns = ''
export const cases = []

const code = `
[
    {
        $: "Flexbox",
        direction: "column",
        children: [
            {
                $: "TextField",
                label: "Username",
                mb: "1rem"
            },
            {
                $: "TextField",
                label: "Password",
                mb: "2rem"
            }
        ]
    
    },
    {
        $: "Flexbox",
        direction: "row",
        children: [
            {
                $: "Checkbox",
                label: "Check",
            }
        ]
    
    },
    {
        $: "Button",
        children: "Login",
        onClick: () => console.log("Yay!")
    }
]`

export default () => (
    <DesignEditor code={code} />
)
