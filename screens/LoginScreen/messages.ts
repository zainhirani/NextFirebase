/*
 * LoginScreen Messages
 *
 * This contains all the text for the LoginScreen
 */

import { defineMessages } from "react-intl";

export const scope = "app.screens.LoginScreen";

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: "Login",
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: "Please login to the Website",
  },
  emailLabel: {
    id: `${scope}.emailLabel`,
    defaultMessage: "Enter your Email",
  },
  passwordLabel: {
    id: `${scope}.passwordLabel`,
    defaultMessage: "Enter Password",
  },
  emailPlaceholder: {
    id: `${scope}.emailPlaceholder`,
    defaultMessage: "Enter your Mail",
  },
  passwordPlaceholder: {
    id: `${scope}.passwordPlaceholder`,
    defaultMessage: "Enter your password",
  },
  rememberLabel: {
    id: `${scope}.rememberLabel`,
    defaultMessage: "Remember me",
  },

  forgot: {
    id: `${scope}.forgot`,
    defaultMessage: "Forgot password?",
  },

  signIn: {
    id: `${scope}.signIn`,
    defaultMessage: "Sign In",
  },

  textSignUp: {
    id: `${scope}.textSignUp`,
    defaultMessage: "Don’t have an account?",
  },

  signUp: {
    id: `${scope}.signUp`,
    defaultMessage: "Sign up now",
  },

  // Success Message
  successMessage: {
    id: `${scope}.successMessage`,
    defaultMessage: "Login Successfully",
  },
  // Error Message
  errorMessage: {
    id: `${scope}.errorMessage`,
    defaultMessage: "User not found, try Sign Up",
  },
});
