import React, { useEffect } from "react";
import { database } from "platform/initFirebase";
import { ButtonWrapper } from "screens/RegisterScreen/Styled";
import { useRouter } from "next/router";
import FormattedMessage from "theme/FormattedMessage";
import messages from "./messages";
import { useSnackbar } from "notistack";
import { useFetchTodo } from "providers/Todo";
import { Grid, Typography } from "@mui/material";

const TodoListScreen = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const getTodo = useFetchTodo();
  console.log(getTodo.data, ".........get");
  useEffect(() => {}, []);
  return (
    <>
      <Grid>
        {getTodo?.data?.map((item: any) => {
          // console.log(item.data, "item.....");
          // <Typography>{item?.data?.title}</Typography>;
        })}

        <ButtonWrapper
          onClick={() => {
            router.replace("/app/todo/add");
          }}
        >
          <FormattedMessage {...messages.addTodo} />
        </ButtonWrapper>
      </Grid>
    </>
  );
};

export default TodoListScreen;
