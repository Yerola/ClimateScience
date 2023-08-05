import { MediumBold, TextsProps } from "../texts/MediumBold";

export interface ButtonProps {
  text: string;
  click?: () => any;
  color: string;
  background: string;
}

export const DefaultButton = ({
  text,
  click,
  color,
  background,
}: ButtonProps) => {
  return (
    <>
      <button type="submit" onClick={() => (click ? click() : null)}>
        <MediumBold text={text} size={20} />
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
        }
      `}</style>
    </>
  );
};
