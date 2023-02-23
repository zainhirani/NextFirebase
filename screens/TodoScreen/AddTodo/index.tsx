import React, { useEffect } from "react";
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
import { useCreateTodo } from "providers/Todo";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  description: Yup.string().required().label("Description"),
});
const AddTodo = () => {
  const addTodo = useCreateTodo();
  const router = useRouter();
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
      title: "",
      description: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      addTodo.mutate({
        title: values.title,
        description: values.title,
      });
      resetForm();
    },
  });
  useEffect(() => {
    if (addTodo.isSuccess) {
      enqueueSnackbar(<FormattedMessage {...messages.successMessage} />, {
        variant: "success",
      });
      router.replace(`/app/todo`);
    }
    if (addTodo.isLoading) {
      <CircularProgress />;
    }
    if (addTodo.isError) {
      enqueueSnackbar(<FormattedMessage {...messages.errorMessage} />, {
        variant: "error",
      });
    }
  }, [addTodo.isSuccess, addTodo.isError, addTodo.isLoading, router]);
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
              <FormattedMessage {...messages.addTitle} />
            </Typography>
            <Box sx={{ m: 1 }}>
              <ButtonWrapper type="submit" color="primary" variant="contained">
                <FormattedMessage {...messages.publishButton} />
              </ButtonWrapper>
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
            <Grid item xs={12} md={6} lg={12}>
              {/* <ProductMedia
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                values={values}
                touched={touched}
                setFieldValue={setFieldValue}
              />

              <ProductOrganization
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors}
                values={values}
                touched={touched}
                setFieldValue={setFieldValue}
              /> */}
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default AddTodo;
