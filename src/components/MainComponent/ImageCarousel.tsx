import React from "react";
import Assets from "src/assets";
import styled, { keyframes } from "styled-components";

function ImageCarousel() {
  //   const idx = React.useRef<number>(0);
  //   const [images, setImages] = React.useState<Array<any>>([
  //     <Image src={Assets.banner_1} className="banner-image active" />,
  //   ]);

  //   React.useEffect(() => {
  //     console.log("실행");
  //     setInterval(() => {
  //       setImages((state) => {
  //         const length = state.length;

  //         if (length > 2) {
  //           state.shift();
  //         }
  //         console.log(idx.current);
  //         idx.current += 1;

  //         return idx.current % 2 === 1
  //           ? state.concat(
  //               <Image
  //                 src={Assets.banner_2}
  //                 className="banner-image activating"
  //               />
  //             )
  //           : state.concat(
  //               <Image
  //                 src={Assets.banner_1}
  //                 className="banner-image activating"
  //               />
  //             );
  //       });
  //     }, 4000);
  //   }, []);

  return (
    <>
      <Image src={Assets.banner_2} className="banner-image activating" />
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
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;

  &:not(.active) {
    display: none;
  }

  &.activating {
    display: block;
    animation: ${fadeInOutAnimation} 1.25s;
  }
`;

export default ImageCarousel;
