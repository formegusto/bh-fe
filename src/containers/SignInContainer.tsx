import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SignInComponent from "src/components/auth/SignInComponent";
import { RequestSignIn } from "src/store/auth/types";

function SignInContainer() {
  const { control, handleSubmit } = useForm<RequestSignIn>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RequestSignIn> = React.useCallback(
    (data) => {
      // alert(JSON.stringify(data, null, "\t"));

      navigate("/");
    },
    [navigate]
  );

  return (
    <SignInComponent control={control} onSubmit={handleSubmit(onSubmit)} />
  );
}

export default SignInContainer;
