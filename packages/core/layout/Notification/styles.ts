import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => {
  const place = props.placement || 'topRight'
  return {
    container: [
      place.startsWith('bottom') && {
        marginTop: theme.spacing.m,
      },
      !place.startsWith('bottom') && {
        marginBottom: theme.spacing.m,
      },
      ['topLeft', 'centerLeft', 'bottomLeft'].includes(place) && {
        marginLeft: theme.spacing.l,
      },
      ['topRight', 'centerRight', 'bottomRight'].includes(place) && {
        marginRight: theme.spacing.l,
      },
      ['topRight', 'topCenter', 'topLeft'].includes(place) && {
        ':first-child': {
          marginTop: theme.spacing.l,
        },
      },
      ['bottomRight', 'bottomCenter', 'bottomLeft'].includes(place) && {
        ':last-child': {
          marginBottom: theme.spacing.l,
        },
      },
    ],
  }
}

export default createClasses
