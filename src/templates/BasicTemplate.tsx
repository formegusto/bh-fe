import { ContainerWidth1240 } from "src/styles/Container";
import { ACHROMATIC } from "src/styles/Palette";
import styled from "styled-components";

type BasicTemplateProps = {
  title: string;
  titleImage: string;
  description: string;
  subTitle?: string;
  subDescription?: string;
};

interface Props extends React.PropsWithChildren<BasicTemplateProps> {}

function BasicTemplate({ children, titleImage, title, description }: Props) {
  return (
    <Wrap>
      <PageBanner>
        <BackgroundImage src={titleImage} alt="ABOUT US IMAGE" />
        <BackShadow>
          <ContainerWidth1240>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </ContainerWidth1240>
        </BackShadow>
      </PageBanner>
      {children}
    </Wrap>
  );
}

const Wrap = styled.div`
  padding: 100px 0 0;
`;

const PageBanner = styled.div`
  position: relative;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const BackShadow = styled.div`
  position: relative;
  top: 0;
  left: 0;

  width: 100%;

  background: linear-gradient(90deg, #333333 0%, rgba(51, 51, 51, 0) 100%);
  padding: 40px 0;
  box-sizing: border-box;

  font-style: normal;
  color: ${ACHROMATIC[15]};
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.9);
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;

  text-transform: uppercase;

  margin: 0 0 8px;
`;

const Description = styled.h3`
  width: 70%;

  font-weight: normal;
  font-size: 14px;
  line-height: 20px;

  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.9);
`;
export default BasicTemplate;
