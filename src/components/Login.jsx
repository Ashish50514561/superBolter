import React, { useState } from "react";
import { useNavigate } from "react-router";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Stack,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "amar",
      password: "amar123",
      image:
        "https://media.istockphoto.com/photos/headshot-of-a-teenage-boy-picture-id1158014305?k=20&m=1158014305&s=612x612&w=0&h=RgcRlPfHFZA4OWSROC46FgBILIQVyiS6o_EmyZAMt4M=",
    },
    {
      id: 2,
      username: "akbar",
      password: "akbar123",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl3Oq6BUB-OFdHBzDgdt0QvvVU20hhe2BLaw&usqp=CAU",
    },
    {
      id: 3,
      username: "antony",
      password: "antony123",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW3pz-tTDoro5Qkpvh9Rx997uig4ghbzlndQ&usqp=CAU",
    },
    {
      id: 4,
      username: "john",
      password: "john123",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVF3inYN_y0Em5rasDjfi9MXasdZfSSppXYg&usqp=CAU",
    },
    {
      id: 5,
      username: "paul",
      password: "paul123",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_mropXRN2Q2GXWolStXt3teIC07XhtWo-A&usqp=CAU",
    },
  ]);

  const handleVisibility = () => {
    setVisible(!visible);
  };

  const handleChange = (e) => {
    if (e.target.name === "userName") {
      setUserName(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleLogin = () => {
    if (!userName) {
      setError("Please enter username");
    } else if (!password) {
      setError("Please enter password");
    } else {
      const validUser = users.find(
        (user) => user.username === userName && user.password === password
      );
      if (validUser) {
        navigate("/designs");
        const user = {
          name: validUser.username,
          id: validUser.id,
          image: validUser.image,
        };
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        setError("Invalid Username or password");
      }
    }
  };

  const responsiveFormStyles = {
    width: { xs: "90vw", sm: "60vw", md: "50vw", lg: "40vw" },
    height: "50vh",
  };

  const responsiveHeadingStyles = {
    fontSize: { xs: "28px", sm: "33px", md: "40px", lg: "42px" },
    color: "#aaaaaa",
  };

  const fieldStyles = {
    pl: 2,
    pr: 2,
  };

  const buttonStyles = {
    height: "8vh",
    color: "black",
    bgcolor: "#ebecf0",
    ":hover": {
      bgcolor: "#aaaaaa",
      color: "white",
    },
  };

  const hidePasswordStyles = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={handleVisibility}>
          {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      </InputAdornment>
    ),
  };

  return (
    <Stack className=" login_page" height="100vh">
      <Stack spacing={3} sx={responsiveFormStyles}>
        <Stack aria-label="login_heading" alignItems="center">
          <Typography sx={responsiveHeadingStyles}>
            Welcome ! Please Login
          </Typography>
        </Stack>

        <Stack aria-label="userName" sx={fieldStyles}>
          <TextField
            onChange={handleChange}
            name="userName"
            label="email or username "
          />
        </Stack>

        <Stack aria-label="password" sx={fieldStyles}>
          <TextField
            name="password"
            label="password "
            onChange={handleChange}
            type={visible ? "text" : "password"}
            InputProps={hidePasswordStyles}
          />
        </Stack>

        {error && (
          <Stack aria-label="error" alignItems="center">
            <Typography color="red">{error}</Typography>
          </Stack>
        )}

        <Stack aria-label="login_btn" sx={fieldStyles}>
          <Button onClick={handleLogin} variant="contained" sx={buttonStyles}>
            SIGN In
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
