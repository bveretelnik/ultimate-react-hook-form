import { Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useData } from "../DataContext";
import { FileInput } from "../FileInput";
import Form from "../Form";
import MainContainer from "../MainContainer";
import PrimaryButton from "../PrimaryButton";

function Step3() {
  const history = useHistory();
  const { data, setValues } = useData();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: data.files,
    },
  });

  const onSubmit = (data) => {
    history.push("./result");
    setValues(data);
    console.log(data);
  };
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        🐕‍🦺 Step 3
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
}

export default Step3;
