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
});
