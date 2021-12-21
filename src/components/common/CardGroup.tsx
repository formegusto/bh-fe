import React from "react";
import styled, { css } from "styled-components";

type StyleProps = {
  direction?: "row" | "column";
};

interface Props extends React.PropsWithChildren<StyleProps> {}

function CardGroup({ children, direction = "row" }: Props) {
  return (
    <Group className="block cardgroup" direction={direction}>
      {children}
    </Group>
  );
}

const Group = styled.div<StyleProps>`
  display: flex;
  width: 100%;
  flex-direction: ${(props) => props.direction};

  ${(props) =>
    props.direction === "row" &&
    css`
      & .card,
      .cardgroup {
        width: calc(50% - 20px);
      }

      & > .card:nth-child(1n + 0),
      .cardgroup:nth-child(1n + 0) {
        margin-right: 20px;
      }
    `}

  ${(props) =>
    props.direction === "column" &&
    css`
      & .card,
      .cardgroup {
        width: 100%;
      }

      & .card:not(:last-child),
      .cardgroup:not(:last-child) {
        margin-bottom: 20px;
      }
    `}
`;

export default CardGroup;
