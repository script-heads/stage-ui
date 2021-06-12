/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="ToggleRightIcon/Fill/toggle-right">
          <path
            id="ToggleRightMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 11C14.448 11 14 11.448 14 12C14 12.552 14.448 13 15 13C15.552 13 16 12.552 16 12C16 11.448 15.552 11 15 11ZM15 15C13.346 15 12 13.654 12 12C12 10.346 13.346 9 15 9C16.654 9 18 10.346 18 12C18 13.654 16.654 15 15 15ZM15 5H9C5.141 5 2 8.141 2 12C2 15.859 5.141 19 9 19H15C18.859 19 22 15.859 22 12C22 8.141 18.859 5 15 5Z"
          />
          <mask
            id="ToggleRightmask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="5"
            width="20"
            height="14"
          >
            <path
              id="ToggleRightMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 11C14.448 11 14 11.448 14 12C14 12.552 14.448 13 15 13C15.552 13 16 12.552 16 12C16 11.448 15.552 11 15 11ZM15 15C13.346 15 12 13.654 12 12C12 10.346 13.346 9 15 9C16.654 9 18 10.346 18 12C18 13.654 16.654 15 15 15ZM15 5H9C5.141 5 2 8.141 2 12C2 15.859 5.141 19 9 19H15C18.859 19 22 15.859 22 12C22 8.141 18.859 5 15 5Z"
            />
          </mask>
          <g mask="url(#ToggleRightmask0)">
            <g id="ToggleRight&#ToggleRight240;&#ToggleRight159;&#ToggleRight142;&#ToggleRight168; Color">
              <rect id="ToggleRightBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="ToggleRight-oIcon/Outline/toggle-right">
          <path
            id="ToggleRight-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 13C14.448 13 14 12.552 14 12C14 11.448 14.448 11 15 11C15.552 11 16 11.448 16 12C16 12.552 15.552 13 15 13ZM15 9C13.346 9 12 10.346 12 12C12 13.654 13.346 15 15 15C16.654 15 18 13.654 18 12C18 10.346 16.654 9 15 9ZM15 17H9C6.243 17 4 14.757 4 12C4 9.243 6.243 7 9 7H15C17.757 7 20 9.243 20 12C20 14.757 17.757 17 15 17ZM15 5H9C5.141 5 2 8.141 2 12C2 15.859 5.141 19 9 19H15C18.859 19 22 15.859 22 12C22 8.141 18.859 5 15 5Z"
          />
          <mask
            id="ToggleRight-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="5"
            width="20"
            height="14"
          >
            <path
              id="ToggleRight-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 13C14.448 13 14 12.552 14 12C14 11.448 14.448 11 15 11C15.552 11 16 11.448 16 12C16 12.552 15.552 13 15 13ZM15 9C13.346 9 12 10.346 12 12C12 13.654 13.346 15 15 15C16.654 15 18 13.654 18 12C18 10.346 16.654 9 15 9ZM15 17H9C6.243 17 4 14.757 4 12C4 9.243 6.243 7 9 7H15C17.757 7 20 9.243 20 12C20 14.757 17.757 17 15 17ZM15 5H9C5.141 5 2 8.141 2 12C2 15.859 5.141 19 9 19H15C18.859 19 22 15.859 22 12C22 8.141 18.859 5 15 5Z"
            />
          </mask>
          <g mask="url(#ToggleRight-omask0)">
            <g id="ToggleRight-o&#ToggleRight-o240;&#ToggleRight-o159;&#ToggleRight-o142;&#ToggleRight-o168; Color">
              <rect id="ToggleRight-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
