/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="PrinterIcon/Fill/printer">
          <path
            id="PrinterMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 19V15H16.5L16.502 19H7.5ZM8.014 5H16V7H8.007L8.014 5ZM19.363 7H18V5C18 3.897 17.178 3 16.167 3H7.833C6.822 3 6 3.897 6 5V7H4.637C3.183 7 2 8.196 2 9.667V16.333C2 17.804 3.183 19 4.637 19H5.5C5.5 20.103 6.397 21 7.5 21H16.5C17.603 21 18.5 20.103 18.5 19H19.363C20.817 19 22 17.804 22 16.333V9.667C22 8.196 20.817 7 19.363 7Z"
          />
          <mask
            id="Printermask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="3"
            width="20"
            height="18"
          >
            <path
              id="PrinterMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.5 19V15H16.5L16.502 19H7.5ZM8.014 5H16V7H8.007L8.014 5ZM19.363 7H18V5C18 3.897 17.178 3 16.167 3H7.833C6.822 3 6 3.897 6 5V7H4.637C3.183 7 2 8.196 2 9.667V16.333C2 17.804 3.183 19 4.637 19H5.5C5.5 20.103 6.397 21 7.5 21H16.5C17.603 21 18.5 20.103 18.5 19H19.363C20.817 19 22 17.804 22 16.333V9.667C22 8.196 20.817 7 19.363 7Z"
            />
          </mask>
          <g mask="url(#Printermask0)">
            <g id="Printer&#Printer240;&#Printer159;&#Printer142;&#Printer168; Color">
              <rect id="PrinterBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Printer-oIcon/Outline/printer">
          <path
            id="Printer-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 16.333C20 16.701 19.715 17 19.363 17H18.5V15C18.5 13.897 17.603 13 16.5 13H7.5C6.397 13 5.5 13.897 5.5 15V17H4.637C4.285 17 4 16.701 4 16.333V9.667C4 9.299 4.285 9 4.637 9H6H8H16H18H19.363C19.715 9 20 9.299 20 9.667V16.333ZM7.5 19V15H16.5L16.502 19H7.5ZM8.014 5H16V7H8.007L8.014 5ZM19.363 7H18V5C18 3.897 17.178 3 16.167 3H7.833C6.822 3 6 3.897 6 5V7H4.637C3.183 7 2 8.196 2 9.667V16.333C2 17.804 3.183 19 4.637 19H5.5C5.5 20.103 6.397 21 7.5 21H16.5C17.603 21 18.5 20.103 18.5 19H19.363C20.817 19 22 17.804 22 16.333V9.667C22 8.196 20.817 7 19.363 7Z"
          />
          <mask
            id="Printer-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="3"
            width="20"
            height="18"
          >
            <path
              id="Printer-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 16.333C20 16.701 19.715 17 19.363 17H18.5V15C18.5 13.897 17.603 13 16.5 13H7.5C6.397 13 5.5 13.897 5.5 15V17H4.637C4.285 17 4 16.701 4 16.333V9.667C4 9.299 4.285 9 4.637 9H6H8H16H18H19.363C19.715 9 20 9.299 20 9.667V16.333ZM7.5 19V15H16.5L16.502 19H7.5ZM8.014 5H16V7H8.007L8.014 5ZM19.363 7H18V5C18 3.897 17.178 3 16.167 3H7.833C6.822 3 6 3.897 6 5V7H4.637C3.183 7 2 8.196 2 9.667V16.333C2 17.804 3.183 19 4.637 19H5.5C5.5 20.103 6.397 21 7.5 21H16.5C17.603 21 18.5 20.103 18.5 19H19.363C20.817 19 22 17.804 22 16.333V9.667C22 8.196 20.817 7 19.363 7Z"
            />
          </mask>
          <g mask="url(#Printer-omask0)">
            <g id="Printer-o&#Printer-o240;&#Printer-o159;&#Printer-o142;&#Printer-o168; Color">
              <rect id="Printer-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
