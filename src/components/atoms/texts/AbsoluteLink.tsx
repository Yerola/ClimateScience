import Link from "next/link";
import React, { CSSProperties } from "react";

type absoluteTextProps = {
  weight?: number;
  size?: number;
  content: string;
  path: string;
  position: CSSProperties;
};

export const AbsoluteLink = ({
  weight = 500,
  size = 18,
  content,
  path,
  position,
}: absoluteTextProps) => {
  return (
    <>
      <Link href={path} style={position} className="link">
        {content}
      </Link>
      <style jsx>{`
        .link {
          font-weight: ${weight}px;
          font-size: ${size}px;
        }
      `}</style>
    </>
  );
};
