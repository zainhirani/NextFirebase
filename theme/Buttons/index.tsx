import MuiBox, { BoxProps } from "@mui/material/Box";
import Button, { ButtonProps } from "@mui/material/Button";
import { alpha, styled } from "@mui/material/styles";

export const ButtonWrapper = styled(Button)<ButtonProps>(
  ({ theme }) =>
    ({
      fontSize: "14px",
      fontWeight: "400",
      height: "40px",
      textTransform: "capitalize",
      borderRadius: theme.borderRadius.radius1,
    } as any),
) as (props: ButtonProps) => JSX.Element;

export const TableButtonWrapper = styled(Button)<ButtonProps>(
  ({ theme }) =>
    ({
      fontSize: "13px",
      fontWeight: "300",
      textTransform: "capitalize",
      borderRadius: theme.borderRadius.radius1,
    } as any),
) as (props: ButtonProps) => JSX.Element;
