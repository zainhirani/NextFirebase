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
    defaultMessage: "Sign Up",
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: "Please Signup to the Website",
  },
  nameLabel: {
    id: `${scope}.nameLabel`,
    defaultMessage: "Enter your Name",
  },
  emailLabel: {
    id: `${scope}.emailLabel`,
    defaultMessage: "Enter your Email",
  },
  passwordLabel: {
    id: `${scope}.passwordLabel`,
    defaultMessage: "Enter Password",
  },
  confirmpasswordLabel: {
    id: `${scope}.confirmpasswordLabel`,
    defaultMessage: "Confirm Password",
  },
  namePlaceholder: {
    id: `${scope}.namePlaceholder`,
    defaultMessage: "Enter your Name",
  },
  emailPlaceholder: {
    id: `${scope}.emailPlaceholder`,
    defaultMessage: "Enter your Mail",
  },
  passwordPlaceholder: {
    id: `${scope}.passwordPlaceholder`,
    defaultMessage: "Enter your password",
  },
  confirmpasswordPlaceholder: {
    id: `${scope}.confirmpasswordPlaceholder`,
    defaultMessage: "Enter your password again",
  },
  rememberLabel: {
    id: `${scope}.rememberLabel`,
    defaultMessage: "Remember me",
  },
  signUp: {
    id: `${scope}.signUp`,
    defaultMessage: "Sign Up",
  },

  textSignIn: {
    id: `${scope}.textSignIn`,
    defaultMessage: "Already a member?",
  },

  signIn: {
    id: `${scope}.signIn`,
    defaultMessage: "Sign In",
  },

  // Success Message
  successMessage: {
    id: `${scope}.successMessage`,
    defaultMessage: "Signup Successfully",
  },
  // Error Message
  errorMessage: {
    id: `${scope}.errorMessage`,
    defaultMessage: "Error Signingup! Retry",
  },
});
