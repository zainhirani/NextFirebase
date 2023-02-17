import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
// import { useLoginUser } from "providers/Auth";
import { login } from "services/auth";

export default NextAuth({
  providers: [
    CredentialProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "johndoe@test.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        try {
          const resp = await login({
            email: credentials.email,
            password: credentials.password,
          });
          return Promise.resolve(
            resp?.data?.idToken ? { jwtToken: resp.data.idToken } : {},
          ) as any;
        } catch (e: any) {
          return Promise.reject(new Error(e?.msg || "Something Wrong"));
        }
      },
    }),
  ],
  secret: "test",
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user }: any) {
      user.accessToken = user?.jwtToken;
      return Promise.resolve(true);
    },
    async session({ session, token }: any) {
      // if (!token.accessToken) {
      //   return Promise.resolve(session);
      // }

      session.accessToken = token.accessToken;
      // session.user = await getUser(token.accessToken as string);
      session.user = {};
      return Promise.resolve(session);
    },
    async jwt({ token, user }: any) {
      if (user?.accessToken) {
        // eslint-disable-next-line
        token = {
          accessToken: user.accessToken,
        };
      }
      // if (token.accessToken && !token.user) {
      //   token.user = await getUser(token.accessToken as string);
      // }
      return Promise.resolve(token);
    },
  },
});
