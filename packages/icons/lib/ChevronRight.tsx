/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="ChevronRightIcon/Fill/chevron-right">
          <path
            id="ChevronRightMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.5 17C10.244 17 9.98801 16.902 9.79301 16.707C9.40201 16.316 9.40201 15.684 9.79301 15.293L13.098 11.988L9.91801 8.695C9.53501 8.297 9.54601 7.664 9.94301 7.281C10.341 6.898 10.974 6.909 11.357 7.305L15.219 11.305C15.598 11.698 15.593 12.321 15.207 12.707L11.207 16.707C11.012 16.902 10.756 17 10.5 17Z"
          />
          <mask
            id="ChevronRightmask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="9"
            y="7"
            width="7"
            height="10"
          >
            <path
              id="ChevronRightMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.5 17C10.244 17 9.98801 16.902 9.79301 16.707C9.40201 16.316 9.40201 15.684 9.79301 15.293L13.098 11.988L9.91801 8.695C9.53501 8.297 9.54601 7.664 9.94301 7.281C10.341 6.898 10.974 6.909 11.357 7.305L15.219 11.305C15.598 11.698 15.593 12.321 15.207 12.707L11.207 16.707C11.012 16.902 10.756 17 10.5 17Z"
            />
          </mask>
          <g mask="url(#ChevronRightmask0)">
            <g id="ChevronRight&#ChevronRight240;&#ChevronRight159;&#ChevronRight142;&#ChevronRight168; Color">
              <rect id="ChevronRightBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="ChevronRight-oIcon/Outline/chevron-right">
          <path
            id="ChevronRight-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.5 17C10.244 17 9.988 16.902 9.793 16.707C9.402 16.316 9.402 15.684 9.793 15.293L13.098 11.988L9.918 8.695C9.535 8.297 9.546 7.664 9.943 7.281C10.341 6.898 10.974 6.909 11.357 7.305L15.219 11.305C15.598 11.698 15.593 12.321 15.207 12.707L11.207 16.707C11.012 16.902 10.756 17 10.5 17Z"
          />
          <mask
            id="ChevronRight-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="9"
            y="7"
            width="7"
            height="10"
          >
            <path
              id="ChevronRight-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.5 17C10.244 17 9.988 16.902 9.793 16.707C9.402 16.316 9.402 15.684 9.793 15.293L13.098 11.988L9.918 8.695C9.535 8.297 9.546 7.664 9.943 7.281C10.341 6.898 10.974 6.909 11.357 7.305L15.219 11.305C15.598 11.698 15.593 12.321 15.207 12.707L11.207 16.707C11.012 16.902 10.756 17 10.5 17Z"
            />
          </mask>
          <g mask="url(#ChevronRight-omask0)">
            <g id="ChevronRight-o&#ChevronRight-o240;&#ChevronRight-o159;&#ChevronRight-o142;&#ChevronRight-o168; Color">
              <rect id="ChevronRight-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
