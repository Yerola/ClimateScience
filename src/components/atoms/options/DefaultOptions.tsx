import React, { CSSProperties } from "react";
import { MediumBold } from "../texts/MediumBold";

interface numeration extends CSSProperties {
  "--i": number;
}

export const DefaultOptions = () => {
  return (
    <>
      <div className="cont">
        <div className="question">
          <MediumBold text="Which of the below statements about electricity is not true?" />
        </div>
        <section style={{ "--i": 1 } as numeration}>
          <div className="circle" />
          <p>Electricity is measured in units called watts</p>
        </section>
        <section style={{ "--i": 2 } as numeration}>
          <div className="circle" />
          <p>Electricity flows at the speed of light</p>
        </section>
        <section style={{ "--i": 3 } as numeration}>
          <div className="circle select" />
          <p>Electricity is a primary energy source</p>
        </section>
      </div>
      <style jsx>{`
        .cont {
          color: var(--light-grey);
          box-shadow: 0px 0px 10px var(--shadow);
          padding: 2em;
          border-radius: 2em;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 18;
          width: 60%;
          text-align: center;
          gap: 0.5em;
          //   animation: container 10s ease-in-out infinite;
          overflow: hidden;
        }
        .question {
          animation: container 10s ease-in-out infinite;
          opacity: 0;
        }
        section {
          color: var(--brilliant-purple-text);
          text-align: start;
          font-weight: 500;
          border-radius: 3em;
          padding: 0.5em 1.5em;
          box-shadow: 0px 4px 6px var(--shadow);
          position: relative;
          display: flex;
          align-items: center;
          gap: 1em;
          delay: calc(0.15s * var(--i));
          transform: translateY(500px);
          opacity: 0;
          animation: items 10s ease-in-out infinite calc(var(--i) * 0.25s);
          width: 100%;
        }
        .circle {
          width: 20px;
          height: 20px;
          border: 2px solid var(--brilliant-purple-text);
          border-radius: 2em;
          position: relative;
        }
        .select::before {
          content: "";
          width: 1px;
          heigh: 1px;
          opacity: 0;
          position: absolute;
          top: 50%;
          right: 50%;
          transform: translateX(50%) translateY(-50%);
          animation: select 10s ease-in-out infinite;
          border-radius: 1em;
        }
        @keyframes container {
          10% {
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          99% {
            opacity: 0;
          }
        }
        @keyframes items {
          1% {
            opacity: 1;
          }
          30% {
            transform: translateY(0px);
            opacity: 1;
          }
          60% {
            transform: translateY(0px) translateX(0px);
            opacity: 1;
          }
          100% {
            transform: translateX(800px);
          }
        }
        @keyframes select {
          40% {
            opacity: 0;
          }
          45% {
            opacity: 1;
            width: 13px;
            height: 13px;
            background: var(--brilliant-purple);
          }
          90% {
            opacity: 1;
            width: 13px;
            height: 13px;
            background: var(--brilliant-purple);
          }
        }
      `}</style>
    </>
  );
};
