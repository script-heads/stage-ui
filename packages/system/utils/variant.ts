//@ts-ignore
export default <T>(prop: any, variant: { [K in T]?: any }) => {
    return variant[prop]
}