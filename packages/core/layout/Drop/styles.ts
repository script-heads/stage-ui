import useStyleProps from "@flow-ui/core/misc/hooks/useStyleProps";
import DropTypes from "./types";

const DropStyles: DropTypes.Styles = (props: DropTypes.Props, theme) => {
  const styleProps = useStyleProps(props);

  return {
    container: [
      styleProps.self,
      {
        willChange: 'scroll-position',
        position: "fixed",
        zIndex: 999,
      }
    ]
  }
};
export default DropStyles