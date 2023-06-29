import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { SnackbarProvider, useSnackbar } from "notistack";

import { LoginComponent } from "../components/Login/LoginComponent";
import { login } from "../apis/api";
import styles from "./Login.module.css";

export const Login = () => {
  const [userCredentials, setUserCredential] = useState({});
  const { outletContextData } = useOutletContext();
  const setIsLogedin = outletContextData.setIsLogedin;
  const setUserDetail = outletContextData.setUserDetail;

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  // method to validate user credentials
  const isValidate = (userData) => {
    console.log(userData);
    if (!userData.email) {
      enqueueSnackbar("email can not be empty", { variant: "warning" });
      return false;
    }
    if (!userData.password) {
      enqueueSnackbar("Password can not be empty", { variant: "warning" });
      return false;
    }
    if (userData.password.length !== 6) {
      enqueueSnackbar("Password must be more than 6 character", {
        variant: "warning",
      });
      return false;
    }
    return true;
  };

  //method to login user
  const userLogin = async (userData) => {
    if (!isValidate(userCredentials)) return;
    try {
      const responseData = await login(userData);
      console.log(responseData.data);
      enqueueSnackbar("Logged in successfully", {
        variant: "success",
      });
      setIsLogedin(true);
      setUserDetail({
        username: responseData.data.user.username,
        id: responseData.data.user._id,
      });

      navigate("/");
    } catch (err) {
      console.log(err);
      if (err.response) {
        if (err.response.status === 400)
          enqueueSnackbar(err.response.data.message, {
            variant: "error",
          });
        else
          enqueueSnackbar(err.response.data, {
            variant: "error",
          });
      } else {
        enqueueSnackbar(
          "Something went wrong. Check that the backend is running, reachable and returns valid JSON.",
          {
            variant: "error",
          }
        );
      }
    }
  };

  return (
    <div className={styles.wrraper}>
      <LoginComponent
        setUserCredential={setUserCredential}
        userCredentials={userCredentials}
        userLogin={userLogin}
      />
    </div>
  );
};
