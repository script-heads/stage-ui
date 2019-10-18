import Types from "./types";
import useStyleProps from "../../misc/hooks/useStyleProps";

const DropStyles: Types.Styles = (props: Types.Props, theme) => {
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