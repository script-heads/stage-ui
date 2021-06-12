/**
The MIT License (MIT)
*/

import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="RadioButtonOnIcon/Fill/radio-button-on">
          <path
            id="RadioButtonOnMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 6.99989C9.243 6.99989 7 9.24289 7 11.9999C7 14.7569 9.243 16.9999 12 16.9999C14.757 16.9999 17 14.7569 17 11.9999C17 9.24289 14.757 6.99989 12 6.99989ZM12 19.9999C7.589 19.9999 4 16.4109 4 11.9999C4 7.58889 7.589 3.99989 12 3.99989C16.411 3.99989 20 7.58889 20 11.9999C20 16.4109 16.411 19.9999 12 19.9999ZM12 1.99989C6.486 1.99989 2 6.48589 2 11.9999C2 17.5139 6.486 21.9999 12 21.9999C17.514 21.9999 22 17.5139 22 11.9999C22 6.48589 17.514 1.99989 12 1.99989Z"
          />
          <mask id="RadioButtonOnmask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="1" width="20" height="21">
            <path
              id="RadioButtonOnMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 6.99989C9.243 6.99989 7 9.24289 7 11.9999C7 14.7569 9.243 16.9999 12 16.9999C14.757 16.9999 17 14.7569 17 11.9999C17 9.24289 14.757 6.99989 12 6.99989ZM12 19.9999C7.589 19.9999 4 16.4109 4 11.9999C4 7.58889 7.589 3.99989 12 3.99989C16.411 3.99989 20 7.58889 20 11.9999C20 16.4109 16.411 19.9999 12 19.9999ZM12 1.99989C6.486 1.99989 2 6.48589 2 11.9999C2 17.5139 6.486 21.9999 12 21.9999C17.514 21.9999 22 17.5139 22 11.9999C22 6.48589 17.514 1.99989 12 1.99989Z"
            />
          </mask>
          <g mask="url(#RadioButtonOnmask0)">
            <g id="RadioButtonOn&#RadioButtonOn240;&#RadioButtonOn159;&#RadioButtonOn142;&#RadioButtonOn168; Color">
              <rect id="RadioButtonOnBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="RadioButtonOn-oIcon/Outline/radio-button-on">
          <path
            id="RadioButtonOn-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 15C10.346 15 9 13.654 9 12C9 10.346 10.346 9 12 9C13.654 9 15 10.346 15 12C15 13.654 13.654 15 12 15ZM12 7C9.243 7 7 9.243 7 12C7 14.757 9.243 17 12 17C14.757 17 17 14.757 17 12C17 9.243 14.757 7 12 7ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"
          />
          <mask
            id="RadioButtonOn-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="2"
            width="20"
            height="20"
          >
            <path
              id="RadioButtonOn-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 15C10.346 15 9 13.654 9 12C9 10.346 10.346 9 12 9C13.654 9 15 10.346 15 12C15 13.654 13.654 15 12 15ZM12 7C9.243 7 7 9.243 7 12C7 14.757 9.243 17 12 17C14.757 17 17 14.757 17 12C17 9.243 14.757 7 12 7ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"
            />
          </mask>
          <g mask="url(#RadioButtonOn-omask0)">
            <g id="RadioButtonOn-o&#RadioButtonOn-o240;&#RadioButtonOn-o159;&#RadioButtonOn-o142;&#RadioButtonOn-o168; Color">
              <rect id="RadioButtonOn-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
