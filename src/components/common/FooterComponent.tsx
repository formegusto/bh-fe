import styled from "styled-components";

function FooterComponent() {
  return (
    <Wrap>
      <OptionBar />
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 240px;
  background-color: #5e5e5e;
`;

const OptionBar = styled.div`
  height: 32px;
  background-color: #4d4d4d;
`;

export default FooterComponent;
