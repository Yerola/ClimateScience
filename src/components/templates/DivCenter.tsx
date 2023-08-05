import React, { PropsWithChildren } from "react";

export const DivCenter = (props: PropsWithChildren) => {
  return (
    <>
      <div>{props.children}</div>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2em;
          padding: 2em 5em;
          position: relative;
        }
      `}</style>
    </>
  );
};
