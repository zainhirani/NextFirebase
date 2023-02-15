import React, { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
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
  const [user, setUser] = useState<UserType>({ email: null, uid: null });
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && router.pathname == "/login") {
        setUser({
          email: user.email,
          uid: user.uid,
        });
        const params: { pathname: string; query?: { redirectTo: string } } = {
          pathname:
            // @ts-ignore
            "/",
        };
        router.replace(params);
      } else if (!user && router.pathname == "/") {
        setUser({ email: null, uid: null });
        router.replace(AUTHENTICATION_PATH[0]!);
      }
    });
    setLoading(false);

    return () => unsubscribe();
  }, []);

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email: string, password: string) => {
    console.log(email, "user......");
    return signInWithEmailAndPassword(auth, email, password);
    // return null;
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
