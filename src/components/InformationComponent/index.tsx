import { ContainerWidth1240 } from "src/styles/Container";
import styled from "styled-components";
import Buildings from "./Buildings";
import Units from "./Units";
import Visualization from "./Visualization";

function InformationComponent() {
  return (
    <Wrap>
      <ContainerWidth1240>
        <Buildings />
        <Units />
        <Visualization />
      </ContainerWidth1240>
    </Wrap>
  );
}

const Wrap = styled.div``;

export default InformationComponent;
