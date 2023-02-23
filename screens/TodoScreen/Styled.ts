import MuiBox, { BoxProps } from "@mui/material/Box";
import CardHeader, { CardHeaderProps } from "@mui/material/CardHeader";
import InputLabel, { InputLabelProps } from "@mui/material/InputLabel";
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

export const CardHeaderWrapper = styled(CardHeader)<CardHeaderProps>(
  ({ theme }) =>
    ({
      borderBottom: "1px solid rgba(0,0,0,0.05)",
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    } as any),
) as (props: CardHeaderProps) => JSX.Element;

export const InputLabelWrapper = styled(InputLabel)<InputLabelProps>(
  ({ theme }) =>
    ({
      marginBottom: theme.spacing(1),
      color: theme.additionalColors?.secondryBlack,
    } as any),
) as (props: InputLabelProps) => JSX.Element;
