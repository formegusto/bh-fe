import { Button, TextField } from "@mui/material";
import { Control, Controller, UseFormHandleSubmit } from "react-hook-form";
import { Link } from "react-router-dom";
import { RequestSignIn } from "src/store/auth/types";
import { BLUE } from "src/styles/Palette";
import styled from "styled-components";

type Props = {
  control: Control<RequestSignIn, object>;
  onSubmit: ReturnType<UseFormHandleSubmit<RequestSignIn>>;
};

function SignInComponent({ control, onSubmit }: Props) {
  return (
    <Wrap onSubmit={onSubmit}>
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <TextField
            id="outlined-basic"
            label="username"
            variant="outlined"
            fullWidth
            required
            {...field}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            id="outlined-basic"
            label="password"
            type="password"
            variant="outlined"
            fullWidth
            required
            {...field}
          />
        )}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        size="large"
        fullWidth
      >
        Sign In
      </Button>
      <LinkText to="/auth/signup">Don’t have an account? Sign Up</LinkText>
      <LinkText to="/auth/find">Forgot Password?</LinkText>
    </Wrap>
  );
}

const Wrap = styled.form`
  width: 450px;

  & input {
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));
  }

  & > div {
    margin: 0 0 20px;
  }

  & > button[type="submit"] {
    margin: 20px 0 30px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  }

  & > a:not(:last-child) {
    margin: 0 0 12px;
  }
`;

const LinkText = styled(Link)`
  display: block;
  text-align: center;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: ${BLUE[1]};
`;

export default SignInComponent;
