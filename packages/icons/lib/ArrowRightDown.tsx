/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="ArrowRightDownIcon/Fill/arrow-right-down">
          <path
            id="ArrowRightDownMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 8.00001C16.447 8.00001 16 8.44801 16 9.00001V14.586L7.70701 6.29301C7.31601 5.90201 6.68401 5.90201 6.29301 6.29301C5.90201 6.68401 5.90201 7.31601 6.29301 7.70701L14.586 16H9.00001C8.44701 16 8.00001 16.448 8.00001 17C8.00001 17.552 8.44701 18 9.00001 18H17C17.553 18 18 17.552 18 17V9.00001C18 8.44801 17.553 8.00001 17 8.00001Z"
          />
          <mask
            id="ArrowRightDownmask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="5"
            y="5"
            width="13"
            height="13"
          >
            <path
              id="ArrowRightDownMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 8.00001C16.447 8.00001 16 8.44801 16 9.00001V14.586L7.70701 6.29301C7.31601 5.90201 6.68401 5.90201 6.29301 6.29301C5.90201 6.68401 5.90201 7.31601 6.29301 7.70701L14.586 16H9.00001C8.44701 16 8.00001 16.448 8.00001 17C8.00001 17.552 8.44701 18 9.00001 18H17C17.553 18 18 17.552 18 17V9.00001C18 8.44801 17.553 8.00001 17 8.00001Z"
            />
          </mask>
          <g mask="url(#ArrowRightDownmask0)">
            <g id="ArrowRightDown&#ArrowRightDown240;&#ArrowRightDown159;&#ArrowRightDown142;&#ArrowRightDown168; Color">
              <rect id="ArrowRightDownBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="ArrowRightDown-oIcon/Outline/arrow-right-down">
          <path
            id="ArrowRightDown-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 8.00001C16.447 8.00001 16 8.44801 16 9.00001V14.586L7.70701 6.29301C7.31601 5.90201 6.68401 5.90201 6.29301 6.29301C5.90201 6.68401 5.90201 7.31601 6.29301 7.70701L14.586 16H9.00001C8.44701 16 8.00001 16.448 8.00001 17C8.00001 17.552 8.44701 18 9.00001 18H17C17.553 18 18 17.552 18 17V9.00001C18 8.44801 17.553 8.00001 17 8.00001Z"
          />
          <mask
            id="ArrowRightDown-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="5"
            y="5"
            width="13"
            height="13"
          >
            <path
              id="ArrowRightDown-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 8.00001C16.447 8.00001 16 8.44801 16 9.00001V14.586L7.70701 6.29301C7.31601 5.90201 6.68401 5.90201 6.29301 6.29301C5.90201 6.68401 5.90201 7.31601 6.29301 7.70701L14.586 16H9.00001C8.44701 16 8.00001 16.448 8.00001 17C8.00001 17.552 8.44701 18 9.00001 18H17C17.553 18 18 17.552 18 17V9.00001C18 8.44801 17.553 8.00001 17 8.00001Z"
            />
          </mask>
          <g mask="url(#ArrowRightDown-omask0)">
            <g id="ArrowRightDown-o&#ArrowRightDown-o240;&#ArrowRightDown-o159;&#ArrowRightDown-o142;&#ArrowRightDown-o168; Color">
              <rect id="ArrowRightDown-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
