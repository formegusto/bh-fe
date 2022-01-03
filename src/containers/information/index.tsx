import React from "react";
import { ConnectedProps } from "react-redux";
import InformationComponent from "src/components/information";
import InformationConnector from "src/store/information/connector";

interface Props extends ConnectedProps<typeof InformationConnector> {}

function InformationContainer({
  buildings,
  units,
  sensors,
  getInfos,
  sessionCert,
}: Props) {
  const [viewUnits, setViewUnits] = React.useState<boolean>(false);
  const [viewVisual, setViewVisual] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (sessionCert)
      getInfos({
        target: "building",
      });
  }, [getInfos, sessionCert]);

  React.useEffect(() => {
    if (units) {
      if (units.length > 0) {
        setViewUnits(true);
      }
    }
  }, [units]);

  const selBuilding = React.useCallback(
    (id: number) => {
      getInfos({
        target: "unit",
        rootId: id,
      });
    },
    [getInfos]
  );

  const selUnit = React.useCallback(
    (id: number) => {
      getInfos({
        target: "sensor",
        rootId: id,
      });
    },
    [getInfos]
  );

  return (
    <InformationComponent
      viewUnits={viewUnits}
      viewVisual={viewVisual}
      buildings={buildings}
      units={units}
      selBuilding={selBuilding}
      selUnit={selUnit}
    />
  );
}

export default InformationConnector(InformationContainer);
