import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
} from "@mui/material";
// import { signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
// import { signIn, signOut, useSession } from "next-auth/react";
import { useSnackbar } from "notistack";
import * as Yup from "yup";
// import { useAuthContext } from "contexts/AuthContext";
// import { auth } from "platform/initFirebase";
import FormattedMessage, { useFormattedMessage } from "theme/FormattedMessage";
import messages from "./messages";
import { ButtonWrapper } from "./Styled";
import { useAuth } from "contexts/AuthContext";
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const LoginForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  // const { signIn } = useAuthContext();
  const { signIn } = useAuth();
  const router = useRouter();

  const onSubmit = useCallback(async (data: any) => {
    // await signIn("credentials", {
    //   ...data,
    //   redirect: false,
    // });
    await signIn(data.email, data.password)
      .then((userCredential: any) => {
        const user = userCredential.user;
        router.push("/app/dashboard");
        // console.log(user);
        enqueueSnackbar(<FormattedMessage {...messages.successMessage} />, {
          variant: "success",
        });
        sessionStorage.setItem("accessToken", user.accessToken);
      })
      .catch((error: { code: any; message: any }) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        enqueueSnackbar(<FormattedMessage {...messages.errorMessage} />, {
          variant: "warning",
        });
      });
  }, []);

  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: { email: "", password: "" },
      validationSchema,
      onSubmit,
    });

  // handleResetPass
  const handleResetPass = (email: string) => {};

  const emailPlaceholder = useFormattedMessage(messages.emailPlaceholder);
  const passwordPlaceholder = useFormattedMessage(messages.passwordPlaceholder);

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction={"column"} spacing={5}>
        <Grid item>
          <TextField
            id="email"
            name="email"
            label={<FormattedMessage {...messages.emailLabel} />}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={emailPlaceholder}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            autoComplete="off"
          />
        </Grid>

        <Grid item>
          <TextField
            id="password"
            name="password"
            label={<FormattedMessage {...messages.passwordLabel} />}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            placeholder={passwordPlaceholder}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            autoComplete="off"
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0",
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              id="Remember"
              name="fav_language"
              value="Remember"
              color="secondary"
            />
          }
          label={<FormattedMessage {...messages.rememberLabel} />}
        />
        <Link
          href="#"
          underline="none"
          color="secondary"
          onClick={() => handleResetPass(values.email)}
        >
          <FormattedMessage {...messages.forgot} />
        </Link>
      </Box>

      <Box>
        <ButtonWrapper type="submit" variant="contained">
          <FormattedMessage {...messages.signIn} />
        </ButtonWrapper>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0",
        }}
      >
        <FormattedMessage {...messages.textSignUp} />
        <Link href="/register" underline="none">
          <FormattedMessage {...messages.signUp} />
        </Link>
      </Box>
    </form>
  );
};

export default LoginForm;
