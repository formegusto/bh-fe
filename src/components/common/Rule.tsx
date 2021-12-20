import { ACHROMATIC } from "src/styles/Palette";
import styled, { StyledComponentProps } from "styled-components";
import BasicCheckBox from "./formItems/BasicCheckBox";

type ConfigProps = {
  title: string;
  checkBoxConfig?: StyledComponentProps<"input", any, {}, any>;
};

function Rule({
  title,
  children,
  checkBoxConfig,
}: React.PropsWithChildren<ConfigProps>) {
  return (
    <Wrap className="rule">
      <Title>{title}</Title>
      <Description>
        <pre>{children}</pre>
      </Description>
      <BasicCheckBox id="checkBox" {...checkBoxConfig}>
        동의
      </BasicCheckBox>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;

  width: 100%;
  flex-direction: column;

  & > .checkbox-wrap {
    display: flex;
    justify-content: flex-end;

    padding: 0 8px 8px;
  }
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;

  color: ${ACHROMATIC[3]};

  padding: 8px;
`;

const Description = styled.p`
  width: 100%;
  height: 400px;

  border: 1px solid ${ACHROMATIC[9]};
  background: ${ACHROMATIC[15]};

  margin: 0 0 10px;

  & > pre {
    width: 100%;
    white-space: pre-wrap;
    word-break: break-all;
  }

  padding: 20px;
  box-sizing: border-box;
`;

export default Rule;
