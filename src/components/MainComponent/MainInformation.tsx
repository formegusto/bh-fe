import { ContainerWidth1240 } from "src/styles/Container";
import { ACHROMATIC } from "src/styles/Palette";
import styled from "styled-components";

function MainInformation() {
  return (
    <Wrap>
      <ContainerWidth1240>
        <Information.Block>
          <Information.Item></Information.Item>
          <Information.Item></Information.Item>
          <Information.Item></Information.Item>
        </Information.Block>
      </ContainerWidth1240>
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 48px 0;
  background-color: ${ACHROMATIC[6]};
`;

const Information = {
  Block: styled.section`
    display: flex;
    justify-content: space-between;
  `,
  Item: styled.div`
    width: calc(100% / 3 - 48px);
    height: 310px;
    border: 1px solid ${ACHROMATIC[5]};
  `,
};

export default MainInformation;
