/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="PlusCircleIcon/Fill/plus-circle">
          <path
            id="PlusCircleMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 13H13V15C13 15.55 12.55 16 12 16C11.45 16 11 15.55 11 15V13H9C8.45 13 8 12.55 8 12C8 11.45 8.45 11 9 11H11V9C11 8.45 11.45 8 12 8C12.55 8 13 8.45 13 9V11H15C15.55 11 16 11.45 16 12C16 12.55 15.55 13 15 13ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"
          />
          <mask
            id="PlusCirclemask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="2"
            width="20"
            height="20"
          >
            <path
              id="PlusCircleMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 13H13V15C13 15.55 12.55 16 12 16C11.45 16 11 15.55 11 15V13H9C8.45 13 8 12.55 8 12C8 11.45 8.45 11 9 11H11V9C11 8.45 11.45 8 12 8C12.55 8 13 8.45 13 9V11H15C15.55 11 16 11.45 16 12C16 12.55 15.55 13 15 13ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"
            />
          </mask>
          <g mask="url(#PlusCirclemask0)">
            <g id="PlusCircle&#PlusCircle240;&#PlusCircle159;&#PlusCircle142;&#PlusCircle168; Color">
              <rect id="PlusCircleBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="PlusCircle-oIcon/Outline/plus-circle">
          <path
            id="PlusCircle-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 11H13V9C13 8.45 12.55 8 12 8C11.45 8 11 8.45 11 9V11H9C8.45 11 8 11.45 8 12C8 12.55 8.45 13 9 13H11V15C11 15.55 11.45 16 12 16C12.55 16 13 15.55 13 15V13H15C15.55 13 16 12.55 16 12C16 11.45 15.55 11 15 11ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"
          />
          <mask
            id="PlusCircle-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="2"
            width="20"
            height="20"
          >
            <path
              id="PlusCircle-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 11H13V9C13 8.45 12.55 8 12 8C11.45 8 11 8.45 11 9V11H9C8.45 11 8 11.45 8 12C8 12.55 8.45 13 9 13H11V15C11 15.55 11.45 16 12 16C12.55 16 13 15.55 13 15V13H15C15.55 13 16 12.55 16 12C16 11.45 15.55 11 15 11ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"
            />
          </mask>
          <g mask="url(#PlusCircle-omask0)">
            <g id="PlusCircle-o&#PlusCircle-o240;&#PlusCircle-o159;&#PlusCircle-o142;&#PlusCircle-o168; Color">
              <rect id="PlusCircle-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
