import { MediumBold } from "../texts/MediumBold";
import { ButtonProps } from "./DefaultButton";

export interface ControllerButtonProps extends ButtonProps {
  arrow: string;
  controller: boolean;
}

export const ControllerButton = ({
  text,
  click,
  color,
  background,
  arrow,
  controller,
}: ControllerButtonProps) => {
  return (
    <>
      <button type="submit" onClick={() => (click ? click() : null)}>
        <MediumBold text={text} size={20} />
        <span className={`${controller ? "active" : ""}`}>
          <MediumBold text={arrow} size={20} />
        </span>
      </button>
      <style jsx>{`
        button {
          color: var(${color});
          background: var(${background});
          padding: 0.8em 1.5em;
          border-radius: 2em;
          border: none;
          width: fit-content;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 1em;
        }
        span {
          transition: 0.25s;
          transform: rotate(90deg);
        }
        span.active {
          transform: rotate(270deg);
        }
      `}</style>
    </>
  );
};
