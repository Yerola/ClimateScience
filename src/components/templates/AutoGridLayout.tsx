import React, {
  PropsWithChildren,
  RefObject,
  createRef,
  useLayoutEffect,
  useState,
} from "react";

interface GridConfig extends PropsWithChildren {
  max: number;
  desp?: boolean;
  h?: number;
}

export const AutoGridLayout = ({ max, children }: GridConfig) => {
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          display: grid;
          align-items: center;
          justify-content: center;
          grid-template-columns: repeat(
            auto-fit,
            minmax(${max}em, ${max * 2}em)
          );
          gap: 1em;
          padding: 2em 0;
          width: 100%;
        }
      `}</style>
    </>
  );
};
