import React, { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

import styles from "./Card.module.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import {
  createNewComment,
  fetchAllcomment,
  updateDisLike,
  updateLike,
} from "../../apis/api";
import { useSnackbar } from "notistack";
import { useOutletContext } from "react-router-dom";

export const Card = ({ card }) => {
  const [open, setOpen] = useState(false);
  const [openComments, setOpenComments] = useState(false);
  const [comment, SetComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const { outletContextData } = useOutletContext();
  const isLogedin = outletContextData.isLogedin;
  const userDetail = outletContextData.userDetail;
  console.log("card - ", card);

  const handleClickOpen = () => {
    if (isLogedin) {
      setOpen(true);
    } else {
      enqueueSnackbar("Please login first to proceed ", {
        variant: "warning",
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCommentClose = () => {
    setOpenComments(false);
  };
  const handleSaveComment = async () => {
    console.log("in card userDetail", userDetail);
    const newComment = {
      blogid: card._id,
      userid: userDetail.id,
      username: userDetail.username,
      comment: comment,
    };
    console.log("in card create comment - ", newComment);
    try {
      const responseData = await createNewComment(newComment);
      enqueueSnackbar("Logged in successfully", {
        variant: "success",
      });
      handleClose();
    } catch (err) {
      console.log(err);
      enqueueSnackbar(
        "Something went wrong. Check that the backend is running, reachable and returns valid JSON.",
        {
          variant: "error",
        }
      );
    }
  };
  const haldleShowAllComment = async () => {
    try {
      const responseData = await fetchAllcomment(card._id);
      console.log("show blogs all comment", responseData.data);
      setCommentList(responseData.data);
      setOpenComments(true);
    } catch (err) {
      console.log(err);
      enqueueSnackbar(
        "Something went wrong. Check that the backend is running, reachable and returns valid JSON.",
        {
          variant: "error",
        }
      );
    }
  };

  const handleUpClick = async () => {
    try {
      if (isLogedin) {
        console.log("in card - ", card._id);
        const responsedata = await updateLike(card._id);
      } else {
        enqueueSnackbar("Please login first to proceed ", {
          variant: "warning",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleDownClick = async () => {
    try {
      if (isLogedin) {
        console.log("in card - ", card._id);
        const responsedata = await updateDisLike(card._id);
      } else {
        enqueueSnackbar("Please login first to proceed ", {
          variant: "warning",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h4 className={styles.title}>{card.title}</h4>
        <h5 className={styles.owner}> owner : {card.ownername}</h5>
      </div>
      <Divider />
      <span className={styles.desc}>{card.desc}</span>
      <Divider />
      <div className={styles.buttonWrapper}>
        <div className={styles.likeButtons}>
          <Button
            onClick={() => {
              handleUpClick();
            }}
          >
            <ThumbUpIcon />
            <span>{card.like.up}</span>
          </Button>
          <Button
            onClick={() => {
              handleDownClick();
            }}
          >
            <ThumbDownAltIcon />
            <span>{card.like.down}</span>
          </Button>
        </div>
        <div className={styles.commentButton}>
          <Button className={styles.comment} onClick={handleClickOpen}>
            Comment
          </Button>
          <Button className={styles.comment} onClick={haldleShowAllComment}>
            Show All Comments
          </Button>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className={styles.dialog}>
          Write Your Comment here{" "}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Comment"
            type="text"
            fullWidth
            variant="standard"
            multiline
            minRows={3}
            onChange={(e) => {
              SetComment(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSaveComment}>Save</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openComments} onClose={handleCommentClose}>
        <DialogTitle className={styles.dialog}>All Comments...</DialogTitle>
        <DialogContent>
          <List sx={{ pt: 0 }}>
            {commentList.map((comment) => (
              <ListItem disableGutters>
                <ListItemText primary={comment.comment} />
                <ListItemText secondary={comment.username}>By </ListItemText>
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCommentClose}>Cancel</Button>
          {/* <Button onClick={handleSaveComment}>Save</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
};
