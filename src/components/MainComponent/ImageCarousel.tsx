import React from "react";
import Assets from "src/assets";
import styled, { keyframes } from "styled-components";

function ImageCarousel() {
  React.useEffect(() => {
    setInterval(() => {
      const elActive = document.querySelector(".banner-image.active");

      if (elActive) {
        let elNextActive = elActive.nextSibling;

        if (elNextActive) {
          if (
            !(elNextActive as HTMLImageElement).classList.contains(
              "banner-image"
            )
          ) {
            elNextActive = document.querySelector(".banner-image");
          }
        }

        if (elNextActive) {
          (elActive as HTMLImageElement).classList.add("inactivating");
          (elActive as HTMLImageElement).classList.remove("active");
          (elNextActive as HTMLImageElement).classList.add("activating");
        }
      }
    }, 3000);

    const elBannerImages = document.querySelectorAll(".banner-image");
    elBannerImages.forEach((_) => {
      _.addEventListener("animationend", () => {
        _.classList.remove("activating");
        _.classList.add("active");

        const elInActive = document.querySelector(".banner-image.inactivating");
        if (elInActive) {
          (elInActive as HTMLImageElement).classList.remove("inactivating");
        }
      });
    });
  }, []);

  return (
    <>
      <Image src={Assets.banner_1} className="banner-image active" />
      <Image src={Assets.banner_2} className="banner-image" />
      <Image src={Assets.banner_3} className="banner-image" />
      <Image src={Assets.banner_4} className="banner-image" />
    </>
  );
}

const fadeInOutAnimation = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`;

const Image = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 850px;

  object-fit: cover;

  &:not(.active) {
    z-index: 0;
  }

  &.active {
    z-index: 4;
    display: block;
  }

  &.activating {
    z-index: 4;
    display: block;
    animation: ${fadeInOutAnimation} 1.25s;
  }

  &.inactivating {
    z-index: 3;
  }
`;

export default ImageCarousel;
