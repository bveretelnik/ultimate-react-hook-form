import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import MainContainer from "../MainContainer";
import PrimaryButton from "../PrimaryButton";

function Result() {
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        📋 Form Values
      </Typography>
      <PrimaryButton>Submit</PrimaryButton>
      <Link to="/">Start over</Link>
    </MainContainer>
  );
}

export default Result;
