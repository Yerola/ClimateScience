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
import { Q, QuoteProps } from "../organisms/Quote";
import { FullBold } from "../atoms/texts/FullBold";

export const Winners = () => {
  const [desp, setDesp] = useState<boolean>(false);
  // const router = useRouter();

  // const redirect = (route: string) => {
  //   router.push(route);
  // };
  const { width } = useGetWindowDimension();
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
  const paragraph1 =
    "“The CSO is an unrivalled opportunity to develop your environmental knowledge and meet people with similar interests. It asks you to think beyond the traditional curriculum and gives you a glimpse into the decisions world leaders have to make about the climate.| The CSO will stretch your environmental knowledge and enable you to become a better essay writer and scientist.”";
  const paragraph2 =
    "“Winning the ClimateScience Olympiad was so exciting. We thank ClimateScience for the opportunity and for the amazing community that was created out of the competion.| My advice to anyone applying in 2022 would be to make sure you answer the question and, most importantly, have fun!”";
  const citas: QuoteProps[] = [
    {
      paragraphs: paragraph1.split("|"),
      image: "/facePicture/quote2.png",
      textColor: "--white",
      name: "Eleonore Vecchioli",
      position: "Aged 14, UK",
    },
    {
      paragraphs: paragraph2.split("|"),
      image: "/facePicture/quote1.png",
      textColor: "--white",
      name: "Alexandra Pilz",
      position: "Aged 14, UK",
    },
  ];
  return (
    <>
      <ContentImage
        imageDescription="Alexandra Pilz & Eleonore Vecchioli present their winning solution at COP26, Glasgow"
        imageUrl="/headers/header3.png"
      >
        <ImagesContent
          titleProps={{
            phrases: [],
            title: "CSO21 Winners",
            color: "--white",
            text: "Meet the winners of the ClimateScience Olympiad 2021.",
          }}
          buttonProps={{
            text: "Participate now >",
            color: "--white",
            background: "--brilliant-purple",
          }}
        />
      </ContentImage>
      <PurpleBandLayout
        style={{
          height: ` -30em`,
          overflow: "visible",
        }}
      >
        <DivCenter>
          {citas.map((el, ind) => (
            <Q
              paragraphs={el.paragraphs}
              image={el.image}
              position={el.position}
              name={el.name}
              key={ind}
              textColor={"--white"}
            />
          ))}
        </DivCenter>
        <div style={{ overflow: "visible", height: (width * 0.65 * 0.56) / 2 }}>
          <Image
            width={width * 0.65}
            height={width * 0.65 * 0.56}
            alt="video"
            src={"/video/video.png"}
          />
        </div>
      </PurpleBandLayout>
      <div style={{ height: `${(width * 0.65 * 0.56) / 2}px` }} />
      <DivCenter>
        <DefaultArticle
          title="Meet the runners up"
          color="--brilliant-purple-text"
          content="Both our second and third-place teams proposed strong solutions about the "
          link="#"
          textLink="‘Adaptation and Sustainable Development 
          of Southeast Asia’"
          colorLink="--brilliant-purple-text"
          size={25}
          mw={50}
        />
      </DivCenter>
      <DivTwoColumns>
        <DivCenter>
          <FullBold
            text="2nd Place"
            size={30}
            color="--brilliant-purple-text"
          />
          <DefaultArticle
            title="Ella Marga Contreras"
            content="Aged XX, Vietnam"
            color="--brilliant-purple-text"
          />
          <DefaultArticle
            title="Junsoo Chung"
            content="Aged XX, Vietnam"
            color="--brilliant-purple-text"
          />
          <DefaultArticle
            title="-"
            content=""
            color="--brilliant-purple-text"
          />
          <DefaultArticle
            title="Solution"
            content="Adaptation and Sustainable Development of Southeast Asia"
            color="--brilliant-purple-text"
            mw={60}
          />
        </DivCenter>
        <DivCenter>
          <FullBold
            text="3rd Place"
            size={30}
            color="--brilliant-purple-text"
          />
          <DefaultArticle
            title="Anais Chen"
            content="Aged XX, Canada"
            color="--brilliant-purple-text"
          />
          <DefaultArticle
            title="Ariane Desrosiers"
            content="Aged XX, Hong Kong"
            color="--brilliant-purple-text"
          />
          <DefaultArticle
            title="-"
            content=""
            color="--brilliant-purple-text"
          />
          <DefaultArticle
            title="Solution"
            content="Adaptation and Sustainable Development of Southeast Asia"
            color="--brilliant-purple-text"
            mw={60}
          />
        </DivCenter>
      </DivTwoColumns>
      <DivCenter>
        <DefaultArticle
          title="Feeling inspired? Participate now!"
          color="--brilliant-purple-text"
          content="Work in pairs and compete against youths from around the world to find solutions to climate change. The top 3 teams will win a share of the $15,000 prize pool"
          size={25}
          mw={50}
        />
      </DivCenter>
    </>
  );
};
