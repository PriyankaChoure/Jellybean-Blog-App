import React, { useState } from "react";
import styles from "./Register.module.css";
import { RegisterComponent } from "../components/Register/RegisterComponent";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { register } from "../apis/api";

export const Register = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // method to validate user data
  const validateInput = (data) => {
    console.log(data);
    if (data.username === "") {
      enqueueSnackbar("Username is a required field", {
        variant: "warning",
      });
      return false;
    }

    if (data.email === "") {
      enqueueSnackbar("email is a required field", {
        variant: "warning",
      });
      return false;
    }
    // check if password is empty
    if (data.password === "") {
      enqueueSnackbar("Password is a required field", {
        variant: "warning",
      });
      return false;
    }
    // check if password is less then 6 character
    if (data.password.length < 6) {
      enqueueSnackbar("Password must be at least 6 characters", {
        variant: "warning",
      });
      return false;
    }
    // check for confirm password field
    if (data.password !== data.confirmPassword) {
      enqueueSnackbar("Passwords do not match", {
        variant: "warning",
      });
      return false;
    }
    return true;
  };
  // method to register new user
  const registerUser = async (formData) => {
    console.log(validateInput(formData));

    if (validateInput(formData)) {
      const userData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      };
      console.log(userData);
      try {
        const postResponse = await register(userData);
        console.log("registration response-", postResponse);
        if (postResponse) {
          enqueueSnackbar("Registered successfully", {
            variant: "success",
          });
          navigate("/login");
        } else {
          enqueueSnackbar("Sothing went wrong", {
            variant: "error",
          });
        }
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
    } else {
      console.log("somthin wrong");
      enqueueSnackbar(
        "Something went wrong. Check that the backend is running, reachable and returns valid JSON.",
        {
          variant: "error",
        }
      );
    }
  };
  return (
    <div className={styles.wrraper}>
      <RegisterComponent
        userDetails={userDetails}
        setUserDetails={setUserDetails}
        registerUser={registerUser}
      />
    </div>
  );
};
