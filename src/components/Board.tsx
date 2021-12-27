import styled from "@emotion/styled";
import React from "react";
import Square, { SquareProps } from "./Square";
import { useState } from "react";

type LayoutProps = {
  gap: number;
};

type TicTacToeBoardValue = SquareProps["value"][];

const Status = styled.div``;

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
  const [squares, setSquares] = useState<TicTacToeBoardValue>(
    Array(9).fill(null)
  );
  const [xISNext, setXISNext] = useState(true);

  const handleClick = (i: number) => {
    if (squares[i] || winner) return;
    const squaresCopy = squares.slice();
    squaresCopy[i] = xISNext ? "X" : "O";
    setSquares(squaresCopy);
    setXISNext(!xISNext);
  };

  const renderSquare = (i: number) => (
    <Square onClick={() => handleClick(i)} value={squares[i]} />
  );

  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xISNext ? "X" : "O");
  }

  return (
    <Column gap={0}>
      <Status>{status}</Status>
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

function calculateWinner(squares: TicTacToeBoardValue) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
