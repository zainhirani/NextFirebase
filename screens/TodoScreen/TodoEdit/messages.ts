/*
 * EditTodoScreen Messages
 *
 * This contains all the text for the EditTodoScreen
 */

import { defineMessages } from "react-intl";

export const scope = "app.screens.EditTodoScreen";

export default defineMessages({
  // Add Product Page
  editTitle: {
    id: `${scope}.editTitle`,
    defaultMessage: "Edit Task",
  },
  taskTitle: {
    id: `${scope}.taskTitle`,
    defaultMessage: "Task Detail",
  },
  editButton: {
    id: `${scope}.editButton`,
    defaultMessage: "Edit Task",
  },
  updateButton: {
    id: `${scope}.updateButton`,
    defaultMessage: "Update",
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
    defaultMessage: "Task Updated Successfully",
  },
  // Error Message
  errorMessage: {
    id: `${scope}.errorMessage`,
    defaultMessage: "Something went wrong, please try again",
  },
});