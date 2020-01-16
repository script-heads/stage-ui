import { css } from '@emotion/core'
import ThemeTypes from '@flow-ui/core/misc/themes/types'

type State = {
    lockX: boolean
    lockY: boolean
    lockC: boolean
}
export default (theme: ThemeTypes.Index, state: State) => {
    
    const { lockX, lockY, lockC } = state

    return {
        container: css({
            padding: '1rem',
            border: '1px solid',
            borderColor: theme.color.lightest.hex(),
            borderRadius: theme.radius.default
        }),
        lock: css({
            position: 'relative',
        }),
        lockX: css({
            position: 'absolute',
            width: '100%',
            height: '7px',
            top: '50%',
            marginTop: '-3px',
            background: theme.color.primary.alpha(0.1).hex(),
            '> div': {
                position: 'absolute',
                width: '100%',
                height: '1px',
                top: '3px',
                background: theme.color.primary.alpha(lockX ? 1 : 0.2).hex()
            }
        }),
        lockY: css({
            position: 'absolute',
            height: '100%',
            width: '7px',
            left: '50%',
            marginLeft: '-3px',
            background: theme.color.primary.alpha(0.1).hex(),
            '> div': {
                position: 'absolute',
                height: '100%',
                width: '1px',
                left: '3px',
                background: theme.color.primary.alpha(lockY ? 1 : 0.2).hex()
            }
        }),
        lockC: css({
            display: 'flex',
            // justifyItems:'center',
            alignItems:'center',
            // alignContent:'center',
            position: 'absolute',
            height: '1.5rem',
            width: '1.5rem',
            top: '50%',
            left: '50%',
            marginTop: '-0.75rem',
            marginLeft: '-0.75rem',
            background: theme.color.surface.hex(),
            border: '1px solid',
            borderTopColor: theme.color.primary.alpha((lockY) ? 1 : 0.2).hex(),
            borderBottomColor: theme.color.primary.alpha((lockY) ? 1 : 0.2).hex(),
            borderLeftColor: theme.color.primary.alpha((lockX) ? 1 : 0.2).hex(),
            borderRightColor: theme.color.primary.alpha((lockX) ? 1 : 0.2).hex(),
            '> span': {
                color: theme.color.primary.alpha((lockC) ? 1 : 0.2).hex(),
                flex: 1,
                justifyContent:'center',
            }
        })
        
    }
}