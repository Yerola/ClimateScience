import { ImagesContent } from "../organisms/ImagesContent";
import { ContentImage } from "../templates/ContentImage";
import { DivCenter } from "../templates/DivCenter";
import { DefaultArticle } from "../molecules/articles/DefaultArticle";
import Image from "next/image";
import { useGetWindowDimension } from "@/hooks/useGetWindowDimension";
import { DivTwoColumns } from "../templates/DivTwoColumns";
import { IconText, IconTextProps } from "../molecules/articles/IconText";
import { DefaultButton } from "../atoms/buttons/DefaultButton";
import { DefaultOptions } from "../atoms/options/DefaultOptions";
import { AbsoluteLink } from "../atoms/texts/AbsoluteLink";
import { PurpleBandLayout } from "../templates/PurpleBandLayout";
import { AutoGridLayout } from "../templates/AutoGridLayout";
import { PersonCard } from "../molecules/cards/PersonCard";
import { DesplegableDiv } from "../templates/DesplegableDiv";
import { useState } from "react";
import { ControllerButton } from "../atoms/buttons/ControllerButton";
import { PartnerCard } from "../molecules/cards/PartnerCard";
import { useRouter } from "next/router";

export const Principal = () => {
  const [desp, setDesp] = useState<boolean>(false);
  // const router = useRouter();

  // const redirect = (route: string) => {
  //   router.push(route);
  // };
  const { width } = useGetWindowDimension();
  const panels: string[] = [
    "first.png",
    "second.png",
    "thirth.png",
    "fourth.png",
  ];
  const iconsText: IconTextProps[] = [
    {
      title: "Requirements",
      subtitle: "Free to enter",
      icon: "/icons/Check.png",
      color: "--brilliant-purple-text",
      content: [
        "Age groups: <16, 17-20, 21-25",
        "Participate solo or in a team of two",
      ],
    },
    {
      title: "Prizes",
      icon: "/icons/Liston.png",
      color: "--brilliant-purple-text",
      content: [
        "1st wins $5,000 • 2nd wins $3,000\n3rd wins $2,000 • 4-6th win $1,000 \n7-10th win $500",
        "Opportunity to speak at COP27 (TBC)",
      ],
    },
  ];
  const judges = [
    {
      image: "/facePicture/face.png",
      name: "Sophie Gallois",
      position: "Former Deputy Exec. Directorat Unicef UK",
    },
    {
      image: "/facePicture/face.png",
      name: "Sophie Gallois",
      position: "Former Deputy Exec. Directorat Unicef UK",
    },
    {
      image: "/facePicture/face.png",
      name: "Sophie Gallois",
      position: "Former Deputy Exec. Directorat Unicef UK",
    },
    {
      image: "/facePicture/face.png",
      name: "Sophie Gallois",
      position: "Former Deputy Exec. Directorat Unicef UK",
    },
  ];
  const partners = ["", "", "", ""];
  const partnersC = ["", "", "", "", "", "", "", "", "", "", "", ""];
  const partnersM = ["", "", "", "", "", "", "", "", "", "", "", ""];
  const partnersE = ["", "", "", "", "", "", "", "", "", "", "", ""];
  const partnersO = ["", "", "", "", "", "", "", "", "", "", "", ""];

  return (
    <>
      <ContentImage
        imageDescription="CSO21 winners are presented with their prize money at COP26, Glasgow"
        imageUrl="/headers/header1.png"
      >
        <ImagesContent
          titleProps={{
            phrases: ["AGES <16, 17-20 & 21-25>", "$15,000 PRIZE POOL"],
            title: "ClimateScience Olympiad 2022",
            color: "--white",
          }}
          buttonProps={{
            text: "Participate now >",
            color: "--white",
            background: "--brilliant-purple",
          }}
          climateScience={true}
        />
      </ContentImage>
      <DivCenter>
        <DefaultArticle
          title="Finding the solutions to climate change"
          content="The ClimateScience Olympiad is a global problem-solving competition that encourages and empowers young people to find solutions to the effects and causes of climate change."
          color="--brilliant-purple-text"
          extendContent={70}
        />
        <Image
          width={width * 0.65}
          height={width * 0.65 * 0.56}
          alt="video"
          src={"/video/video.png"}
        />
      </DivCenter>
      <DivTwoColumns>
        {iconsText.map((el, ind) => (
          <IconText
            title={el.title}
            subtitle={el.subtitle}
            color={el.color}
            content={el.content}
            icon={el.icon}
            key={ind}
          />
        ))}
      </DivTwoColumns>
      <DivCenter>
        <DefaultButton
          text="Participate now >"
          color="--white"
          background="--brilliant-purple"
          click={() => alert("Redirect")}
        />
      </DivCenter>
      {panels.map((el, ind) => (
        <Image
          src={`/panels/${el}`}
          alt={`panel${ind}`}
          key={ind}
          width={width}
          height={width * 0.41}
          quality={100}
          loading="lazy"
        />
      ))}
      <DivTwoColumns>
        <DivCenter>
          <DefaultArticle
            title="Still not sure what to expect?"
            content="Visit our participant advice page which has been specifically designed to help you on your journey through the qualifier and quarter finals."
            color="--brilliant-purple-text"
            align="start"
            size={25}
            mw={80}
          />
          <DefaultButton
            text="Participant guide >"
            color="--white"
            background="--brilliant-purple"
            click={() => alert("Redirect")}
          />
          <AbsoluteLink
            content="Frequently asked questions ˅"
            path="#"
            position={{
              bottom: "1em",
              right: "-10em",
              color: "var(--brilliant-purple)",
            }}
            weight={800}
          />
        </DivCenter>
        <DefaultOptions />
      </DivTwoColumns>
      <DivCenter>
        <DefaultArticle
          title="Register now!"
          color="--brilliant-purple"
          content="Work on your own, or in pairs, and compete against youths from around the world to find solutions to climate change."
          size={25}
          mw={60}
        />
        <DefaultArticle
          title=""
          color="--brilliant-purple"
          content="The top 10 teams will win a share of the $15,000 prize pool."
        />
      </DivCenter>
      <ContentImage
        imageDescription="Dr. Jane Goodall, DBE, speaks at the CSO21 Awards Ceremony at UN Climate Summit, Glasgow"
        imageUrl="/headers/header1b.png"
      />
      <PurpleBandLayout>
        <DefaultArticle
          title="ClimateScience 2021 Winners"
          color="--white"
          content="Watch the 2021 ClimateScience Olympiad Awards Ceremony"
          link="#"
          textLink="here"
          size={25}
          mw={60}
        />
        <DefaultButton
          text="Meet the CSO21 Winners >"
          color="--brilliant-purple"
          background="--white"
          click={() => alert("redirigir")}
        />
      </PurpleBandLayout>
      <DivCenter>
        <DefaultArticle
          title="CSO22 Judges"
          color="--brilliant-purple-text"
          content="Our judges are trusted members of the climate science industry. Interested in becoming a CSO judge?"
          link="#"
          textLink="Apply here."
          colorLink="--red"
          size={25}
          mw={50}
        />
      </DivCenter>
      <AutoGridLayout max={10}>
        {judges.map((el, ind) => (
          <PersonCard
            image={el.image}
            name={el.name}
            position={el.position}
            key={ind}
          />
        ))}
      </AutoGridLayout>
      <DivCenter>
        <DefaultButton
          text="Meet the CSO team >"
          color="--white"
          background="--brilliant-purple"
          click={() => alert("redirigir")}
        />
      </DivCenter>
      <DivCenter>
        <DefaultArticle
          title="Our patners"
          color="--brilliant-purple-text"
          content="Want to become a CSO partner?"
          link="#"
          textLink="Apply here."
          colorLink="--red"
          size={25}
          mw={50}
        />
      </DivCenter>
      <DesplegableDiv
        initialW={150}
        controller={desp}
        color={"--brilliant-purple-text"}
      >
        <AutoGridLayout max={10}>
          {partners.map((el, ind) => (
            <PartnerCard key={ind} />
          ))}
        </AutoGridLayout>
        <DivCenter>
          <p>Campaing partners</p>
        </DivCenter>
        <AutoGridLayout max={10}>
          {partners.map((el, ind) => (
            <PartnerCard key={ind} />
          ))}
        </AutoGridLayout>
        <DivCenter>
          <p>Media partners</p>
        </DivCenter>
        <AutoGridLayout max={10}>
          {partnersC.map((el, ind) => (
            <PartnerCard key={ind} />
          ))}
        </AutoGridLayout>
        <DivCenter>
          <p>Education partners</p>
        </DivCenter>
        <AutoGridLayout max={10}>
          {partnersM.map((el, ind) => (
            <PartnerCard key={ind} />
          ))}
        </AutoGridLayout>
        <DivCenter>
          <p>Organization partners</p>
        </DivCenter>
        <AutoGridLayout max={10}>
          {partnersE.map((el, ind) => (
            <PartnerCard key={ind} />
          ))}
        </AutoGridLayout>
      </DesplegableDiv>
      <DivCenter>
        <ControllerButton
          text="Viex more"
          arrow=">"
          controller={desp}
          click={() => setDesp(!desp)}
          background="--brilliant-purple"
          color="--white"
        />
      </DivCenter>
    </>
  );
};
