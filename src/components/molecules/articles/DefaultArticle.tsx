import { MediumBold } from "@/components/atoms/texts/MediumBold";
import Link from "next/link";
import React from "react";
type defaultArticleProps = {
  title: string;
  content: string;
  color: string;
  align?: string;
  size?: number;
  extendContent?: number;
  mw?: number;
  link?: string;
  textLink?: string;
  colorLink?: string;
};

export const DefaultArticle = ({
  title,
  content,
  color,
  align = "center",
  size,
  extendContent,
  mw,
  link,
  textLink,
  colorLink = "--link-text",
}: defaultArticleProps) => {
  return (
    <>
      <section>
        <MediumBold text={title} size={size} />
        <p>
          {content + " "}
          {link ? (
            <Link
              style={{ color: `var(${colorLink})`, fontWeight: 700 }}
              href={link}
            >
              {textLink}
            </Link>
          ) : null}
        </p>
      </section>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          gap: 1.5em;
          color: var(${color});
          align-items: ${align};
          justify-content: center;
          max-width: ${mw ? mw + "%" : "none"};
        }
        p {
          text-align: ${align};
          // padding: 0 1em;
          width: ${extendContent ?? 100}%;
        }
      `}</style>
    </>
  );
};
