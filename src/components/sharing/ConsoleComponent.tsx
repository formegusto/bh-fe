import styled from "styled-components";

function ConsoleComponent() {
  return (
    <Wrap>
      <h2 className="subtitle">Console</h2>
      <h4 className="subdescription">
        BEMS-HDMS Console Service의 간편한 인터페이스를 통해 데이터를 보다 더
        쉽게 공유받을 수 있습니다.
      </h4>
    </Wrap>
  );
}

const Wrap = styled.div``;

export default ConsoleComponent;
