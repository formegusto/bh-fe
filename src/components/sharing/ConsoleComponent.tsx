import { ACHROMATIC, BLUE } from "src/styles/Palette";
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
              contents={`curl -x “GET” http://{bems-hdms-domain}/api/bems-hdms/1?include=temperature,humidity,lux&startDate=2021-12-18T13:05&end Date=2021-12-18T13:10 -H “Accept:text/plain” -H “Authorization:*******************************”`}
            />
            <ButtonGroup>
              <Button type="button">REQUEST</Button>
            </ButtonGroup>
          </Card>
          <Card title="RESPONSE">
            <TitleCode
              contents={
                '"Ë7õnµMÉ¦H\u001a\nãÁI`ï\'ø7\u0010\u0019\u0000©!%ÈèW¦­$zR\n²k\u001a{\u001cµ8çôÎ\u0013ÝnhßI\u001fcnÓòL-¨=L\u0016G$ê\rØ\u00164Ã*Á¦\nóÆ6gí\u0005z°EÑ¤\u0005½\u0013ÓIÿP­ÌáÕÔ´÷¬Âg\u0011m±Êy\u001dÌ³\u0019Yí%6\u0005f3s¡æcOí°Æl È¥\u0018ùª\u0012á\b\u0013\u0013±Í[üOVÉWáÇñÓî\u0014å\u0013:\u0010Á\u0005ü\u0000°¢ÿ$8LrÎý|¹Ût²oaiÃóö÷àÆ*aøøûÓ\u001cÄì)\u0013G+D4©NýrläYj§µÞ»=ÈåA\u0019×¾äÌ\u001d+\u0005ý²¾½¦Ü©N4äÈ\u0011t\u001fÀQóFv­Ðé9)\n\u000eôG+D4©NýrläYj§µÞ\u0010wb¤>ò"EXÑ\r×¸gÁVð<a\r®i«µ\u001aÃmîÀQóFv­Ðé9)\n\u000eôG+D4©NýrläYj§µÞ¶cøQ\u0019á\u0001Ø\u0004V]<\u0012\u0000ï}O\u0019ù±tk¼êÀQóFv­Ðé9)\n\u000eôG+D4©NýrläYj§µÞ?×ä¹d²`\\Õ¢\u001d\u0012\u0015¨\u001dÉ3IU¾\\Ý\t¤E÷\u0003\u0011ZÀQóFv­Ðé9)\n\u000eôG+D4©NýrläYj§µÞnT©íµ´£hz\u0019:\u000bM,ù\u0016¼¦"kÓó\u001f<±Ùu@\u0004ÀQóFv­Ðé9)\n\u000eôG+D4©NýrläYj§µÞp\u0011ßýØfüë\u001a~ÎJ£\byßÔ¶]kñ÷Î°¯KÂÛÀQóFv­ ...'
              }
            />
            <ButtonGroup>
              <Button type="button">DECRYPT</Button>
              <Button type="button">EXPORT EXCEL</Button>
            </ButtonGroup>
          </Card>
        </Card>
      </CardGroup>
    </Wrap>
  );
}

const Wrap = styled.div`
  & .titlecode {
    width: calc(100% - 16px);
    margin: 0 8px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  margin: 10px 0 0;
  padding: 0 8px;
  box-sizing: border-box;

  & > button:not(:last-child) {
    margin: 0 14px 0 0;
  }
`;
const Button = styled.button`
  border: none;
  outline: none;

  padding: 8px 16px;

  background: ${BLUE[1]};

  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;

  color: ${ACHROMATIC[15]};

  cursor: pointer;

  &:focus,
  &:hover {
    background: rgba(38, 68, 109, 0.7);
  }
`;

export default ConsoleComponent;
