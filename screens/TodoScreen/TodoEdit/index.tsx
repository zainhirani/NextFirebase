import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  FormHelperText,
  OutlinedInput,
  CircularProgress,
} from "@mui/material";
import * as Yup from "yup";
import { FormattedMessage } from "react-intl";
import messages from "./messages";
import { useFormik } from "formik";
import { InputLabelWrapper } from "../Styled";
import { ButtonWrapper } from "theme/Buttons";
import { useFormattedMessage } from "theme/FormattedMessage";
import { useTodoDetail, useUpdateTodo } from "providers/Todo";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { LoadingButton } from "@mui/lab";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  description: Yup.string().required().label("Description"),
});

const TodoEdit = () => {
  const [disableField, setDisableField] = useState(true);
  const router = useRouter();
  const getSingleTodo = useTodoDetail({
    id: router?.query?.id?.toString(),
  });
  console.log(getSingleTodo.data?.data, "........single");

  const editTodo = useUpdateTodo({
    id: router?.query?.id?.toString(),
  });
  const handleEnable = (e: any) => {
    e.preventDefault();
    setDisableField(false);
  };
  const { enqueueSnackbar } = useSnackbar();
  const textPlaceholder = useFormattedMessage(messages.textPlaceholder);
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldValue,
    errors,
    values,
    touched,
  } = useFormik({
    initialValues: {
      title: getSingleTodo.data?.data.title || "",
      description: getSingleTodo.data?.data.description || "",
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => {
      editTodo.mutate({
        title: values.title || "",
        description: values.title || "",
      });
      resetForm();
    },
  });
  useEffect(() => {
    if (editTodo.isSuccess) {
      enqueueSnackbar(<FormattedMessage {...messages.successMessage} />, {
        variant: "success",
      });
      router.replace(`/app/todo`);
    }
    if (editTodo.isLoading) {
      <CircularProgress />;
    }
    if (editTodo.isError) {
      enqueueSnackbar(<FormattedMessage {...messages.errorMessage} />, {
        variant: "error",
      });
    }
  }, [editTodo.isSuccess, editTodo.isError, editTodo.isLoading, router]);
  console.log(editTodo, "...id");
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 4,
      }}
    >
      <Container maxWidth={false}>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
            mb={2}
          >
            <Typography sx={{ m: 1 }} variant="h4">
              {disableField ? (
                <FormattedMessage {...messages.taskTitle} />
              ) : (
                <FormattedMessage {...messages.editTitle} />
              )}
            </Typography>
            <Box sx={{ m: 1 }}>
              {disableField ? (
                <ButtonWrapper
                  type="submit"
                  color="primary"
                  variant="contained"
                  onClick={handleEnable}
                >
                  <FormattedMessage {...messages.editButton} />
                </ButtonWrapper>
              ) : (
                <>
                  <LoadingButton
                    type="submit"
                    color="primary"
                    variant="contained"
                    loading={editTodo.isLoading}
                    sx={{
                      padding: "8px",
                      borderRadius: "7px",
                      textTransform: "capitalize",
                    }}
                  >
                    <FormattedMessage {...messages.updateButton} />
                  </LoadingButton>
                </>
              )}
            </Box>
          </Box>

          <Grid container direction="row" spacing={3}>
            <Grid item xs={12} md={6} lg={12}>
              <Grid item xs={12}>
                <InputLabelWrapper htmlFor="task-title">
                  <FormattedMessage {...messages.todoTitle} />
                </InputLabelWrapper>
                <OutlinedInput
                  id="task-title"
                  name="title"
                  placeholder={textPlaceholder}
                  fullWidth
                  value={values.title}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={Boolean(touched.title && errors.title)}
                  disabled={disableField}
                />
                {touched.title && errors.title && (
                  <FormHelperText error id="standard-weight-helper-text-title">
                    {errors.title}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12}>
                <InputLabelWrapper htmlFor="task-description">
                  <FormattedMessage {...messages.todoDescription} />
                </InputLabelWrapper>
                <OutlinedInput
                  id="task-description"
                  name="description"
                  placeholder={textPlaceholder}
                  fullWidth
                  value={values.description}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={Boolean(touched.description && errors.description)}
                  disabled={disableField}
                />
                {touched.description && errors.description && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text-description"
                  >
                    {errors.description}
                  </FormHelperText>
                )}
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default TodoEdit;
