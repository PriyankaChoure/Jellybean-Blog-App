import { Box, Button, Stack, TextField } from "@mui/material";
import React from "react";
import styles from "./RegisterComponent.module.css";
import { Link } from "react-router-dom";

export const RegisterComponent = ({
  userDetails,
  setUserDetails,
  registerUser,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
    >
      <Box className={styles.content}>
        <Stack spacing={2} className={styles.form}>
          <h2 className={styles.title}>Register</h2>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            title="Username"
            name="username"
            placeholder="Enter Username"
            fullWidth
            onChange={(e) =>
              setUserDetails({ ...userDetails, username: e.target.value })
            }
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            title="Email"
            name="email"
            placeholder="Enter Email"
            fullWidth
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
          />
          <TextField
            id="password"
            variant="outlined"
            label="Password"
            name="password"
            type="password"
            helperText="Password must be atleast 6 characters length"
            fullWidth
            placeholder="Enter a password with minimum 6 characters"
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
          />
          <TextField
            id="confirmPassword"
            variant="outlined"
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            fullWidth
            onChange={(e) =>
              setUserDetails({
                ...userDetails,
                confirmPassword: e.target.value,
              })
            }
          />

          {}
          <Box>
            {
              <Button
                className={styles.button}
                variant="contained"
                onClick={() => registerUser(userDetails)}
              >
                Register Now
              </Button>
            }
          </Box>

          <p className={styles.secondary_action}>
            Already have an account?{" "}
            <Link className={styles.link} to="/login">
              Login here
            </Link>
          </p>
        </Stack>
      </Box>
    </Box>
  );
};
