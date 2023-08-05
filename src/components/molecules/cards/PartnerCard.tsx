import React, { memo } from "react";

export const PartnerCard = memo(function PartnerCard() {
  return (
    <>
      <div>Partner logo</div>
      <style jsx>{`
        div {
          text-align: center;
          padding: 0.5em;
          background: var(--light-grey);
          color: var(--white);
          font-size: 32px;
        }
      `}</style>
    </>
  );
});
