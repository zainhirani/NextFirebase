/*
 * DashboardScreen Messages
 *
 * This contains all the text for the DashboardScreen
 */

import { defineMessages } from "react-intl";

export const scope = "app.screens.DashboardScreen";

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: "Dashboard Screen",
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: "Welcome to Dashboard",
  },
  profileTitle: {
    id: `${scope}.profileTitle`,
    defaultMessage: "Profile",
  },
  profileDescription: {
    id: `${scope}.profileDescription`,
    defaultMessage: "Your Profile Information:",
  },
  userId: {
    id: `${scope}.userId`,
    defaultMessage: "Your ID: ",
  },
  emailID: {
    id: `${scope}.emailID`,
    defaultMessage: "Your Email: ",
  },
  todoPage: {
    id: `${scope}.todoPage`,
    defaultMessage: "Todo List",
  },
});
