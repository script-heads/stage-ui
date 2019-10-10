import { css } from "@emotion/core";
import useFlow from "../../misc/hooks/useFlow";
import Types from "./types";
import useStyleProps from "../../misc/hooks/useStyleProps";

export default (props: Types.Props) => {
  const { theme } = useFlow();
  const { self } = useStyleProps(props);

  return {
    container: css(
      self,
      {
        position: "fixed",
        zIndex: 999,
      },
    )
  };
};
