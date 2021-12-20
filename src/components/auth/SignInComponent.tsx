import { Link } from "react-router-dom";
import { BLUE } from "src/styles/Palette";
import styled from "styled-components";
import BasicButton from "../common/formItems/BasicButton";
import BasicTextInput from "../common/formItems/BasicTextInput";

function SignInComponent() {
  return (
    <Wrap>
      <BasicTextInput type="text" labelText="username" id="username" isBlock />
      <BasicTextInput
        type="password"
        labelText="password"
        id="password"
        isBlock
      />
      <BasicButton type="submit" isBlock>
        Sign In
      </BasicButton>
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
    margin: 0 0 10px;
  }

  & > button[type="submit"] {
    margin: 40px 0 30px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  }

  & > a:not(:last-child) {
    margin: 0 0 8px;
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
