import Types from "./types";
import useStyleProps from "@flow-ui/core/misc/hooks/useStyleProps";
import Global from "../../types";

const DropStyles: Global.FunctionalComponentStyles<Types.Styles> = (props: Types.Props) => {
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