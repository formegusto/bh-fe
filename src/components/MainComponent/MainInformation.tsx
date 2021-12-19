import Assets from "src/assets";
import { ContainerWidth1240 } from "src/styles/Container";
import { ACHROMATIC } from "src/styles/Palette";
import styled from "styled-components";

function MainInformation() {
  return (
    <Wrap>
      <ContainerWidth1240>
        <Information.Block>
          <Information.Item>
            <Information.Image
              src={Assets.Banner.SubBanner1Darker}
              alt="information 1"
            />
            <Information.DescriptionBlock>
              <Information.Title>
                설치정보 제공 서비스(위치/센서/모니터링 등)
              </Information.Title>
              <Information.Desc>
                건물규모에 따른 플랫폼 구축 및 설치로 데이터 안정성 및 신속성을
                확보하여 ...
              </Information.Desc>
            </Information.DescriptionBlock>
          </Information.Item>
          <Information.Item>
            <Information.Image
              src={Assets.Banner.SubBanner2Darker}
              alt="information 2"
            />
            <Information.DescriptionBlock>
              <Information.Title>
                데이터 공유 서비스(외부사용자 활용)
              </Information.Title>
              <Information.Desc>
                풍부한 경험과 최고의 기술력으로 새로운 미래를 열어가기 위해
                장기적인 비전을 통한 끊임없는 ...
              </Information.Desc>
            </Information.DescriptionBlock>
          </Information.Item>
          <Information.Item>
            <Information.Image
              src={Assets.Banner.SubBanner3Darker}
              alt="information 3"
            />
            <Information.DescriptionBlock>
              <Information.Title>사업개요 및 이용방법</Information.Title>
              <Information.Desc>
                빌딩 내 사용자 데이터 수집/연계 기술 개발 및 데이터 관리
                플랫폼을 구축하여 ...
              </Information.Desc>
            </Information.DescriptionBlock>
          </Information.Item>
        </Information.Block>
      </ContainerWidth1240>
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 48px 0;
  background-color: ${ACHROMATIC[15]};
`;

const Information = {
  Block: styled.section`
    display: flex;
    justify-content: space-between;
  `,
  Item: styled.div`
    width: calc(100% / 3 - 48px);
    border: 1px solid ${ACHROMATIC[14]};

    cursor: pointer;
    transition: 0.7s;

    &:hover {
      transform: translate(-3px, -3px);
      box-shadow: 4px 4px rgb(238, 238, 238, 0.3);
    }
  `,
  Image: styled.img`
    width: 100%;
    height: 225px;

    object-fit: cover;
  `,
  DescriptionBlock: styled.div`
    padding: 20px;
  `,
  Title: styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;

    color: ${ACHROMATIC[4]};

    margin: 0 0 8px;
  `,
  Desc: styled.h3`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;

    color: ${ACHROMATIC[7]};
  `,
};

export default MainInformation;
