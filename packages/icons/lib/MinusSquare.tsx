/**
The MIT License (MIT)
*/

import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="MinusSquareIcon/Fill/minus-square">
          <g id="MinusSquare&#MinusSquare240;&#MinusSquare159;&#MinusSquare142;&#MinusSquare168; Color">
            <path
              id="MinusSquareMask"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 13H9C8.45 13 8 12.55 8 12C8 11.45 8.45 11 9 11H15C15.55 11 16 11.45 16 12C16 12.55 15.55 13 15 13ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z"
            />
            <mask id="MinusSquaremask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="18" height="18">
              <path
                id="MinusSquareMask_2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 13H9C8.45 13 8 12.55 8 12C8 11.45 8.45 11 9 11H15C15.55 11 16 11.45 16 12C16 12.55 15.55 13 15 13ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z"
              />
            </mask>
            <g mask="url(#MinusSquaremask0)">
              <g id="MinusSquare&#MinusSquare240;&#MinusSquare159;&#MinusSquare142;&#MinusSquare168; Color_2">
                <rect id="MinusSquareBase" width="24" height="24" />
              </g>
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="MinusSquare-oIcon/Outline/minus-square">
          <path
            id="MinusSquare-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 11H9C8.45 11 8 11.45 8 12C8 12.55 8.45 13 9 13H15C15.55 13 16 12.55 16 12C16 11.45 15.55 11 15 11ZM19 18C19 18.551 18.552 19 18 19H6C5.448 19 5 18.551 5 18V6C5 5.449 5.448 5 6 5H18C18.552 5 19 5.449 19 6V18ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z"
          />
          <mask id="MinusSquare-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="18" height="18">
            <path
              id="MinusSquare-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 11H9C8.45 11 8 11.45 8 12C8 12.55 8.45 13 9 13H15C15.55 13 16 12.55 16 12C16 11.45 15.55 11 15 11ZM19 18C19 18.551 18.552 19 18 19H6C5.448 19 5 18.551 5 18V6C5 5.449 5.448 5 6 5H18C18.552 5 19 5.449 19 6V18ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z"
            />
          </mask>
          <g mask="url(#MinusSquare-omask0)">
            <g id="MinusSquare-o&#MinusSquare-o240;&#MinusSquare-o159;&#MinusSquare-o142;&#MinusSquare-o168; Color">
              <rect id="MinusSquare-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
