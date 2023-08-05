import { MediumBold } from "@/components/atoms/texts/MediumBold";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
export type IconTextProps = {
  title: string;
  subtitle?: string;
  content: string[];
  color: string;
  icon: string;
};

export const IconText = ({
  title,
  content,
  color,
  subtitle,
  icon,
}: IconTextProps) => {
  return (
    <>
      <section>
        <>
          <Image
            src={icon}
            alt="icon"
            style={{ width: "70px", height: "auto" }}
            width={100}
            height={100}
            quality={100}
          />
          <MediumBold text={title} />
        </>
        <>
          {subtitle ? <MediumBold text={subtitle} size={16} /> : null}
          {content.map((el, ind) => (
            <p key={ind}>{el}</p>
          ))}
        </>
      </section>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          gap: 1.5em;
          color: var(${color});
          align-items: center;
          justify-content: center;
          position: relative;
        }
        p {
          text-align: center;
          padding: 0 1em;
          max-width: 50%;
        }
      `}</style>
    </>
  );
};
