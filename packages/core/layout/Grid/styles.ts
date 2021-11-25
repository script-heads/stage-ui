import containerDecorations from '@stage-ui/core/utils/containerDecorations'
import breakpointProp from '@stage-ui/system/props/breakpoint'
import Types from './types'

const createClasses: Stage.CreateClasses<Types.Classes, Types.Props> = (theme, props) => ({
  container: () => [
    containerDecorations(props, theme),
    {
      position: 'relative',
      display: props.inline ? 'inline-grid' : 'grid',
    },
    breakpointProp(props.templateColumns, theme, (currentValue) => ({
      gridTemplateColumns: currentValue,
    })),
    breakpointProp(props.templateRows, theme, (currentValue) => ({
      gridTemplateRows: currentValue,
    })),
    breakpointProp(props.templateAreas, theme, (currentValue) => ({
      gridTemplateAreas: currentValue,
    })),
    breakpointProp(props.columnGap, theme, (currentValue) => ({
      gridColumnGap: currentValue,
    })),
    breakpointProp(props.rowGap, theme, (currentValue) => ({
      gridRowGap: currentValue,
    })),
    breakpointProp(props.gap, theme, (currentValue) => ({
      gridGap: currentValue,
    })),
    breakpointProp(props.autoColumns, theme, (currentValue) => ({
      gridAutoColumns: currentValue,
    })),
    breakpointProp(props.autoRows, theme, (currentValue) => ({
      gridAutoRows: currentValue,
    })),
    breakpointProp(props.autoFlow, theme, (currentValue) => ({
      gridAutoFlow: currentValue,
    })),
    breakpointProp(props.alignItems, theme, (currentValue) => ({
      alignItems: currentValue,
    })),
    breakpointProp(props.alignContent, theme, (currentValue) => ({
      alignContent: currentValue,
    })),
    breakpointProp(props.justifyContent, theme, (currentValue) => ({
      justifyContent: currentValue,
    })),
    breakpointProp(props.justifyItems, theme, (currentValue) => ({
      justifyItems: currentValue,
    })),
  ],
})

export default createClasses
