import { CSSProperties, PropsWithChildren } from "react";

interface PurpleBand extends PropsWithChildren {
  style?: CSSProperties;
}

export const PurpleBandLayout = ({ style, children }: PurpleBand) => {
  return (
    <>
      <section style={style}>{children}</section>
      <style jsx>{`
        section {
          background: var(--brilliant-purple);
          color: var(--white);
          display: flex;
          flex-direction: column;
          padding: 3em 0;
          align-items: center;
          gap: 1em;
        }
      `}</style>
    </>
  );
};
