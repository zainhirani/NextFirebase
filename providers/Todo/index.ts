import { id } from "date-fns/locale";
import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import * as api from "./api";
import { Todo } from "./types";

const KEY = "TODO";

export function getKeyFromProps(
  props: any,
  type: "LISTING" | "DETAIL",
): string[] {
  const key = [KEY, type];
  key.push(props);
  return key;
}

export function getStatsProviderKey(
  arg0: { id: number | undefined },
  arg1: string,
): import("react-query").InvalidateQueryFilters<unknown> | undefined {
  throw new Error("Function not implemented.");
}

export function getFormProviderKey(
  arg0: { id: string | undefined },
  arg1: string,
): import("react-query").InvalidateQueryFilters<unknown> | undefined {
  throw new Error("Function not implemented.");
}

// Fetch
export function useFetchTodo(
  props: Todo.FetchProps = {},
): UseQueryResult<Todo.FetchResponse> {
  return useQuery(getKeyFromProps(props, "LISTING"), () => api.fetch(props), {
    retry: 5,
  });
}
// Detail
export function useTodoDetail(
  props: Todo.DetailProps,
): UseQueryResult<Todo.DetailResponse> {
  return useQuery(getKeyFromProps(props, "DETAIL"), () => api.detail(props));
}

//Create
export function useCreateTodo(props: Todo.CreateProps = {}): UseMutationResult<
  Todo.CreateResponse,
  {
    message?: string;
  },
  Todo.CreateMutationPayload
> {
  const queryClient = useQueryClient();
  return useMutation((payload) => api.create({ ...props, data: payload }), {
    mutationKey: `${KEY}|Create`,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [KEY] });
    },
    retry: 0,
  });
}

//Remove
export function useRemoveTodo(props: Todo.RemoveProps = {}): UseMutationResult<
  Todo.RemoveResponse,
  {
    message?: string;
  },
  Todo.RemoveMutationPayload
> {
  const queryClient = useQueryClient();
  return useMutation((payload) => api.remove(payload), {
    mutationKey: `${KEY}|Remove`,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [KEY] });
    },
    retry: 0,
  });
}

//Update
export function useUpdateTodo(props: Todo.UpdateProps): UseMutationResult<
  Todo.UpdateResponse,
  {
    message?: string;
  },
  Todo.UpdateMutationPayload
> {
  const queryClient = useQueryClient();
  return useMutation((payload) => api.update({ ...props, data: payload }), {
    mutationKey: `${KEY}|Update`,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [KEY] });
    },
    retry: 0,
  });
}
