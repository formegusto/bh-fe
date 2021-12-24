import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SignUpComponent from "src/components/auth/SignUpComponent";
import { RequestSignUp } from "src/store/auth/types";

function SignUpContainer() {
  const { control, handleSubmit } = useForm<RequestSignUp>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RequestSignUp> = React.useCallback(
    (data) => {
      // alert(JSON.stringify(data, null, "\t"));

      navigate("/");
    },
    [navigate]
  );

  return (
    <SignUpComponent control={control} onSubmit={handleSubmit(onSubmit)} />
  );
}

export default SignUpContainer;
