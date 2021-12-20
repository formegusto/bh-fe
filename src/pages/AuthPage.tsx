import React from "react";
import { Link, Outlet } from "react-router-dom";
import Assets from "src/assets";
import styled from "styled-components";

const BANNERS = [
  Assets.Banner.Banner1Darker,
  Assets.Banner.Banner2Darker,
  Assets.Banner.Banner3Darker,
  Assets.Banner.Banner4Darker,
];

function AuthPage() {
  const [bannerIdx, setBannerIdx] = React.useState<number | null>(null);

  React.useEffect(() => {
    const idx = Math.floor(Math.random() * 4);
    setBannerIdx(idx);
  }, []);

  return (
    <Wrap>
      {bannerIdx !== null && <Banner src={BANNERS[bannerIdx]} alt="banner" />}
      <AuthWrap>
        <Link to="/">
          <img src={Assets.Symbols.KETILogoHorizontal} alt="KETI LOGO" />
        </Link>
        <Outlet />
      </AuthWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
`;

const Banner = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: 50% 50%;
`;

const AuthWrap = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;

  margin: 100px 0 0;

  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.9);

  padding: 72px 88px 88px;
  & img {
    width: 266px;
    margin: 0 0 20px;
  }
`;

export default AuthPage;
