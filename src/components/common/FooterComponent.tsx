import { ContainerWidth1240 } from "src/styles/Container";
import { ACHROMATIC } from "src/styles/Palette";
import styled from "styled-components";

function FooterComponent() {
  return (
    <Wrap>
      <OptionBar.Block>
        <ContainerWidth1240 className="footer-container">
          <OptionBar.Item>개인정보 취급방침</OptionBar.Item>
          <OptionBar.Item>이메일주소 무단 수집 거부</OptionBar.Item>
        </ContainerWidth1240>
      </OptionBar.Block>
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 240px;
  background-color: #5e5e5e;
`;

const OptionBar = {
  Block: styled.div`
    background-color: #4d4d4d;

    & > .footer-container {
      display: flex;
      height: 32px;

      align-items: center;

      & > span:not(:first-child) {
        padding: 0 12px 0 11px;
      }
    }
  `,
  Item: styled.span`
    display: inline-block;

    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height */

    color: ${ACHROMATIC[13]};

    padding: 0 12px 0 0;

    box-sizing: border-box;
    border-right: 1px solid ${ACHROMATIC[13]};
  `,
};

export default FooterComponent;
