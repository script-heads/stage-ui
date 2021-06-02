declare namespace TreeTypes {
  type RenderChildOptions = {
    isOpen: boolean
    isParentOpen: boolean
    hasChilds: boolean
    lvl: number
  }
  type RenderChild = (options: RenderChildOptions) => React.ReactNode
  interface Props extends Stage.AllProps<HTMLDivElement, Styles> {
    label?: React.ReactNode | string | RenderChild
    leftChild?: React.ReactNode | string | RenderChild
    rightChild?: React.ReactNode | string | RenderChild
    children?: React.ReactNode
    decoration?: 'none' | 'finder'
    size?: Stage.Sizes
    open?: boolean
    defaultOpen?: boolean
    indent?: boolean
  }
  interface PrivateProps extends Props {
    lvl: number
    isParentOpen: boolean
  }

  interface TreeLabelProps {
    children?: Props['label']
    className?: Props['className']
    size: Props['size']
    options: RenderChildOptions
  }

  interface TreeLeftChildProps {
    children?: Props['leftChild']
    className?: Props['className']
    size: Props['size']
    options: RenderChildOptions
  }

  interface TreeRightChildProps {
    children?: Props['leftChild']
    className?: Props['className']
    size: Props['size']
    options: RenderChildOptions
  }

  interface ExtentedReactElement extends Omit<React.ReactElement, 'type'> {
    type: {
      render: {
        name: string
      }
    }
  }

  interface StyleState {
    hasChilds: boolean
    decoration: Props['decoration']
    size: Props['size']
  }
  interface Styles {
    container: StyleState
    row: StyleState
    label: StyleState
    arrow: StyleState
    child: {
      isOpen: boolean
    }
  }
}

export default TreeTypes
