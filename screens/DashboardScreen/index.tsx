import { useAuth } from "contexts/AuthContext";
import { auth } from "platform/initFirebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ThemeSwitcher from "components/ThemeSwitch";
import { BoxWrapper, ButtonWrapper } from "./Styled";
import messages from "./messages";
import FormattedMessage from "theme/FormattedMessage";
import { Typography } from "@mui/material";

const DashboardScreen = () => {
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
      <BoxWrapper>
        <Typography>
          <FormattedMessage {...messages.title} />
        </Typography>
        <BoxWrapper
          sx={{
            boxShadow: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <ThemeSwitcher />
          <ButtonWrapper onClick={handleLogout}>Logout</ButtonWrapper>
        </BoxWrapper>
      </BoxWrapper>
      <Typography sx={{ ml: 4 }}>
        <FormattedMessage {...messages.description} />
      </Typography>
    </>
  );
};

export default DashboardScreen;
