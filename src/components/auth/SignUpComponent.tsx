import styled from "styled-components";
import BasicButton from "../common/formItems/BasicButton";
import BasicTextInput from "../common/formItems/BasicTextInput";
import InputGroup from "../common/formItems/InputGroup";
import Rule from "../common/Rule";

function SignUpComponent() {
  return (
    <Wrap>
      <BasicTextInput type="text" placeholder="username" isBlock />
      <InputGroup>
        <BasicTextInput type="password" placeholder="password" />
        <BasicTextInput type="password" placeholder="password confirm" />
      </InputGroup>
      <InputGroup>
        <BasicTextInput type="text" placeholder="name" />
        <BasicTextInput type="text" placeholder="organization" />
      </InputGroup>
      <InputGroup>
        <BasicTextInput type="text" placeholder="email" />
        <BasicTextInput type="text" placeholder="phone" />
      </InputGroup>
      <Rule title="이용약관"></Rule>
      <Rule title="개인정보 취급방침"></Rule>
      <BasicButton type="submit" isBlock>
        Sign Up
      </BasicButton>
    </Wrap>
  );
}

const Wrap = styled.form`
  width: 450px;

  & input {
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.25));
  }

  & > input {
    margin: 0 0 10px;
  }

  & > .inputgroup {
    margin: 0 0 10px;
  }

  & > .inputgroup:nth-child(4) {
    margin: 0 0 48px;
  }

  & > .rule {
    margin: 0 0 32px;
  }

  & > button[type="submit"] {
    margin: 40px 0 40px;
  }
`;

export default SignUpComponent;
