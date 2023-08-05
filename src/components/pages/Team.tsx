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

export const Team = () => {
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
  const judges2 = [
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
  const judges3 = [
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
        imageDescription="Vaitea Cowan & Dr. Renate Christ announce CSO21 winners at COP26, Glasgow"
        imageUrl="/headers/header2.png"
      >
        <ImagesContent
          titleProps={{
            phrases: [],
            title: "Meet the team",
            color: "--white",
            text: "The CSO team comprises of passionate volunteers and judges from all around the world.",
          }}
          buttonProps={{
            text: "Participate now >",
            color: "--white",
            background: "--brilliant-purple",
          }}
          climateScience={true}
        />
      </ContentImage>
      <PurpleBandLayout>
        <DivCenter>
          <DefaultArticle
            size={36}
            title="CS22 Final Judges"
            color="--white"
            content="Our judges are trusted members of the climate science industry. Interested in becoming a CSO judge?"
            link="#"
            textLink="Apply here."
            mw={60}
          />
        </DivCenter>
        <AutoGridLayout max={10}>
          {judges2.map((el, ind) => (
            <PersonCard
              image={el.image}
              name={el.name}
              position={el.position}
              key={ind}
              textColor="--white"
            />
          ))}
        </AutoGridLayout>
      </PurpleBandLayout>
      <DivCenter>
        <DefaultArticle
          size={36}
          title="CS22 Pre-final Judges"
          color="--brilliant-purple"
          content="Our internal team of experts judge the rounds before the finals"
          mw={60}
        />
      </DivCenter>
      <AutoGridLayout max={10}>
        {judges2.map((el, ind) => (
          <PersonCard
            image={el.image}
            name={el.name}
            position={el.position}
            key={ind}
            textColor="--brilliant-purple-text"
          />
        ))}
      </AutoGridLayout>
      <DivCenter>
        <DefaultArticle
          size={36}
          title="Apply to become a judge"
          color="--brilliant-purple"
          content="We’re looking for industry professionals to judge the ClimateScience Olympiad 2022 proposals. If you would like to apply, please fill out our form to register your interest."
          mw={60}
        />
        <DefaultButton
          color="--white"
          background="--brilliant-purple"
          text="Apply to become a judge >"
          click={() => alert("apply")}
        />
      </DivCenter>
      <DivCenter>
        <DefaultArticle
          size={36}
          title="The climateScience Olympiad team"
          color="--brilliant-purple"
          content="Our internal team of experts judge the rounds before the finals"
          mw={60}
        />
      </DivCenter>
      <AutoGridLayout max={10}>
        {judges3.map((el, ind) => (
          <PersonCard
            image={el.image}
            name={el.name}
            position={el.position}
            key={ind}
            textColor="--brilliant-purple-text"
          />
        ))}
      </AutoGridLayout>
    </>
  );
};
