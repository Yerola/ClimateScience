import { NavItems, NavItemsProps } from "@/components/atoms/links/NavItems";
import Image from "next/image";
import React from "react";

type NavProps = {
  items: NavItemsProps[];
};

export const Nav = ({ items }: NavProps) => {
  return (
    <>
      <nav>
        {items.map((el, ind) => (
          <li key={ind}>
            <NavItems
              content={el.content}
              path={el.path}
              logo={!el.content ? true : false}
            />
          </li>
        ))}
      </nav>
      <style jsx>{`
        nav {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          background: white;
          color: var(--dark-text);
          padding: 0 15%;
        }
        li {
          text-decoration: none;
          list-style: none;
        }
      `}</style>
    </>
  );
};
