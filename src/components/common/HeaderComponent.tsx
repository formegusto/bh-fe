import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Assets from "src/assets";
import { ContainerWidth1240 } from "src/styles/Container";
import { ACHROMATIC, BLUE } from "src/styles/Palette";
import styled from "styled-components";

function HeaderComponent() {
  return (
    <>
      <Wrap>
        <ContainerWidth1240 className="header-container">
          <LogoBlock>
            <Link to="/">
              <img src={Assets.Symbols.KETILogoHorizontal} alt="KETI LOGO" />
            </Link>
          </LogoBlock>
          <Nav.Wrap>
            <Nav.Option.Block>
              <Nav.Option.Item>Contact Us</Nav.Option.Item>
              <Nav.Option.Item>English</Nav.Option.Item>
            </Nav.Option.Block>
            <Nav.Main.Block>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <Nav.Main.Item>About Us</Nav.Main.Item>
              </NavLink>
              <NavLink
                to="/information"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <Nav.Main.Item>Data Information</Nav.Main.Item>
              </NavLink>
              <NavLink
                to="/sharing"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <Nav.Main.Item>
                  Data Sharing
                  <Nav.Main.DropDown>
                    <NavLink
                      to="/sharing"
                      className={({ isActive }) => (isActive ? "active" : "")}
                      end
                    >
                      <Nav.Main.DropDownItem>Document</Nav.Main.DropDownItem>
                    </NavLink>
                    <NavLink
                      to="/sharing/console"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <Nav.Main.DropDownItem>Console</Nav.Main.DropDownItem>
                    </NavLink>
                  </Nav.Main.DropDown>
                </Nav.Main.Item>
              </NavLink>
              <NavLink to="/auth/signin">
                <Nav.Main.Item>Login</Nav.Main.Item>
              </NavLink>
            </Nav.Main.Block>
          </Nav.Wrap>
        </ContainerWidth1240>
      </Wrap>
    </>
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

  & > a > img {
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

      & > li:last-child {
        padding: 0 8px 0 8px;
      }

      & > li:not(:last-child) {
        border-right: 1px solid ${ACHROMATIC[11]};
      }
    `,
    Item: styled.li`
      height: 12px;
      cursor: pointer;
      padding: 0 9px 0;
    `,
  },
  Main: {
    Block: styled.ul`
      flex: 1;

      display: flex;

      & > a:not(:last-child) > li {
        margin: 0 34px 0 0;
      }

      & > .active > li {
        &::after {
          transform: scaleX(1);
        }
      }
    `,
    Item: styled.li`
      position: relative;

      padding: 12px 8px 30px;
      box-sizing: border-box;

      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;

      color: ${BLUE[1]};

      cursor: pointer;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;

        width: 100%;
        height: 3px;

        background-color: ${BLUE[0]};
        transform: scaleX(0);

        transform-origin: 0 0;
      }

      &:hover {
        color: rgba(38, 68, 109, 0.7);

        &::after {
          transition: 0.3s;
          transform: scaleX(1);
        }

        & > ul {
          transform: scaleY(1);

          & > a > li {
            color: ${ACHROMATIC[15]};
          }
        }
      }
    `,
    DropDown: styled.ul`
      position: absolute;
      top: 100%;
      right: 0;

      padding: 10px 10px 20px 150px;

      box-sizing: border-box;
      background: rgba(38, 68, 109, 0.7);

      display: flex;
      flex-direction: column;
      align-items: flex-end;

      transform: scaleY(0);
      transition: 0.3s;
      transform-origin: 0 0;

      & > .active > li {
        color: ${BLUE[5]} !important;
      }
    `,
    DropDownItem: styled.li`
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;

      padding: 4px 10px;

      color: transparent;

      text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.9);

      &:hover {
        color: ${BLUE[5]} !important;
      }
    `,
  },
};

export default HeaderComponent;
