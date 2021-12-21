import { ACHROMATIC } from "src/styles/Palette";
import styled, { StyledComponentProps } from "styled-components";
import Card from "../common/Card";
import CardGroup from "../common/CardGroup";
import TitleCode from "../common/TitleCode";

type InputConfigProps = {
  labelText: string;
};

interface InputProps
  extends StyledComponentProps<"input", {}, any, any>,
    InputConfigProps {}

function ConsoleInput({ labelText, ...htmlProps }: InputProps) {
  return (
    <InputStyle.Wrap>
      <InputStyle.Label htmlFor={htmlProps.id}>{labelText}</InputStyle.Label>
      <InputStyle.Input type="text" {...htmlProps} />
    </InputStyle.Wrap>
  );
}

const InputStyle = {
  Wrap: styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    padding: 0 10px;

    box-sizing: border-box;

    &:focus-within {
      & > label {
        color: ${ACHROMATIC[3]};
      }

      & > input {
        color: ${ACHROMATIC[3]};
        border-color: ${ACHROMATIC[3]};
      }
    }
  `,

  Label: styled.label`
    margin: 0 0 4px;

    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;

    color: ${ACHROMATIC[6]};
  `,

  Input: styled.input`
    width: 100%;
    height: 32px;

    box-sizing: border-box;

    margin: 0 0 14px;
    border: 1px solid ${ACHROMATIC[6]};

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    color: ${ACHROMATIC[3]};

    padding: 0 8px;

    outline: none;

    &::placeholder {
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;

      color: ${ACHROMATIC[9]};
    }
  `,
};

function ConsoleComponent() {
  return (
    <Wrap>
      <h2 className="subtitle">Console</h2>
      <h4 className="subdescription">
        BEMS-HDMS Console Service의 간편한 인터페이스를 통해 데이터를 보다 더
        쉽게 공유받을 수 있습니다.
      </h4>
      <CardGroup>
        <Card isBorder>
          <Card title="CONFIG PATH PARAMETER">
            <ConsoleInput
              labelText="buildingId"
              placeholder="input buildingId"
            />
            <ConsoleInput labelText="unitId" placeholder="input unitId" />
            <ConsoleInput labelText="sensorId" placeholder="input sensorId" />
          </Card>
          <Card title="CONFIG QUERY PARAMETER">
            <ConsoleInput labelText="include" placeholder="all" />
            <ConsoleInput labelText="exclude" placeholder="null" />
            <ConsoleInput labelText="startDate" placeholder="NOW - 7day" />
            <ConsoleInput labelText="endDate" placeholder="startDate + 7day" />
            <ConsoleInput labelText="interval" placeholder="null" />
            <ConsoleInput labelText="limit" placeholder="null" />
            <ConsoleInput labelText="offset" placeholder="null" />
          </Card>
        </Card>
        <Card>
          <Card title="REQUEST URI">
            <TitleCode
              contents={`curl -x “GET” http://{bems-hdms-domain}/api/bems-hdms/1?include=temperature,humidity,lux&startD ate=2021-12-18T13:05&end Date=2021-12-18T13:10 -H “Accept:text/plain” -H “Authrization:********** *********************”`}
            />
          </Card>
          <Card title="RESPONSE"></Card>
        </Card>
      </CardGroup>
    </Wrap>
  );
}

const Wrap = styled.div``;

export default ConsoleComponent;
