import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Grid, Stack, Typography, Box, Button, Avatar } from "@mui/material";
import { asyncGetDesigns } from "../Redux/Actions/designsActions";
import Design_Card from "./Card";
import { Link } from "react-router-dom";
import { asyncCurrentUser } from "../Redux/Actions/userActions";

export default function Dishes() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const designs = useSelector((state) => state.designReducer);

  // const handleSelections = (value) => {
  //   setRestrictSelection(value);
  // };

  const headingStyles = { xs: "20px", sm: "30px", md: "40px" };

  useEffect(() => {
    dispatch(asyncGetDesigns());
    dispatch(asyncCurrentUser());
  }, []);

  return (
    <Grid container className="dishes" xs={12}>
      <Grid aria-label="page_heading" item xs={12}>
        <div className="main_heading">
          <Typography>
            <div style={{ height: "8vh" }}>
              <img src="https://www.superbolter.com/Images/logo_original_beta.svg" />
            </div>
          </Typography>
          <Link to="/">
            <Button>Logout</Button>
          </Link>
        </div>
      </Grid>

      <Grid className="dish_area" mt={2} lg={12} item container>
        {designs.map((design) => {
          return <Design_Card key={design.id} {...design} />;
        })}
      </Grid>
    </Grid>
  );
}
