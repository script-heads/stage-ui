/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="SquareIcon/Fill/square">
          <path
            id="SquareMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 5C5.449 5 5 5.449 5 6V18C5 18.551 5.449 19 6 19H18C18.551 19 19 18.551 19 18V6C19 5.449 18.551 5 18 5H6ZM18 21H6C4.346 21 3 19.654 3 18V6C3 4.346 4.346 3 6 3H18C19.654 3 21 4.346 21 6V18C21 19.654 19.654 21 18 21Z"
          />
          <mask
            id="Squaremask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="3"
            y="3"
            width="18"
            height="18"
          >
            <path
              id="SquareMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 5C5.449 5 5 5.449 5 6V18C5 18.551 5.449 19 6 19H18C18.551 19 19 18.551 19 18V6C19 5.449 18.551 5 18 5H6ZM18 21H6C4.346 21 3 19.654 3 18V6C3 4.346 4.346 3 6 3H18C19.654 3 21 4.346 21 6V18C21 19.654 19.654 21 18 21Z"
            />
          </mask>
          <g mask="url(#Squaremask0)">
            <g id="Square&#Square240;&#Square159;&#Square142;&#Square168; Color">
              <rect id="SquareBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Square-oIcon/Outline/square">
          <path
            id="Square-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 5C5.449 5 5 5.449 5 6V18C5 18.551 5.449 19 6 19H18C18.551 19 19 18.551 19 18V6C19 5.449 18.551 5 18 5H6ZM18 21H6C4.346 21 3 19.654 3 18V6C3 4.346 4.346 3 6 3H18C19.654 3 21 4.346 21 6V18C21 19.654 19.654 21 18 21Z"
          />
          <mask
            id="Square-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="3"
            y="3"
            width="18"
            height="18"
          >
            <path
              id="Square-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 5C5.449 5 5 5.449 5 6V18C5 18.551 5.449 19 6 19H18C18.551 19 19 18.551 19 18V6C19 5.449 18.551 5 18 5H6ZM18 21H6C4.346 21 3 19.654 3 18V6C3 4.346 4.346 3 6 3H18C19.654 3 21 4.346 21 6V18C21 19.654 19.654 21 18 21Z"
            />
          </mask>
          <g mask="url(#Square-omask0)">
            <g id="Square-o&#Square-o240;&#Square-o159;&#Square-o142;&#Square-o168; Color">
              <rect id="Square-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
