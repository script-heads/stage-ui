/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="ToggleLeftIcon/Fill/toggle-left">
          <path
            id="ToggleLeftMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.0029 11.0059C8.4509 11.0059 8.0049 11.4539 8.0059 12.0059C8.0059 12.5569 8.4539 13.0039 9.0059 13.0029C9.5569 13.0019 10.0039 12.5539 10.0029 12.0029C10.0019 11.4509 9.5539 11.0049 9.0029 11.0059ZM9.0078 15C7.3558 15.002 6.0098 13.66 6.0078 12.008C6.0058 10.355 7.3478 9.00999 8.9998 9.00799C10.6528 9.00599 11.9978 10.348 11.9998 12C12.0018 13.652 10.6598 14.998 9.0078 15ZM14.9868 5.00599L8.9938 5.01399C5.1408 5.01899 2.0078 8.15899 2.0138 12.014C2.0188 15.867 5.1588 19 9.0138 18.994L15.0058 18.986C18.8598 18.981 21.9918 15.841 21.9868 11.986C21.9818 8.13299 18.8408 4.99999 14.9868 5.00599Z"
          />
          <mask
            id="ToggleLeftmask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="5"
            width="20"
            height="14"
          >
            <path
              id="ToggleLeftMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.0029 11.0059C8.4509 11.0059 8.0049 11.4539 8.0059 12.0059C8.0059 12.5569 8.4539 13.0039 9.0059 13.0029C9.5569 13.0019 10.0039 12.5539 10.0029 12.0029C10.0019 11.4509 9.5539 11.0049 9.0029 11.0059ZM9.0078 15C7.3558 15.002 6.0098 13.66 6.0078 12.008C6.0058 10.355 7.3478 9.00999 8.9998 9.00799C10.6528 9.00599 11.9978 10.348 11.9998 12C12.0018 13.652 10.6598 14.998 9.0078 15ZM14.9868 5.00599L8.9938 5.01399C5.1408 5.01899 2.0078 8.15899 2.0138 12.014C2.0188 15.867 5.1588 19 9.0138 18.994L15.0058 18.986C18.8598 18.981 21.9918 15.841 21.9868 11.986C21.9818 8.13299 18.8408 4.99999 14.9868 5.00599Z"
            />
          </mask>
          <g mask="url(#ToggleLeftmask0)">
            <g id="ToggleLeft&#ToggleLeft240;&#ToggleLeft159;&#ToggleLeft142;&#ToggleLeft168; Color">
              <rect id="ToggleLeftBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="ToggleLeft-oIcon/Outline/toggle-left">
          <path
            id="ToggleLeft-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 13C8.448 13 8 12.552 8 12C8 11.448 8.448 11 9 11C9.552 11 10 11.448 10 12C10 12.552 9.552 13 9 13ZM9 9C7.346 9 6 10.346 6 12C6 13.654 7.346 15 9 15C10.654 15 12 13.654 12 12C12 10.346 10.654 9 9 9ZM15 17H9C6.243 17 4 14.757 4 12C4 9.243 6.243 7 9 7H15C17.757 7 20 9.243 20 12C20 14.757 17.757 17 15 17ZM15 5H9C5.141 5 2 8.141 2 12C2 15.859 5.141 19 9 19H15C18.859 19 22 15.859 22 12C22 8.141 18.859 5 15 5Z"
          />
          <mask
            id="ToggleLeft-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="5"
            width="20"
            height="14"
          >
            <path
              id="ToggleLeft-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 13C8.448 13 8 12.552 8 12C8 11.448 8.448 11 9 11C9.552 11 10 11.448 10 12C10 12.552 9.552 13 9 13ZM9 9C7.346 9 6 10.346 6 12C6 13.654 7.346 15 9 15C10.654 15 12 13.654 12 12C12 10.346 10.654 9 9 9ZM15 17H9C6.243 17 4 14.757 4 12C4 9.243 6.243 7 9 7H15C17.757 7 20 9.243 20 12C20 14.757 17.757 17 15 17ZM15 5H9C5.141 5 2 8.141 2 12C2 15.859 5.141 19 9 19H15C18.859 19 22 15.859 22 12C22 8.141 18.859 5 15 5Z"
            />
          </mask>
          <g mask="url(#ToggleLeft-omask0)">
            <g id="ToggleLeft-o&#ToggleLeft-o240;&#ToggleLeft-o159;&#ToggleLeft-o142;&#ToggleLeft-o168; Color">
              <rect id="ToggleLeft-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
