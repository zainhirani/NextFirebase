import service from "services";

// Login
export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  console.log("inside loginc");
  //   return service({
  //     method: "POST",
  //     noAuth: true,
  //     url: `/auth/login`,
  //     body: {
  //       email,
  //       password,
  //     },
  //   });
  return;
}
