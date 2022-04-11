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
          d="M16.2129 16H7.7869C7.1139 16 6.5069 15.598 6.2019 14.951C5.8569 14.218 5.9569 13.351 6.4599 12.741L10.6739 7.64199C11.3459 6.82499 12.6539 6.82499 13.3259 7.64199L17.5389 12.74C18.0429 13.351 18.1439 14.218 17.7979 14.951C17.4929 15.598 16.8859 16 16.2129 16Z"
        />
      ),
      outline: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.01366 14H15.9087L11.9977 9.17799L8.01366 14ZM16.2127 16H7.78666C7.11466 16 6.50666 15.598 6.20166 14.951C5.85666 14.218 5.95666 13.351 6.45966 12.741L10.6737 7.64199C11.3457 6.82499 12.6547 6.82499 13.3257 7.64199L17.5387 12.74C18.0427 13.351 18.1437 14.218 17.7977 14.951C17.4927 15.598 16.8857 16 16.2127 16Z"
        />
      ),
    }),
)
