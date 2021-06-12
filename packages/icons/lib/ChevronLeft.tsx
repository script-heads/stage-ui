/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="ChevronLeftIcon/Fill/chevron-left">
          <path
            id="ChevronLeftMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.3623 17C13.1003 17 12.8393 16.898 12.6433 16.695L8.78028 12.695C8.40228 12.302 8.40728 11.679 8.79328 11.293L12.7933 7.29301C13.1833 6.90201 13.8163 6.90201 14.2073 7.29301C14.5973 7.68401 14.5973 8.31601 14.2073 8.70701L10.9023 12.012L14.0813 15.305C14.4653 15.703 14.4543 16.336 14.0573 16.719C13.8623 16.907 13.6123 17 13.3623 17Z"
          />
          <mask
            id="ChevronLeftmask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="8"
            y="6"
            width="7"
            height="11"
          >
            <path
              id="ChevronLeftMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.3623 17C13.1003 17 12.8393 16.898 12.6433 16.695L8.78028 12.695C8.40228 12.302 8.40728 11.679 8.79328 11.293L12.7933 7.29301C13.1833 6.90201 13.8163 6.90201 14.2073 7.29301C14.5973 7.68401 14.5973 8.31601 14.2073 8.70701L10.9023 12.012L14.0813 15.305C14.4653 15.703 14.4543 16.336 14.0573 16.719C13.8623 16.907 13.6123 17 13.3623 17Z"
            />
          </mask>
          <g mask="url(#ChevronLeftmask0)">
            <g id="ChevronLeft&#ChevronLeft240;&#ChevronLeft159;&#ChevronLeft142;&#ChevronLeft168; Color">
              <rect id="ChevronLeftBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="ChevronLeft-oIcon/Outline/chevron-left">
          <path
            id="ChevronLeft-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.3623 17C13.1003 17 12.8393 16.898 12.6433 16.695L8.7803 12.695C8.4023 12.302 8.4073 11.679 8.7933 11.293L12.7933 7.29301C13.1833 6.90201 13.8163 6.90201 14.2073 7.29301C14.5973 7.68401 14.5973 8.31601 14.2073 8.70701L10.9023 12.012L14.0813 15.305C14.4653 15.703 14.4543 16.336 14.0573 16.719C13.8623 16.907 13.6123 17 13.3623 17Z"
          />
          <mask
            id="ChevronLeft-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="8"
            y="6"
            width="7"
            height="11"
          >
            <path
              id="ChevronLeft-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.3623 17C13.1003 17 12.8393 16.898 12.6433 16.695L8.7803 12.695C8.4023 12.302 8.4073 11.679 8.7933 11.293L12.7933 7.29301C13.1833 6.90201 13.8163 6.90201 14.2073 7.29301C14.5973 7.68401 14.5973 8.31601 14.2073 8.70701L10.9023 12.012L14.0813 15.305C14.4653 15.703 14.4543 16.336 14.0573 16.719C13.8623 16.907 13.6123 17 13.3623 17Z"
            />
          </mask>
          <g mask="url(#ChevronLeft-omask0)">
            <g id="ChevronLeft-o&#ChevronLeft-o240;&#ChevronLeft-o159;&#ChevronLeft-o142;&#ChevronLeft-o168; Color">
              <rect id="ChevronLeft-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
