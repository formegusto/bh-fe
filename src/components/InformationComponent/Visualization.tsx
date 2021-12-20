import React from "react";
import { ACHROMATIC } from "src/styles/Palette";
import styled from "styled-components";
import { Line } from "react-chartjs-3";

type Props = {
  title: string;
  id: number;
};

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset of Months",

      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

function VisualItem({ title, id }: Props) {
  React.useEffect(
    () => {
      console.log(Line);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <ItemStyle.Block>
      <ItemStyle.Title>{title}</ItemStyle.Title>
      <ItemStyle.VisualBlock>
        <Line data={data} />
      </ItemStyle.VisualBlock>
    </ItemStyle.Block>
  );
}

const ItemStyle = {
  Block: styled.div`
    border: 1px solid ${ACHROMATIC[14]};

    width: 610px;
    box-sizing: border-box;

    margin-bottom: 24px;
  `,
  Title: styled.h1`
    height: 55px;

    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    color: ${ACHROMATIC[3]};

    border-bottom: 2px solid ${ACHROMATIC[14]};
    box-sizing: border-box;

    display: flex;
    align-items: center;
    padding: 0 20px;
  `,
  VisualBlock: styled.article`
    padding: 8px 20px 32px 20px;
    box-sizing: border-box;
  `,
  Visual: styled.canvas`
    width: 580px;
    height: 400px;
  `,
};

function Visualization() {
  return (
    <Wrap>
      <VisualItem title="온도 센서" id={1} />
      <VisualItem title="거주자 수 센서" id={2} />
      <VisualItem title="ACE 라운지 게이트웨이" id={3} />
    </Wrap>
  );
}

const Wrap = styled.div`
  margin: 24px 0 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & > div:not(:nth-child(2n + 0)) {
    margin-right: 20px;
  }
`;

export default Visualization;
