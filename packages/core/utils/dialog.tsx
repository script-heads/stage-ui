import ModalTypes from '@stage-ui/core/layout/Modal/types'

import modal from './modal'

/**
 * @deprecated use utils/modal
 */
export default (render: ModalTypes.DialogOptions | ModalTypes.DialogRenderFn) => {
  return modal(render)
}
