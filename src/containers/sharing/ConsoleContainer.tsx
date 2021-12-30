import React from "react";
import { ConnectedProps } from "react-redux";
import { useNavigate } from "react-router-dom";
import ConsoleComponent from "src/components/sharing/ConsoleComponent";
import { API_STATUS } from "src/store/apiApplication/types";
import ConsoleConnector from "src/store/console/connector";
import {
  ConsoleHeader,
  ConsolePath,
  ConsoleQuery,
} from "src/store/console/types";

interface Props extends ConnectedProps<typeof ConsoleConnector> {}
function ConsoleContainer({ application, showAlert }: Props) {
  const navigate = useNavigate();
  const [header, setHeader] = React.useState<ConsoleHeader>();
  const [path, setPath] = React.useState<ConsolePath>();
  const [query, setQuery] = React.useState<ConsoleQuery>();

  React.useEffect(() => {
    if (application && application.status !== API_STATUS.NONE) {
      console.log("init start");

      setHeader({
        accept: "text/plain",
        authorization: application.apiKey!,
      });

      setPath({
        buildingId: null,
        unitId: null,
        sensorId: null,
      });

      setQuery({
        include: null,
        exclude: null,
        startDate: null,
        endDate: null,
        interval: null,
        limit: null,
        offset: null,
      });
    } else {
      showAlert({
        type: "error",
        message: "API 신청 후 이용해주세요.",
        action: "none",
        clickEvent: {
          failure: () => {
            navigate("/sharing");
          },
        },
      });
    }
  }, [application, navigate, showAlert]);

  const changePath = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPath((path) => ({
        ...path,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );

  const changeQuery = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery((query) => ({
        ...query,
        [e.target.name]: e.target.value === "" ? null : e.target.value,
      }));
    },
    []
  );

  return (
    <ConsoleComponent
      header={header}
      path={path}
      query={query}
      changePath={changePath}
      changeQuery={changeQuery}
    />
  );
}

export default ConsoleConnector(ConsoleContainer);
