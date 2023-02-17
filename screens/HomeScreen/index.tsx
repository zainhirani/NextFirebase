import FormattedMessage from "theme/FormattedMessage";
import ThemeSwitcher from "components/ThemeSwitch";
import Typography from "@mui/material/Typography";
// import { signOut } from "firebase/auth";
import { auth } from "platform/initFirebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useAuth } from "contexts/AuthContext";

import messages from "./messages";
import { BoxWrapper } from "./Styled";
import { ButtonWrapper } from "./Styled";
import { useEffect } from "react";
// import { useAuthContext } from "contexts/AuthContext";

const HomeScreen: React.FC = () => {
  // const { signOut } = useAuthContext();
  const { user, logOut } = useAuth();
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("uid", uid);
      } else {
        console.log("user is logged out");
      }
    });
  }, []);
  const handleLogout = () => {
    logOut()
      // signOut();
      .then(() => {
        // Sign-out successful.
        router.push("/login");
        console.log("Signed out successfully");
        sessionStorage.clear();
      })
      .catch((error: any) => {
        // An error happened.
        console.log(error.message);
      });
  };
  return (
    <>
      <ButtonWrapper onClick={handleLogout}>Logout</ButtonWrapper>
      <Typography sx={{ ml: 4 }}>
        <FormattedMessage {...messages.description} />
      </Typography>
    </>
  );
};

export default HomeScreen;
