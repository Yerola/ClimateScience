"client only";
import { useGetWindowDimension } from "@/hooks/useGetWindowDimension";
import React, { PropsWithChildren } from "react";

interface ContentImageProps extends PropsWithChildren {
  imageDescription: string;
  imageUrl: string;
}

export const ContentImage = ({
  imageDescription,
  imageUrl,
  children,
}: ContentImageProps) => {
  const { width } = useGetWindowDimension();
  return (
    <>
      <div>
        <section>{children}</section>
        <p>{imageDescription}</p>
      </div>
      <style jsx>{`
        div {
          background-image: url("${imageUrl}");
          width: 100%;
          position: relative;
          height: ${width * 0.45}px;
          background-repeat: no-repeat;
          background-size: cover;
        }
        p {
          position: absolute;
          bottom: 1em;
          right: 3em;
          color: var(--transparent-white);
          font-size: 14px;
        }
        section {
          //   background: red;
          width: calc(0.5 * ${width}px);
          padding: 5em 9em;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      `}</style>
    </>
  );
};
