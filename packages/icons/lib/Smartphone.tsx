/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="SmartphoneIcon/Fill/smartphone">
          <path
            id="SmartphoneMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.5 8.0007H9.5C8.947 8.0007 8.5 7.5537 8.5 7.0007C8.5 6.4477 8.947 6.0007 9.5 6.0007H14.5C15.053 6.0007 15.5 6.4477 15.5 7.0007C15.5 7.5537 15.053 8.0007 14.5 8.0007ZM12 18.0007C11.172 18.0007 10.5 17.3287 10.5 16.5007C10.5 15.6727 11.172 15.0007 12 15.0007C12.828 15.0007 13.5 15.6727 13.5 16.5007C13.5 17.3287 12.828 18.0007 12 18.0007ZM17 2.0007H7C5.346 2.0007 4 3.3467 4 5.0007V19.0007C4 20.6547 5.346 22.0007 7 22.0007H17C18.654 22.0007 20 20.6547 20 19.0007V5.0007C20 3.3467 18.654 2.0007 17 2.0007Z"
          />
          <mask
            id="Smartphonemask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="4"
            y="2"
            width="16"
            height="21"
          >
            <path
              id="SmartphoneMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.5 8.0007H9.5C8.947 8.0007 8.5 7.5537 8.5 7.0007C8.5 6.4477 8.947 6.0007 9.5 6.0007H14.5C15.053 6.0007 15.5 6.4477 15.5 7.0007C15.5 7.5537 15.053 8.0007 14.5 8.0007ZM12 18.0007C11.172 18.0007 10.5 17.3287 10.5 16.5007C10.5 15.6727 11.172 15.0007 12 15.0007C12.828 15.0007 13.5 15.6727 13.5 16.5007C13.5 17.3287 12.828 18.0007 12 18.0007ZM17 2.0007H7C5.346 2.0007 4 3.3467 4 5.0007V19.0007C4 20.6547 5.346 22.0007 7 22.0007H17C18.654 22.0007 20 20.6547 20 19.0007V5.0007C20 3.3467 18.654 2.0007 17 2.0007Z"
            />
          </mask>
          <g mask="url(#Smartphonemask0)">
            <g id="Smartphone&#Smartphone240;&#Smartphone159;&#Smartphone142;&#Smartphone168; Color">
              <rect id="SmartphoneBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Smartphone-oIcon/Outline/smartphone">
          <path
            id="Smartphone-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.5 6H14.5C15.053 6 15.5 6.447 15.5 7C15.5 7.553 15.053 8 14.5 8H9.5C8.947 8 8.5 7.553 8.5 7C8.5 6.447 8.947 6 9.5 6ZM10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18C11.172 18 10.5 17.328 10.5 16.5ZM18 19C18 19.552 17.552 20 17 20H7C6.448 20 6 19.552 6 19V5C6 4.448 6.448 4 7 4H17C17.552 4 18 4.448 18 5V19ZM17 2H7C5.346 2 4 3.346 4 5V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V5C20 3.346 18.654 2 17 2Z"
          />
          <mask
            id="Smartphone-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="4"
            y="2"
            width="16"
            height="20"
          >
            <path
              id="Smartphone-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.5 6H14.5C15.053 6 15.5 6.447 15.5 7C15.5 7.553 15.053 8 14.5 8H9.5C8.947 8 8.5 7.553 8.5 7C8.5 6.447 8.947 6 9.5 6ZM10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18C11.172 18 10.5 17.328 10.5 16.5ZM18 19C18 19.552 17.552 20 17 20H7C6.448 20 6 19.552 6 19V5C6 4.448 6.448 4 7 4H17C17.552 4 18 4.448 18 5V19ZM17 2H7C5.346 2 4 3.346 4 5V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V5C20 3.346 18.654 2 17 2Z"
            />
          </mask>
          <g mask="url(#Smartphone-omask0)">
            <g id="Smartphone-o&#Smartphone-o240;&#Smartphone-o159;&#Smartphone-o142;&#Smartphone-o168; Color">
              <rect id="Smartphone-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
