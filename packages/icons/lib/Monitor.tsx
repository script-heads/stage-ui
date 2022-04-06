/**
The MIT License (MIT)
*/
import React from 'react'

import { Props, createIcon } from '../Icon'

export default React.forwardRef(
  (props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
    createIcon(props, ref, {
      filled: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 3H19C20.654 3 22 4.346 22 6V11H2V6C2 4.346 3.346 3 5 3ZM5 17C3.346 17 2 15.654 2 14V13H22V14C22 15.654 20.654 17 19 17H13V19H17C17.55 19 18 19.45 18 20C18 20.55 17.55 21 17 21H7C6.45 21 6 20.55 6 20C6 19.45 6.45 19 7 19H11V17H5Z"
        />
      ),
      outline: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 14C20 14.551 19.552 15 19 15H12.087H11.913H5C4.448 15 4 14.551 4 14V6C4 5.449 4.448 5 5 5H19C19.552 5 20 5.449 20 6V14ZM19 3H5C3.346 3 2 4.346 2 6V14C2 15.654 3.346 17 5 17H11V19H7C6.45 19 6 19.45 6 20C6 20.55 6.45 21 7 21H17C17.55 21 18 20.55 18 20C18 19.45 17.55 19 17 19H13V17H19C20.654 17 22 15.654 22 14V6C22 4.346 20.654 3 19 3Z"
        />
      ),
    }),
)
