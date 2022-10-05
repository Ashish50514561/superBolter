import Design_Card from "./Card";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography, Button } from "@mui/material";
import { asyncCurrentUser } from "../Redux/Actions/userActions";
import { asyncGetDesigns } from "../Redux/Actions/designsActions";

export default function Dishes() {
  const dispatch = useDispatch();
  const designs = useSelector((state) => state.designReducer);

  useEffect(() => {
    dispatch(asyncGetDesigns());
    dispatch(asyncCurrentUser());
  }, []);

  return (
    <Grid container className="designs" xs={12}>
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

      <Grid className="designs_area" mt={2} lg={12} item container>
        {designs.map((design) => {
          return <Design_Card key={design.id} {...design} />;
        })}
      </Grid>
    </Grid>
  );
}
