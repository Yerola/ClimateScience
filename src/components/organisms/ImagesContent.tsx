import Link from "next/link";
import { ButtonProps, DefaultButton } from "../atoms/buttons/DefaultButton";
import {
  TitleWithHeader,
  TitleWithHeaderProps,
} from "../molecules/titles/TitleWithHeader";
import { MediumBold } from "../atoms/texts/MediumBold";

interface ImagesContentProps {
  titleProps: TitleWithHeaderProps;
  buttonProps: ButtonProps;
  climateScience?: boolean;
}

export const ImagesContent = ({
  titleProps,
  buttonProps,
  climateScience = false,
}: ImagesContentProps) => {
  return (
    <>
      <section className="cont">
        <TitleWithHeader
          phrases={titleProps.phrases}
          color={titleProps.color}
          title={titleProps.title}
          text={titleProps.text}
        />
        <div className="bot">
          <DefaultButton
            text={buttonProps.text}
            color={buttonProps.color}
            background={buttonProps.background}
            click={buttonProps.click}
          />
          {climateScience ? (
            <section>
              <MediumBold text="Who is ClimateScience?" size={20} />
              <Link href={"#"} target="_blank" className="green">
                <span className="green">Visit our main website</span> to find
                out more.
              </Link>{" "}
            </section>
          ) : null}
        </div>
      </section>
      <style jsx>{`
        .green {
          color: var(--link-text);
        }
        section {
          display: flex;
          flex-direction: column;
        }
        .cont {
          gap: 3em;
        }
        .bot {
          gap: 1em;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  );
};
