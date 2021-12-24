import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";

export interface SquareProps {
  value: number;
}

const Squared = styled.button``;

const Square = (props: SquareProps) => {
  const [value, setValue] = useState<string | null>(null);

  return <Squared onClick={() => setValue("X")}>{value}</Squared>;
};

export default Square;
