import { Options } from '@stage-ui/system/hooks/useSystem'
import CSS from 'csstype'
import { BreakpointProp } from '@stage-ui/system/props/breakpoint'

declare namespace TypographyTypes {
  interface LinkProps extends Props {
    /**
     * Prompts the user to save the linked URL instead of navigating to it
     */
    download?: string
    /**
     * The URL that the hyperlink points to
     */
    href?: string
    /**
     * Hints at the human language of the linked URL
     */
    hrefLang?: string
    /**
     * Specifies what media/device the linked document is optimized for
     */
    media?: string
    /**
     * A space-separated list of URLs
     */
    ping?: string
    /**
     * The relationship of the linked URL as space-separated link types
     */
    rel?: string
    /**
     * Where to display the linked URL
     */
    target?: string
    /**
     * Hints at the linked URL’s format with a MIME type
     */
    type?: string
    /**
     * How much of the referrer to send when following the link
     */
    referrerPolicy?: string
  }

  interface Props extends Omit<Stage.AllProps<HTMLDivElement, Classes>, 'textColor'> {
    /**
     * Capitalize first letter
     */
    capitalize?: boolean
    /**
     * Overflow text shortening
     */
    ellipsis?: boolean
    /**
     * Shorthand for text-decoration
     */
    decoration?: BreakpointProp<CSS.Properties['textDecoration']>

    /**
     * Content
     */
    children?: React.ReactNode
    /**
     * Text color
     */
    color?: BreakpointProp<Stage.ColorProp>
    /**
     * Shorthand for text-align
     */
    align?: BreakpointProp<CSS.Properties['textAlign']>
    /**
     * Shorthand for font-weight
     */
    weight?: BreakpointProp<CSS.Properties['fontWeight']>
    /**
     * Shorthand for font-size
     * @default m
     * @display Stage.Sizes
     * @link /props/#size
     */
    size?: BreakpointProp<Stage.Sizes | (string & { T?: string })>
    /**
     * Shorthand for text-transform
     */
    transform?: BreakpointProp<CSS.Properties['textTransform']>
  }

  type Classes = {
    /**
     * Root element
     */
    container: void
  }

  interface PrivateProps extends LinkProps {
    tag: string
    sizesOf: keyof Stage.ThemeAssets['typography']
    focus?: Options['focus']
    name: string
  }

  type Ref = HTMLSpanElement | HTMLAnchorElement | HTMLParagraphElement
}

export default TypographyTypes
