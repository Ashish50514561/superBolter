import React, { useEffect, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import TelegramIcon from "@mui/icons-material/Telegram";
import Comment from "./Comment";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Stack,
  Typography,
  Box,
  Avatar,
  TextField,
  IconButton,
} from "@mui/material";
import {
  asyncAddComment,
  asyncGetDesigns,
} from "../../Redux/Actions/designsActions";
import { asyncCurrentUser } from "../../Redux/Actions/userActions";

export default function Comments() {
  const [comment, setComment] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const designs = useSelector((state) => state.designReducer);
  const currentUser = useSelector((state) => state.userReducer);
  const design = designs.find((design) => design.id === parseInt(id));

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleComment = () => {
    if (comment !== "") {
      const post = { id: +id, comment };
      dispatch(asyncAddComment(post));
      setComment("");
    }
  };

  useEffect(() => {
    dispatch(asyncGetDesigns());
    dispatch(asyncCurrentUser());
  }, []);

  return (
    <Stack alignItems="center">
      <Grid sm={6} pl={1} pr={1} pt={1.5} container>
        <Grid xs={12} item>
          <Stack direction="row" justifyContent="space-between">
            <Stack spacing={3} direction="row">
              <KeyboardBackspaceIcon
                onClick={() => navigate(-1)}
                sx={{ fontSize: "30px" }}
              />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Comments
              </Typography>
            </Stack>

            <Stack mt={0.6} direction="row"></Stack>
            <TelegramIcon sx={{ fontSize: "30px" }} />
          </Stack>
        </Grid>

        <Grid
          sx={{ maxHeight: "73vh", minHeight: "73vh", overflow: "auto" }}
          mt={1.5}
          xs={12}
          item
        >
          {design &&
            design.comments.map((comment) => {
              return <Comment comment={comment} />;
            })}
        </Grid>
        <Grid item>
          <Stack spacing={1}>
            <Stack direction="row">
              <Box>
                <Avatar
                  sx={{ height: 35, width: 35 }}
                  src={currentUser.image}
                />
              </Box>
              <Box>
                <TextField
                  value={comment}
                  onChange={handleChange}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  variant="standard"
                  placeholder="Add a comment..."
                  sx={{
                    height: "30px",
                    ml: 2,
                    border: "none",
                  }}
                />
              </Box>

              <IconButton onClick={handleComment}>
                <Typography ml={2.5} color="primary.main">
                  Post
                </Typography>
              </IconButton>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
