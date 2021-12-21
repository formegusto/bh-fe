import React from "react";
import { ContainerWidth1240 } from "src/styles/Container";
import styled from "styled-components";
import Buildings from "./Buildings";
import Units from "./Units";
import Visualization from "./Visualization";

function InformationComponent() {
  const [viewUnits, setViewUnits] = React.useState<boolean>(false);
  const [viewVisual, setViewVisual] = React.useState<boolean>(false);

  const [selBuilding, setSelBuilding] = React.useState<number | null>(null);
  const [selUnit, setSelUnit] = React.useState<number | null>(null);

  const changeSelBuilding = React.useCallback((idx: number) => {
    setSelBuilding(idx);
  }, []);

  const changeSelUnit = React.useCallback((idx: number) => {
    setSelUnit(idx);
  }, []);

  const changeViewUnits = React.useCallback((status: boolean) => {
    setViewUnits(status);
  }, []);

  const changeViewVisual = React.useCallback((status: boolean) => {
    setViewVisual(status);
  }, []);

  React.useEffect(() => {
    if (viewUnits) {
      const elUitsWrap = document.getElementById("units-wrap");

      if (elUitsWrap) {
        const { top } = elUitsWrap.getBoundingClientRect();
        const scrolledTopLength = window.pageYOffset;
        const to = scrolledTopLength + top;

        window.scrollTo({
          top: to - 100,
          behavior: "smooth",
        });
      }
    }
  }, [viewUnits]);

  React.useEffect(() => {
    if (viewVisual) {
      const elVisualWrap = document.getElementById("visuals-wrap");

      if (elVisualWrap) {
        const { top } = elVisualWrap.getBoundingClientRect();
        const scrolledTopLength = window.pageYOffset;
        const to = scrolledTopLength + top;

        window.scrollTo({
          top: to - 120,
          behavior: "smooth",
        });
      }
    }
  }, [viewVisual]);

  return (
    <Wrap>
      <ContainerWidth1240>
        <Buildings
          selBuilding={selBuilding}
          changeSelBuilding={changeSelBuilding}
        />
        {selBuilding && (
          <Units
            selUnit={selUnit}
            changeViewUnits={changeViewUnits}
            changeSelUnit={changeSelUnit}
          />
        )}
        {viewUnits && selUnit && (
          <Visualization changeViewVisual={changeViewVisual} />
        )}
      </ContainerWidth1240>
    </Wrap>
  );
}

const Wrap = styled.div``;

export default InformationComponent;
