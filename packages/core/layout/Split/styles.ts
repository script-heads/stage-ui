import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = () => ({
  test: {},
  container: (state) => [
    {
      display: 'flex',
      width: '100%',
      height: '100%',
      flex: 1,
      flexDirection: 'row',
    },
    state.vertical && {
      flexDirection: 'column',
    },
  ],
})

export default createClasses
