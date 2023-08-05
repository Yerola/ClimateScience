import { DivCenter } from "@/components/templates/DivCenter";
import Image from "next/image";
import React, { memo } from "react";
import { DefaultArticle } from "../articles/DefaultArticle";

export type PersonCardProps = {
  image: string;
  name: string;
  position: string;
  textColor?: string;
};

export const PersonCard = memo(function PersonCard({
  image,
  name,
  position,
  textColor = "--brilliant-purple-text",
}: PersonCardProps) {
  return (
    <>
      <DivCenter>
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          style={{ width: "100%", height: "auto" }}
        />
        <DefaultArticle title={name} content={position} color={textColor} />
      </DivCenter>
      <style jsx>{``}</style>
    </>
  );
});
