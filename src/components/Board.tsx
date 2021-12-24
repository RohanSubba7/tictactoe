import styled from "@emotion/styled";
import React from "react";
import Square from "./Square";

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

const Board = () => {
  const renderSquare = (i: number) => <Square value={i} />;

  return (
    <Column gap={0}>
      <Row gap={0}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </Row>
      <Row gap={0}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </Row>
      <Row gap={0}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </Row>
    </Column>
  );
};

export default Board;
