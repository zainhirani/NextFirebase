import { useMemo } from "react";
import firebase from "firebase/compat";
import { auth, database } from "platform/initFirebase";
import { Todo } from "./types";

const dbInstance = database.collection("Todo");
// Fetch
export async function fetch(props: Todo.FetchAPIPayload): Promise<any> {
  const { docs } = await dbInstance
    .where("uid", "==", auth.currentUser?.uid)
    .get();
  const data = docs.map((doc) => {
    return [doc.id, doc.data()];
  });
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
    uid: auth.currentUser?.uid,
  });
  return id;
}

//Remove
export async function remove(props: Todo.RemoveAPIPayload): Promise<any> {
  const TodoDelete = await dbInstance.doc(`${props.id}`).delete();
  return TodoDelete;
}

//Update
export async function update(props: Todo.UpdateAPIPayload): Promise<any> {
  const TodoDelete = await dbInstance.doc(`${props.id}`).update(props);
  return TodoDelete;
}
