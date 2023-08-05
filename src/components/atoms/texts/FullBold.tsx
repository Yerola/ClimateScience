import React from "react";
import { TextsProps } from "./MediumBold";

export const FullBold = ({
  text,
  size = 18,
  color = "--white",
}: TextsProps) => {
  return (
    <>
      <p>{text}</p>
      <style jsx>{`
        p {
          font-weight: 900;
          font-size: ${size}px;
          color: var(${color});
        }
      `}</style>
    </>
  );
};
