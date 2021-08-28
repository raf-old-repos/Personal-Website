import React from "react";
import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiDiscordLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi"
import { FaFacebook } from "react-icons/fa"

interface Props {
  name: string;
  link: string;
  icon: "insta" | "discord" | "github" | "facebook";
}

const LinkButton: React.FC<Props> = ({ name, link, icon }) => {
  return (
    <React.Fragment>
      {(() => {
        switch (icon) {
          case "insta":
            return <AiOutlineInstagram />;
          case "discord":
            return <RiDiscordLine />;
          case "github":
              return <FiGithub />
          case "facebook":
              return <FaFacebook />
        }
      })()}
      <Link href={link}>
        <a className="text-xl">{name}</a>
      </Link>
    </React.Fragment>
  );
};

export default LinkButton;
