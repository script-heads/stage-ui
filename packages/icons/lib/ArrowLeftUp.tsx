/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="ArrowLeftUpIcon/Fill/arrow-left-up">
          <path
            id="ArrowLeftUpMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.707 16.293L9.41803 8.004L15.001 8C15.553 8 16 7.551 16 6.999C16 6.447 15.552 6 15 6H14.999L7.04903 6.006C6.49903 6.007 6.05403 6.451 6.05003 7L6.00003 14.994C5.99603 15.546 6.44103 15.997 6.99403 16H7.00003C7.55003 16 7.99603 15.556 8.00003 15.006L8.03503 9.449L16.293 17.707C16.488 17.902 16.744 18 17 18C17.256 18 17.512 17.902 17.707 17.707C18.098 17.316 18.098 16.684 17.707 16.293Z"
          />
          <mask
            id="ArrowLeftUpmask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="6"
            y="6"
            width="13"
            height="12"
          >
            <path
              id="ArrowLeftUpMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.707 16.293L9.41803 8.004L15.001 8C15.553 8 16 7.551 16 6.999C16 6.447 15.552 6 15 6H14.999L7.04903 6.006C6.49903 6.007 6.05403 6.451 6.05003 7L6.00003 14.994C5.99603 15.546 6.44103 15.997 6.99403 16H7.00003C7.55003 16 7.99603 15.556 8.00003 15.006L8.03503 9.449L16.293 17.707C16.488 17.902 16.744 18 17 18C17.256 18 17.512 17.902 17.707 17.707C18.098 17.316 18.098 16.684 17.707 16.293Z"
            />
          </mask>
          <g mask="url(#ArrowLeftUpmask0)">
            <g id="ArrowLeftUp&#ArrowLeftUp240;&#ArrowLeftUp159;&#ArrowLeftUp142;&#ArrowLeftUp168; Color">
              <rect id="ArrowLeftUpBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="ArrowLeftUp-oIcon/Outline/arrow-left-up">
          <path
            id="ArrowLeftUp-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.707 16.293L9.418 8.004L15.001 8C15.553 8 16 7.551 16 6.999C16 6.447 15.552 6 15 6H14.999L7.049 6.006C6.499 6.007 6.054 6.451 6.05 7L6 14.994C5.996 15.546 6.441 15.997 6.994 16H7C7.55 16 7.996 15.556 8 15.006L8.035 9.449L16.293 17.707C16.488 17.902 16.744 18 17 18C17.256 18 17.512 17.902 17.707 17.707C18.098 17.316 18.098 16.684 17.707 16.293Z"
          />
          <mask
            id="ArrowLeftUp-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="6"
            y="6"
            width="13"
            height="12"
          >
            <path
              id="ArrowLeftUp-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.707 16.293L9.418 8.004L15.001 8C15.553 8 16 7.551 16 6.999C16 6.447 15.552 6 15 6H14.999L7.049 6.006C6.499 6.007 6.054 6.451 6.05 7L6 14.994C5.996 15.546 6.441 15.997 6.994 16H7C7.55 16 7.996 15.556 8 15.006L8.035 9.449L16.293 17.707C16.488 17.902 16.744 18 17 18C17.256 18 17.512 17.902 17.707 17.707C18.098 17.316 18.098 16.684 17.707 16.293Z"
            />
          </mask>
          <g mask="url(#ArrowLeftUp-omask0)">
            <g id="ArrowLeftUp-o&#ArrowLeftUp-o240;&#ArrowLeftUp-o159;&#ArrowLeftUp-o142;&#ArrowLeftUp-o168; Color">
              <rect id="ArrowLeftUp-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
