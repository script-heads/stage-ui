/**
The MIT License (MIT)
*/

import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="CheckmarkSquareIcon/Fill/checkmark-square Copy">
          <path
            id="CheckmarkSquareMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.2954 9.60549L11.7274 15.6055C11.5394 15.8525 11.2484 15.9985 10.9384 16.0005H10.9314C10.6244 16.0005 10.3344 15.8585 10.1444 15.6165L7.71237 12.5095C7.37237 12.0755 7.44837 11.4465 7.88337 11.1065C8.31837 10.7655 8.94637 10.8415 9.28737 11.2775L10.9204 13.3635L14.7044 8.39449C15.0384 7.95549 15.6664 7.86949 16.1064 8.20449C16.5454 8.53949 16.6304 9.16649 16.2954 9.60549ZM18.0004 3.00049H6.00037C4.34537 3.00049 3.00037 4.34549 3.00037 6.00049V18.0005C3.00037 19.6545 4.34537 21.0005 6.00037 21.0005H18.0004C19.6544 21.0005 21.0004 19.6545 21.0004 18.0005V6.00049C21.0004 4.34549 19.6544 3.00049 18.0004 3.00049Z"
          />
          <mask
            id="CheckmarkSquaremask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="3"
            y="3"
            width="19"
            height="19"
          >
            <path
              id="CheckmarkSquareMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.2954 9.60549L11.7274 15.6055C11.5394 15.8525 11.2484 15.9985 10.9384 16.0005H10.9314C10.6244 16.0005 10.3344 15.8585 10.1444 15.6165L7.71237 12.5095C7.37237 12.0755 7.44837 11.4465 7.88337 11.1065C8.31837 10.7655 8.94637 10.8415 9.28737 11.2775L10.9204 13.3635L14.7044 8.39449C15.0384 7.95549 15.6664 7.86949 16.1064 8.20449C16.5454 8.53949 16.6304 9.16649 16.2954 9.60549ZM18.0004 3.00049H6.00037C4.34537 3.00049 3.00037 4.34549 3.00037 6.00049V18.0005C3.00037 19.6545 4.34537 21.0005 6.00037 21.0005H18.0004C19.6544 21.0005 21.0004 19.6545 21.0004 18.0005V6.00049C21.0004 4.34549 19.6544 3.00049 18.0004 3.00049Z"
            />
          </mask>
          <g mask="url(#CheckmarkSquaremask0)">
            <g id="CheckmarkSquare&#CheckmarkSquare240;&#CheckmarkSquare159;&#CheckmarkSquare142;&#CheckmarkSquare168; Color">
              <rect id="CheckmarkSquareBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="CheckmarkSquare-oIcon/Outline/checkmark-square">
          <path
            id="CheckmarkSquare-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.7046 8.3945L10.9206 13.3635L9.2876 11.2775C8.9466 10.8415 8.3186 10.7655 7.8836 11.1065C7.4486 11.4465 7.3716 12.0755 7.7126 12.5095L10.1436 15.6165C10.3336 15.8585 10.6236 15.9995 10.9316 15.9995H10.9386C11.2476 15.9985 11.5396 15.8525 11.7266 15.6055L16.2956 9.6055C16.6306 9.1655 16.5456 8.5395 16.1056 8.2045C15.6656 7.8695 15.0376 7.9555 14.7046 8.3945ZM19 18C19 18.552 18.551 19 18 19H6C5.449 19 5 18.552 5 18V6C5 5.448 5.449 5 6 5H18C18.551 5 19 5.448 19 6V18ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z"
          />
          <mask
            id="CheckmarkSquare-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="3"
            y="3"
            width="18"
            height="18"
          >
            <path
              id="CheckmarkSquare-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.7046 8.3945L10.9206 13.3635L9.2876 11.2775C8.9466 10.8415 8.3186 10.7655 7.8836 11.1065C7.4486 11.4465 7.3716 12.0755 7.7126 12.5095L10.1436 15.6165C10.3336 15.8585 10.6236 15.9995 10.9316 15.9995H10.9386C11.2476 15.9985 11.5396 15.8525 11.7266 15.6055L16.2956 9.6055C16.6306 9.1655 16.5456 8.5395 16.1056 8.2045C15.6656 7.8695 15.0376 7.9555 14.7046 8.3945ZM19 18C19 18.552 18.551 19 18 19H6C5.449 19 5 18.552 5 18V6C5 5.448 5.449 5 6 5H18C18.551 5 19 5.448 19 6V18ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z"
            />
          </mask>
          <g mask="url(#CheckmarkSquare-omask0)">
            <g id="CheckmarkSquare-o&#CheckmarkSquare-o240;&#CheckmarkSquare-o159;&#CheckmarkSquare-o142;&#CheckmarkSquare-o168; Color">
              <rect id="CheckmarkSquare-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
