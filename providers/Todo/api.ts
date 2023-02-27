import { database } from "platform/initFirebase";
import { Todo } from "./types";

const dbInstance = database.collection("Todo");
console.log(dbInstance.get(), "....db");

// Fetch
export async function fetch(props: Todo.FetchAPIPayload): Promise<any> {
  const { docs } = await dbInstance.get();
  const data = docs.map((item: any) => item.data());

  return data;
}

// Detail
export async function detail(props: Todo.DetailAPIPayload): Promise<any> {
  const Todo = await dbInstance.doc(`${props.id}`).get();
  // const data  = data.map((item) => item.data())
  return Todo.data();
}

// Create
export async function create(props: Todo.CreateAPIPayload): Promise<any> {
  const { id } = await dbInstance.add({
    ...props,
    created: new Date().toISOString(),
  });
  return id;
}

//Remove
export async function remove(props: Todo.RemoveAPIPayload): Promise<any> {
  const TodoDelete = await dbInstance.doc(`${props.id}`).delete();
  console.log(TodoDelete, "..........delete");

  return TodoDelete;
}
