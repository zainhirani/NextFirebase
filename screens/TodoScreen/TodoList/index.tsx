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

const TodoListScreen = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const getTodo = useFetchTodo();
  const deleteTodo = useRemoveTodo();
  console.log(deleteTodo, "delete.....");
  console.log(getTodo, "datatatatatat");

  const columns: GridColDef[] = [
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
                router.push(`products/${params.row.slug}`);
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
                deleteTodo.mutate({ id: "7AoRpEUDKxBhvvJiBj2u" });
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
          // getRowId={(row) => row.created}
          getRowId={(row) => row?.title + row?.description}
          rowHeight={75}
          rows={getTodo?.data?.map((item: any) => item?.data) || []}
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
