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
          d="M12 4C11.45 4 11 4.45 11 5V20C11 20.55 11.45 21 12 21C12.55 21 13 20.55 13 20V5C13 4.45 12.55 4 12 4ZM19 12C18.45 12 18 12.45 18 13V20C18 20.55 18.45 21 19 21C19.55 21 20 20.55 20 20V13C20 12.45 19.55 12 19 12ZM4 9C4 8.45 4.45 8 5 8C5.55 8 6 8.45 6 9V20C6 20.55 5.55 21 5 21C4.45 21 4 20.55 4 20V9Z"
        />
      ),
      outline: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 4C11.45 4 11 4.45 11 5V20C11 20.55 11.45 21 12 21C12.55 21 13 20.55 13 20V5C13 4.45 12.55 4 12 4ZM19 12C18.45 12 18 12.45 18 13V20C18 20.55 18.45 21 19 21C19.55 21 20 20.55 20 20V13C20 12.45 19.55 12 19 12ZM4 9C4 8.45 4.45 8 5 8C5.55 8 6 8.45 6 9V20C6 20.55 5.55 21 5 21C4.45 21 4 20.55 4 20V9Z"
        />
      ),
    }),
)
