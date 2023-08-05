import React from "react";
import { TextsProps } from "./MediumBold";

interface BorderTextProps extends TextsProps {
  borderColor: string;
}

export const BorderText = ({
  text,
  size = 18,
  borderColor,
}: BorderTextProps) => {
  return (
    <>
      <p>{text}</p>
      <style jsx>{`
        p {
          font-weight: 400;
          border: solid 1.5px var(${borderColor});
          padding: 0.2em 0.5em;
          border-radius: 1em;
          width: max-content;
          font-size: ${size}px;
        }
      `}</style>
    </>
  );
};
