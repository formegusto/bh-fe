import React from "react";
import { ACHROMATIC, GRAPHCOLORS } from "src/styles/Palette";
import styled from "styled-components";

type Props = {
  title: string;
  id: number;
  interval: number;
  label: string;
  startTime: number;
};

function VisualItem({ title, id, interval, label, startTime }: Props) {
  const visualRef = React.useRef<HTMLCanvasElement>(null);
  const chartRef = React.useRef<any>(null);

  const labels = React.useRef<any>(
    Array.from({ length: 10 }).map(
      (_, idx) => `${startTime}:0:${0 + (interval / 1000) * idx}`
    )
  );

  // 초기 랜덤값 10개치 생성

  React.useEffect(() => {
    if (visualRef) {
      const Chart = (window as any).Chart;
      const ctx = visualRef.current?.getContext("2d");
      const ranColorIdx = Math.floor(Math.random() * GRAPHCOLORS.length);
      const chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels.current,
          datasets: [
            {
              label: label,
              data: Array.from({ length: 10 }).map(() => Math.random() * 30),
              borderColor: GRAPHCOLORS[ranColorIdx],
              backgroundColor: GRAPHCOLORS[ranColorIdx],
            },
          ],
        },
        options: {
          animation: {
            duration: 500,
          },
        },
      });
      chartRef.current = chart;
    }
  }, [title, label]);

  React.useEffect(
    () => {
      setInterval(() => {
        console.log(chartRef.current);
        const labels = chartRef.current.data.labels;
        const lastTime = labels[labels.length - 1].split(":")[2];
        const lastTimeNumber = parseInt(lastTime);
        let nextTime = lastTimeNumber + interval / 1000;

        let timeStr = `${labels[labels.length - 1].split(":")[0]}`;
        if (nextTime > 60) {
          const lastMinute = labels[labels.length - 1].split(":")[1];
          const nextMinute = parseInt(lastMinute + 1);

          nextTime -= 60;

          timeStr += `:${nextMinute}:${nextTime}`;
        } else {
          const lastMinute = labels[labels.length - 1].split(":")[1];
          timeStr += `:${lastMinute}:${nextTime}`;
        }

        chartRef.current.data.labels.shift();
        chartRef.current.data.labels.push(timeStr);
        chartRef.current.data.datasets[0].data.shift();
        chartRef.current.data.datasets[0].data.push(Math.random() * 30);

        chartRef.current.update();
      }, interval);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <ItemStyle.Block>
      <ItemStyle.Title>{title}</ItemStyle.Title>
      <ItemStyle.VisualBlock>
        <ItemStyle.Visual ref={visualRef} />
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

type VisualsProps = {
  changeViewVisual: (status: boolean) => void;
};

function Visualization({ changeViewVisual }: VisualsProps) {
  const refWrap = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (refWrap) {
      if (refWrap.current) changeViewVisual(true);
    }
  }, [changeViewVisual]);

  return (
    <Wrap ref={refWrap} id="visuals-wrap">
      <VisualItem
        title="온도 센서"
        id={1}
        interval={5500}
        label="Temperature"
        startTime={3}
      />
      <VisualItem
        title="습도 센서"
        id={1}
        interval={5000}
        label="Humidity"
        startTime={10}
      />
      <VisualItem
        title="조도 센서"
        id={1}
        interval={7500}
        label="Humidity"
        startTime={10}
      />
      <VisualItem
        title="거주자 수 센서"
        id={2}
        interval={8000}
        label="ResidentCount"
        startTime={2}
      />
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
