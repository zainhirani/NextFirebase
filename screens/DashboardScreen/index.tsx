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
  const { logOut, user } = useAuth();
  const router = useRouter();
  console.log(user, "user....");
  const handleLogout = () => {
    logOut()
      .then(() => {
        router.push("/login");
        sessionStorage.clear();
      })
      .catch((error: any) => {
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
          <ButtonWrapper
            onClick={() => {
              router.replace("/app/todo");
            }}
          >
            <FormattedMessage {...messages.todoPage} />
          </ButtonWrapper>
        </BoxWrapper>
      </BoxWrapper>
      <BoxWrapper
        sx={{
          ml: 4,
          boxShadow: "none",
          padding: 0,
          background: "none",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <Typography>
          <FormattedMessage {...messages.description} />
        </Typography>
        <Typography>
          <FormattedMessage {...messages.profileTitle} />
        </Typography>
        <Typography>
          <FormattedMessage {...messages.profileDescription} />
        </Typography>
        <Typography>
          <FormattedMessage {...messages.userId} />
          {user.uid}
        </Typography>
        <Typography>
          <FormattedMessage {...messages.emailID} />
          {user.email}
        </Typography>
      </BoxWrapper>
    </>
  );
};

export default DashboardScreen;
