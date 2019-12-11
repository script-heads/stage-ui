export const title = 'Object to JSX'
export const subtitle = ''
export const ns = ''
export const cases = [
    {
        label: 'Example',
        code: `//->
Block: {
    TextField: {
        flex: 1,
        mb: 10,
        label: "Login",
    },
    TextField: {
        flex: 1,
        mb: 20,
        type: "password",
        label: "Password",
    },
    Button: {
        children: "Login",
        w: "100%",
        onClick: () => console.log('Yay!')
    }
}`
    }
]
