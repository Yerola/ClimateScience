import React from "react";
export type TextsProps = {
  text: string;
  size?: number;
  color?: string;
};
export const MediumBold = ({ text, size = 18 }: TextsProps) => {
  return (
    <>
      <p>{text}</p>
      <style jsx>{`
        p {
          font-weight: 600;
          font-size: ${size}px;
        }
      `}</style>
    </>
  );
};
