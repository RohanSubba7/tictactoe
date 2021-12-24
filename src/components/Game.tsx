import styled from "@emotion/styled";
import React from "react";
import Board from "./Board";

type LayoutProps = {
  gap: number;
};

const Row = styled.div<LayoutProps>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap}px;
`;
const Column = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap}px;
`;

const Game = () => {
  return (
    <Row gap={20}>
      <Column gap={20}>
        <div>Status</div>
        <Board />
      </Column>
    </Row>
  );
};

export default Game;
