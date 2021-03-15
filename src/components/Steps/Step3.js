import { Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useData } from "../DataContext";
import Form from "../Form";
import MainContainer from "../MainContainer";
import PrimaryButton from "../PrimaryButton";

function Step3() {
  const { data, setValues } = useData();
  const history = useHistory();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: data.files,
    },
  });

  const onSumbit = (data) => {
    history.push("./result");
  };
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        🐕‍🦺 Step 3
      </Typography>
      <Form>
        {/* <FileInput /> */}
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
}

export default Step3;
