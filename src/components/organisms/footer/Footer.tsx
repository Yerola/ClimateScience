import { MediumBold } from "@/components/atoms/texts/MediumBold";
import Image from "next/image";
import React from "react";
import { NavItems } from "../../atoms/links/NavItems";

export const Footer = () => {
  return (
    <>
      <footer>
        <MediumBold text="Follow us for updates" size={36} />
        <Image width={50} height={50} src={"/socials/ig.png"} alt="ig" />
        <NavItems
          content="@climatescienceolympiad"
          path="https://www.instagram.com/climatescienceolympiad/"
        />
      </footer>
      <style jsx>{`
        footer {
          background: var(--brilliant-purple);
          color: var(--white);
          display: flex;
          flex-direction: column;
          padding: 1.5em 0;
          align-items: center;
          gap: 1em;
        }
      `}</style>
    </>
  );
};
