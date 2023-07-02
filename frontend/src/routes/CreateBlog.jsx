import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

import styles from "./CreateBlog.module.css";
import { useNavigate, useOutletContext } from "react-router-dom";
import { createNewBlog } from "../apis/api";
import { enqueueSnackbar } from "notistack";
export const CreateBlog = () => {
  const navigate = useNavigate();
  const { outletContextData } = useOutletContext();
  const isLogedin = outletContextData.isLogedin;
  const userDetail = outletContextData.userDetail;
  const [blog, setBlog] = useState({ title: "", desc: "" });
  const handleNewBlog = async () => {
    const blogData = {
      ownerid: userDetail.id,
      ownername: userDetail.username,
      title: blog.title,
      desc: blog.desc,
    };
    console.log("in create blog page - ", blogData);
    try {
      const responseData = await createNewBlog(blogData);
      console.log("blog data - ", responseData.data);
      enqueueSnackbar("Blog Created Successsfully", {
        variant: "success",
      });
      navigate("/");
    } catch (err) {
      console.log(err);
      enqueueSnackbar(err.response.data.message, {
        variant: "error",
      });
    }
  };
  console.log("in create blog - ", userDetail);
  return (
    <>
      {!isLogedin ? (
        <h2 className={styles.title}>Please Login first</h2>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          minHeight="100vh"
        >
          <Box className={styles.content}>
            <Stack spacing={2} className={styles.form}>
              <h2 className={styles.title}>Create Your Blog </h2>
              <TextField
                id="title"
                label="Title"
                variant="outlined"
                title="Title"
                name="title"
                placeholder="Enter Title"
                fullWidth
                onChange={(e) =>
                  setBlog({
                    ...blog,
                    title: e.target.value,
                  })
                }
              />
              <TextField
                id="desc"
                variant="outlined"
                label="Desc"
                name="desc"
                type="desc"
                fullWidth
                placeholder="Enter Description"
                multiline
                minRows={5}
                onChange={(e) =>
                  setBlog({
                    ...blog,
                    desc: e.target.value,
                  })
                }
              />
              <Button
                className={styles.button}
                variant="contained"
                onClick={() => handleNewBlog()}
              >
                Save
              </Button>
            </Stack>
          </Box>
        </Box>
      )}
    </>
  );
};
