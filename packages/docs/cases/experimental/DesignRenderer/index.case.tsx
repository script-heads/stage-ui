export const title = 'DesignRenderer - Meta'
export const subtitle = ''
export const ns = ''
export const cases = [
    {
        label: 'Example',
        code: `//design->
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
                type: "Password",
                mb: "2rem"
            }
        ]
    
    },
    {
        $: "Button",
        children: "Login",
        onClick: () => console.log("Yay!")
    }
]`
    }
]
