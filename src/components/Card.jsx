import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Link } from "react-router-dom";
import {
  Grid,
  Stack,
  Rating,
  Box,
  CardActions,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  TextField,
  IconButton,
  Avatar,
} from "@mui/material";
import {
  asyncLikeDesign,
  asyncRemoveLike,
  asyncAddComment,
} from "../Redux/Actions/designsActions";

export default function Design_Card(props) {
  const { id, name, image, likes, comments } = props;
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const designs = useSelector((state) => state.designReducer);
  const currentUser = useSelector((state) => state.userReducer);

  const likeExists = likes.includes(currentUser.id);

  const removeLike = () => {
    dispatch(asyncRemoveLike(id));
  };

  const hanldleLike = () => {
    dispatch(asyncLikeDesign(id));
  };
  console.log(comment);

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleComment = () => {
    if (comment !== "") {
      const post = { id, comment };
      dispatch(asyncAddComment(post));
      setTimeout(() => setComment(""), 500);
    }
  };

  return (
    <Grid id="card" p={2} item xs={12} sm={6} md={4} lg={4}>
      <Stack>
        <Card
          sx={{
            height: "53vh",
            backgroundColor: "transparent",
            // boxShadow: "none",
          }}
        >
          <CardMedia
            sx={{ height: 200 }}
            component="img"
            image={image}
            alt=" image.."
          />

          <div className="stack">
            {likeExists ? (
              <ThumbUpIcon
                onClick={removeLike}
                sx={{
                  ml: "3.5%",
                  color: "primary.main",
                  "&:hover": { fontSize: "30px" },
                }}
              />
            ) : (
              <ThumbUpIcon
                onClick={hanldleLike}
                sx={{
                  ml: "3.5%",
                  "&:hover": { fontSize: "30px" },
                }}
              />
            )}

            <Button>Type - {name}</Button>
          </div>

          <Stack spacing={1} ml={1.5} direction="row">
            <Typography sx={{ fontSize: "15px", fontWeight: 600 }}>
              {likes.length}
            </Typography>
            <Typography
              className="noShadow"
              sx={{ fontSize: "15px", fontWeight: 200 }}
            >
              likes
            </Typography>
          </Stack>

          <Grid aria-label="comments" xs={12} item>
            <Stack spacing={1} ml={1.5} direction="row">
              <Typography sx={{ fontSize: "15px", fontWeight: 600 }}>
                {comments.length > 0 && comments[comments.length - 1].name}
              </Typography>
              <Typography
                className="noShadow"
                sx={{ fontSize: "15px", fontWeight: 200 }}
              >
                {comments.length > 0
                  ? comments[comments.length - 1].comment
                  : "..."}
              </Typography>
            </Stack>
          </Grid>

          <Grid aria-label="view-comments" xs={12} item>
            <Stack ml={1.5}>
              <Link to={`/comments/${id}`} style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "15px",
                    fontWeight: 200,
                  }}
                >
                  {`View all ${comments.length}
                comments`}
                </Typography>
              </Link>
            </Stack>
          </Grid>

          <Grid aria-label="post-comment" mb={1} xs={12} item>
            <Stack ml={1.5} direction="row">
              <Box pt={0.5}>
                <Avatar
                  sx={{ height: 30, width: 30 }}
                  src={currentUser.image}
                />
              </Box>

              <Box pt={0.5}>
                <TextField
                  elevation={0}
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

              <Box onClick={handleComment}>
                <IconButton>
                  <Typography color="primary.main">Post</Typography>
                </IconButton>
              </Box>
            </Stack>
          </Grid>
        </Card>
      </Stack>
    </Grid>
  );
}
