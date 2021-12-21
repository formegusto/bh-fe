import React from "react";
import { ACHROMATIC } from "src/styles/Palette";
import styled from "styled-components";

type Props = {
  title: string;
  id: number;
};

function VisualItem({ title, id }: Props) {
  const visualRef = React.useRef<HTMLCanvasElement>(null);
  const chartRef = React.useRef<any>(null);
  React.useEffect(() => {
    if (visualRef) {
      const Chart = (window as any).Chart;
      const ctx = visualRef.current?.getContext("2d");
      const chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [1, 2, 3],
          datasets: [
            {
              data: [1, 2, 3],
            },
          ],
        },
      });
      chartRef.current = chart;
    }
  }, []);

  const addData = React.useCallback(() => {
    console.log(chartRef.current);
    chartRef.current.data.labels.push(4);
    chartRef.current.data.datasets[0].data.push(4);
    chartRef.current.update();
  }, []);

  return (
    <ItemStyle.Block>
      <ItemStyle.Title>{title}</ItemStyle.Title>
      <ItemStyle.VisualBlock>
        <ItemStyle.Visual ref={visualRef} />
      </ItemStyle.VisualBlock>
      <button onClick={addData}>테스트 번튼</button>
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
