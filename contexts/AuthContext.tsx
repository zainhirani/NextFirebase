import React, { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";
import { auth } from "platform/initFirebase";
import { AUTH_LOGIN_URL } from "configs";
import { useRouter } from "next/router";
import { getAuthenticationToken } from "services";
import { useSession } from "next-auth/react";

interface UserType {
  email: string | null;
  uid: string | null;
}

const AuthContext = createContext({});
export const useAuth = () => useContext<any>(AuthContext);
const AUTHENTICATION_PATH = [AUTH_LOGIN_URL];

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<UserType>({
    email: null,
    uid: null,
  });

  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const params: { pathname: string; query?: { redirectTo: string } } = {
    pathname:
      // @ts-ignore
      "/",
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const curr = auth.currentUser;
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid,
        });
      }
      if (user && router.pathname == "/login") {
        setUser({
          email: user.email,
          uid: user.uid,
        });
        router.replace(params);
      } else if (!user && router.pathname == "/") {
        setUser({ email: null, uid: null });
        router.replace(AUTHENTICATION_PATH[0]!);
      } else if (user && router.pathname == "/register") {
        router.replace(params);
      }
    });
    setLoading(false);
    return () => unsubscribe();
  }, []);
  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = async () => {
    setUser({ email: null, uid: null });
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, logOut }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
