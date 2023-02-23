/*
 * AddTodoScreen Messages
 *
 * This contains all the text for the AddTodoScreen
 */

import { defineMessages } from "react-intl";

export const scope = "app.screens.AddTodoScreen";

export default defineMessages({
  // Add Product Page
  addTitle: {
    id: `${scope}.addTitle`,
    defaultMessage: "Add New Task",
  },
  publishButton: {
    id: `${scope}.publishButton`,
    defaultMessage: "Publish",
  },

  // Input Fields
  todoTitle: {
    id: `${scope}.todoTitle`,
    defaultMessage: "Task Title",
  },
  todoDescription: {
    id: `${scope}.todoDescription`,
    defaultMessage: "Task Description",
  },
  // Placeholders
  textPlaceholder: {
    id: `${scope}.textPlaceholder`,
    defaultMessage: "Type here",
  },

  // Success Message
  successMessage: {
    id: `${scope}.successMessage`,
    defaultMessage: "Task Added Successfully",
  },
  // Error Message
  errorMessage: {
    id: `${scope}.errorMessage`,
    defaultMessage: "Something went wrong, please try again",
  },
});
