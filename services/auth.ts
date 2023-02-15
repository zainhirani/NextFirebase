import { signInWithEmailAndPassword } from "firebase/auth";
import service from "services";
import { auth } from "platform/initFirebase";

// Login
export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  console.log("inside loginc");
  return signInWithEmailAndPassword(auth, email, password);
}
