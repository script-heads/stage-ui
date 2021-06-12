/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="UploadIcon/Fill/upload">
          <path
            id="UploadMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 4H19C19.55 4 20 4.45 20 5V7C20 7.55 19.55 8 19 8C18.45 8 18 7.55 18 7V6H6V7C6 7.55 5.55 8 5 8C4.45 8 4 7.55 4 7V5C4 4.45 4.45 4 5 4ZM8.001 14C7.696 14 7.397 13.862 7.2 13.6C6.868 13.158 6.958 12.531 7.4 12.2L11.4 9.2C11.746 8.94 12.222 8.933 12.575 9.182L16.575 11.996C17.027 12.314 17.136 12.938 16.818 13.389C16.5 13.84 15.877 13.95 15.425 13.632L12.9972 11.9241C12.999 11.9492 13 11.9745 13 12V20C13 20.552 12.553 21 12 21C11.447 21 11 20.552 11 20V12.0002L8.6 13.8C8.42 13.935 8.21 14 8.001 14Z"
          />
          <mask
            id="Uploadmask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="4"
            y="4"
            width="16"
            height="17"
          >
            <path
              id="UploadMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 4H19C19.55 4 20 4.45 20 5V7C20 7.55 19.55 8 19 8C18.45 8 18 7.55 18 7V6H6V7C6 7.55 5.55 8 5 8C4.45 8 4 7.55 4 7V5C4 4.45 4.45 4 5 4ZM8.001 14C7.696 14 7.397 13.862 7.2 13.6C6.868 13.158 6.958 12.531 7.4 12.2L11.4 9.2C11.746 8.94 12.222 8.933 12.575 9.182L16.575 11.996C17.027 12.314 17.136 12.938 16.818 13.389C16.5 13.84 15.877 13.95 15.425 13.632L12.9972 11.9241C12.999 11.9492 13 11.9745 13 12V20C13 20.552 12.553 21 12 21C11.447 21 11 20.552 11 20V12.0002L8.6 13.8C8.42 13.935 8.21 14 8.001 14Z"
            />
          </mask>
          <g mask="url(#Uploadmask0)">
            <g id="Upload&#Upload240;&#Upload159;&#Upload142;&#Upload168; Color">
              <rect id="UploadBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Upload-oIcon/Outline/upload">
          <path
            id="Upload-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 4H19C19.55 4 20 4.45 20 5V7C20 7.55 19.55 8 19 8C18.45 8 18 7.55 18 7V6H6V7C6 7.55 5.55 8 5 8C4.45 8 4 7.55 4 7V5C4 4.45 4.45 4 5 4ZM8.001 14C7.696 14 7.397 13.862 7.2 13.6C6.868 13.158 6.958 12.531 7.4 12.2L11.4 9.2C11.746 8.94 12.222 8.933 12.575 9.182L16.575 11.996C17.027 12.314 17.136 12.938 16.818 13.389C16.5 13.84 15.877 13.95 15.425 13.632L12.9972 11.9241C12.999 11.9492 13 11.9745 13 12V20C13 20.552 12.553 21 12 21C11.447 21 11 20.552 11 20V12.0002L8.6 13.8C8.42 13.935 8.21 14 8.001 14Z"
          />
          <mask
            id="Upload-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="4"
            y="4"
            width="16"
            height="17"
          >
            <path
              id="Upload-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 4H19C19.55 4 20 4.45 20 5V7C20 7.55 19.55 8 19 8C18.45 8 18 7.55 18 7V6H6V7C6 7.55 5.55 8 5 8C4.45 8 4 7.55 4 7V5C4 4.45 4.45 4 5 4ZM8.001 14C7.696 14 7.397 13.862 7.2 13.6C6.868 13.158 6.958 12.531 7.4 12.2L11.4 9.2C11.746 8.94 12.222 8.933 12.575 9.182L16.575 11.996C17.027 12.314 17.136 12.938 16.818 13.389C16.5 13.84 15.877 13.95 15.425 13.632L12.9972 11.9241C12.999 11.9492 13 11.9745 13 12V20C13 20.552 12.553 21 12 21C11.447 21 11 20.552 11 20V12.0002L8.6 13.8C8.42 13.935 8.21 14 8.001 14Z"
            />
          </mask>
          <g mask="url(#Upload-omask0)">
            <g id="Upload-o&#Upload-o240;&#Upload-o159;&#Upload-o142;&#Upload-o168; Color">
              <rect id="Upload-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
