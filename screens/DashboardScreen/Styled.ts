import { Button, ButtonProps } from "@mui/material";
import MuiBox, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const BoxWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      display: "flex",
      padding: "0 20px",
      alignItems: "center",
      flexDirection: "row",
      margin: theme.spacing(3),
      height: theme.height.barHeight,
      justifyContent: "space-between",
      boxShadow: theme.shadow.boxShadow,
      borderRadius: theme.borderRadius.radius1,
      backgroundColor: theme.palette.primary.light,
    } as any),
) as (props: BoxProps) => JSX.Element;

export const ButtonWrapper = styled(Button)<ButtonProps>(
  ({ theme }) =>
    ({
      display: "inline-block",
      fontSize: "16px",
      fontWeight: "700",
      height: "60px",
      lineHeight: "60px",
      textAlign: "center",
      padding: "0 50px",
      position: "relative",
      zIndex: "1",
      overflow: "hidden",
      borderRadius: theme.shape.borderRadius,
      textTransform: "capitalize",
      width: "100%",
    } as any),
) as (props: ButtonProps) => JSX.Element;
