import React from "react";
import Image from "next/image";
import LinkButton from "./LinkButton";

interface Props {
  MainHeader: string;
}

interface Links {
  name: string;
  icon: "insta" | "discord" | "github" | "facebook";
  url: string;
}
const links: Array<Links> = [
  {
    name: "Instagram",
    icon: "insta",
    url: "https://www.instagram.com/rafayel.19/",
  },
  {
    name: "Github",
    icon: "github",
    url: "https://github.com/Gitter499",
  },
  {
    name: "Discord",
    icon: "discord",
    url: "https://discord.com/"
  },
  {
    name: "Facebook",
    icon: "facebook",
    url: "https://www.facebook.com/rafayel.amirkhanyan/",
  },
];

const Card: React.FC<Props> = ({ MainHeader }) => {
  return (
    <React.Fragment>
      <div className="border-4 dark:border-white border-black h-screen rounded-lg dark:text-white text-black font-mono">
        <div className="flex flex-row pt-40">
          <div className="flex md:flex-cols justify-center md:items-center pl-36">
            <Image
              className="rounded-full"
              src={`https://github.com/Gitter499.png`}
              alt="Some asshole's profile pic"
              width={300}
              height={300}
            />
          </div>

          <h1 className="flex flex-cols pl-20 justify-center items-center text-7xl">
            {MainHeader}
          </h1>
        </div>
        <div className="flex flex-row justify-center pr-40 text-4xl ">
          <ul className="flex flex-row">
            {links.map((link, idx) => (
              <li key={idx} className="px-5">
                <LinkButton name={link.name} link={link.url} icon={link.icon} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
