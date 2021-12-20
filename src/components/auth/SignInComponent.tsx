import styled from "styled-components";
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
    </Wrap>
  );
}

const Wrap = styled.form`
  width: 400px;
`;

export default SignInComponent;
