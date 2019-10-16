import DropTypes from "./types";
import useStyleProps from "../../misc/hooks/useStyleProps";

const DropStyles: DropTypes.Styles = (props: DropTypes.Props, theme) => {
  const styleProps = useStyleProps(props);

  return {
    container: [
      styleProps.self,
      {
        position: "fixed",
        zIndex: 999,
      }
    ]
}
};
export default DropStyles