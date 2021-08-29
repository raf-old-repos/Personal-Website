import React from "react";
import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiDiscordLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import dynamic from "next/dynamic";
// import your component with dynamic and disable SSR
const Tilty = dynamic(() => import("react-tilty"), { ssr: false });

interface Props {
  name: string;
  link: string;
  icon: "insta" | "discord" | "github" | "facebook";
}

const LinkButton: React.FC<Props> = ({ name, link, icon }) => {
  return (
    <React.Fragment>
      {/* @ts-ignore */}
      <Tilty max={40}>
        {(() => {
          switch (icon) {
            case "insta":
              return <AiOutlineInstagram />;
            case "discord":
              return <RiDiscordLine />;
            case "github":
              return <FiGithub />;
            case "facebook":
              return <FaFacebook />;
          }
        })()}
        <Link href={link}>
          <a className="text-xl">{name}</a>
        </Link>
      </Tilty>
    </React.Fragment>
  );
};

export default LinkButton;
