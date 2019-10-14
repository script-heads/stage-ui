import useFlow from "../../misc/hooks/useFlow";
import Types from "./types";
import useStyleProps from "../../misc/hooks/useStyleProps";
import createStyles from "../../misc/utils/createStyles";

export default (props: Types.Props) => {
  const { theme } = useFlow();
  const styleProps = useStyleProps(props);

  return createStyles({
    props,
    overrides: theme.overrides.drop,
    styles: {
      container: [
        styleProps.self,
        {
          position: "fixed",
          zIndex: 999,
        }
      ]
    }
  });
};
