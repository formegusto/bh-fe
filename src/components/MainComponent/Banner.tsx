import { ContainerWidth1240 } from "src/styles/Container";
import { ACHROMATIC, BLUE } from "src/styles/Palette";
import { Tag, Title } from "src/styles/Typo";
import styled from "styled-components";
import ImageCarousel from "./ImageCarousel";

function Banner() {
  return (
    <Wrap>
      <ImageCarousel />
      <Information.Block>
        <ContainerWidth1240>
          <Information.BoxBlock>
            <Information.Box>
              <Tag className="information tag">데이터 총량수</Tag>
              <Title className="information title">2,024 GB</Title>
              <Information.Heading />
            </Information.Box>
            <Information.Box>
              <Tag className="information tag">데이터 종류수</Tag>
              <Title className="information title">38 EA</Title>
              <Information.Heading />
            </Information.Box>
            <Information.Box>
              <Tag className="information tag">적용 빌딩 수</Tag>
              <Title className="information title">5 Units</Title>
              <Information.Heading />
            </Information.Box>
            <Information.Box>
              <Tag className="information tag">센서 설치 수</Tag>
              <Title className="information title">704 EA</Title>
              <Information.Heading />
            </Information.Box>
          </Information.BoxBlock>
        </ContainerWidth1240>
      </Information.Block>
    </Wrap>
  );
}

const Wrap = styled.article`
  position: relative;
  width: 100%;
  height: 850px;
`;

const Information = {
  Block: styled.div`
    position: absolute;
    z-index: 10;
    bottom: 0;

    width: 100%;
    height: 375px;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.7) 50.08%
    );
  `,
  BoxBlock: styled.section`
    display: flex;
    flex-direction: row;

    padding: 120px 0 0;
    width: 100%;

    & > div:nth-child(1) > span {
      background-color: ${BLUE[1]};
    }
    & > div:nth-child(2) > span {
      background-color: ${BLUE[2]};
    }
    & > div:nth-child(3) > span {
      background-color: ${BLUE[3]};
    }
    & > div:nth-child(4) > span {
      background-color: ${BLUE[4]};
    }
  `,
  Box: styled.div`
    position: relative;
    flex: 1;
    color: ${ACHROMATIC[6]};
    cursor: pointer;

    &:hover {
      & > :not(span) {
        opacity: 0.7;
      }

      & > span {
        width: 50%;
      }
    }

    & > .information.tag {
      margin: 0 0 16px;
    }

    & > .information.title {
      padding: 0 0 24px;
      box-sizing: border-box;
    }
  `,
  Heading: styled.span`
    position: absolute;
    bottom: 0;
    left: 0;

    width: 40px;
    height: 4px;

    transition: 0.5s;
  `,
};

export default Banner;
