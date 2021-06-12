/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="MaximizeIcon/Fill/maximize">
          <path
            id="MaximizeMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 12H12V13C12 13.55 11.55 14 11 14C10.45 14 10 13.55 10 13V12H9C8.45 12 8 11.55 8 11C8 10.45 8.45 10 9 10H10V9C10 8.45 10.45 8 11 8C11.55 8 12 8.45 12 9V10H13C13.55 10 14 10.45 14 11C14 11.55 13.55 12 13 12ZM20.707 19.293L17.312 15.897C18.365 14.543 19 12.846 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19C12.846 19 14.543 18.365 15.897 17.312L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293Z"
          />
          <mask
            id="Maximizemask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="3"
            y="3"
            width="19"
            height="18"
          >
            <path
              id="MaximizeMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 12H12V13C12 13.55 11.55 14 11 14C10.45 14 10 13.55 10 13V12H9C8.45 12 8 11.55 8 11C8 10.45 8.45 10 9 10H10V9C10 8.45 10.45 8 11 8C11.55 8 12 8.45 12 9V10H13C13.55 10 14 10.45 14 11C14 11.55 13.55 12 13 12ZM20.707 19.293L17.312 15.897C18.365 14.543 19 12.846 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19C12.846 19 14.543 18.365 15.897 17.312L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293Z"
            />
          </mask>
          <g mask="url(#Maximizemask0)">
            <g id="Maximize&#Maximize240;&#Maximize159;&#Maximize142;&#Maximize168; Color">
              <rect id="MaximizeBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Maximize-oIcon/Outline/maximize">
          <path
            id="Maximize-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 10H12V9C12 8.45 11.55 8 11 8C10.45 8 10 8.45 10 9V10H9C8.45 10 8 10.45 8 11C8 11.55 8.45 12 9 12H10V13C10 13.55 10.45 14 11 14C11.55 14 12 13.55 12 13V12H13C13.55 12 14 11.55 14 11C14 10.45 13.55 10 13 10ZM5 11C5 7.691 7.691 5 11 5C14.309 5 17 7.691 17 11C17 14.309 14.309 17 11 17C7.691 17 5 14.309 5 11ZM20.707 19.293L17.312 15.897C18.365 14.543 19 12.846 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19C12.846 19 14.543 18.365 15.897 17.312L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293Z"
          />
          <mask
            id="Maximize-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="3"
            y="3"
            width="19"
            height="18"
          >
            <path
              id="Maximize-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 10H12V9C12 8.45 11.55 8 11 8C10.45 8 10 8.45 10 9V10H9C8.45 10 8 10.45 8 11C8 11.55 8.45 12 9 12H10V13C10 13.55 10.45 14 11 14C11.55 14 12 13.55 12 13V12H13C13.55 12 14 11.55 14 11C14 10.45 13.55 10 13 10ZM5 11C5 7.691 7.691 5 11 5C14.309 5 17 7.691 17 11C17 14.309 14.309 17 11 17C7.691 17 5 14.309 5 11ZM20.707 19.293L17.312 15.897C18.365 14.543 19 12.846 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19C12.846 19 14.543 18.365 15.897 17.312L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293Z"
            />
          </mask>
          <g mask="url(#Maximize-omask0)">
            <g id="Maximize-o&#Maximize-o240;&#Maximize-o159;&#Maximize-o142;&#Maximize-o168; Color">
              <rect id="Maximize-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
