import React from "react";
import { PersonCard, PersonCardProps } from "../molecules/cards/PersonCard";
import { MediumBold } from "../atoms/texts/MediumBold";

export interface QuoteProps extends PersonCardProps {
  paragraphs: string[];
}

export const Q = ({
  paragraphs,
  image,
  name,
  position,
  textColor,
}: QuoteProps) => {
  return (
    <>
      <div>
        <PersonCard
          image={image}
          name={name}
          position={position}
          textColor={textColor}
        />
        <section>
          {paragraphs.map((el, ind) => (
            <MediumBold text={el} key={ind} />
          ))}
        </section>
      </div>
      <style jsx>{`
        div {
          display: grid;
          grid-template-columns: 40% 1fr;
          width: 70%;
          text-align: center;
          align-items: center;
        }
        section {
          display: flex;
          flex-direction: column;
          gap: 1em;
        }
      `}</style>
    </>
  );
};
