/**
The MIT License (MIT)
*/

import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="PlusSquareIcon/Fill/plus-square">
          <g id="PlusSquare&#PlusSquare240;&#PlusSquare159;&#PlusSquare142;&#PlusSquare168; Color">
            <path
              id="PlusSquareMask"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 13H13V15C13 15.55 12.55 16 12 16C11.45 16 11 15.55 11 15V13H9C8.45 13 8 12.55 8 12C8 11.45 8.45 11 9 11H11V9C11 8.45 11.45 8 12 8C12.55 8 13 8.45 13 9V11H15C15.55 11 16 11.45 16 12C16 12.55 15.55 13 15 13ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z"
            />
            <mask id="PlusSquaremask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="18" height="18">
              <path
                id="PlusSquareMask_2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 13H13V15C13 15.55 12.55 16 12 16C11.45 16 11 15.55 11 15V13H9C8.45 13 8 12.55 8 12C8 11.45 8.45 11 9 11H11V9C11 8.45 11.45 8 12 8C12.55 8 13 8.45 13 9V11H15C15.55 11 16 11.45 16 12C16 12.55 15.55 13 15 13ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z"
              />
            </mask>
            <g mask="url(#PlusSquaremask0)">
              <g id="PlusSquare&#PlusSquare240;&#PlusSquare159;&#PlusSquare142;&#PlusSquare168; Color_2">
                <rect id="PlusSquareBase" width="24" height="24" />
              </g>
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="PlusSquare-oIcon/Outline/plus-square">
          <path
            id="PlusSquare-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 11H13V9C13 8.45 12.55 8 12 8C11.45 8 11 8.45 11 9V11H9C8.45 11 8 11.45 8 12C8 12.55 8.45 13 9 13H11V15C11 15.55 11.45 16 12 16C12.55 16 13 15.55 13 15V13H15C15.55 13 16 12.55 16 12C16 11.45 15.55 11 15 11ZM19 18C19 18.551 18.552 19 18 19H6C5.448 19 5 18.551 5 18V6C5 5.449 5.448 5 6 5H18C18.552 5 19 5.449 19 6V18ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z"
          />
          <mask id="PlusSquare-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="18" height="18">
            <path
              id="PlusSquare-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 11H13V9C13 8.45 12.55 8 12 8C11.45 8 11 8.45 11 9V11H9C8.45 11 8 11.45 8 12C8 12.55 8.45 13 9 13H11V15C11 15.55 11.45 16 12 16C12.55 16 13 15.55 13 15V13H15C15.55 13 16 12.55 16 12C16 11.45 15.55 11 15 11ZM19 18C19 18.551 18.552 19 18 19H6C5.448 19 5 18.551 5 18V6C5 5.449 5.448 5 6 5H18C18.552 5 19 5.449 19 6V18ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z"
            />
          </mask>
          <g mask="url(#PlusSquare-omask0)">
            <g id="PlusSquare-o&#PlusSquare-o240;&#PlusSquare-o159;&#PlusSquare-o142;&#PlusSquare-o168; Color">
              <rect id="PlusSquare-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
