import React from "react";
import styles from "./HeaderComponent.module.css";
import { Link, useOutletContext } from "react-router-dom";
import { Divider } from "@mui/material";

export const HeaderComponent = ({ isLogedin, username }) => {
  return (
    <div className={styles.wrraper}>
      <Link to="/" className={styles.link}>
        <span className={styles.logo}>JellyBean Blogs</span>
      </Link>

      <div className={styles.buttons}>
        {isLogedin && <span className={styles.username}>{username}</span>}
        <Link to={"/createBlog"} className={styles.link}>
          Create Blog
        </Link>

        {isLogedin ? (
          <Link className={styles.link}>Logout</Link>
        ) : (
          <>
            <Link to={"/login"} className={styles.link}>
              Login
            </Link>

            <Link to={"/register"} className={styles.link}>
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
