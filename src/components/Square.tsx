import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";

export interface SquareProps {
  value: "X" | "O" | null;
  onClick(): void;
}

const Squared = styled.button`
  width: 34px;
  height: 34px;
`;

const Square = (props: SquareProps) => {
  //   const [value, setValue] = useState<string | null>(null);

  return <Squared onClick={props.onClick}>{props.value}</Squared>;
};

export default Square;
