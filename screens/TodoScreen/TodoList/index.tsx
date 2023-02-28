import React, { useEffect } from "react";
import { database } from "platform/initFirebase";
import { ButtonWrapper } from "screens/RegisterScreen/Styled";
import router, { useRouter } from "next/router";
import FormattedMessage from "theme/FormattedMessage";
import messages from "./messages";
import { useSnackbar } from "notistack";
import { useFetchTodo, useRemoveTodo, useTodoDetail } from "providers/Todo";
import { Grid, Typography } from "@mui/material";
import { TableButtonWrapper } from "theme/Buttons";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { key } from "localforage";

const TodoListScreen = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const getTodo: any = useFetchTodo();
  const deleteTodo = useRemoveTodo();
  console.log(deleteTodo, "delete.....");
  console.log(getTodo.data, "getTodo.data.....");

  const transformData = getTodo.data?.map((item: any) => {
    return {
      id: item?.[0],
      data: item?.[1]?.data,
      title: item?.[1]?.data.title,
      description: item?.[1]?.data.description,
      created: item?.[1]?.created,
    };
  });
  useEffect(() => {
    if (deleteTodo.isSuccess) {
      enqueueSnackbar(<FormattedMessage {...messages.deleteSuccess} />, {
        variant: "success",
      });
      router.reload();
    }
  }, [deleteTodo.isSuccess]);
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
      hide: true,
    },
    {
      field: "title",
      headerName: "Title",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "description",
      headerName: "Description",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      minWidth: 150,
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <TableButtonWrapper
              startIcon={<ModeEditIcon fontSize="small" />}
              sx={{ mr: 1 }}
              variant="contained"
              // href="#outlined-buttons"
              onClick={() => {
                router.replace(`todo/${params.row.id}`);
              }}
            >
              <FormattedMessage {...messages.editBtn} />
            </TableButtonWrapper>
            <TableButtonWrapper
              startIcon={<DeleteIcon fontSize="small" />}
              sx={{ mr: 1 }}
              variant="outlined"
              // href="#outlined-buttons"
              onClick={() => {
                deleteTodo.mutate({ id: params.row.id });
              }}
            >
              <FormattedMessage {...messages.deleteBtn} />
            </TableButtonWrapper>
          </>
        );
      },
    },
  ];
  return (
    <>
      <Grid>
        <ButtonWrapper
          onClick={() => {
            router.replace("/app/todo/add");
          }}
        >
          <FormattedMessage {...messages.addTodo} />
        </ButtonWrapper>
        <DataGrid
          sx={{ margin: "40px" }}
          autoHeight
          getRowId={(row) => row?.id}
          rowHeight={75}
          rows={transformData || []}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          loading={getTodo.isFetching}
        />
      </Grid>
    </>
  );
};

export default TodoListScreen;
