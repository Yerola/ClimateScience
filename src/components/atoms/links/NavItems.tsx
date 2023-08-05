import Image from "next/image";
import Link from "next/link";

export type NavItemsProps = {
  content?: string;
  path: string;
  logo?: boolean;
};

export const NavItems = ({ path, content, logo }: NavItemsProps) => {
  return (
    <>
      {!logo ? (
        <Link className="navItem" href={path}>
          {content}
        </Link>
      ) : (
        <Link className="navItem" href={"/"}>
          <Image
            width={132}
            height={72}
            src={"/Logo.svg"}
            alt="Logo"
            key={"logo123"}
          />
        </Link>
      )}
      <style jsx>{`
        .navItem {
          text-decoration: none;
        }
      `}</style>
    </>
  );
};
