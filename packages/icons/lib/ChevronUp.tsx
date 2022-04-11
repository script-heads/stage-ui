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
          d="M16 14.5C15.744 14.5 15.488 14.402 15.293 14.207L11.988 10.902L8.69502 14.082C8.29702 14.466 7.66502 14.456 7.28102 14.057C6.89702 13.66 6.90802 13.026 7.30502 12.643L11.305 8.781C11.698 8.402 12.322 8.407 12.707 8.793L16.707 12.793C17.098 13.184 17.098 13.816 16.707 14.207C16.512 14.402 16.256 14.5 16 14.5Z"
        />
      ),
      outline: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 14.5C15.744 14.5 15.488 14.402 15.293 14.207L11.988 10.902L8.69502 14.082C8.29702 14.466 7.66502 14.456 7.28102 14.057C6.89702 13.66 6.90802 13.026 7.30502 12.643L11.305 8.781C11.698 8.402 12.322 8.407 12.707 8.793L16.707 12.793C17.098 13.184 17.098 13.816 16.707 14.207C16.512 14.402 16.256 14.5 16 14.5Z"
        />
      ),
    }),
)
