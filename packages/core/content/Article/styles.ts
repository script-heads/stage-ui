import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme) => {
  return {
    container: {
      '>h1': theme.assets.typography.article.header.xl,
      '>h2': theme.assets.typography.article.header.l,
      '>h3': theme.assets.typography.article.header.m,
      '>h4': theme.assets.typography.article.header.s,
      '>h5': theme.assets.typography.article.header.xs,
      '>p': theme.assets.typography.article.paragraph,
    },
  }
}

export default createClasses
