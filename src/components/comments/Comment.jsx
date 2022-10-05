import React from "react";
import { Stack, Typography, Box, Avatar } from "@mui/material";

export default function Comment(props) {
  const { comment } = props;

  return (
    <Stack mb={2.5} spacing={1} direction="row">
      <Box>
        <Avatar sx={{ height: 35, width: 35 }} src={comment.image} />
      </Box>

      <Stack spacing={1}>
        <Stack spacing={1} direction="row">
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            {comment.name}_
          </Typography>
          <Typography pt={0.1} sx={{ fontSize: "15px", fontWeight: 100 }}>
            {comment.comment}
          </Typography>
        </Stack>

        <Stack spacing={3} direction="row">
          <Typography sx={{ fontSize: "12px", color: "text.secondary" }}>
            1h
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "text.secondary" }}>
            Reply
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "text.secondary" }}>
            Send
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
