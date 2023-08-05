import { BorderText } from "@/components/atoms/texts/BorderText";
import { FullBold } from "@/components/atoms/texts/FullBold";
import React from "react";

export type TitleWithHeaderProps = {
  phrases: string[];
  title: string;
  color: string;
  text?: string;
};

export const TitleWithHeader = ({
  phrases,
  title,
  color,
  text,
}: TitleWithHeaderProps) => {
  return (
    <>
      <section>
        <section className="words">
          {phrases.map((el, ind) => (
            <BorderText key={ind} text={el} size={14} borderColor={color} />
          ))}
        </section>
        <FullBold text={title} size={50} />
        <p>{text ?? ""}</p>
      </section>
      <style jsx>{`
        section {
          color: var(${color});
          border-color: var(${color});
        }
        .words {
          display: flex;
          gap: 0.3em;
        }
        p {
          font-size: 20;
        }
      `}</style>
    </>
  );
};
