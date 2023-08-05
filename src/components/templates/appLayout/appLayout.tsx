"use client";
import { NavItemsProps } from "@/components/atoms/links/NavItems";
import { Footer } from "@/components/organisms/footer/Footer";
import { Nav } from "@/components/organisms/nav/Nav";
import { PropsWithChildren } from "react";

const AppLayout = (props: PropsWithChildren) => {
  const items: NavItemsProps[] = [
    { content: "< ClimateScience", path: "#" },
    { content: "Home", path: "/" },
    { path: "/" },
    { content: "Team", path: "/team" },
    { content: "2021 Winners", path: "/winners" },
  ];
  return (
    <>
      <Nav items={items} />
      <>{props.children}</>
      <Footer />
    </>
  );
};
export default AppLayout;
