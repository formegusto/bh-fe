import Assets from "src/assets";
import { ContainerWidth1240 } from "src/styles/Container";
import { ACHROMATIC, BLUE } from "src/styles/Palette";
import styled from "styled-components";

function HeaderComponent() {
  return (
    <Wrap>
      <OptionBar.Block></OptionBar.Block>
      <LogoBar.Block>
        <a href="https://www.keti.re.kr/main/main.php">
          <LogoBar.Logo src={Assets.keti_logo_horizontal} alt="KETI LOGO" />
        </a>
      </LogoBar.Block>
      <Nav.Block>
        <ContainerWidth1240>
          <Nav.Navs>
            <Nav.Item>
              About us
              <Nav.DropDown />
            </Nav.Item>
            <Nav.Item>
              Data Information
              <Nav.DropDown />
            </Nav.Item>
            <Nav.Item>
              Data Sharing
              <Nav.DropDown />
            </Nav.Item>
            <Nav.Item>
              Login
              <Nav.DropDown />
            </Nav.Item>
          </Nav.Navs>
        </ContainerWidth1240>
      </Nav.Block>
    </Wrap>
  );
}

const Wrap = styled.header`
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;

  background-color: ${ACHROMATIC[6]};

  z-index: 255;
`;

const OptionBar = {
  Block: styled.div`
    height: 24px;
    border-bottom: 1px solid ${ACHROMATIC[5]};
    box-sizing: border-box;
  `,
  Options: styled.ul``,
  Item: styled.li``,
};

const LogoBar = {
  Block: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `,
  Logo: styled.img`
    width: 266px;
    margin: 8px 0;
  `,
};

const Nav = {
  Block: styled.nav`
    background-color: ${BLUE[0]};
  `,
  Navs: styled.ul`
    display: table;
    height: 32px;
    border-collapse: collapse;
  `,
  Item: styled.li`
    display: table-cell;
    position: relative;
    width: calc(1240px / 4);

    text-align: center;
    line-height: 32px;
    color: ${ACHROMATIC[6]};

    border-left: 1px solid ${BLUE[1]};
    border-right: 1px solid ${BLUE[1]};

    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      & > div {
        transform: scaleY(1);
      }
    }
  `,
  DropDown: styled.div`
    position: absolute;
    width: 100%;
    height: 250px;

    transform: scaleY(0);
    transform-origin: 50% 0%;
    transition: 0.5s;

    background-color: rgba(45, 63, 85, 0.7);
  `,
};

export default HeaderComponent;
