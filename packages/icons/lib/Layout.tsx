/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="LayoutIcon/Fill/layout">
          <path
            id="LayoutMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21 8V6C21 4.346 19.654 3 18 3H6C4.346 3 3 4.346 3 6V8H21ZM3 10V18C3 19.654 4.346 21 6 21H11V10H3ZM13 21V10H21V18C21 19.654 19.654 21 18 21H13Z"
          />
          <mask
            id="Layoutmask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="3"
            y="3"
            width="18"
            height="18"
          >
            <path
              id="LayoutMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21 8V6C21 4.346 19.654 3 18 3H6C4.346 3 3 4.346 3 6V8H21ZM3 10V18C3 19.654 4.346 21 6 21H11V10H3ZM13 21V10H21V18C21 19.654 19.654 21 18 21H13Z"
            />
          </mask>
          <g mask="url(#Layoutmask0)">
            <g id="Layout&#Layout240;&#Layout159;&#Layout142;&#Layout168; Color">
              <rect id="LayoutBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Layout-oIcon/Outline/layout">
          <path
            id="Layout-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 19H13V10H19V18C19 18.552 18.551 19 18 19ZM5 18V10H11V19H6C5.449 19 5 18.552 5 18ZM6 5H18C18.551 5 19 5.448 19 6V8H5V6C5 5.448 5.449 5 6 5ZM18 3H6C4.346 3 3 4.346 3 6V8.818V9.182V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V9.182V8.818V6C21 4.346 19.654 3 18 3Z"
          />
          <mask
            id="Layout-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="3"
            y="3"
            width="18"
            height="18"
          >
            <path
              id="Layout-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 19H13V10H19V18C19 18.552 18.551 19 18 19ZM5 18V10H11V19H6C5.449 19 5 18.552 5 18ZM6 5H18C18.551 5 19 5.448 19 6V8H5V6C5 5.448 5.449 5 6 5ZM18 3H6C4.346 3 3 4.346 3 6V8.818V9.182V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V9.182V8.818V6C21 4.346 19.654 3 18 3Z"
            />
          </mask>
          <g mask="url(#Layout-omask0)">
            <g id="Layout-o&#Layout-o240;&#Layout-o159;&#Layout-o142;&#Layout-o168; Color">
              <rect id="Layout-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
