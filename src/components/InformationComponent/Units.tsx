import styled from "styled-components";
import { MdAdsClick } from "react-icons/md";
import { ACHROMATIC, BLUE } from "src/styles/Palette";
import UnitItems from "src/store/UnitItems";

type Props = {
  name: string;
};

function UnitItemView({ name }: Props) {
  return (
    <UnitItemStyle.Block>
      <UnitItemStyle.Title>{name}</UnitItemStyle.Title>
    </UnitItemStyle.Block>
  );
}

const UnitItemStyle = {
  Block: styled.div`
    width: 200px;
    height: 100px;

    box-sizing: border-box;
    border: 2px solid ${ACHROMATIC[14]};

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    &:hover {
      border-color: ${BLUE[0]};
      & > h1 {
        color: ${BLUE[0]};
      }
    }

    margin-bottom: 10px;
  `,
  Title: styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    color: ${ACHROMATIC[3]};
  `,
};

const UnitItemWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & > div:not(:nth-child(6n + 0)) {
    margin-right: 8px;
  }
`;

function Units() {
  return (
    <Wrap>
      <Title.Block>
        <Title.Text>Units</Title.Text>
        <MdAdsClick size={32} color={BLUE[1]} />
      </Title.Block>
      <UnitItemWrap>
        {UnitItems.map((_, idx) => (
          <UnitItemView name={_} key={idx} />
        ))}
      </UnitItemWrap>
    </Wrap>
  );
}

const Wrap = styled.div``;

const Title = {
  Block: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 54px;
  `,
  Text: styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    color: ${ACHROMATIC[3]};
  `,
};

export default Units;