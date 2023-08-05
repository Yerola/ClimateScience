import React, { PropsWithChildren } from "react";

export const DivTwoColumns = (props: PropsWithChildren) => {
  return (
    <>
      <div>{props.children}</div>
      <style jsx>{`
        div {
          display: grid;
          align-items: center;
          justify-content: center;
          grid-template-columns: 1fr 1fr;
          gap: 0em;
          padding: 2em 0;
        }
      `}</style>
    </>
  );
};
