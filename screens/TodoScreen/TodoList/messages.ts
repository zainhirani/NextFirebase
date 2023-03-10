/*
 * TodoListScreen Messages
 *
 * This contains all the text for the TodoListScreen
 */

import { defineMessages } from "react-intl";

export const scope = "app.screens.TodoListScreen";

export default defineMessages({
  addTodo: {
    id: `${scope}.addTodo`,
    defaultMessage: "Add Task",
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: "Tasks",
  },
  action: {
    id: `${scope}.action`,
    defaultMessage: "Action",
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: "Task Description",
  },
  editBtn: {
    id: `${scope}.editBtn`,
    defaultMessage: "Edit",
  },
  deleteBtn: {
    id: `${scope}.deleteBtn`,
    defaultMessage: "Delete",
  },
  deleteSuccess: {
    id: `${scope}.deleteSuccess`,
    defaultMessage: "Task Deleted Successfully!",
  },
  errorMessage: {
    id: `${scope}.errorMessage`,
    defaultMessage: "Task Deleted Successfully!",
  },
});
