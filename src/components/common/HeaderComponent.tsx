import Assets from "src/assets";
import { ContainerWidth1240 } from "src/styles/Container";
import { ACHROMATIC, BLUE } from "src/styles/Palette";
import styled from "styled-components";

function HeaderComponent() {
  return (
    <Wrap>
      <ContainerWidth1240 className="header-container">
        <LogoBlock>
          <img src={Assets.Symbols.KETILogoHorizontal} alt="KETI LOGO" />
        </LogoBlock>
        <Nav.Wrap>
          <Nav.Option.Block>
            <Nav.Option.Item>Contact Us</Nav.Option.Item>
            <Nav.Option.Item>English</Nav.Option.Item>
          </Nav.Option.Block>
          <Nav.Main.Block>
            <Nav.Main.Item>About Us</Nav.Main.Item>
            <Nav.Main.Item>Data Information</Nav.Main.Item>
            <Nav.Main.Item>Data Sharing</Nav.Main.Item>
            <Nav.Main.Item>Login</Nav.Main.Item>
          </Nav.Main.Block>
        </Nav.Wrap>
      </ContainerWidth1240>
    </Wrap>
  );
}

const Wrap = styled.header`
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;

  background-color: ${ACHROMATIC[15]};

  z-index: 255;

  & > .header-container {
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LogoBlock = styled.div`
  display: flex;
  align-items: center;

  & > img {
    width: 266px;
  }
`;

const Nav = {
  Wrap: styled.nav`
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  `,
  Option: {
    Block: styled.ul`
      height: 24px;
      margin: 18px 0 0;

      display: flex;
      align-items: center;

      font-style: normal;
      font-weight: 500;
      font-size: 10px;
      line-height: 12px;

      color: ${ACHROMATIC[11]};
      box-sizing: border-box;

      & > li:not(:last-child) {
        padding: 0 8px 0;
        border-right: 1px solid ${ACHROMATIC[11]};
      }
    `,
    Item: styled.li`
      height: 12px;
      cursor: pointer;
      padding: 0 0 0 7px;
    `,
  },
  Main: {
    Block: styled.ul`
      flex: 1;

      display: flex;

      & > li:not(:last-child) {
        margin: 0 50px 0 0;
      }
    `,
    Item: styled.li`
      padding: 12px 0 30px;
      box-sizing: border-box;

      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;

      color: ${BLUE[1]};
    `,
  },
};

export default HeaderComponent;
