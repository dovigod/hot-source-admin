/* eslint-disable react/display-name */
import { uniform } from "@/styles";
import { cardStyle } from "@/styles/card";
import { forwardRef } from "react";

interface CardProps {
  id: string;
  index: number;
  url: string;
  version: string;
  label: string;
}

export const Card = forwardRef(({}: any) => {
  return <div {...uniform(cardStyle.container)}></div>;
});
